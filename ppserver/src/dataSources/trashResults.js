import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class TrashResults extends MongoDataSource {
  async getTrashResults() {
    return await this.model.find();
  }

  async getTrashResult(_id) {
    return await this.findOneById(_id);
  }

  async createTrashResult({ grade, polygon }) {
    return await this.model.create({ grade, polygon });
  }
}