import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { FakeUserRepository } from "../../repositories/implementations/FakeUserRepository";

const userRepository = new FakeUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
