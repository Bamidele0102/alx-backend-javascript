/* eslint no-underscore-dangle: ["error", {"allow": ["_brand", "_motor", "color"] }] */
/* global */
/* eslint no-undef: "error" */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
