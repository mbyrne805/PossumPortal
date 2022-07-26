import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
      getTrashResults: [TrashResult!]!
      getTrashResult(_id: ID): TrashResult
    }

    type Mutation {
      createTrashResult(grade: String, polygon: [PointInput]): TrashResult
    }

    type TrashResult {
      _id: ID!,
      grade: String
      polygon: [Point],
    }

    input PointInput {
      longitude: Float,
      latitude: Float
    }

    type Point {
      longitude: Float,
      latitude: Float
    }

    schema {
      query: Query
    }
`;

export default typeDefs;