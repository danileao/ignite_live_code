import { Request, Response, NextFunction } from "express";
import { FakeUserRepository } from "../../modules/repositories/implementations/FakeUserRepository";

export function checksExistsUserAccount() {
  return (request: Request, response: Response, next: NextFunction) => {
    const { username } = request.headers;

    const userRepo = new FakeUserRepository();

    const user = userRepo.findByUsername(String(username));

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    request.username = user.username;
    return next();
  };
}
