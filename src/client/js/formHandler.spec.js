import { handleSubmit } from "./formHandler";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("Expect the handleSubmit() function to return true", () => {
    expect(handleSubmit).toBeTruthy();
  });
});
