// scripts.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // 显示用户消息
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // 模拟ChatGPT回复
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = '这是一个模拟的回复';
    chatBox.appendChild(botMessage);

    // 清空输入框
    document.getElementById('user-input').value = '';

    // 滚动到底部
    chatBox.scrollTop = chatBox.scrollHeight;
}
