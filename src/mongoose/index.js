import mongoose from 'mongoose'
import config from 'config'
import './models/course'
import './models/voucher'
import bluebird from 'bluebird'
mongoose.Promise = bluebird

mongoose.connect(process.env.DB_URL || config.db.url, config.db.options)
