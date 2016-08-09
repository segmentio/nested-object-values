
'use strict'

const test = require('ava')
const values = require('../src')

test('top level', t => {
  const o = {
    foo: 'bar',
    baz: false
  }
  t.deepEqual(values(o), [ 'bar', false ])
})

test('merging arrays', t => {
  const o = {
    foo: 'bar',
    baz: [ 'qux', 'mux' ]
  }
  t.deepEqual(values(o), [ 'bar', 'qux', 'mux' ])
})

test('deeply nested', t => {
  const o = {
    foo: 'bar',
    baz: {
      qux: {
        mux: 'hi'
      }
    }
  }
  t.deepEqual(values(o), [ 'bar', 'hi' ])
})

test('deeply nested with array', t => {
  const o = {
    foo: {
      bar: {
        baz: {
          qux: {
            mux: [ 'abc', 'def' ]
          }
        }
      }
    }
  }
  t.deepEqual(values(o), [ 'abc', 'def' ])
})

test('nested with null', t => {
  const o = {
    foo: {
      bar: {
        baz: null
      }
    }
  }
  t.deepEqual(values(o), [ ])
})
