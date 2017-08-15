'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _voucher = require('./voucher');

var _course = require('./course');

var RootMutationType = new _graphql.GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createCourse: _course.createCourse,
    updateCourse: _course.updateCourse,
    createVoucher: _voucher.createVoucher,
    updateVoucher: _voucher.updateVoucher
  }
});

exports.default = RootMutationType;