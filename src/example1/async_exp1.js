function addToDOM(text) {
  let elem = document.getElementsByClassName("async-exp1");
  let childElem = document.createElement("p");
  childElem.append(text);
  elem[0].append(childElem);
}

const isShopOpen = true;

async function getIceCream() {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      addToDOM("Place ice-cream order");

      // Alternatively, we can a ajax call over here
      setTimeout(() => {
        resolve("Ice-cream served!");
      }, 2000);
    } else {
      reject("Shop is closed. Inconvenience regretted.");
    }
  });
}

const promise = getIceCream();
promise
  .then((msg) => {
    addToDOM(msg);
  })
  .catch((msg) => {
    addToDOM(msg);
  });
