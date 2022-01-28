import $ from "jquery";

function addToDOM(text) {
  let elem = document.getElementsByClassName("async-exp2");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

async function printStories() {
  try {
    let storiesList = await fetchStoriesFromServer();
    addToDOM("Printing array as received from server:");
    addToDOM(JSON.stringify(storiesList.splice(-5)));
  } catch (err) {
    addToDOM("Something went wrong!");
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

printStories();
