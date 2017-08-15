import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'

import CourseType from '../types/course'
import { getCourse } from '../../services/course'

const VoucherType = new GraphQLObjectType({
  name: 'Voucher',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ''
    },
    course_id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ''
    },
    code: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The code that identifies a voucher or group of vouchers, e.g. reactlondonfeb2017 groups 3 vouchers'
    },
    description: {
      type: GraphQLString,
      description: ''
    },
    discount_percentage: {
      type: new GraphQLNonNull(GraphQLInt),
      description: ''
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: ''
    },
    expiration_date: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: ''
    }
  })
})

export default VoucherType
