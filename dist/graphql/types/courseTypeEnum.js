'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var courseTypeEnum = new _graphql.GraphQLEnumType({
  name: 'CourseTypeEnum',
  values: {
    Bootcamp: {
      value: 'bootcamp'
    },
    Fundamentals: {
      value: 'fundamentals'
    },
    Advanced: {
      value: 'advanced'
    },
    Workshop: {
      value: 'workshop'
    }
  }
});

exports.default = courseTypeEnum;