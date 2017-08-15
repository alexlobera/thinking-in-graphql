import { GraphQLObjectType } from 'graphql';

import CourseFields from './course'
import VoucherFields from './voucher'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...CourseFields,
    ...VoucherFields,
  }
})

export default RootQueryType
