const elements = {
  // feature-element: ["item1", "item2", "item3], error
  "featured-element": ["item1", "item2", "item3"],
};

console.log(elements["featured-element"]);

let appState = "loading";

// appState = "error";

const app = {
  [appState]: true, // value of the variable will be the key name
};

console.log(app);

const keyName = "computer";

app[keyName] = "Apple"; // notice how value is assigned to the key

console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "John");
updateState("job", "Developer");
updateState("loading", false);

updateState("products", []);

console.log(state);
