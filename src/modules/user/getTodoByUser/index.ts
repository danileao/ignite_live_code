import { GetTodoByUserUseCase } from "./GetTodoByUserUseCase";
import { GetTodoByUserController } from "./GetTodoByUserController";
import { FakeUserRepository } from "../../repositories/implementations/FakeUserRepository";

const userRepository = new FakeUserRepository();
const getTodoByUserUseCase = new GetTodoByUserUseCase(userRepository);

const getTodoByUserController = new GetTodoByUserController(
  getTodoByUserUseCase
);

export { getTodoByUserController };
