import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'

import * as service from '../../services/course'
import CourseType from '../types/course'

const courseInputFields = {
  title: {
    type: new GraphQLNonNull(GraphQLString),
    description: ''
  },
  address: {
    type: GraphQLString,
    description: ''
  },
  city: {
    type: new GraphQLNonNull(GraphQLString),
    description: ''
  },
  description: {
    type: GraphQLString,
    description: ''
  },
  price: {
    type: GraphQLInt,
    description: ''
  },
  currency: {
    type: GraphQLString,
    description: ''
  },
  start_date: {
    type: new GraphQLNonNull(GraphQLDateTime),
    description: ''
  },
  end_date: {
    type: new GraphQLNonNull(GraphQLDateTime),
    description: ''
  }
}

const createCourseInput = new GraphQLInputObjectType({
  name: 'createCourseInput',
  description: 'Input for creating a Course',
  fields: () => ({
    ...courseInputFields,
  }),
})

const updateCourseInput = new GraphQLInputObjectType({
  name: 'updateCourseInput',
  description: 'Input for updating a Course',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id that identifies a course'
    },
    ...courseInputFields,
  }),
})

export const createCourse = {
  name: 'createCourse',
  type: CourseType,
  description: 'Add a course to the Academy database.',
  args: {
    course: {
      type: new GraphQLNonNull(createCourseInput),
      description: 'The course data to add.',
    }
  },
  resolve: (_, { course }) => {
    return service.createCourse(course)
  },
}

export const updateCourse = {
  name: 'updateCourse',
  type: CourseType,
  description: 'Update a course.',
  args: {
    course: {
      type: new GraphQLNonNull(updateCourseInput),
      description: 'The course data to update.',
    }
  },
  resolve: (_, { course }) => {
    return service.updateCourse(course)
  },
}
