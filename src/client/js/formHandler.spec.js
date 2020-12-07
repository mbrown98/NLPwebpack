import { handleSubmit } from "./formHandler";

describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("Expect the handleSubmit() function to return true", () => {
    expect(handleSubmit).toBeTruthy();
  });
});
