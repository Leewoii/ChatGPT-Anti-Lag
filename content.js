let currentChats = 4;
let observerStarted = false;

function getThreadContainer() {
  return document.querySelector("#thread");
}

function extractTurnNumber(article) {
  const testId = article.getAttribute("data-testid") || "";
  const match = testId.match(/^conversation-turn-(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}

function getConversationArticles() {
  const thread = getThreadContainer();
  if (!thread) return [];

  return Array.from(thread.querySelectorAll('article[data-testid^="conversation-turn-"]'))
    .map((article) => ({
      article,
      turn: extractTurnNumber(article)
    }))
    .filter((item) => item.turn !== null)
    .sort((a, b) => a.turn - b.turn);
}

function applyThreadLimit() {
  const items = getConversationArticles();
  const visibleCount = currentChats * 2;

  if (items.length === 0) return;

  const maxTurn = items[items.length - 1].turn;
  const minTurnToShow = Math.max(0, maxTurn - visibleCount + 1);

  items.forEach(({ article, turn }) => {
    if (turn >= minTurnToShow) {
      article.style.display = "";
    } else {
      article.style.display = "none";
    }
  });
}

async function loadInitialLimit() {
  const result = await chrome.storage.sync.get({ chatLimit: 2 });
  currentChats = Math.max(1, parseInt(result.chatLimit, 10) || 2);
  applyThreadLimit();
}

function startObserver() {
  if (observerStarted) return;
  observerStarted = true;

  const observer = new MutationObserver(() => {
    applyThreadLimit();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "UPDATE_CHAT_LIMIT") {
    currentChats = Math.max(1, parseInt(message.value, 10) || 2);
    applyThreadLimit();
  }
});

loadInitialLimit();
startObserver();