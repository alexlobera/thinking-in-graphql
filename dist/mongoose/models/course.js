'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var courseObject = {
  title: String,
  address: String,
  city: String,
  description: String,
  price: { type: Number, default: 0 },
  currency: { type: String, default: 'gbp' },
  start_date: Date,
  end_date: Date,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
};

var course = new Schema(courseObject);

var courseSchema = new Schema(_extends({}, courseObject, {
  courses: [course]
}), {
  toObject: {
    transform: function transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  },
  toJSON: {
    transform: function transform(doc, ret) {
      delete ret._id;
    }
  }
});

exports.default = _mongoose2.default.model('Course', courseSchema);