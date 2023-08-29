const { gql } = require("apollo-server-express")

const typeDefs = gql`
type Post{
id:ID,
title:String,
description:String
}
type Query{
 getAllPosts:[Post]
 getPost(id:ID):Post
}


input inputPost{
    title:String,
    description:String
}
type Mutation{
    createPost(post:inputPost):Post
    deletePost(id:String):String
    updatePost(id:ID,post:inputPost):Post
}
`;
module.exports = typeDefs;