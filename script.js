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
});
