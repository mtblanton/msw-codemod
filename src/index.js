const fetch = require("node-fetch");

function testFetch() {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
      username: "username",
    }),
  }).then((res) => res.json());
}

module.exports = {
  testFetch,
};
