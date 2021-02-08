enum myTest {
    friend = 'http://example.org/friend'
}

interface MyInterface {
    'http://example.org/friend': true
};

type OverrideKeys<T extends Record<string, string>, K extends {}> = {
    [key in keyof K]: true
}






// This is how '+' is implemented
interface CPlus<T> {
    friend: {
        knows: CPlus<T> | T
    }
}

type CStar<T> = T | {
    friend: {
        knows: {
            knows: CStar<T>
        }
    }
}

type COpt<T> = T | {
    friend: {
        knows: {
            knows: T
        }
    }
}

type MyObject = 3;

interface Zeta<T> {
    zeta: T
}

type GammaAlpha<T> = { gamma: GammaAlpha<T> | T } | { alpha: GammaAlpha<T> | T }

type Beta<T> = { beta: GammaAlpha<Zeta<T>> }

interface Knows<T> {
    knows: Knows<T> | T;
}

type Friend<T> = T | { friend: Friend<T> }

type FriendKnows<T> = Friend<Knows<T>> | T

type FullPath = FriendKnows<Beta<MyObject>>

let pss: FullPath = {
    friend: {
        knows: {
            beta: {
                alpha: {
                    alpha: {
                        zeta: 3
                    }
                }
            }
        }
    }
};

if (true) {
    if (('friend' in pss.friend)) {
        pss.friend.
    }
}


'  ((friend*/(knows+))?/beta/(gamma|alpha)+/zeta  '






type K<T> = MyPaths<MyPaths<T>>

let x: MyPaths<number>;
if (typeof x.friend.knows !== 'number') {
    x.friend.knows.friend.knows
}


type Applyable<T> = {
    [key: any]: T | Applyable<T>
}

type BStar<K extends Applyable<T>> = K | K<BStar<T, K>>


type AStar<T extends string, K> = K | { [key: T]: AStar<T, K> };
type APlus<T extends string, K> = { [key: T]: AStar<T, K> };
type AOptional<T extends string, K> = K | { [key: T]: K };



type IsEnd<T extends any[], I extends number> = (I + 1) extends T['length'] ? true : false

type T = IsEnd<['A'], 2>



type StarPath<T> = T[];
type PlusPath<T> = [T, ...T[]];
type OptionalPath<T> = T | [];
type PathTest = ['a', 'b'];


type ArrayRest<T extends any[], P extends any[]> = [T[0], ...P] extends T ? P : unknown;

type XT = ArrayRest<['a', 'b'], []>


type ToObject<T extends string | any[], K> = T extends string ?
    { [key: T]: K } :
    ToObject<T[0], ToObject<T, K>>

type Xa<T> = Array<T>

const xy: ['a', 'b'] = ['a', 'b'];

const f = xy.slice(0, 1)

type Path = ['friend', 'altA' | 'altB' | ['c' | 'd'], 'employer']

type M<T extends any[]> = T extends [] ? true : 


type G<T> = Record<'hello', T> & Record<'goodbye', T>

let i: G<boolean>;

if ('hello' in x) {
    x.
}

type TypeArray = [1, TypeArray];

type X = TypeArray[1];

type T2 = [2, ...TypeArray]

type T3 = T2['length'];

// type Plus<T, K> = 



interface Type1 {
    a: true
}

interface Type2 {
    b: {
        c: true;
    }
}


const f: Type1 | Type2 = {
    a: true,
    b: { c: false }
};

const p: Plus<Type1 | Type2> {

}




interface Alternate<T extends 'a' | 'b', K> {
    [key: T]: K
}




// type Star<T> {

// }





interface MyInterface {
    a: {
        b: boolean
    }
}


const x: MyInterface;


x.a.b

'a/b'


// interface A { type: 'a', statement: 'x' };
// interface B { type: 'b', statement: 'f' };

// type MyUnion = A | B;


// function test<T extends MyUnion>(x: T): T {
//     x.type = 'a';
//     x.statement = 'f';
//     return x;
// }

// test({ type: 'a', statement: 'x' })

// const map = {45: true};
// Object.siz
// // // import { newEngine }  from "@comunica/actor-init-sparql-rdfjs";
// // // import { Store } from "n3";
// // // import { quad, namedNode } from "@rdfjs/data-model";
// // import * as R from 'ramda'
// // // console.log(0)
// // // const myStore = new Store([
// // //   quad(namedNode('http://example.org/alice'), namedNode('http://example.org/friend'), namedNode('http://example.org/bob')),
// // //   quad(namedNode('http://example.org/bob'), namedNode('http://example.org/friend'), namedNode('http://example.org/charlie')),
// // //   quad(namedNode('http://example.org/alice'), namedNode('http://example.org/friend'), namedNode('http://example.org/charlie')),
// // // ]);

// // // quad('hello')
// // // R.add(1, 2)
// // // console.log('hit')

// // // const store = new Store()
// // // store.addQuads([])

// // // const query = `
// // // SELECT (count(distinct ?friend) as ?count)
// // // WHERE {
// // //   <http://example.org/alice> <http://example.org/friend> ?friend
// // // }`;

// // // const myEngine = newEngine();

// // // console.log(1)

// // // (async () => {
// // //   const result = await myEngine.query(query, { sources: [myStore] });
// // //   if (result.type !== 'bindings') {
// // //     throw new Error('Expected Bindings');
// // //   }
// // //   const bindings = await result.bindings();
// // //   const count = bindings[0]?.get('?count').value;
// // //   console.log(count);
// // // })();
