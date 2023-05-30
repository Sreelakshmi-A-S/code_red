document.getElementById("periodForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var lastPeriod = new Date(document.getElementById("lastPeriod").value);
  var cycleLength = parseInt(document.getElementById("cycleLength").value);

  var nextPeriod = new Date(lastPeriod.getTime());
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

  var formattedNextPeriod = nextPeriod.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("predictionResult").innerText = "Next period: " + formattedNextPeriod;

  // Clear chatbot messages
  document.getElementById("chatbotMessages").innerHTML = "";

  // Chatbot assistance
  var chatbotResponse = getChatbotResponse(cycleLength);
  displayChatbotResponse(chatbotResponse);
});

document.getElementById("sendButton").addEventListener("click", function() {
  var userInput = document.getElementById("userInput").value;
  displayUserMessage(userInput);
  processUserInput(userInput);
});

function getChatbotResponse(cycleLength) {
  var response = "";

  if (cycleLength < 21) {
    response = "Your cycle length seems to be shorter than average. It's recommended to consult a doctor.";
  } else if (cycleLength > 35) {
    response = "Your cycle length seems to be longer than average. It's recommended to consult a doctor.";
  } else {
    response = "Your cycle length falls within the average range.";
  }

  return response;
}

function displayChatbotResponse(response) {
  var chatbotContainer = document.createElement("div");
  chatbotContainer.classList.add("chatbot-message");
  chatbotContainer.innerText = "Chatbot: " + response;

  document.getElementById("chatbotMessages").appendChild(chatbotContainer);

  // Scroll to the bottom of chat messages
  document.getElementById("chatbotMessages").scrollTop = document.getElementById("chatbotMessages").scrollHeight;
}

function displayUserMessage(message) {
  var userContainer = document.createElement("div");
  userContainer.classList.add("user-message");
  userContainer.innerText = "User: " + message;

  document.getElementById("chatbotMessages").appendChild(userContainer);

  // Scroll to the bottom of chat messages
  document.getElementById("chatbotMessages").scrollTop = document.getElementById("chatbotMessages").scrollHeight;
}

function processUserInput(userInput) {
  // Here, you can implement the logic to handle different user queries and provide appropriate responses.
  // For simplicity, let's provide a generic response in this example.

  var chatbotResponse = "Thank you for your message. How can I assist you?";
  displayChatbotResponse(chatbotResponse);
}
