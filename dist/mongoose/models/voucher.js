'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var voucherSchema = new Schema({
  code: String,
  description: String,
  discount_percentage: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  expiration_date: Date
});

exports.default = _mongoose2.default.model('Voucher', voucherSchema);