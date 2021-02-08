import { SyntaxKind, ts } from 'ts-morph';
import { PropertyResult } from './lib/types';

type InterfaceOrAlias = ts.InterfaceDeclaration | ts.TypeAliasDeclaration;

const REFERENCE = [ts.factory.createTypeReferenceNode('T')];
const DELARATION = [ts.factory.createTypeParameterDeclaration('T')];

function sequenceReduction(
  previousValue: ts.TypeReferenceNode,
  { name }: PropertyResult,
): ts.TypeReferenceNode {
  return ts.factory.createTypeReferenceNode(name, [previousValue]);
}

/**
 * Converts a path segment to a generic interface
 */
export async function pathSegmentToInterface(path: any): Promise<PropertyResult> {
  const name = ts.factory.createUniqueName('');
  switch (`${await path.termType}`) {
    case 'NamedNode': {
      return {
        // TODO: better naming scheme
        name,
        interfaces: [
          ts.factory.createInterfaceDeclaration(
            [],
            [],
            name,
            DELARATION,
            [],
            [ts.factory.createPropertySignature(
              [],
              ts.factory.createComputedPropertyName(ts.factory.createStringLiteral(`${await path}`)),
              undefined, //ts.factory.createToken(SyntaxKind.),
              ts.factory.createTypeReferenceNode('T', []),
            )],
          ),
        ],
        imports: [],
      };
    }
    case 'BlankNode': {
      // TODO: Add type once we generate shacl constraints
      const alt: any[] = await path.alternativePath.toArray();
      if (alt.length > 0) {
        const alternatives = await Promise.all(alt.map((p) => pathSegmentToInterface(p)));
        const unionNode = ts.factory.createUnionTypeNode(
          alternatives.map(({ name }) => ts.factory.createTypeReferenceNode(name, REFERENCE)),
        );
        const declaration = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          DELARATION,
          unionNode,
        );
        return {
          name,
          interfaces: ([] as InterfaceOrAlias[]).concat(
            ...alternatives.map(({ interfaces }) => interfaces), [declaration],
          ),
          imports: ([] as string[]).concat(...alternatives.map(({ imports }) => imports)),
        };
      }
      const zeroOrMore = await path.alternativePath;
      if (`${zeroOrMore}` !== 'undefined') {
        const { name: prevName, interfaces, imports } = await pathSegmentToInterface(zeroOrMore);
        const addition = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          DELARATION,
          ts.factory.createTypeReferenceNode('zeroOrMore', [
            ts.factory.createTypeReferenceNode(prevName, REFERENCE),
          ]),
        );
        return {
          name,
          interfaces: [addition, ...interfaces],
          imports: ['zeroOrMore', ...imports],
        };
      }
      const oneOrMore = await path.oneOrMorePath;
      if (`${oneOrMore}` !== 'undefined') {
        const { name: prevName, interfaces, imports } = await pathSegmentToInterface(oneOrMore);
        const addition = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          DELARATION,
          ts.factory.createTypeReferenceNode('oneOrMore', [
            ts.factory.createTypeReferenceNode(prevName, REFERENCE),
          ]),
        );
        return {
          name,
          interfaces: [addition, ...interfaces],
          imports: ['oneOrMore', ...imports],
        };
      }
      const zeroOrOne = await path.zeroOrOne;
      if (`${zeroOrOne}` !== 'undefined') {
        const { name: prevName, interfaces, imports } = await pathSegmentToInterface(zeroOrOne);
        const addition = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          DELARATION,
          ts.factory.createTypeReferenceNode('zeroOrOne', [
            ts.factory.createTypeReferenceNode(prevName, REFERENCE),
          ]),
        );
        return {
          name,
          interfaces: [addition, ...interfaces],
          imports: ['zeroOrOne', ...imports],
        };
      }
      const inversePath = await path.inversePath;
      if (`${inversePath}` !== 'undefined') {
        const { name: prevName, interfaces, imports } = await pathSegmentToInterface(inversePath);
        const addition = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          DELARATION,
          ts.factory.createTypeReferenceNode('inversePath', [
            ts.factory.createTypeReferenceNode(prevName, REFERENCE),
          ]),
        );
        return {
          name,
          interfaces: [addition, ...interfaces],
          imports: ['inversePath', ...imports],
        };
      }
      const sequence: any[] = await path.list;
      if (sequence.length > 0) {
        const sequenceElems = (await Promise.all(sequence.map((p) => pathSegmentToInterface(p))));
        const addition = ts.factory.createTypeAliasDeclaration(
          [],
          [],
          name,
          [],
          sequenceElems.reduceRight(sequenceReduction, ts.factory.createTypeReferenceNode('T')),
        );
        return {
          name,
          interfaces: ([] as InterfaceOrAlias[]).concat(
            ...sequenceElems.map(({ interfaces }) => interfaces), [addition],
          ),
          imports: ([] as string[]).concat(
            ...sequenceElems.map(({ imports }) => imports),
          ),
        };
      }
      throw new Error('No valid path predicate found from blank node');
    }
    default:
      throw new Error(`Expected named node or blank node, instead revieved ${await path.termType}`);
  }
}
