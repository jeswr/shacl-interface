import { ts } from 'ts-morph';

/**
 * Type annotation for a property shape.
 * The type for the *entire* shape then
 * becomes the conditions from each of these
 * interfaces anded together.
 */
export interface PropertyResult {
  /**
   * The name of the generic interface
   * that corresponds to the *current* path
   * segment
   */
  name: ts.Identifier;
  /**
   * The set of interfaces that must be *created*
   * in order for the interface identifier to be well
   * defined (i.e. subpaths etc.)
   */
  interfaces: (ts.InterfaceDeclaration | ts.TypeAliasDeclaration)[];
  /**
   * The set of interfaces/definitions that must
   * be imported in order to make the interface well
   * defined
   */
  imports: string[];
}
