import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("adds to list", () => {
  //Arrange
  let myText: string = "hello";
  let myTodos: Todo[] = [];

  //Act
  addTodo(myText, myTodos);

  //Assert
  expect(myTodos.length).toBe(1);
});

test("Do not add to list", () => {
  //Arrange
  let myText: string = "";
  let myTodos: Todo[] = [];

  //Act
  addTodo(myText, myTodos);

  //Assert
  expect(myTodos.length).toBe(0);
});
