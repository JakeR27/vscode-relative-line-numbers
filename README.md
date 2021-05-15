# vscode-real-line-numbers #

vscode-real-line-numbers is a simple Visual Studio Code extension that adds __"real"__ line numbers to Visual Studio Code.

This means it does not show line numbers for blank lines or lines that start with comments. This is extremly useful for projects where sourcecode is trimmed for whitespace and comments. 

I created this extension to aid with writing my own **HACK ASM**, although it has many more uses!

## Install ##

Currently, I don't know how to publish this extension to the VSCode marketplace, so until then you will need to 
- Select `Install Extension` and search for 'Relative line numbers'
- You now need to change the code in the extension
- WINDOWS: Open Windows explorer, type %userprofile% in address bar, then open "*.vscode*"
- LINUX/MAC: Find your _".vscode"_ folder
- Open the folder for extensions
- Open the folder *"extr0py.vscode-relative-line-numbers-x.y.z"*
- Download my repo and copy the contents of my repo into folder above
- Restart VSCode

You should now have 2 sets of line numbers in VSCode. If you want to remove the default line numbers you should open VSCode settings in UI mode. Search for "*line numbers*". Find the correct setting in the list and change the dropdown to **none**

## Commands ##

__Relative Line Numbers: Disable__ (`extension.relativeLineNumbersDisable`) - turn off relative line numbering. This is useful when debugging or in other situations where other gutter icons need to be visible.

__Relative Line Numbers: Enable__ (`extension.relativeLineNumbersEnable`) - turn relative line numbering back on.

Use `Control+Shift+P` to open the command palette and run the commands.

## Current Limitations ##
The max line number is 99, this is due to a small technical limitation that will be fixed soon

## Source ##
This repo is a fork of the following
[Github](https://github.com/extr0py/vscode-relative-line-numbers)

### License
This project licensed under the **MIT License**
