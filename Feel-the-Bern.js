function Bernie(ratio, imageurl){
	this.ratio = ratio;
	this.imageurl = imageurl;
}

var getBernie = {
	init: function(myBernie){
		this.myBernie = myBernie;
	},

	horizontal: function(){
		return this.myBernie.filter(function(myBernie){
			return myBernie.ratio === "horizontal";
		});
	},

	vertical: function(){
		return this.myBernie.filter(function(myBernie){
			return myBernie.ratio === "vertical";
		});
	},

	square: function (){
		return this.myBernie.filter(function(myBernie){
			return myBernie.ratio === "square";
		});
	}
};

function Randomize(images){
	return Math.floor(Math.random() * images.length)
}

var myBernie = [

]

function imageRatio(image){
	var proportion = image.height/image.width;

	if(proportion > 1){
		return "vertical";
	} else if (proportion === 1) {
		return "square";
	} else if (proportion < 1) {
		return "horizontal";
	}
}

(function (document){
	getBernie.init(myBernie);
	var images = document.getElementsByTagName('img'), length = images.length

	for (var i = 0; i<length; i++) {
		var ratio = imageRatio(images[i]);
		var number = Randomize(getBernie[ratio]());
		var img = getBernie[ratio]()[number];
		images[i].src = img.imageurl
	}
})(document);