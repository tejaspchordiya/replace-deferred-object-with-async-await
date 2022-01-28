import $ from "jquery";

function addToDOM(text) {
  let elem = document.getElementsByClassName("deferred-exp1");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

const isShopOpen = true;

function getIceCream() {
  const deferred = $.Deferred();

  if (isShopOpen) {
    addToDOM("Place ice-cream order");

    // Alternatively, we can a ajax call over here
    setTimeout(() => {
      deferred.resolve("Ice-cream served!");
    }, 2000);
  } else {
    deferred.reject("Shop is closed. Inconvenience regretted.");
  }

  return deferred.promise();
}

const promise = getIceCream();
promise
  .then((msg) => {
    addToDOM(msg);
  })
  .catch((msg) => {
    addToDOM(msg);
  });
