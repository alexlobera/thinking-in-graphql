import mongoose from 'mongoose'
const Schema = mongoose.Schema

var voucherSchema = new Schema({
  code: String,
  course_id: Schema.ObjectId,
  description: String,
  discount_percentage: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  expiration_date: Date
})

export default mongoose.model('Voucher', voucherSchema)
