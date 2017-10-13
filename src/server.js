import 'babel-polyfill'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import config from 'config'
import cors from 'cors'

import schema from './graphql'
import './mongoose'

const app = express()

app.use('/graphql', cors(), bodyParser.json(), (req, res) => {
  graphqlExpress({
    schema,
    debug: process.env.NODE_ENV !== 'prod'
  })(req, res)
})

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

app.use('/public', express.static('data'))

/**
 *   server - http
 */
const server = app.listen(process.env.PORT || config.port, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running a GraphQL API server at http://${address}:${port}`)
})
