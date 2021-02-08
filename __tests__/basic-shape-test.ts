import * as fs from 'fs';
// @ts-ignore
import { PathFactory } from 'ldflex';
// @ts-ignore
import ComunicaEngine from '@ldflex/comunica';
import { newEngine } from '@comunica/actor-init-sparql-file';
import { namedNode } from '@rdfjs/data-model';
import path from 'path';
import {
  printNode, Project, SyntaxKind, ts,
} from 'ts-morph';
import { NodeFlags } from 'typescript';
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
  });
  return p.create({ subject: namedNode('http://example.org/testShape1') });
}

function getShapeFromName(name: string) {
  return getShape(path.join(__dirname, 'test-shapes', `${name}.ttl`));
}

it('Should generate interfaces from basic SHACL constraints', async () => {
  const iface = await pathSegmentToInterface(getShapeFromName('one-path'));
  for (const i of iface.interfaces) {
    console.log(printNode(i));
  }

  // const file = ts.factory.createSourceFile(
  //   iface.interfaces,
  //   ts.factory.createToken(SyntaxKind.EndOfFileToken),
  //   NodeFlags.ExportContext,
  // );
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
