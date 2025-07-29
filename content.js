 const keywords = ["restaurant", "near me", "events", "things to do", "places to eat"];

const query = new URLSearchParams(window.location.search).get("q");
if (query && keywords.some(word => query.toLowerCase().includes(word))) {
  const prompt = document.createElement("div");
  prompt.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    border-radius: 10px;
    padding: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    font-family: sans-serif;
    z-index: 10000;
  `;

prompt.innerHTML = `
  <strong style="color: black;">👋 Try this on Bino!</strong><br/>
  <button id="binoBuddyBtn" style="margin-top:8px; padding:6px 10px; background:#25D366; border:none; color:white; border-radius:5px; cursor:pointer;">
    Ask via WhatsApp
  </button>
`;




  document.body.appendChild(prompt);

  document.getElementById("binoBuddyBtn").onclick = () => {
    const message = encodeURIComponent("Hey Bino, can you help with this search: " + query);
    window.open("https://wa.me/1212345689?text=" + message, "_blank");

};


}

