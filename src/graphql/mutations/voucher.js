import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'
import { mutationWithClientMutationId } from 'graphql-relay'

import * as service from '../../services/voucher'
import VoucherType from '../types/voucher'

const voucherInputFields = {
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
  expiration_date: {
    type: new GraphQLNonNull(GraphQLDateTime),
    description: ''
  }
}

const createVoucherInput = new GraphQLInputObjectType({
  name: 'createVoucherInputs',
  description: 'Input for creating a Voucher',
  fields: voucherInputFields,
})

const updateVoucherInput = new GraphQLInputObjectType({
  name: 'updateVoucherInputs',
  description: 'Input for creating a Voucher',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id that identifies a voucher'
    },
    ...voucherInputFields
  })
})

export const createVoucher = {
  name: 'createVoucher',
  type: VoucherType,
  description: 'Add a voucher to the Academy database.',
  args: {
    voucher: {
      type: new GraphQLNonNull(createVoucherInput),
      description: 'The voucher data to add.',
    }
  },
  resolve: (_, { voucher }) => {
    return service.createVoucher(voucher)
  },
}

export const updateVoucher = {
  name: 'updateVoucher',
  type: VoucherType,
  description: 'Update a voucher.',
  args: {
    voucher: {
      type: new GraphQLNonNull(updateVoucherInput),
      description: 'The voucher data to update.',
    }
  },
  resolve: (_, { voucher }) => {
    return service.updateVoucher(voucher)
  },
}
