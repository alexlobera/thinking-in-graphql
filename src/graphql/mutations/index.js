import { GraphQLObjectType } from 'graphql'

import { createVoucher, updateVoucher } from './voucher'
import { createCourse, updateCourse } from './course'

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createCourse,
    updateCourse,
    createVoucher,
    updateVoucher,
  },
})

export default RootMutationType
