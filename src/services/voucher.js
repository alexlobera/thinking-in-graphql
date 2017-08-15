import db from 'mongoose'

import errors from '../errors'

export const createVoucher = (voucherData) => {
  const Voucher = db.models.Voucher

  return Voucher
    .findOne({ code: voucherData.code })
    .exec()
    .then((doc) => {
      if (doc) throw new errors.DuplicateError(`Voucher(${doc.code}) could not be duplicated`)

      return new Voucher(voucherData)
        .save()
        .then((voucher) => {
          if (voucher.errors) throw new Error()
          voucher._doc.id = voucher._doc._id

          return voucher._doc
        })
    })
}

export const getVoucher = ({id}) => {
  const Voucher = db.models.Voucher

  return Voucher
    .findOne({ _id: id })
    .exec()
    .then((voucher) => {
      if (!voucher) throw new errors.NotFoundError(`Voucher(${id}) could not be found`)

      return voucher
    })
}

export const updateVoucher = (voucherData) => {
  const id = voucherData.id

  voucherData.updated_at = new Date().toISOString()
  delete voucherData._id
  delete voucherData['__v']

  return db.models.Voucher
    .findOneAndUpdate({ _id: id }, voucherData, { multi: false, new: true })
    .exec()
    .then(voucher => voucher)
}
