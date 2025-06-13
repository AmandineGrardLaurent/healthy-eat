import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";

class UserRepository {
  async create(user: UserType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, hash_password, pseudo) VALUES (?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hash_password,
        user.pseudo,
      ],
    );
    return [result];
  }
}

export default new UserRepository();
