'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectById = undefined;

var _voucher = require('./voucher');

var _course = require('./course');

var getObjectById = exports.getObjectById = function getObjectById(type, id) {
  var types = {
    voucher: _voucher.getVoucher,
    course: _course.getCourse
  };

  return types[type]({ id: id });
};