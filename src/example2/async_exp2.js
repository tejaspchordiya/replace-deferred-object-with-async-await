import $ from "jquery";

function addToDOM(text) {
  let elem = document.getElementsByClassName("async-exp2");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

async function printStories() {
  try {
    // ajax request 1 > fetch stories from server
    let storiesList = await fetchStoriesFromServer();
    addToDOM("Printing posts as received from server:");
    addToDOM(JSON.stringify(storiesList.splice(-3)));

    // ajax request 2 > fetch todos from server
    let todosList = await fetchTodosFromServer();
    addToDOM("Printing todos as received from server:");
    addToDOM(JSON.stringify(todosList.splice(-3)));

  } catch (err) {
    addToDOM("Something went wrong!");
  } finally {
    addToDOM("Task Completed!");
  }
}

async function fetchStoriesFromServer() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      success: (data) => resolve(data),
      error: () => reject(),
    });
  });
}

async function fetchTodosFromServer() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      success: (data) => resolve(data),
      error: () => reject(),
    });
  });
}

printStories();
