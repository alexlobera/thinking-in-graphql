'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCourse = exports.getCourse = exports.createCourse = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _errors = require('../errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCourse = exports.createCourse = function createCourse(courseData) {
  var Course = _mongoose2.default.models.Course;

  return new Course(courseData).save().then(function (course) {
    if (course.errors) throw new Error('Snap! we could not create the course');
    course._doc.id = course._doc._id;
    return course._doc;
  });
};

var getCourse = exports.getCourse = function getCourse(_ref) {
  var id = _ref.id;

  var Course = _mongoose2.default.models.Course;

  return Course.findOne({ _id: id }).exec().then(function (course) {
    if (!course) throw new _errors.NotFoundError('Course(' + id + ') could not be found');

    return course;
  });
};

var updateCourse = exports.updateCourse = function updateCourse(courseData) {
  var id = courseData.id;
  var Course = _mongoose2.default.models.Course;

  courseData.updated_at = new Date().toISOString();
  delete courseData._id;
  delete courseData['__v'];

  return Course.find({ code: courseData.code }).exec().then(function (docs) {
    if (docs.length > 1 || docs.length === 1 && docs[0]._id != id) {
      throw new DuplicateError('There is already a course with the code ' + courseData.code);
    }

    return Course.findOneAndUpdate({ _id: id }, courseData, { multi: false, new: true }).exec().then(function (course) {
      return course;
    });
  });
};