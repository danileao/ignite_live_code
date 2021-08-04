export interface UserRequest {
  name: string;
  username: string;
}

export interface User extends UserRequest {
  id: string;
  todos: any[];
}

export interface IUserRepository {
  create({ name, username }: UserRequest): User;
  findByUsername(username: string): User;
  findTodosByUsername(username: string);
}
