// Handle search suggestions
document.getElementById("searchBox").addEventListener("input", (e) => {
  const input = e.target.value.toLowerCase();
  const suggestion = document.getElementById("suggestion");

  if (input.includes("pizza") || input.includes("restaurant")) {
    suggestion.innerText = "Looking for restaurants nearby?";
  } else if (input.includes("event")) {
    suggestion.innerText = "Try: 'What events are happening this weekend?'";
  } else if (input.includes("deals")) {
    suggestion.innerText = "Try: 'Show me the best deals near me'";
  } else {
    suggestion.innerText = "";
  }
});

// Handle Ask Bino button click
document.getElementById("binoBuddyBtn").addEventListener("click", () => {
  const searchBox = document.getElementById("searchBox");
  const query = searchBox.value || "local events near me";
  const message = encodeURIComponent(`Hey Bino, can you help with this search: ${query}`);
  const whatsappURL = `https://api.whatsapp.com/send?phone=1212345689&text=${message}`;

  // Open WhatsApp
  chrome.tabs.create({ url: whatsappURL });

  // Add visual button feedback
  const button = document.getElementById("binoBuddyBtn");
  button.classList.add("clicked");
  setTimeout(() => button.classList.remove("clicked"), 1500);

  // Send notification
  chrome.runtime.sendMessage({
    type: "notify",
    title: "Sent to WhatsApp",
    message: `Your message was sent to Bino: "${query}"`
  });

  // Store query in history
  saveToHistory(query);
});

// Quick suggestions buttons
document.querySelectorAll("#quick button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const searchBox = document.getElementById("searchBox");
    searchBox.value = btn.dataset.query;
    searchBox.dispatchEvent(new Event("input"));
  });
});

// Save up to 3 most recent messages in localStorage
function saveToHistory(query) {
  let history = JSON.parse(localStorage.getItem("binoHistory")) || [];
  history.unshift(query);
  if (history.length > 3) history = history.slice(0, 3);
  localStorage.setItem("binoHistory", JSON.stringify(history));
  renderHistory();
}

// Render stored search history
function renderHistory() {
  const container = document.getElementById("history");
  const history = JSON.parse(localStorage.getItem("binoHistory")) || [];
  container.innerHTML = history.map(q => `<li>🕓 ${q}</li>`).join("");
}


// Initialize on load
renderHistory();
