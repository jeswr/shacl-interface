import { ts, printNode, SyntaxKind } from 'ts-morph';
import { PropertyResult } from './types';

// NOTE TO SELF: The importing of separate class
// and shacl constraint SHOULD NOT be handled here.

// Working out which shapes to apply should also
// be handled separately. It should be done so that
// it is easy to reconcile with the validators.

/**
 * This mapping is used to map IRI's to
 * interface names.
 * 
 * It should contain a mapping for every
 * sh:class, sh:path, sh:datatype object & named node/property shapes
 */
type Mapping = Record<string, string>

// Thought - use generic to pass down class/datatype restrictions


// ts.factory.


async function pathToInterfaceList(path: any, mapping: Mapping, ):
  Promise<PropertyResult[]> {
  switch (`${await path.termType}`) {
    case 'NamedNode': return [{
      name: ts.factory.createIdentifier(mapping[`${await path.value}`]),
      interfaces: [],
    }]
    case 'BlankNode': {
      for (const p of path.alternativePath) {

      }
      for (const p of path.zeroOrMorePath) {

      }
      for (const p of path.oneOrMorePath) {

      }
      for (const p of path.zeroOrOnePath) {

      }
      for (const p of path.inversePath) {

      }
    }
    // This is a sequence path
    const sequence = await path.list;
    if (sequence.length > 0) {

    }
  }
  return [];
}

async function pathToInterface(path: any, mapping: Record<string, string>):
  Promise<PropertyResult[]> {
  switch (`${await path.termType}`) {
    case 'NamedNode': return [{
      name: mapping[`${await path.value}`];
      interfaces
    }]


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
    default:
  throw new Error(`Expected path termtype to be NamedNode or BlankNode. Recieved ${await path.termType}`);
}
}

export async function shaclToInterface(shacl: any, mapping: Record<string, string>) {
  const results: PropertyResult[] = await shacl.property.toArray(
    (path) => pathToInterface(path, mapping),
  );

  return printNode(ts.factory.createImportTypeNode(
    ts.factory.createTypePredicateNode(undefined, 'Quad_Object', undefined),
  ));
}
