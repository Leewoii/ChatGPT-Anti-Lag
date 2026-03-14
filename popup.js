const limitInput = document.getElementById("limitInput");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

const DEFAULT_LIMIT = 5;
const MIN_LIMIT = 1;

async function loadLimit() {
  const result = await chrome.storage.sync.get({ chatLimit: DEFAULT_LIMIT });
  limitInput.value = result.chatLimit;
}

async function saveLimit(value) {
  const safeValue = Math.max(MIN_LIMIT, parseInt(value, 10) || DEFAULT_LIMIT);
  limitInput.value = safeValue;

  await chrome.storage.sync.set({ chatLimit: safeValue });

  const tabs = await chrome.tabs.query({ url: "https://chatgpt.com/*" });
  for (const tab of tabs) {
    if (!tab.id) continue;
    chrome.tabs.sendMessage(tab.id, {
      type: "UPDATE_CHAT_LIMIT",
      value: safeValue
    });
  }
}

increaseBtn.addEventListener("click", async () => {
  const current = parseInt(limitInput.value, 10) || DEFAULT_LIMIT;
  await saveLimit(current + 1);
});

decreaseBtn.addEventListener("click", async () => {
  const current = parseInt(limitInput.value, 10) || DEFAULT_LIMIT;
  await saveLimit(Math.max(MIN_LIMIT, current - 1));
});

limitInput.addEventListener("change", async () => {
  await saveLimit(limitInput.value);
});

loadLimit();