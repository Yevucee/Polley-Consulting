const chat = document.getElementById("chat");
const form = document.getElementById("composer");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");

const history = [];

function addMessage(role, text, extraClass = "") {
  const wrap = document.createElement("div");
  wrap.className = `message ${role}`;
  const bubble = document.createElement("div");
  bubble.className = `bubble ${extraClass}`.trim();
  bubble.textContent = text;
  wrap.appendChild(bubble);
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
  return bubble;
}

async function refreshStatus() {
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    statusDot.className = "dot ok";
    statusText.textContent = `Model: ${data.model}`;
  } catch {
    statusDot.className = "dot err";
    statusText.textContent = "Model unavailable";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";
  sendBtn.disabled = true;
  const typing = addMessage("assistant", "Assistant is typing…", "typing");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    typing.classList.remove("typing");
    typing.textContent = data.reply;
    history.push({ role: "user", content: message });
    history.push({ role: "assistant", content: data.reply });
  } catch (err) {
    typing.classList.remove("typing");
    typing.classList.add("typing");
    typing.textContent = `Sorry, something went wrong: ${err.message}`;
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
});

refreshStatus();
setInterval(refreshStatus, 15000);
