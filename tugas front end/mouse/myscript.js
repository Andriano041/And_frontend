btn.addEventListener('mouseup', (e) => {
    let msg = document.querySelector('#message');
    switch (e.button) {
        case 0:
            msg.textContent = 'Left mouse button clicked.';
            break;
        case 1:
            msg.textContent = 'Middle mouse button clicked.';
            break;
        case 2:
            msg.textContent = 'Right mouse button clicked.';
            break;
        default:
            msg.textContent = `Unknown mouse button code: ${e.button}`;
    }
});
