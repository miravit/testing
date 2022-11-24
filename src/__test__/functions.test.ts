import { addTodo, changeTodo, removeAllTodos } from "./../ts/functions";
import { Todo } from "./../ts/models/Todo";
import { describe, test, expect } from "@jest/globals";

describe("add to list", () => {
  test("adds to list", () => {
    //Arrange
    let myText: string = "hello";
    let myTodos: Todo[] = [new Todo("handla", false)];
    //Act
    addTodo(myText, myTodos);
    //Assert
    expect(myTodos.length).toBe(2);
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
});

describe("from false to true and reverse", () => {
  test("change todo from false to true", () => {
    let myTodos: Todo = new Todo("handla", false);
    changeTodo(myTodos);
    expect(myTodos.done).toBe(true);
  });

  test("change todo from true to false", () => {
    let myTodos: Todo = new Todo("handla", true);
    changeTodo(myTodos);
    expect(myTodos.done).toBe(false);
  });
});

describe("removes from list", () => {
  test("removes the list", () => {
    //Arrange
    let myTodos: Todo[] = [new Todo("handla", true)];
    //Act
    removeAllTodos(myTodos);
    //Assert
    expect(myTodos.length).toBe(0);
  });

  test("removes the list, works on empty list", () => {
    //Arrange
    let myTodos: Todo[] = [];
    //Act
    removeAllTodos(myTodos);
    //Assert
    expect(myTodos.length).toBe(0);
  });
});
