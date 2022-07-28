import { gql } from "@apollo/client";

export const getPostsQuery = gql`
  query posts($page: Int!, $limit: Int!) {
    posts(object:{ page: $page, limit: $limit }) {
    posts {
      id
      title
      image
      description
    }
    total
    }
  }
`;

