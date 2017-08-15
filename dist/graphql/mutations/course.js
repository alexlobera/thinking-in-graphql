'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCourse = exports.createCourse = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _graphqlIsoDate = require('graphql-iso-date');

var _course = require('../../services/course');

var service = _interopRequireWildcard(_course);

var _course2 = require('../types/course');

var _course3 = _interopRequireDefault(_course2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var courseInputFields = {
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
    type: _graphql.GraphQLInt,
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
  }
};

var createCourseInput = new _graphql.GraphQLInputObjectType({
  name: 'createCourseInput',
  description: 'Input for creating a Course',
  fields: function fields() {
    return _extends({}, courseInputFields);
  }
});

var updateCourseInput = new _graphql.GraphQLInputObjectType({
  name: 'updateCourseInput',
  description: 'Input for updating a Course',
  fields: function fields() {
    return _extends({
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: 'The id that identifies a course'
      }
    }, courseInputFields);
  }
});

var createCourse = exports.createCourse = {
  name: 'createCourse',
  type: _course3.default,
  description: 'Add a course to the Academy database.',
  args: {
    course: {
      type: new _graphql.GraphQLNonNull(createCourseInput),
      description: 'The course data to add.'
    }
  },
  resolve: function resolve(_, _ref) {
    var course = _ref.course;

    return service.createCourse(course);
  }
};

var updateCourse = exports.updateCourse = {
  name: 'updateCourse',
  type: _course3.default,
  description: 'Update a course.',
  args: {
    course: {
      type: new _graphql.GraphQLNonNull(updateCourseInput),
      description: 'The course data to update.'
    }
  },
  resolve: function resolve(_, _ref2) {
    var course = _ref2.course;

    return service.updateCourse(course);
  }
};