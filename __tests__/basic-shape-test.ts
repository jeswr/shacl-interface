import { ns as sh } from '../lib/sh'
import * as fs from 'fs';
// @ts-ignore
import { PathFactory } from 'ldflex';
// @ts-ignore
import ComunicaEngine from '@ldflex/comunica'
import { newEngine } from '@comunica/actor-init-sparql-file';
import { namedNode } from '@rdfjs/data-model'
import path from 'path'

import { shaclToInterface } from '../lib/converter'

function getShape(pth: string) {
  const engine = new ComunicaEngine();
  engine._engine = newEngine();
  engine._sources = [ pth ];
  const p = new PathFactory({ context: {
    '@context': {
      '@vocab': sh._,
      sh: sh._
    }
  }, queryEngine: engine });
  return p.create({ subject: namedNode('http://example.org/testShape1') })
}

function getShapeFromName(name: string) {
  return getShape(path.join(__dirname, 'test-shapes', name + '.ttl'));
}

it('Should generate interfaces from basic SHACL constraints', async () => {
  const iface = await shaclToInterface(getShapeFromName('one-path'), sh);
  console.log(iface)
  
  // const quads = parser.parse()
  // expect().toBe();
});
