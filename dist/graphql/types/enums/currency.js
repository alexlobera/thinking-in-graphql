'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var currencyType = new _graphql.GraphQLEnumType({
  name: 'CurrencyTypeEnum',
  values: {
    eur: {
      value: 'eur'
    },
    gbp: {
      value: 'gbp'
    }
  }
});

exports.default = currencyType;