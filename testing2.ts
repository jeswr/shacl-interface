import { ts, printNode, Project } from 'ts-morph';

console.log(
  printNode(
    ts.factory.createUnionTypeNode([
      ts.factory.createTypeReferenceNode('ref', [ts.factory.createTypeReferenceNode('T')]),
      ts.factory.createTypeReferenceNode('ref2', [ts.factory.createTypeReferenceNode('T')]),
    ]),
  ),
);

const t = ts.factory.createUniqueName('');
const t2 = ts.factory.createUniqueName('');

const unionNode = ts.factory.createUnionTypeNode(
  [
    ts.factory.createTypeReferenceNode(t, [ts.factory.createTypeReferenceNode('T')]),
    ts.factory.createTypeReferenceNode(t2, [ts.factory.createTypeReferenceNode('T')]),
    ts.factory.createTypeReferenceNode(t2, [ts.factory.createTypeReferenceNode('T')]),
    ts.factory.createTypeReferenceNode(t, [ts.factory.createTypeReferenceNode('T')]),
  ],
);

console.log(
  // ts.factory.createTyp
  // NOTE TO SELF - THIS IS THE CODE FOR ALTERNATE PATHS
  printNode(
    ts.factory.createTypeAliasDeclaration(
      [],
      [],
      'Test',
      [ts.factory.createTypeParameterDeclaration('T')],
      unionNode,
    ),
  ),
);

// const project = new Project();

// ts.readFile
