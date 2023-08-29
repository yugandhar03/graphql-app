import { gql } from '@apollo/client';

export const getAllPosts = gql`
{
  getAllPosts{
    id
    title
    description
  }
}
`