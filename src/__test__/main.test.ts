/**
 *@jest-environment jsdom
 */

import { describe, test, expect, jest } from "@jest/globals";
import * as addfunctions from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import * as functions from "./../ts/main";

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
/* describe("inittwo", () => {
  test("should be able to click", () => {
    //arrange
    let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
    //let toDoText: string = "hej";
    //let todos: Todo[] = [];
    functions.initTwo();

    ///act
    document.getElementById("newTodoForm")?.onsubmit; //submitevent??

    //assert
    expect(spy).toHaveBeenCalled();
    //expect(spy).toBeCalledWith(toDoText, todos);
  });
}); */

/* describe("createHTML", () => {
  //denna är inte klar
  test("should click li", () => {
    let list: Todo[] = [new Todo("someText", false)];
    document.body.innerHTML = `<li id="myLiTag"></li>`;
    let spy = jest.spyOn(functions, "toggleTodo").mockReturnValue();
    functions.createHtml(list);

    //act
    document.getElementById("myLiTag")?.click();

    //assert
    expect(spy).toHaveBeenCalledTimes(1);
  }); */

test("empty the list before loop", () => {
  let list: Todo[] = [new Todo("someText", false)];
  document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

  //act
  functions.createHtml(list);

  //assert
  expect(document.getElementById("todos")?.innerHTML).toBe("");
});
/* }); */
describe("toggleTodo", () => {
  test("send to function", () => {
    let list: Todo = new Todo("someText", false);
    let spy = jest.spyOn(addfunctions, "changeTodo").mockReturnValue();

    functions.toggleTodo(list);

    //assert
    expect(spy).toHaveBeenCalled();
  });
  test("send to function", () => {
    let list: Todo = new Todo("someText", false);
    let spyTwo = jest.spyOn(functions, "createHtml").mockReturnValue();

    functions.toggleTodo(list);

    //assert
    expect(spyTwo).toHaveBeenCalled();
  });
});

describe("clearTodos", () => {
  test("should call functions", () => {
    let list: Todo[] = [new Todo("someText", false)];
    let spy = jest.spyOn(addfunctions, "removeAllTodos").mockReturnValue();

    //act
    functions.clearTodos(list);

    //assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("should run function createHtml", () => {
    //Arrange
    let todos: Todo[] = [new Todo("text", false)];
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.clearTodos(todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

test("should be able to click", () => {
  //Arrange

  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
  functions.initOne();

  //Act
  document.getElementById("clearTodos")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
});
/* describe("inittwo", () => {
  test("should be able to click", () => {
    //arrange
    let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
    let toDoText: string = "hej";
    let todos: Todo[] = [new Todo("someText", false)];
    functions.initTwo();

    ///act
    document.getElementById("newTodoForm")?.onsubmit; //submitevent??

    //assert
    //expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(toDoText, todos);
  });
}); */

/*  describe("displayError", () => {
  test("adds classlist show", () => {
    //arrange
    let error: string = "Du måste ange minst två bokstäver";
    let show: boolean = true;
    document.body.innerHTML = `"div id="error" class="error"></div>"`;
    //act
    functions.displayError(error, show);
    //assert
    expect(document.getElementById("error")?.classList.add).toBe("show");
  });
  test("removes classlist show", () => {
    //arrange
    let error: string = "Du måste ange minst två bokstäver";
    let show: boolean = false;
    document.body.innerHTML = `"div id="error" class="error"></div>"`;
    //act
    functions.displayError(error, show);
    //assert
    expect(document.getElementById("error")?.classList.remove).toBe("show");
  });
}); */
