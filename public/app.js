const socket = io();

socket.on('updateDocument', (content) => {
    document.getElementById('document').innerText = content;
});

document.getElementById('input').addEventListener('input', (event) => {
    const content = event.target.value;
    socket.emit('updateDocument', content);
});
