//create widget
var toggleBtnWidget = Alloy.createWidget ("buttonToggle", null, {
	"defaultState" : "on",
	"id" : "toggleBtnWidget"
});

// get the main view from the widget
$.mainWindow.add(toggleBtnWidget.getView());

//open the window 
$.mainWindow.open();