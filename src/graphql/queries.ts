import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query GetFeed {
    feed {
      by
      title
      text
      score
    }
  }
`;
