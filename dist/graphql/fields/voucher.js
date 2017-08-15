'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _mongoRelayConnection = require('mongo-relay-connection');

var _graphqlRelay = require('graphql-relay');

var _voucher = require('../../services/voucher');

var _voucher2 = require('../../mongoose/models/voucher');

var _voucher3 = _interopRequireDefault(_voucher2);

var _voucher4 = require('../types/voucher');

var _voucher5 = _interopRequireDefault(_voucher4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var voucherConnection = (0, _mongoRelayConnection.mrType)('voucher', _voucher5.default);

var VoucherFields = {
  vouchers: {
    type: voucherConnection,
    args: _extends({}, _graphqlRelay.connectionArgs),
    resolve: function resolve(_, args) {
      var query = {};
      var orderBy = { cursorField: 'created_at', direction: -1 };

      return (0, _mongoRelayConnection.mrResolve)(args, _voucher3.default, query, orderBy);
    }
  },
  voucher: {
    type: _voucher5.default,
    description: 'Get a specific voucher.',
    args: {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: 'The id of the voucher'
      }
    },
    resolve: function resolve(_, args) {
      return (0, _voucher.getVoucher)(args);
    }
  }
};

exports.default = VoucherFields;