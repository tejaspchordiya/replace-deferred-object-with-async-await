import $ from "jquery";

function addToDOM(text) {
  let elem = document.getElementsByClassName("deferred-exp2");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

async function printStories() {
  // ajax request 1 > fetch stories from server
  fetchStoriesFromServer().done((storiesList) => {
    addToDOM("Printing posts as received from server:");
    addToDOM(JSON.stringify(storiesList.splice(-3)));

    // ajax request 2 > fetch todos from server
    fetchTodosFromServer()
      .then((todos) => {
        addToDOM("Printing todos as received from server:");
        addToDOM(JSON.stringify(todos.splice(-3)));
      })
  })
    .catch((err) => {
      addToDOM("Something went wrong!");
    })
    .always(() => {
      addToDOM("Task Completed!");
    });
}

function fetchStoriesFromServer() {
  const deferred = $.Deferred();
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: (data) => deferred.resolve(data),
    error: () => deferred.reject(),
  });
  return deferred.promise();
}

function fetchTodosFromServer() {
  const deferred = $.Deferred();
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: (data) => deferred.resolve(data),
    error: () => deferred.reject(),
  });
  return deferred.promise();
}

printStories();
