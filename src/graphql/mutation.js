import {gql} from '@apollo/client';

const SEND_DATA= gql`
mutation sendData(
  $name : String!
  $email : String!
  $password: String!
  $phone: String!
) {
  createLogin(
    data: {name: $name, email: $email, password: $password, phone: $phone}
  ) {
    id
  }
}`;
export {SEND_DATA};