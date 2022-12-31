import { gql } from "@apollo/client";

const GET_LOGIN_INFO=gql`
query{
  logins {
    email
    password
    id
  }
  }  
`;

const GET_FOOD_INFO=gql`
query{
 foods{
  id
  details
  name
  group
  photo {
    url
  }
  price
}
}
`;
export {GET_LOGIN_INFO , GET_FOOD_INFO};
