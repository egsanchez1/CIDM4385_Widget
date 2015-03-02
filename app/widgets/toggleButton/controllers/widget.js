var args = arguments[0] || {};

//set  default setting or set to on
args.defaultState = args.defaultState || "on";

//set the initial state of the button
if(args.defaultState === "on")
{
	//remember, this is a toggle, so we change the label
	//to reflect the state you'd like to switch to
	toggleButtonByIdClicked("off");
}else if(args.defaultState === "off")
{
	toggleButtonByIdClicked("on");	
}

//event-handler for when the user clicks the button
$.container.addEventListener("click", function(_event)
	{
		//hide the clicked item, show the unclicked one
		toggleButtonByIdClicked(_event.source.id);		
	}
); //missed semi- via babb comment

//_buttonId name of the id which is the UI control when clicked
function toggleButtonByIdClicked(_buttonId)
{
	if(_buttonId === "on")
	{
		//remember the $ accesses controls in the view
		$.on.hide();
		$.off.show();
	} else if(_buttonId === "off")
	{
		$.on.show();
		$.off.hide();
	}
}

