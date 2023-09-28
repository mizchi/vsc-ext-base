const vscode = acquireVsCodeApi();
console.log('click in panel');
const button = document.createElement('button');
button.textContent = 'Create';
document.body.appendChild(button);
button.addEventListener('click', (e) => {
  vscode.postMessage({
    command: 'click',
    text: Math.random().toString()
  });
});
