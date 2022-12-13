"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./schemas/typeDefs");
const resolvers_1 = require("./schemas/resolvers");
const path_1 = __importDefault(require("path"));
const connection_1 = __importDefault(require("./config/connection"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const server = new apollo_server_express_1.ApolloServer({
    resolvers: resolvers_1.resolvers,
    typeDefs: typeDefs_1.typeDefs,
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
// app.use(uploadRoute)
// app.use(routes);
connection_1.default.once('open', async () => {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`GraphQL server available at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
