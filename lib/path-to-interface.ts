import {
  // InterfaceDeclaration, createWrappedNode, SourceFile,
  ts,
  printNode,
  SyntaxKind,
  TrueLiteral
} from 'ts-morph';
import { ProxiedResource, RdfObjectProxy } from 'rdf-object-proxy';
import { namedNode } from '@rdfjs/data-model'
import { SignatureKind } from 'typescript';
import { Term, Quad_Subject, Quad_Object } from 'rdf-js';


// ts.TypeParam
// const project = new Project();
// project.addSourceFileAtPath()
// const file = new SourceFile()

enum mapper {
  b = 'http://example.org/'
}

// const x = new TypeNode()

interface Test {
  1: 'a';
  [key: Exclude<string, string>]: never;
}

// Restricts an interface so that it has no additional properties 
// 
type Strict<T extends {}> = T & Never<string, keyof T>

type Never<T extends string | number | symbol, K extends string | number | symbol> = {
  [key in Exclude<T, K>]: never;
}

// TODO: Apply these beforehand
// const x = [`
// CONSTRUCT {
//   ?s sh:nodeKind sh:blankNodeOrIRI
// } WHERE {
//   ?s a sh:propertyShape ;
//     sh:class ?o .
//   FILTER( NOT EXISTS { ?s sh:nodeKind ?o2 } )
// }
// `,`
// CONSTRUCT {
//   ?s sh:nodeKind sh:Literal
// } WHERE {
//   ?s a sh:propertyShape ;
//     sh:datatype ?o .
//   FILTER( NOT EXISTS { ?s sh:nodeKind ?o2 } )
// }
// `,`
// CONSTRUCT {
//   ?s sh:nodeKind sh:Literal
// } WHERE {
//   ?s a sh:propertyShape ;
//     sh:datatype ?o .
//   FILTER( NOT EXISTS { ?s sh:nodeKind ?o2 } )
// }
// `,]

const x: Strict<Test> = { '1': 'a', 'hi': 'c' }

x.hi

type P = ProxiedResource<string>;

const t: P;

t.term.

interface NodeKind<T extends Term> {
  a: Term | T;
  b: Term | T;
}

type B = NodeKind<{ termType: string, myExtraProperty: true }>

let xs: B;
const tm = xs.a;


if (tm.termType === 'NamedNode') {
  tm
}


function shaclToInterface(shacl: ProxiedResource<string>) {
  if (shacl.closed == true) {

  }
  // if (shacl.nodeKind) {

  // }
}


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
