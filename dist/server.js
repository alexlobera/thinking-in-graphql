'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _graphqlServerExpress = require('graphql-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

require('./mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/graphql', _bodyParser2.default.json(), function (req, res) {
  (0, _graphqlServerExpress.graphqlExpress)({
    schema: _graphql2.default,
    debug: process.env.NODE_ENV !== 'prod'
    // context: { user: req.user },
  })(req, res);
});

app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

app.use('/public', _express2.default.static('data'));

/**
 *   server - http
 */
var server = app.listen(process.env.PORT || _config2.default.port, function () {
  var _server$address = server.address(),
      address = _server$address.address,
      port = _server$address.port;

  console.log('Environment = ' + process.env.NODE_ENV);
  console.log('Running a GraphQL API server at http://' + address + ':' + port);
});