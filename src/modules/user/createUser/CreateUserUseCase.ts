import { FakeUserRepository } from "../../repositories/implementations/FakeUserRepository";
import {
  IUserRepository,
  User,
  UserRequest,
} from "../../repositories/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  execute({ name, username }: UserRequest): User | Error {
    const userAlreadyExists = this.userRepo.findByUsername(username);

    if (userAlreadyExists) {
      return new Error("User already exists");
    }

    const user = this.userRepo.create({
      name,
      username,
    });

    return user;
  }
}
