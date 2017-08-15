'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

require('./models/course');

require('./models/voucher');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

_mongoose2.default.connect(process.env.DB_URL || _config2.default.db.url, _config2.default.db.options);