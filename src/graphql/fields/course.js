import { GraphQLID, GraphQLNonNull } from 'graphql';
import { mrResolve, mrType } from 'mongo-relay-connection'
import {
  connectionArgs
} from 'graphql-relay'

import { getCourse } from  '../../services/course'
import CourseType from '../types/course';
import courseModel from  '../../mongoose/models/course'

const courseConnection = mrType('course', CourseType)

const CourseFields = {
  courses: {
    type: courseConnection,
    args: connectionArgs,
    resolve: (_, args) => {
      const query = {}
      const orderBy = { cursorField: 'start_date', direction: 1 }

      return mrResolve(args, courseModel, query, orderBy)
    },
  },
  course: {
    type: CourseType,
    description: 'Get a specific course.',
    args: {

    },
    resolve: (_, args) => getCourse(args),
  },
}

export default CourseFields
