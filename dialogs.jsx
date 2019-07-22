/**
 *  Written by Adonias Mulugeta
 *  July 2019
 *  mulugeta.adonias@gmail.com
 *  Yearbook Automation Script
 *  dialogs.jsx
 */

function ShowMultipleMatchingFilesDialog(messageText){
    var window = new Window("dialog", "Multiple Matching Files Found");
    window.preferredSize = [300, 200];
    
    var message = window.add("statictext");
    message.text= messageText; 

    var btnGroup = window.add("group");
    btnGroup.add("button", undefined, "OK");
    btnGroup.add("button", undefined, "Cancel");

    window.show(); 
}

function SourceDirectoryDialog(message) {
    var path = Folder.selectDialog(message);
    return path;
}

function DestinationDirectoryDialog(message) {
    var path = Folder.selectDialog(message);
    return path;
}

function LastwordSelectionDialog(message){
    var filePath = File.openDialog(message, "*.json")
    return filePath;
}
