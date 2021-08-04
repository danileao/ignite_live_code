import { Request, Response } from "express";
import { GetTodoByUserUseCase } from "./GetTodoByUserUseCase";

export class GetTodoByUserController {
  constructor(private useCase: GetTodoByUserUseCase) {}

  handle(request: Request, response: Response) {
    const { username } = request;

    const todo = this.useCase.execute(username);

    return response.json(todo);
  }
}
