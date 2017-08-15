import { GraphQLID, GraphQLNonNull } from 'graphql'
import { mrResolve, mrType } from 'mongo-relay-connection'
import {
  connectionArgs
} from 'graphql-relay'

import { getVoucher } from  '../../services/voucher'
import voucherModel from  '../../mongoose/models/voucher'
import VoucherType from '../types/voucher'

const voucherConnection = mrType('voucher', VoucherType)

const VoucherFields = {
  vouchers: {
    type: voucherConnection,
  },
  voucher: {
    type: VoucherType,
    description: 'Get a specific voucher.',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the voucher',
      },
    },
    resolve: () => getVoucher(args),
  },
}

export default VoucherFields
