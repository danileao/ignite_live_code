import { IUserRepository } from "../../repositories/IUserRepository";

export class GetTodoByUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(username: string) {
    const todos = this.userRepository.findTodosByUsername(username);

    return todos;
  }
}
