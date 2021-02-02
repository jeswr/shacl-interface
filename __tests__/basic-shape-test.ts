import dedent from 'dedent';

const testShapeOnePath = dedent`
@prefix ex: <http://example.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .

ex:testShape1 a sh:NodeShape ;
  sh:closed true ;
  sh:property [
    sh:path ex:path1 ;
  ] .
`;

const testShapeOnePathCount1 = dedent`
@prefix ex: <http://example.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .

ex:testShape1 a sh:NodeShape ;
  sh:closed true ;
  sh:property [
    sh:minCount 1 ;
    sh:path ex:path1 ;

  ] .
`;

const testShapeOnePathClosed = dedent`
@prefix ex: <http://example.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .

ex:testShape1 a sh:NodeShape ;
  sh:closed true ;
  sh:property [
    sh:path ex:path1 ;
  ] .
`;

const testShapeOnePathClosedMinCount1 = dedent`
@prefix ex: <http://example.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .

ex:testShape1 a sh:NodeShape ;
  sh:closed true ;
  sh:property [
    sh:minCount 1 ;
    sh:path ex:path1 ;

  ] .
`;

it('Should generate interfaces from basic SHACL constraints', async () => {
  expect().toBe();
});
