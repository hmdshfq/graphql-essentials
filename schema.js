import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        price: Float
        description: String
        soldOut: Boolean
    },
    type Query {
        product: Product
    }
`);

export default schema;