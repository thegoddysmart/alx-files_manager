import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  /**
   * Get the application status
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   */
  static getStatus(request, response) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    response.status(200).send(status);
  }

  /**
   * Get the application statistics
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   */
  static async getStats(request, response) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    response.status(200).send(stats);
  }
}

export default AppController;
