// apollo-client.js
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "/api/graphql", // Tani përdor proxy në vend të GraphQL direkt
    cache: new InMemoryCache(),
});

const fetchGraphQL = async (query, variables = {}) => {
    try {
        console.log("🔄 Duke bërë kërkesë në GraphQL me query:", query);
        const { data } = await client.query({ query: gql(query), variables });
        console.log("✅ Përgjigja nga serveri:", data);
        return data;
    } catch (error) {
        console.error("❌ GraphQL Request Failed:", error);
        return null;
    }
};

export { client, fetchGraphQL };
