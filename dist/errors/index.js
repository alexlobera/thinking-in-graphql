'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = NotFoundError;
exports.DuplicateError = DuplicateError;
function NotFoundError(message) {
  this.name = 'NotFoundError';
  this.message = message;
  this.stack = new Error().stack;
}
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

function DuplicateError(message) {
  this.name = 'DuplicateError';
  this.message = message;
  this.stack = new Error().stack;
}
DuplicateError.prototype = Object.create(Error.prototype);
DuplicateError.prototype.constructor = DuplicateError;