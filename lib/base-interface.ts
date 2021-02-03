import { Term } from 'rdf-js';

export interface BaseInterface {
  term: Term;
  properties: Record<string, BaseInterface | undefined>;
}
