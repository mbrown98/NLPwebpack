function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.fetchSentimentAnalysis(formText);
}

export { handleSubmit };
