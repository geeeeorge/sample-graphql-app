const {ApolloServer, gql} = require('apollo-server');

// 疑似的にデータを用意
// 本来はDBから取得する
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    }
]

// GraphQLのスキーマ定義
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    
    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
