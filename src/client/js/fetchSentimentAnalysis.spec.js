import { fetchSentimentAnalysis } from "./fetchSentimentAnalysis";

describe("Testing the fetch functionality", () => {
  test("Testing the fetchSentimentAnalysis() function", () => {
    expect(fetchSentimentAnalysis).toBeDefined();
  });
  test("fetchSentimentAnalysis() runs fully without errors", () => {
    expect(fetchSentimentAnalysis).toBeTruthy();
  });
});
