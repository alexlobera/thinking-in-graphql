'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVoucher = exports.createVoucher = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _graphqlIsoDate = require('graphql-iso-date');

var _graphqlRelay = require('graphql-relay');

var _voucher = require('../../services/voucher');

var service = _interopRequireWildcard(_voucher);

var _voucher2 = require('../types/voucher');

var _voucher3 = _interopRequireDefault(_voucher2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var voucherInputFields = {
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
  expiration_date: {
    type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
    description: ''
  },
  max_redemptions: {
    type: _graphql.GraphQLInt,
    description: ''
  }
};

var createVoucherInput = new _graphql.GraphQLInputObjectType({
  name: 'createVoucherInputs',
  description: 'Input for creating a Voucher',
  fields: voucherInputFields
});

var updateVoucherInput = new _graphql.GraphQLInputObjectType({
  name: 'updateVoucherInputs',
  description: 'Input for creating a Voucher',
  fields: function fields() {
    return _extends({
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: 'The id that identifies a voucher'
      }
    }, voucherInputFields);
  }
});

var createVoucher = exports.createVoucher = {
  name: 'createVoucher',
  type: _voucher3.default,
  description: 'Add a voucher to the Academy database.',
  args: {
    voucher: {
      type: new _graphql.GraphQLNonNull(createVoucherInput),
      description: 'The voucher data to add.'
    }
  },
  resolve: function resolve(_, _ref) {
    var voucher = _ref.voucher;

    return service.createVoucher(voucher);
  }
};

var updateVoucher = exports.updateVoucher = {
  name: 'updateVoucher',
  type: _voucher3.default,
  description: 'Update a voucher.',
  args: {
    voucher: {
      type: new _graphql.GraphQLNonNull(updateVoucherInput),
      description: 'The voucher data to update.'
    }
  },
  resolve: function resolve(_, _ref2) {
    var voucher = _ref2.voucher;

    return service.updateVoucher(voucher);
  }
};