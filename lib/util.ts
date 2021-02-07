/**
 * A set of utility types that are commonly
 * used by SHACL interface types
 */

import { Quad_Object } from 'rdf-js';

/**
 * In an open shape, any predicate that does not
 * have a property shape associated to it is allowed
 * and hence can be 'anded' together with this type
 */
export interface OpenShape {
  [key: string]: Quad_Object | undefined;
}
