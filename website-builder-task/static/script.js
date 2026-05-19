document.addEventListener('DOMContentLoaded', () => {
    
    const aiLauncherBtn = document.getElementById('aiLauncherBtn');
    const aiChatWindow = document.getElementById('aiChatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatInput = document.getElementById('chatInput');
    const chatMessageLog = document.getElementById('chatMessageLog');

    // Fetch existing historical session logs on page initialization 
    fetch('/api/init')
        .then(res => res.json())
        .then(data => {
            // Populate form input boxes reflecting stored data states
            if(data.fields) {
                Object.keys(data.fields).forEach(key => {
                    const el = document.getElementById(key);
                    if(el) el.value = data.fields[key];
                });
            }
            // Append past conversations sequentially
            if(data.messages) {
                data.messages.forEach(msg => appendBubble(msg.sender, msg.text));
            }
            scrollToBottom();
        });

    // Toggle overlay drawer box view
    aiLauncherBtn.addEventListener('click', () => {
        aiChatWindow.classList.toggle('hidden');
        scrollToBottom();
    });

    closeChatBtn.addEventListener('click', () => {
        aiChatWindow.classList.add('hidden');
    });

    // Send logic action
    function handleSend() {
        const text = chatInput.value.trim();
        if(!text) return;

        appendBubble('user', text);
        chatInput.value = '';
        scrollToBottom();

        // Query the Flask framework pipeline endpoint
        fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        })
        .then(res => res.json())
        .then(data => {
            if(data.reply) {
                appendBubble('ai', data.reply);
            }
            // Reflect structural field updates explicitly inside our web template forms instantly!
            if(data.updated_fields) {
                Object.keys(data.updated_fields).forEach(key => {
                    const inputField = document.getElementById(key);
                    if(inputField) {
                        inputField.value = data.updated_fields[key];
                        // Flash effect to draw founder attention to the automatic update
                        inputField.style.borderColor = '#4cd964';
                        setTimeout(() => inputField.style.borderColor = '', 1500);
                    }
                });
            }
            scrollToBottom();
        })
        .catch(() => {
            appendBubble('ai', 'Error connecting to application server pipeline.');
            scrollToBottom();
        });
    }

    chatSendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleSend(); });

    function appendBubble(sender, text) {
        const bubble = document.createElement('div');
        bubble.classList.add('message-bubble', sender);
        bubble.innerText = text;
        chatMessageLog.appendChild(bubble);
    }

    function scrollToBottom() {
        chatMessageLog.scrollTop = chatMessageLog.scrollHeight;
    }
});