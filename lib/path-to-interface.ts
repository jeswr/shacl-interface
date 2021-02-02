import {
  // InterfaceDeclaration, createWrappedNode, SourceFile,
  ts,
  printNode,
  SyntaxKind,
  TrueLiteral
} from 'ts-morph';
import type { ProxiedResource } from 'rdf-object-proxy';
import { namedNode } from '@rdfjs/data-model'
import { SignatureKind } from 'typescript';

// ts.TypeParam
// const project = new Project();
// project.addSourceFileAtPath()
// const file = new SourceFile()

enum mapper {
  b = 'http://example.org/'
}

// const x = new TypeNode()

function pathToInterface(path: ProxiedResource<string>, mapping: Record<string, string>): any {
  // TODO: Change termType back to type?
  // @ts-ignore
  if (path.termType === 'NamedNode') {
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

// @ts-ignore
console.log(printNode(pathToInterface(
  // @ts-ignore
  namedNode('http://example.org/'),
  { 'http://example.org/': 'ex' }
)));
