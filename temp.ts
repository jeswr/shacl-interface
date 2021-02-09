interface _1<T> {
    ['http://example.org/path1']: T;
}
interface _1<T> {
    ["http://example.org/path1"]: T;
}
interface _1<T> {
    ["http://example.org/path2"]: T;
}
type _1 = _2<_3<T>>;
