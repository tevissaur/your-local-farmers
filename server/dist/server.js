"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const index_1 = require("./schemas/index");
const authentication_service_1 = require("./services/authentication.service");
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = require("body-parser");
const connection_1 = require("./config/connection");
function startApolloServer() {
    connection_1.db.on("error", (error) => console.log(`DB Error: ${error}`));
    connection_1.db.once("open", async () => {
        const port = Number(process.env.PORT) || 3001;
        const app = (0, express_1.default)();
        const httpServer = http_1.default.createServer(app);
        const server = new server_1.ApolloServer({
            typeDefs: index_1.typeDefs,
            resolvers: index_1.resolvers,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        });
        await server.start();
        app.use("/graphql", (0, cors_1.default)({
            origin: [process.env.ALLOWED_CORS_ORIGIN, "http://localhost:3000"],
            credentials: true
        }), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
            context: authentication_service_1.authMiddleware,
        }));
        await new Promise((resolve) => httpServer.listen({ port }, resolve));
        console.log(`Server ready at http://localhost:${port}/graphql`);
    });
}
startApolloServer();
