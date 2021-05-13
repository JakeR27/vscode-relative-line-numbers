# vscode-real-line-numbers #

vscode-real-line-numbers is a simple Visual Studio Code extension that adds __"real"__ line numbers to Visual Studio Code.

This means it does not show line numbers for blank lines or lines that start with comments. This is extremly useful for projects where sourcecode is trimmed for whitespace and comments. 

I created this extension to aid with writing my own **HACK ASM**, although it has many more uses!

## Install ##

Currently, I don't know how to publish this extension to the VSCode marketplace, so until then you will need to 
- Select `Install Extension` and search for 'Relative line numbers'

## Commands ##

__Relative Line Numbers: Disable__ (`extension.relativeLineNumbersDisable`) - turn off relative line numbering. This is useful when debugging or in other situations where other gutter icons need to be visible.

__Relative Line Numbers: Enable__ (`extension.relativeLineNumbersEnable`) - turn relative line numbering back on.

Use `Control+Shift+P` to open the command palette and run the commands.

## Source ##
This repo is a fork of the following
[Github](https://github.com/extr0py/vscode-relative-line-numbers)

### License
This project licensed under the **MIT License**
