import {
  GraphQLSchema,
} from 'graphql'

import RootQueryType from './fields'
import RootMutationType from './mutations'

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

export default schema
