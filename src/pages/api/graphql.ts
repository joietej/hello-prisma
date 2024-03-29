import { ApolloServer } from "apollo-server-micro";
import { createContext } from "../../graphql/context";
import { schema } from "../../graphql/schema";

const server = new ApolloServer({ schema : schema, context: createContext});

const handler = server.createHandler({path :'/api/graphql'});

export const config = {
   api: {
       bodyParser : false
   }
}

export default handler;

