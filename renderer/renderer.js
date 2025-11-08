// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const summaryText = document.getElementById('summaryText');
const linkList = document.getElementById('linkList');
const themeToggle = document.getElementById('themeToggle');
const aiToggle = document.getElementById('aiToggle');
const aiPanel = document.getElementById('aiAssistant');
const sendChat = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatBox = document.getElementById('chatBox');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// AI Panel Toggle
aiToggle.addEventListener('click', () => {
  aiPanel.classList.toggle('open');
});

// Search Functionality
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (!query) return;

  summaryText.textContent = `Analyzing "${query}"...`;
  linkList.innerHTML = '<div class="empty-state">Searching for relevant results...</div>';
  
  // Simulate search results (replace with actual API calls)
  setTimeout(() => {
    summaryText.textContent = `Here's what I found about "${query}"...`;
    linkList.innerHTML = `
      <div class="search-result">
        <h3>Result 1 for ${query}</h3>
        <p>Description of the first result...</p>
      </div>
      <div class="search-result">
        <h3>Result 2 for ${query}</h3>
        <p>Description of the second result...</p>
      </div>
    `;
  }, 1500);
});

// Chat Functionality
sendChat.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message
  chatBox.innerHTML += `
    <div class="chat-message user">
      <p>${message}</p>
    </div>
  `;
  
  chatInput.value = '';

  // Simulate AI response (replace with actual AI integration)
  setTimeout(() => {
    chatBox.innerHTML += `
      <div class="chat-message ai">
        <p>I can help you with that! Let me analyze the results...</p>
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
});
