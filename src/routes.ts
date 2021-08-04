import { Router } from "express";
import { createUserController } from "./modules/user/createUser";
import { getTodoByUserController } from "./modules/user/getTodoByUser";
import { checksExistsUserAccount } from "./shared/http/checksExistsUserAccount";

const routes = Router();

routes.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

routes.get("/todos", checksExistsUserAccount(), (request, response) => {
  return getTodoByUserController.handle(request, response);
});

// routes.post("/todos", checksExistsUserAccount(), (request, response) => {
//   const { user } = request;
//   const { title, deadline } = request.body;

//   const todo = {
//     id: uuidv4(),
//     title,
//     done: false,
//     deadline: new Date(deadline),
//     created_at: new Date(),
//   };

//   user.todos.push(todo);

//   return response.status(201).json(todo);
// });

// routes.put("/todos/:id", checksExistsUserAccount, (request, response) => {
//   const { user } = request;
//   const { title, deadline } = request.body;
//   const { id } = request.params;

//   const todoIndex = user.todos.findIndex((todo) => todo.id === id);

//   if (todoIndex < 0) {
//     return response.status(404).json({ error: "Todo not found" });
//   }

//   user.todos[todoIndex].title = title;
//   user.todos[todoIndex].deadline = new Date(deadline);

//   return response.status(201).json(user.todos[todoIndex]);
// });

// routes.patch(
//   "/todos/:id/done",
//   checksExistsUserAccount,
//   (request, response) => {
//     const { user } = request;
//     const { id } = request.params;

//     const todoIndex = user.todos.findIndex((todo) => todo.id === id);

//     if (todoIndex < 0) {
//       return response.status(404).json({ error: "Todo not found" });
//     }

//     user.todos[todoIndex].done = true;

//     return response.status(201).json(user.todos[todoIndex]);
//   }
// );

// routes.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
//   const { user } = request;
//   const { id } = request.params;

//   const todoIndex = user.todos.findIndex((todo) => todo.id === id);

//   if (todoIndex < 0) {
//     return response.status(404).json({ error: "Todo not found" });
//   }

//   const todo = user.todos[todoIndex];

//   user.todos.splice(todo, 1);

//   return response.status(204).send();
// });

export { routes };
