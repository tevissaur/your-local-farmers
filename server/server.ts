import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import path from "path";
import { typeDefs, resolvers } from "./schemas/index";
import { authMiddleware } from "./services/authentication.service";
import cors from "cors";
import http from "http";
import { json } from "body-parser";

import { db } from "./config/connection";
// import routes from './controllers';

interface MyContext {
	token?: string;
}

function startApolloServer() {
	db.on("error", (error: any) => console.log(`DB Error: ${error}`));

	db.once("open", async () => {
		const port = Number(process.env.PORT) || 3001;
		const app = express();
		const httpServer = http.createServer(app);
		const server = new ApolloServer<MyContext>({
			typeDefs, 
			resolvers,
			plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
		});
		await server.start();

		app.use(
			"/graphql",
			cors<cors.CorsRequest>({
				origin: [process.env.ALLOWED_CORS_ORIGIN, "http://localhost:3000"],
        credentials: true
      }),
			json(),
			expressMiddleware(server, {
				context: authMiddleware,
			})
		);

		await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
		console.log(`Server ready at http://localhost:${port}/graphql`);
	});
}

startApolloServer();
