import pkg from '@apollo/client'
const { ApolloClient, InMemoryCache, ApolloProvider, gql } = pkg;

const client = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/37633/secreth_goerli_subgraph/0.420.69',
    cache: new InMemoryCache(),
})


// const client = ...

client
  .query({
    query: gql`
      query ExampleQuery @live {
        secrethCiphers(first: 2) {
            id
            cipher
        }
        }
    `,
  })
  .then((result) => console.log(result));