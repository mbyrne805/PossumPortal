// const trashData = [{
//   _id: "14ad3ac287fe89a3",
//   polygon: [
//     {
//       longitude: -119.69804,
//       latitude: 34.43206
//     },
//     {
//       longitude: -119.6984,
//       latitude: 34.43192
//     },
//     {
//       longitude: -119.697609,
//       latitude: 34.431392
//     },
//     {
//       longitude: -119.69759,
//       latidude: 34.43179
//     }
//   ],
//   grade: "heavy"
// }];

// const resolvers = {
//   Query: {
//     getTrashData: (_root, _args, _context, _info) => {
//       return trashData;
//     }
//   }
// };

export const resolvers = {
  Query: {
    getTrashResults: async (_, _args, { dataSources: { trashResults } }) => {
      console.log(await trashResults.getTrashResults());
      return trashResults.getTrashResults();
    },
    getTrashResult: async (_, { _id }, { dataSources: { trashResults } }) => {
      console.log(_id);
      return trashResults.getTrashResult(_id);
    } 
  },
  Mutation: {
    createTrashResult: async (_, _args, { dataSources: { trashResults } }) => {
      return trashResults.createTrashResult(_args)
    }
  }
}

export default resolvers;