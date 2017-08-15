'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var currencyTypeEnum = new _graphql.GraphQLEnumType({
  name: 'CurrencyTypeEnum',
  values: {
    EUR: {
      value: 'eur'
    },
    GBP: {
      value: 'gbp'
    }
  }
});

exports.default = currencyTypeEnum;