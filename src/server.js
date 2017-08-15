import 'babel-polyfill'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import config from 'config'

import schema from './graphql'
import './mongoose'

const app = express()

// ADD QUESTION 2 HERE
// https://github.com/apollographql/apollo-server#express


// UNCOMMENT THE NEXT CODE ONCE YOU ARE DONE WITH QUESTION 2 AND YOU SHOULD SEE GRAPHIQL
// IF YOU GO TO http://localhost:8888/graphiql

// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql',
// }))

app.use('/public', express.static('data'))

/**
 *   server - http
 */
const server = app.listen(process.env.PORT || config.port, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running a GraphQL API server at http://${address}:${port}`)
})
