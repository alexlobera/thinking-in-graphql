'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVoucher = exports.getVoucher = exports.createVoucher = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _errors = require('../errors');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVoucher = exports.createVoucher = function createVoucher(voucherData) {
  var Voucher = _mongoose2.default.models.Voucher;

  return Voucher.findOne({ code: voucherData.code }).exec().then(function (doc) {
    if (doc) throw new _errors2.default.DuplicateError('Voucher(' + doc.code + ') could not be duplicated');

    return new Voucher(voucherData).save().then(function (voucher) {
      if (voucher.errors) throw new Error();
      voucher._doc.id = voucher._doc._id;

      return voucher._doc;
    });
  });
};

var getVoucher = exports.getVoucher = function getVoucher(_ref) {
  var id = _ref.id;

  var Voucher = _mongoose2.default.models.Voucher;

  return Voucher.findOne({ _id: id }).exec().then(function (voucher) {
    if (!voucher) throw new _errors2.default.NotFoundError('Voucher(' + id + ') could not be found');

    return voucher;
  });
};

var updateVoucher = exports.updateVoucher = function updateVoucher(voucherData) {
  var id = voucherData.id;

  voucherData.updated_at = new Date().toISOString();
  delete voucherData._id;
  delete voucherData['__v'];

  return _mongoose2.default.models.Voucher.findOneAndUpdate({ _id: id }, voucherData, { multi: false, new: true }).exec().then(function (voucher) {
    return voucher;
  });
};