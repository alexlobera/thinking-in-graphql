import db  from 'mongoose'

import { NotFoundError } from '../errors'

export const createCourse = (courseData) => {
  const Course = db.models.Course

  return new Course(courseData)
    .save()
    .then((course) => {
      if (course.errors) throw new Error('Snap! we could not create the course')
      course._doc.id = course._doc._id
      return course._doc
    })
}

export const getCourse = ({ id }) => {
  const Course = db.models.Course

  return Course
    .findOne({ _id: id })
    .exec()
    .then((course) => {
      if (!course) throw new NotFoundError(`Course(${id}) could not be found`)

      return course
    })
}

export const updateCourse = (courseData) => {
  const id = courseData.id
  const Course = db.models.Course

  courseData.updated_at = new Date().toISOString()
  delete courseData._id
  delete courseData['__v']

  return Course
    .find({ code: courseData.code })
    .exec()
    .then((docs) => {
      if (docs.length > 1 || (docs.length === 1 && docs[0]._id != id)) {
        throw new DuplicateError(`There is already a course with the code ${courseData.code}`)
      }

      return Course
        .findOneAndUpdate({ _id: id }, courseData, { multi: false, new: true })
        .exec()
        .then(course => course)
    })
}
