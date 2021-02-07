import { ts } from 'ts-morph';

/**
 * Type annotation for a property shape.
 * The type for the *entire* shape then
 * becomes the conditions from each of these
 * interfaces anded together.
 */
export interface PropertyResult {
  name: string | ts.Identifier;
  interfaces: ts.InterfaceDeclaration[];
}
