const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express")
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app });

    await mongoose.connect("mongodb+srv://yugandhar:7032292232@mydatabase.i6jal.mongodb.net/chat-app?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, console.log("DB connected.."))
    app.listen(5000, () => console.log("port is running on 5000"))
}
startServer()

