import { InterfaceDeclaration } from 'ts-morph';
import type { ProxiedResource } from 'rdf-object-proxy';

function pathToInterface(path: ProxiedResource<string>) {
  if (path.type === 'NamedNode') {
    return new InterfaceDeclaration();
  }
}

