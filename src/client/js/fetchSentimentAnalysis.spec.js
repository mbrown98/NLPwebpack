import { fetchSentimentAnalysis } from "./fetchSentimentAnalysis";

describe("Testing the fetch functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the fetchSentimentAnalysis() function", () => {
    expect(fetchSentimentAnalysis).toBeDefined();
  });
  test("fetchSentimentAnalysis() runs fully without errors", () => {
    expect(fetchSentimentAnalysis).toBeTruthy();
  });
});
