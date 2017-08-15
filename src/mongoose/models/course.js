import mongoose from 'mongoose'
const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  address: String,
  city: String,
  description: String,
  price: { type: Number, default: 0 },
  currency: { type: String, default: 'gbp' },
  start_date: Date,
  end_date: Date,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
})

export default mongoose.model('Course', courseSchema)
