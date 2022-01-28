import $ from "jquery";

function addToDOM(text) {
  let elem = document.getElementsByClassName("deferred-exp2");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

async function printStories() {
  fetchStoriesFromServer()
    .then((storiesList) => {
      addToDOM("Printing array as received from server:");
      addToDOM(JSON.stringify(storiesList.splice(-5)));
    })
    .catch((err) => {
      addToDOM("Something went wrong!");
    });
}

async function fetchStoriesFromServer() {
  const deferred = $.Deferred();
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: (data) => deferred.resolve(data),
    error: () => deferred.reject(),
  });
  return deferred.promise();
}

printStories();
