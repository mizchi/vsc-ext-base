module.exports = {
  activate(context) {
    console.log(
      'Congratulations, your extension "helloworld" is now active!',
    );
    const disposable = vscode.commands.registerCommand(
      "helloworld.helloWorld",
      () => {
        vscode.window.showInformationMessage(
          "Hello World from Awesome VSCode Extension Boilerplate!",
        );
      },
    );
    context.subscriptions.push(disposable);
  }
}