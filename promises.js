//Awesome tutorial for this
//https://developers.google.com/web/fundamentals/getting-started/primers/promises

//A note here:
//This only wait for the DOM not images
(function() {

	//THIS IS ALL ABOUT ASYNC SUCCESS OR FAILURE!

	//The procedure below is kinda messy because not only are you 
	//worrying about the object, but you're also wondering
	//about the WHEN of the object. Is it loaded yet?
	//No the let's to this...yes? Then let's do that...
	var img = document.getElementById("gitty");

	function loaded(){
		console.log("image loaded")
	}

	if(img.complete){
		console.log("img loaded")
	} else {
		console.log("not loaded yet");
		img.addEventListener("load", loaded);
	}

	img.addEventListener("load", loaded);

	img.addEventListener("error", function(){ console.log("error"); })

	//This is where promises come in...

	//it returns a promise, and the "then()" func gets called
	//this in turn takes in 2 functions as parameters which 
	//get called based on promise fulfillment or rejection!
	//NICE!
	img.ready().then(function(){
		//success
	}, function(){
		//failure
	})

	//or for many async loading objects
	//Same as previous...I would assume that after the arrays area called
	//this "all" func will loop through the array, and if all promises
	//are fulfilled then the success function will get executed
	//otherwide FAILR!!!
	Promise.all([img.ready(), img.ready()], success, failure);

	//Terminology
		//Success - the action relating to the promise was successful
		//Failure - it wasn't :(
		//Pending - loading...loading...
		//Settled - Promise is done, either successful or failed, but not pending anymore


	













})();