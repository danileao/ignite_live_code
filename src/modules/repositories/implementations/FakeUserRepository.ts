import { IUserRepository, User, UserRequest } from "../IUserRepository";

import { v4 as uuidv4 } from "uuid";

const users: User[] = [];

export class FakeUserRepository implements IUserRepository {
  create({ name, username }: UserRequest) {
    const user = {
      id: uuidv4(),
      name,
      username,
      todos: [],
    };

    users.push(user);

    return user;
  }

  findByUsername(username: string): User {
    const user = users.find((user) => user.username === username);
    return user;
  }

  findTodosByUsername(username: string) {
    const user = users.find((user) => user.username === username);

    if (!user) return undefined;

    if (user.todos) {
      return user;
    }

    return undefined;
  }
}
