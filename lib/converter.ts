import { ts, SyntaxKind } from 'ts-morph';

// TODO: Replace all instances of any
// with the generated ts files
export async function shaclToInterface(shacl: any, mapping: Record<string, string>) {
  if (await shacl.closed) {
    console.log('inside awaited')
  }
  console.log(await shacl.closed)
  // if ((await shacl.closed) == true) {

  // }
  for await (const property of shacl.property) {
    
  }
  // return true;
}

async function pathToInterface(path: any, mapping: Record<string, string>): any {
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
          ts.factory.createLiteralTypeNode(ts.factory.createTrue())
        ),
        ts.factory.createPropertySignature(
          [],
          'myPropery',
          undefined,
          ts.factory.createTypePredicateNode(
            undefined
            // ts.factory.createToken(SyntaxKind.AssertsKeyword)
            , 'b', undefined)
          // ([
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue()),
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue()),
          //   ts.factory.createLiteralTypeNode(ts.factory.createTrue())
          // ])
        )
        // ts.factory.element
        // ts.factory.createLiteralTypeNode(true)
      ],
    );
    // InterfaceDeclaration.
    // const interfaceDecl = new InterfaceDeclaration();
  }
  return undefined;
}

