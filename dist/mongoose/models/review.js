'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var reviewSchema = new Schema({
  question_content_organized: { type: Number, default: 0 },
  question_material: { type: Number, default: 0 },
  question_feedback: { type: Number, default: 0 },
  question_interaction: { type: Number, default: 0 },
  question_trainer_knowleadge: { type: Number, default: 0 },
  question_trainer_prepared: { type: Number, default: 0 },
  question_objectives_met: { type: Number, default: 0 },
  question_time_sufficient: { type: Number, default: 0 },
  question_facilities: { type: Number, default: 0 },
  question_like: String,
  question_improve: String,
  question_public_review: String,
  created_at: Date
});

module.exports = _mongoose2.default.model('Review', reviewSchema);