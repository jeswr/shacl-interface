import * as fs from 'fs';
// @ts-ignore
import { PathFactory } from 'ldflex';
// @ts-ignore
import ComunicaEngine from '@ldflex/comunica';
import { newEngine } from '@comunica/actor-init-sparql-file';
import { namedNode } from '@rdfjs/data-model';
import path from 'path';
import {
  printNode, Project, SyntaxKind, ts, createWrappedNode
} from 'ts-morph';
import { createSourceFile, ListFormat, NodeFlags } from 'typescript';
import { defaultHandlers } from '@jeswr/ldflex-handlers';
import { ns as sh } from '../lib/sh';

import { pathSegmentToInterface } from '../testing';

function getShape(pth: string) {
  const engine = new ComunicaEngine();
  engine._engine = newEngine();
  engine._sources = [pth];
  const p = new PathFactory({
    context: {
      '@context': {
        '@vocab': sh._,
        sh: sh._,
      },
    },
    queryEngine: engine,
    handlers: defaultHandlers,
  });
  return p.create({ subject: namedNode('http://example.org/testShape1') });
}

function getShapeFromName(name: string) {
  return getShape(path.join(__dirname, 'test-shapes', `${name}.ttl`));
}

it('Should generate interfaces from basic SHACL constraints', async () => {
  const iface = await pathSegmentToInterface(await getShapeFromName('one-path').property.path);
  for (const i of iface.interfaces) {
    console.log(printNode(i));
  }

  const iface2 = await pathSegmentToInterface(await getShapeFromName('one-path-sequence-alt').property.path);
  for (const i of iface2.interfaces) {
    console.log(printNode(i));
  }

  console.log(printNode(ts.factory.createBlock(iface2.interfaces)));
  const nodeArray = ts.factory.createNodeArray(iface.interfaces);
  // console.log(nodeArray.);
  const printer = ts.createPrinter();


  // const printer = new Printer();


  // printNode(nodeArray);

  const file = ts.factory.createSourceFile(
    [], // nodeArray, // iface.interfaces,
    ts.factory.createToken(SyntaxKind.EndOfFileToken),
    NodeFlags.None,
  );

  printer.printList(ListFormat.None, nodeArray, file);

  // console.log(file.getText());
  // ts.

  // file.getSourceFile();

  // file.getStru
  // console.log(file.statements.map(x => x.getText()));

  // const wrapped = createWrappedNode(file.getSourceFile()).getStructure();
  // wrapped.getStart();
  // wrapped.getText();
  // file.statements

  // file.getText
  // console.log(file.getText(file));

  // file.getSourceFile()
  // const s: ts.Statement[] = [];

  // for (const elem of file.statements) {
  //   s.push(elem);
  // }
  // const s: ts.Statement[] = file.statements;
  // console.log(s);

  // const project = new Project();
  // const f = project.addSourceFileAtPath('./temp.ts');
  // const fle = project.addSourceFileAtPath('./temp.ts');
  // for (const elem of iface2.interfaces) {
  //   if (elem.kind === SyntaxKind.InterfaceDeclaration) {
  //     fle.addInterface({
  //       name: fle.name
  //     })
  //   }
  // }
  // project.saveSync();
  // project.saveSync();
  // f.set(file.getStart)
  // console.log(printNode(file));
  // const project = new Project();
  // const file = project.addSourceFileAtPath('./temp.ts');
  // const x = ts.factory.createInterfaceDeclaration();
  // file.addInterface(x)

  // for (const interfaces of )

  // console.log(printNode(iface));

  // const quads = parser.parse()
  // expect().toBe();
});
