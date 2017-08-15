import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'
import { mrResolve, mrType } from 'mongo-relay-connection'
import {
  connectionArgs
} from 'graphql-relay'

import CurrencyTypeEnum from './enums/currency'
import VoucherType from '../types/voucher'
import voucherModel from  '../../mongoose/models/voucher'

const voucherConnection = mrType('courseVoucher', VoucherType)

const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ''
    },
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
      type: new GraphQLNonNull(GraphQLInt),
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
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: ''
    },
  })
});

export default CourseType
