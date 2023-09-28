import vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('webview-panel.start', () => {
      openWebviewPanel(context);
    })
  );
}

function openWebviewPanel(context: vscode.ExtensionContext) {
  // Create and show panel
  const panel = vscode.window.createWebviewPanel(
    'catCoding',
    'Cat Coding',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'assets')]
    },
  );
  // And set its HTML content
  // const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'assets', 'main.js');
  const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'assets', 'main.js');
  const jsPath = panel.webview.asWebviewUri(onDiskPath);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cat Coding</title>
</head>
<body>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  <script src="${jsPath}"></script>
</body>
</html>
`;
  panel.webview.html = html;
  panel.webview.onDidReceiveMessage(
    message => {
      console.log(message);
      console.log('receive message', message);

      switch (message.command) {
        case 'click':
          vscode.window.showInformationMessage(message.text);
          // vscode.window.showErrorMessage(message.text);
          return;
      }
    },
    undefined,
    context.subscriptions
  );
}

