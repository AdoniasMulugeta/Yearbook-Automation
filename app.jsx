/**
 *  Written by Adonias Mulugeta
 *  July 2019
 *  mulugeta.adonias@gmail.com
 *  Yearbook Automation Script
 *  app.jsx
 */
//@include "json2.js"
//@include "lib.jsx"
//@include "constants.jsx"
//@include "dialogs.jsx"

var sourceRootPath = null;
var destinationRootPath = null;
var masterPageNumberCounter = null;
var templateDocument = null;
var isTemplateDocumentOpen = false;
var isTemplateCurrentDocument = false;
var casualPictureLayer = null;
var gownPictureLayer = null;
var babyPictureLayer = null;
var textLayers = null;
var doc = null;
const CONSTANTS = null;

(function (){
    init();
    run();
})()

function init(){
    if(app.activeDocument){
        doc = app.activeDocument;
    }
    
    defaultOptions = GetDefaultOptions();
    CONSTANTS = getConstants();

    casualPictureLayer = GetLayerByName(doc, "CASUAL");
    gownPictureLayer = GetLayerByName(doc, "GOWN");
    babyPictureLayer = GetLayerByName(doc, "BABY");
    textLayers = GetLayerByName(doc, "FIELDS");
}

function run(){
    // sourceRootPath = Folder.selectDialog("Select Source Folder");
    sourceRootPath = "D:\\Y\\Yearbook-Photoes\\Spring\\A"
    destinationRootPath = "D:\\Y\\Yearbook-Photoes\\Spring\\output"
    // destinationRootPath = Folder.selectDialog("Select Destination Folder");
    var sourceFolders = GetFolders(sourceRootPath);
    for(var i=0 ; i < sourceFolders.length ; i++){
        if(defaultOptions.hasCasual){
           var casualPicturePath = GetCasualPicture(sourceFolders[i]);
           LoadImage(casualPicturePath);
        }
        if(defaultOptions.hasGown){
            var gownPicturePath = GetGownPicture(sourceFolders[i]);
            LoadImage(gownPicturePath);
         }
         if(defaultOptions.hasBaby){
            var babyPicturePath = GetBabyPicture(sourceFolders[i]);
            LoadImage(babyPicturePath);
         }
         if(defaultOptions.hasLastword){
            var lastwordPath = GetLastwordFile(sourceFolders[i]);
            LoadJSON(lastwordPath);
         }

        SetLayerText(GetLayerByName(textLayers, "NAME"), "Adonias Mulugeta");
        SaveAsPSD(destinationRootPath);
        pageNumberCounter ++;
        
    }
}


