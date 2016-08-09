
'use strict'

module.exports = nestedObjectValues

/**
 * Recursively loop through `object`, getting all values.
 *
 * @param {Object}
 * @return {Array}
 * @api public
 */

function nestedObjectValues (object) {
  const keys = Object.keys(object)
  const values = []
  for (let i = 0; i < keys.length; i++) {
    const value = object[keys[i]]
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        values.push(...value)
      } else if (value) { // ignore nulls
        values.push(...nestedObjectValues(value))
      }
    } else {
      values.push(value)
    }
  }
  return values
}
