/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_size", "_location"] }] */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
