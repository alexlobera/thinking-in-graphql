'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _course = require('./course');

var _course2 = _interopRequireDefault(_course);

var _voucher = require('./voucher');

var _voucher2 = _interopRequireDefault(_voucher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootQueryType = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: _extends({}, _course2.default, _voucher2.default)
});

exports.default = RootQueryType;