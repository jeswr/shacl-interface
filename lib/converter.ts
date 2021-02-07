import { ts, SyntaxKind, printNode } from 'ts-morph';
import { ns as sh } from './sh';

// CONSTRUCT {  }
const nodeKindMapping = {
  [sh.IRI]: 'NamedNode',
  [sh.BlankNode]: 'BlankNode',
  [sh.Literal]: 'Literal',
  [sh.BlankNodeOrIRI]: ts.factory.createUnionTypeNode([
    ts.factory.createTypePredicateNode(undefined, 'BlankNode', undefined),
    ts.factory.createTypePredicateNode(undefined, 'IRI', undefined),
  ]),
  [sh.IRIOrLiteral]: ts.factory.createUnionTypeNode([
    ts.factory.createTypePredicateNode(undefined, 'Literal', undefined),
    ts.factory.createTypePredicateNode(undefined, 'IRI', undefined),
  ]),
  [sh.BlankNodeOrLiteral]: ts.factory.createUnionTypeNode([
    ts.factory.createTypePredicateNode(undefined, 'BlankNode', undefined),
    ts.factory.createTypePredicateNode(undefined, 'Literal', undefined),
  ]),
};

const record = ts.factory.createMappedTypeNode(
  undefined,
  ts.factory.createTypeParameterDeclaration(
    'predicate',
    ts.factory.createTypePredicateNode(undefined, 'Quad_Object', undefined),
    undefined,
  ),
  undefined,
  undefined,
  ts.factory.createTypePredicateNode(undefined, 'Quad_Object', undefined),
);

interface A {
  type: 'a'
}

interface B {
  type2: 'b'
}

interface D {
  x: {
    y: 'c'
  }
}

interface E {
  x: {
    [key in string]: string
  }
}
const t: E;

t.x.an;

type C = D & E & { [key: string]: string };

const f: C;

f.x.y;

// f.as
type;

// TODO: Replace all instances of any
// with the generated ts files
export async function shaclToInterface(shacl: any, mapping: Record<string, string>) {
  if (await shacl.closed) {
    console.log('inside awaited');
  }
  console.log(await shacl.closed);
  // if ((await shacl.closed) == true) {

  // }
  const results: PropertyResult[] = await shacl.property.toArray((path) => pathToInterface(path, mapping));
  results;

  for await (const property of shacl.property) {
    if (await property.minCount > 0) {

    }
  }
  console.log(printNode(record));
  // return true;
}

interface PropertyResult {
  name: string | ts.Identifier;
  interfaces: ts.InterfaceDeclaration[];
}

function propertyToInterface(path: any, mapping: Record<string, string>) {

}

async function pathToInterface(path: any, mapping: Record<string, string>): Promise<PropertyResult[]> {
  switch (`${await path.termType}`) {
    case 'NamedNode': {
      return ts.factory.createInterfaceDeclaration(
        [],
        [],
        mapping[path.value],
        [
        // ts.factory.createTypeParameterDeclaration(
        //   'testName'
        // )
        ],
        [
        // ts.factory.
        ],
        [
          ts.factory.createPropertySignature(
            [],
            'myPropery',
            ts.factory.createToken(SyntaxKind.QuestionToken),
            ts.factory.createLiteralTypeNode(ts.factory.createTrue()),
          ),
          ts.factory.createPropertySignature(
            [],
            'myPropery',
            undefined,
            ts.factory.createTypePredicateNode(
              undefined,
              // ts.factory.createToken(SyntaxKind.AssertsKeyword)
              'b', undefined,
            ),
          // ([
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue()),
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue()),
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue())
          // ])
          ),
        // ts.factory.element
        // ts.factory.createLiteralTypeNode(true)
        ],
      );
    // InterfaceDeclaration.
    // const interfaceDecl = new InterfaceDeclaration();
    }
      return undefined;
  }
}
