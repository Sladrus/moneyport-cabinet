import { gql } from "@apollo/client";

export const GET_BALANCES_QUERY = gql`
  query getBalances($next_cursor: String, $user_id: ID!) {
    balances(next_cursor: $next_cursor, user_id: $user_id) {
      data {
        sum
        currency {
          code
          name
          symbol
          description
        }
      }
      pagination {
        total
        next_cursor
      }
    }
  }
`;

export const GET_PAYMENTS_QUERY = gql`
  query getPayments($next_cursor: String, $user_id: ID!) {
    payments(
      next_cursor: $next_cursor
      user_id: $user_id
      per_page: 20
      pagination_type: "cursor"
    ) {
      data {
        id
        sum
        type
        currency {
          code
          name
          symbol
          description
        }
        created_at
        updated_at
      }
      pagination {
        total
        current_page
        last_page
        per_page
        next_cursor
      }
    }
  }
`;
