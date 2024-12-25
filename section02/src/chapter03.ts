/**
 * 객체
 */
let user: { id: number; name?: string } = {
  id: 1,
  name: "kim",
};

let dog: { name: string; color: string } = {
  name: "red",
  color: "black",
};

user = {
  id: 2,
  // name: "park",
};

let config: { readonly apiKey: string } = {
  apiKey: "API KEY",
};

// config.apiKey = "API KEY 2"; (x)
