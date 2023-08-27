function agregarTweet() {
    var tweetText = document.getElementById("tweetInput").value;
    if (tweetText.trim() === "") {
        return;
    }

    var tweetContainer = document.getElementById("tweetContainer");

    var tweetDiv = document.createElement("div");
    tweetDiv.className = "tweetContainer";

    var tweetTextDiv = document.createElement("div");
    tweetTextDiv.className = "tweetText";
    tweetTextDiv.textContent = tweetText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
        tweetContainer.removeChild(tweetDiv);
        updateTweetCount();
    });

    tweetDiv.appendChild(tweetTextDiv);
    tweetDiv.appendChild(deleteButton);

    tweetContainer.appendChild(tweetDiv);

    document.getElementById("tweetInput").value = "";

    updateTweetCount();
}

function updateTweetCount() {
    var tweetCountDisplay = document.getElementById("tweetCount");
    var tweetContainers = document.getElementsByClassName("tweetContainer");
    tweetCountDisplay.textContent = tweetContainers.length;
}

function actualizarHoraFecha() {
    var now = new Date();
    var datetimeDiv = document.getElementById("datetime");
    datetimeDiv.innerHTML = now.toLocaleString();
}

actualizarHoraFecha();
document.getElementById("addButton").addEventListener("click", agregarTweet);
