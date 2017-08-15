import { GraphQLEnumType } from 'graphql';

const currencyType = new GraphQLEnumType({
  name: 'CurrencyTypeEnum',
  values: {
    eur: {
      value: 'eur',
    },
    gbp: {
      value: 'gbp',
    },
  }
})

export default currencyType
