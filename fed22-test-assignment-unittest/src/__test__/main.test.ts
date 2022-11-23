import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("adds to list", () => {
  //Arrange
  let myText: string = "mmm";
  let myTodos: Todo[] = [];

  //Act
  addTodo(myText, myTodos);

  //Assert
  expect(myTodos.length).toBe(1);
});
