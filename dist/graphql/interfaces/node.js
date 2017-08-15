'use strict';

var _graphqlRelay = require('graphql-relay');

var _services = require('../../services');

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function (globalId) {
  var _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(globalId),
      type = _fromGlobalId.type,
      id = _fromGlobalId.id;

  return (0, _services.getObjectById)(type.toLowerCase(), id);
}, function (object) {
  var VoucherType = require('../types/voucher').default;
  if (object.course_code && object.discount_percentage) {
    return VoucherType;
  }

  return null;
}),
    nodeInterface = _nodeDefinitions.nodeInterface,
    nodeField = _nodeDefinitions.nodeField;

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;