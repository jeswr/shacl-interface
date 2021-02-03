import { Term, Literal, NamedNode, BlankNode } from 'rdf-js';
import { BaseInterface } from './base-interface';
import { ns as xsd } from './xsd';

interface DatatypeMapping {
  [xsd.integer]: number;
  [xsd.decimal]: number;
  [xsd.double]: number;
  [xsd.float]: number;
  [xsd.dateTime]: Date;
  [xsd._boolean]: boolean;
}

/**
 * Mapes a datatype to its primitive value
 */
type DatatypeMapper<T extends NamedNode> = T['value'] extends keyof DatatypeMapping ? DatatypeMapping[T['value']] : string

/**
 * 
 */
type LiteralValue<T extends Term> = T extends Literal ? DatatypeMapper<T['datatype']> : string;


interface LDFlexTermProperties<T extends Term> {
  
  // RDFJS
  valueOf(): LiteralValue<T>;
  toPrimitive(): LiteralValue<T>;
  toString(): string;

  termType: T['termType'];
  value: T['value'];
  equals: T['equals'];

  // TODO: Double check defaults
  language: T extends Literal ? T['language'] : undefined;
  datatype: T extends Literal ? T['datatype'] : undefined;

  // TODO: Add canonical handler

  // canonical: T extends BlankNode ? T['']
}

// type termString = string

// type 


// type Path = termString | `(${Path})`;

export type ToLDFlex<T extends BaseInterface> = {
  [K in keyof T['properties']]: T['properties'][K] extends BaseInterface ? ToLDFlex<T['properties'][K]> : undefined;
} & LDFlexTermProperties<T['term']>;
