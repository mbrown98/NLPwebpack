function handleSubmit(event) {
  event.preventDefault();
  try {
    let formText = document.getElementById("name").value;
    Client.fetchSentimentAnalysis(formText);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
  // check what text was put into the form field
}

export { handleSubmit };
