import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';

//The schema for the GraphQL server is written under a variable typeDefs
const typeDefs = /* GrapdQL */ `
    type Product {
        id: Int!
        title: String!
        thumbnail: String!
        price: Float
        category: Category
    }
    type Category {
        id: Int!
        title: String!
    }
    type Query {
        product: Product
        products(limit: Int): [Product]
        categories: [Category]
    }
`;

//Initiate the GraphQL server using the graphqlHTTP instance and pass the schema to it.
// Configure the server to create mocks for all the values in our schema.
// At the bottom of this file, we return the handler that isused by Next.js to make the GraphQL server available at the route
// http://localhost:3000/api/graphql:

const mocks = {
    Int: () => Math.floor(Math.random() * 99 ) + 1,
    Float: () => (Math.random() * 99.0 + 1.0).toFixed(2),
    Product: () => ({
        thumbnail: () => 'https://picsum.photos/400/400'
    }),
};

const executableSchema = addMocksToSchema ({ 
    schema: makeExecutableSchema({ typeDefs,  }),
    mocks,
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return resolve(result);
            }
        });
    });
}

async function handler (req, res) {
    const result = await runMiddleware(
        req,
        res,
        graphqlHTTP({
            schema: executableSchema,
            graphiql: true,
        }),
    );
    res.json(result);
}
export default handler;