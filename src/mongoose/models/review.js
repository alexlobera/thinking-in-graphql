import mongoose from 'mongoose'
const Schema = mongoose.Schema

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
})

module.exports = mongoose.model('Review', reviewSchema)
