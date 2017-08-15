import { getVoucher } from './voucher'
import { getCourse } from './course'

export const getObjectById = (type, id) => {
  const types = {
    voucher: getVoucher,
    course: getCourse,
  }

  return types[type]({id})
}
