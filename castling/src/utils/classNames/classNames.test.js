import { classNames } from "./classNames.js";
const testCases = [
    {
        params: ['foo', 'bar'],
        expect: 'foo bar',
    },
    {
        params: ['foo', { bar: true }],
        expect: 'foo bar',
    },
    {
        params: [{ 'foo-bar': true }],
        expect: 'foo-bar',
    },
    {
        params: [{ 'foo-bar': false }],
        expect: '',
    },
    {
        params: [{ foo: true }, { bar: true }],
        expect: 'foo bar',
    },
    {
        params: [{ foo: true, bar: true }],
        expect: 'foo bar',
    },
    {
        params: ['foo', { bar: true, duck: false }, 'baz', { quux: true }],
        expect: 'foo bar baz quux',
    },
    {
        params: [null, false, 'bar', undefined, 0, 1, { baz: null }, ''],
        expect: 'bar 1',
    },
        {
        params: [null, false, 'bar', undefined, 0, 1, { baz: null }, ''],
        expect: 'bar 1',
    },
        {
        params: [null, false, 'bar', undefined, 0, 1, { baz: null }, ''],
        expect: 'bar 1',
    },
        {
        params: [null, false, 'bar', undefined, 0, 1, { baz: null }, ''],
        expect: 'bar 1',
    },
        {
        params: [null, false, 'bar', undefined, 0, 1, { baz: null }, ''],
        expect: 'bar 1',
    },
]

testCases.forEach(({params, expect}, index) => {
    const result = classNames(...params)
    const paddedIndex = index.toString().padStart(2, ' ')
    console.log(`${paddedIndex} ${result === expect ? 
        '\\/' : `    Х result: '${result}' but expected '${expect}'`}`)
});
