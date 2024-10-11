import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors)
  // graphQLErrors.forEach(({ message, locations, path }) =>
  //   // console.log(
  //   //   `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
  //   // )
  // );
  // if (networkError) console.error(`[Network error]: ${networkError}`);
});

const createPublicClient = () => {
  const link = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });
  return new ApolloClient({
    link: from([errorLink, authLink.concat(link)]),
    cache: new InMemoryCache({ addTypename: false }),
  });
};

export const publicClient = createPublicClient();
