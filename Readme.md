
# nested-object-values

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

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
