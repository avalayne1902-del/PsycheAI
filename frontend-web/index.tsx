/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { css } from "hono/css";

const app = new Hono();

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #0a0e27;
    color: #e0e0e0;
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  }

  .header {
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
  }

  .header h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .header p {
    font-size: 0.85rem;
    opacity: 0.9;
    margin-top: 0.25rem;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .messages-area {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .messages-area::-webkit-scrollbar {
    width: 6px;
  }

  .messages-area::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  .messages-area::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  .message {
    display: flex;
    gap: 0.75rem;
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .message.user {
    flex-direction: row-reverse;
  }

  .message-content {
    max-width: 85%;
    padding: 0.875rem 1rem;
    border-radius: 0.75rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  .message.assistant .message-content {
    background: #1e2139;
    border-left: 3px solid #6366f1;
    color: #e0e0e0;
  }

  .message.user .message-content {
    background: #6366f1;
    color: white;
    border-radius: 0.75rem 0 0.75rem 0.75rem;
  }

  .message.error .message-content {
    background: #7f1d1d;
    border-left: 3px solid #ef4444;
    color: #fca5a5;
  }

  .message.loading .message-content {
    background: #1e2139;
    border-left: 3px solid #8b5cf6;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    padding: 0.875rem 1rem;
  }

  .typing-indicator {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  .typing-dot {
    width: 0.4rem;
    height: 0.4rem;
    background: #8b5cf6;
    border-radius: 50%;
    animation: pulse 1.4s infinite;
  }

  .typing-dot:nth-child(1) {
    animation-delay: 0s;
  }

  .typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 60%, 100% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }
  }

  .analysis-panel {
    margin-top: 0.75rem;
    padding: 0.75rem;
    background: rgba(99, 102, 241, 0.1);
    border-left: 2px solid #6366f1;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .analysis-panel.expanded {
    max-height: 400px;
    overflow-y: auto;
  }

  .analysis-panel::-webkit-scrollbar {
    width: 4px;
  }

  .analysis-panel::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.3);
    border-radius: 2px;
  }

  .analysis-toggle {
    cursor: pointer;
    color: #6366f1;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    user-select: none;
  }

  .analysis-toggle:hover {
    color: #8b5cf6;
  }

  .analysis-content {
    margin-top: 0.6rem;
    color: #b0b0b0;
    line-height: 1.4;
  }

  .analysis-section {
    margin-bottom: 0.6rem;
  }

  .analysis-section strong {
    color: #8b5cf6;
    display: block;
    margin-bottom: 0.2rem;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #606080;
    text-align: center;
  }

  .empty-state h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #8b8ba0;
  }

  .empty-state p {
    font-size: 0.9rem;
    color: #606080;
  }

  .input-area {
    background: #0f1219;
    border-top: 1px solid rgba(99, 102, 241, 0.2);
    padding: 1rem;
    display: flex;
    gap: 0.75rem;
    align-items: flex-end;
    flex-shrink: 0;
  }

  .input-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .input-field {
    background: #1e2139;
    border: 1px solid rgba(99, 102, 241, 0.3);
    color: #e0e0e0;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    resize: none;
    max-height: 120px;
    font-family: inherit;
    transition: border-color 0.2s;
    line-height: 1.4;
  }

  .input-field::placeholder {
    color: #606080;
  }

  .input-field:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
  }

  .input-field:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .char-count {
    font-size: 0.75rem;
    color: #808080;
    margin-top: 0.3rem;
  }

  .send-btn {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
    min-width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .send-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  }

  .send-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .send-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    .message-content {
      max-width: 95%;
      font-size: 0.9rem;
      padding: 0.75rem 0.875rem;
    }

    .header h1 {
      font-size: 1.25rem;
    }

    .input-area {
      padding: 0.75rem;
      gap: 0.5rem;
    }

    .input-field {
      font-size: 0.9rem;
      padding: 0.65rem 0.85rem;
    }

    .send-btn {
      min-width: 44px;
      padding: 0.65rem 1rem;
      font-size: 0.9rem;
    }
  }
`;

app.get("/", (c) => {
  return c.html(
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>PsycheAI Chat</title>
        <style>{styles}</style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🧠 PsycheAI</h1>
            <p>Reflektive Analyse für mentale Klarheit</p>
          </div>

          <div class="chat-container">
            <div class="messages-area" id="messagesArea">
              <div class="empty-state">
                <h2>Willkommen bei PsycheAI</h2>
                <p>Teile deine Gedanken – erhalte reflektive Analysen</p>
              </div>
            </div>

            <div class="input-area">
              <div class="input-wrapper">
                <textarea
                  id="messageInput"
                  class="input-field"
                  placeholder="Deine Gedanken... (Max 5000 Zeichen)"
                  rows="1"
                  maxlength="5000"
                  autocomplete="off"
                ></textarea>
                <div class="char-count">
                  <span id="charCount">0</span> / 5000
                </div>
              </div>
              <button class="send-btn" id="sendBtn" title="Senden (Enter)">↑</button>
            </div>
          </div>
        </div>

        <script>
          const messagesArea = document.getElementById("messagesArea");
          const messageInput = document.getElementById("messageInput");
          const sendBtn = document.getElementById("sendBtn");
          const charCount = document.getElementById("charCount");

          const API_URL = "https://psycheai-function-production.up.railway.app/api/chat";

          let chatHistory = [];
          let isLoading = false;

          // Auto-grow textarea
          messageInput.addEventListener("input", () => {
            charCount.textContent = messageInput.value.length;
            messageInput.style.height = "auto";
            const newHeight = Math.min(messageInput.scrollHeight, 120);
            messageInput.style.height = newHeight + "px";
          });

          // Handle Enter to send (Shift+Enter for newline)
          messageInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          });

          sendBtn.addEventListener("click", sendMessage);

          async function sendMessage() {
            const message = messageInput.value.trim();
            if (!message || isLoading) return;

            isLoading = true;
            sendBtn.disabled = true;
            messageInput.disabled = true;

            // Clear empty state
            const emptyState = messagesArea.querySelector(".empty-state");
            if (emptyState) emptyState.remove();

            // Add user message
            addMessage("user", message);
            chatHistory.push({ role: "user", content: message });
            messageInput.value = "";
            charCount.textContent = "0";
            messageInput.style.height = "auto";

            // Add loading indicator
            const loadingId = "loading-" + Date.now();
            addMessage("loading", "", loadingId);
            messagesArea.scrollTop = messagesArea.scrollHeight;

            try {
              const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  message: message,
                  session: chatHistory.slice(0, -1),
                }),
              });

              // Remove loading indicator
              const loadingEl = document.getElementById(loadingId);
              if (loadingEl) loadingEl.remove();

              if (!response.ok) {
                const errText = await response.text();
                throw new Error(\`API Error \${response.status}\`);
              }

              const data = await response.json();

              if (data.error) {
                addMessage("error", \`⚠️ \${data.error}\n\nDetails: \${data.details || "Unbekannt"}\`);
              } else {
                const analysisData = data.analysis || null;
                addMessage("assistant", data.message, undefined, analysisData);
                chatHistory.push({ role: "assistant", content: data.message });
              }
            } catch (error) {
              const loadingEl = document.getElementById(loadingId);
              if (loadingEl) loadingEl.remove();

              addMessage(
                "error",
                \`❌ Verbindungsfehler: \${error.message}\n\nÜberprüfe, ob die API erreichbar ist: ${API_URL}\`
              );
              console.error("Error:", error);
            } finally {
              isLoading = false;
              sendBtn.disabled = false;
              messageInput.disabled = false;
              messageInput.focus();
              messagesArea.scrollTop = messagesArea.scrollHeight;
            }
          }

          function addMessage(role, text, id, analysis) {
            const msgEl = document.createElement("div");
            msgEl.className = \`message \${role}\`;
            if (id) msgEl.id = id;

            if (role === "loading") {
              msgEl.innerHTML = \`
                <div class="message-content">
                  <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                  </div>
                </div>
              \`;
            } else {
              const contentEl = document.createElement("div");
              contentEl.className = "message-content";
              contentEl.textContent = text;
              msgEl.appendChild(contentEl);

              if (role === "assistant" && analysis && typeof analysis === "object") {
                const panelEl = document.createElement("div");
                panelEl.className = "analysis-panel";

                const toggleEl = document.createElement("div");
                toggleEl.className = "analysis-toggle";
                toggleEl.innerHTML = '📊 Details <span id="icon-' + Date.now() + '">▼</span>';

                const iconSpan = toggleEl.querySelector("span");
                let isExpanded = false;

                toggleEl.addEventListener("click", () => {
                  isExpanded = !isExpanded;
                  panelEl.classList.toggle("expanded", isExpanded);
                  iconSpan.textContent = isExpanded ? "▲" : "▼";
                });

                const contentDiv = document.createElement("div");
                contentDiv.className = "analysis-content";

                Object.entries(analysis).forEach(([key, value]) => {
                  const sectionEl = document.createElement("div");
                  sectionEl.className = "analysis-section";

                  const keyEl = document.createElement("strong");
                  keyEl.textContent = formatKey(key);

                  const valueEl = document.createElement("div");
                  valueEl.innerHTML = formatAnalysisValue(value);

                  sectionEl.appendChild(keyEl);
                  sectionEl.appendChild(valueEl);
                  contentDiv.appendChild(sectionEl);
                });

                panelEl.appendChild(toggleEl);
                panelEl.appendChild(contentDiv);
                msgEl.appendChild(panelEl);
              }
            }

            messagesArea.appendChild(msgEl);
            return msgEl;
          }

          function formatKey(key) {
            return key
              .replace(/([A-Z])/g, " \$1")
              .replace(/_/g, " ")
              .trim()
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
          }

          function formatAnalysisValue(value) {
            if (typeof value === "string") {
              return value.replace(/\\n/g, "<br>");
            } else if (Array.isArray(value)) {
              return "<ul>" + value.map((v) => \`<li>\${String(v)}</li>\`).join("") + "</ul>";
            } else if (typeof value === "object" && value !== null) {
              return Object.entries(value)
                .map(([k, v]) => \`<div><strong>\${k}:</strong> \${String(v)}</div>\`)
                .join("");
            }
            return String(value);
          }

          // Mobile safe area handling
          if (navigator.userAgentData?.mobile) {
            document.documentElement.style.setProperty("--safe-area-inset-bottom", "env(safe-area-inset-bottom)");
          }

          messageInput.focus();
        </script>
      </body>
    </html>
  );
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

app.get("/api/status", (c) => {
  return c.json({
    service: "psycheai-web",
    version: "1.0.0",
    api: "https://psycheai-function-production.up.railway.app/api/chat",
    status: "online",
  });
});

export default app;

