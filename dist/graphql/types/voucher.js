'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlIsoDate = require('graphql-iso-date');

var VoucherType = new _graphql.GraphQLObjectType({
  name: 'Voucher',
  fields: function fields() {
    return {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: ''
      },
      code: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
        description: 'The code that identifies a voucher or group of vouchers, e.g. reactlondonfeb2017 groups 3 vouchers'
      },
      description: {
        type: _graphql.GraphQLString,
        description: ''
      },
      discount_percentage: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
        description: ''
      },
      created_at: {
        type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
        description: ''
      },
      expiration_date: {
        type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
        description: ''
      }
    };
  }
});

exports.default = VoucherType;