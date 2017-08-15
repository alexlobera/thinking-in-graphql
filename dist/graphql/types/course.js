'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlIsoDate = require('graphql-iso-date');

var _currency = require('./enums/currency');

var _currency2 = _interopRequireDefault(_currency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseType = new _graphql.GraphQLObjectType({
  name: 'Course',
  fields: function fields() {
    return {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: ''
      },
      title: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
        description: ''
      },
      address: {
        type: _graphql.GraphQLString,
        description: ''
      },
      city: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
        description: ''
      },
      description: {
        type: _graphql.GraphQLString,
        description: ''
      },
      price: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
        description: ''
      },
      currency: {
        type: _graphql.GraphQLString,
        description: ''
      },
      start_date: {
        type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
        description: ''
      },
      end_date: {
        type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
        description: ''
      },
      created_at: {
        type: new _graphql.GraphQLNonNull(_graphqlIsoDate.GraphQLDateTime),
        description: ''
      }
    };
  }
});

exports.default = CourseType;