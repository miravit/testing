/**
 *@jest-environment jsdom
 */

import { describe, test, expect, jest } from "@jest/globals";
import * as addfunctions from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import * as functions from "./../ts/main";

test("should be able to click", () => {
  //arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;

  functions.initOne();
  //act
  document.getElementById("clearTodos")?.click();

  //assert
  expect(spy).toHaveBeenCalled();
});

/* describe("inittwo", () => {
  test("should be able to click", () => {
    //arrange
    let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
    let toDoText: string = "hej";
    let todos: Todo[] = [];
    functions.initTwo();

    ///act
    document.getElementById("newTodoForm")? //submitevent??

    //assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(toDoText, todos);
  });
}); */

describe("createNewTodo()", () => {
  test("if the result.success==true", () => {
    let list: Todo[] = [];
    let myText: string = "hej";

    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //act
    functions.createNewTodo(myText, list);

    //assert
    expect(spy).toBeCalledTimes(1);
  });
  test("if the result.success==false", () => {
    let list: Todo[] = [];
    let myText: string = "m";

    let spy = jest.spyOn(functions, "displayError").mockReturnValue();

    //act
    functions.createNewTodo(myText, list);

    //assert
    expect(spy).toBeCalledTimes(1);
  });
});

describe("createHTML", () => {
  test("adds in localstorage", () => {
    let list: Todo[] = [new Todo("someText", false)];

    //act
    localStorage.setItem("todos", JSON.stringify(list));

    //assert
    expect(localStorage.length).toBe(1);
  });
  test("empty the list before loop", () => {
    let list: Todo[] = [new Todo("someText", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    //act
    functions.createHtml(list);

    //assert
    expect(document.getElementById("todos")?.innerHTML).toBe("");
  });
});
