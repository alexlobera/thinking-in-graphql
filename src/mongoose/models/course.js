import mongoose from 'mongoose'
const Schema = mongoose.Schema

const courseObject = {
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
}

const course = new Schema(courseObject)

const courseSchema = new Schema({
  ...courseObject,
  courses: [course]
},{
  toObject: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
    }
  },
  toJSON: {
    transform: function (doc, ret) {
      delete ret._id;
    }
  }
})

export default mongoose.model('Course', courseSchema)
