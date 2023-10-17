import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Graph QL is amazing');
});

const root = {
    product: () => {
        return {
            "id": 1,
            "name": "Product 1",
            "price": 12.99,
            "description": "This is the first product",
            "soldOut": false
        };
    },
};

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(8080, () => {
    console.log('Server is running on localhost:8080/graphql');
});
