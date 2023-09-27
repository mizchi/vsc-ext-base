import vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "awesome-vscode-extension-boilerplate" is now active!',
  );
  const disposable = vscode.commands.registerCommand(
    "awesome-vscode-extension-boilerplate.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from Awesome VSCode Extension Boilerplate!",
      );
    },
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
