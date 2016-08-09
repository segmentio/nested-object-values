
# nested-object-values

Get _all_ [object values](https://www.npmjs.com/package/object-values), even nested ones.

## Example

```js
const object = {
  foo: {
    bar: {
      baz: {
        qux: 'mux'
      }
    }
  }
}
const values = nestedObjectValues(object)
// [ 'mux' ]
```

## License

MIT
