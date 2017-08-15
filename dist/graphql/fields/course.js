'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _mongoRelayConnection = require('mongo-relay-connection');

var _graphqlRelay = require('graphql-relay');

var _course = require('../../services/course');

var _course2 = require('../types/course');

var _course3 = _interopRequireDefault(_course2);

var _course4 = require('../../mongoose/models/course');

var _course5 = _interopRequireDefault(_course4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var courseConnection = (0, _mongoRelayConnection.mrType)('course', _course3.default);

var CourseFields = {
  courses: {
    type: courseConnection,
    args: _graphqlRelay.connectionArgs,
    resolve: function resolve(_, args) {
      var query = {};
      var orderBy = { cursorField: 'start_date', direction: 1 };

      return (0, _mongoRelayConnection.mrResolve)(args, _course5.default, query, orderBy);
    }
  },
  course: {
    type: _course3.default,
    description: 'Get a specific course.',
    args: {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: 'The id of the course'
      }
    },
    resolve: function resolve(_, args) {
      return (0, _course.getCourse)(args);
    }
  }
};

exports.default = CourseFields;