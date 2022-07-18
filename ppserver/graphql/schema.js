import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
      mapData(
        userId: ID,
        county: String,
        permittee: String,
        site: String,
        tma: String,
        type: String,
        protocol: String,
        startDate: String,
        endDate: String
        offset: Int,
        limit: Int
      ): [MapResult]
    }

    type MapResult {
      id: ID,
      type: String,
      latitude: Float,
      longitude: Float
    }

    schema {
      query: Query
    }
`;

export default typeDefs;