const { testFetch } = require("./index");

it("should fetch", () => {
  testFetch().then((value) => expect(value.firstName).toEqual("John"));
});
