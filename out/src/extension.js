'use strict';
var vscode = require('vscode');
var path = require("path");
var MAX_ICONS = 999;
function activate(context) {
    let extconsole = vscode.window.createOutputChannel("Line Nums");
    var decorations = createDecorations();
    var isExtensionEnabled = true;
    vscode.commands.registerCommand("extension.relativeLineNumbersEnable", function () {
        isExtensionEnabled = true;
        setRelativeLineDecorations();
    });
    vscode.commands.registerCommand("extension.relativeLineNumbersDisable", function () {
        isExtensionEnabled = false;
        clearRelativeLineDecorations();
    });
    vscode.window.onDidChangeTextEditorSelection(function (e) {
        if (!isExtensionEnabled)
            return;
        setRelativeLineDecorations();
    });
    function setRelativeLineDecorations() {
        var editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        var selection = editor.selection;
        
        var line = editor.selection.active.line;
        var totalLines = editor.document.lineCount;
        var totalLinesAnnotated = 0;
        for (var l = 0; l < totalLines || totalLinesAnnotated < MAX_ICONS; l++) {
            var rangesForDecoration = [];
            var text = editor.document.lineAt(l).text;
            extconsole.appendLine(l);
            extconsole.appendLine(text);
            if (text.startsWith("//") || text.trim() === "" || text.startsWith("(")) {
                
                continue;
            }
            rangesForDecoration.push(new vscode.Range(l, 0, l, 0));
            editor.setDecorations(decorations[totalLinesAnnotated], rangesForDecoration);
            totalLinesAnnotated++;
        }
    }
    function clearRelativeLineDecorations() {
        var editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        decorations.forEach(function (d) {
            editor.setDecorations(d, []);
        });
    }
}
exports.activate = activate;
function createDecorations() {
    var ret = [];
    for (var i = 0; i < MAX_ICONS; i++) {
        ret.push(vscode.window.createTextEditorDecorationType({
            gutterIconPath: path.join(__dirname, "..", "..", "images", i.toString() + ".png"),
            gutterIconSize: "cover",
        }));
    }
    return ret;
}
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map