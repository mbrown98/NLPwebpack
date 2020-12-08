function handleSubmit(event) {
  event.preventDefault();
  try {
    let formText = document.getElementById("name").value;
    if (formText) {
      Client.fetchSentimentAnalysis(formText);
      return true;
    }
    window.alert("Please enter a message to be analyzed");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { handleSubmit };
