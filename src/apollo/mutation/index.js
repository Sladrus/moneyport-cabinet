import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const REGISTRATION_MUTATION = gql`
  mutation registration($input: registrationInput!) {
    registration(input: $input) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($input: forgotPasswordInput!) {
    forgotPassword(input: $input) {
      operation_status {
        status
        message
        code
      }
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($input: resetPasswordInput!) {
    resetPassword(input: $input) {
      operation_status {
        status
        message
        code
      }
    }
  }
`;

export const REGISTRATION_FROM_CHAT_MUTATION = gql`
  mutation registrationFromChat($input: registrationFromChatInput!) {
    registrationFromChat(input: $input) {
      user {
        email
      }
      operation_status {
        status
        message
        code
      }
    }
  }
`;

export const GET_CHAT_MUTATION = gql`
  mutation getChat($input: chatInput) {
    getChat(input: $input) {
      chat {
        telegram_group {
          group_url
        }
      }
      operation_status {
        status
        message
        code
      }
    }
  }
`;
