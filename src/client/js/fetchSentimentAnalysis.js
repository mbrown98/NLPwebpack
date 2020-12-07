const fetchSentimentAnalysis = async (text) => {
  const baseURL = "http://localhost:8081";
  fetch(baseURL + "/analysis", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.data.agreement}`;

      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.data.confidence}`;

      document.getElementById("irony").innerHTML = `Irony: ${res.data.irony}`;
    });
};

export { fetchSentimentAnalysis };
