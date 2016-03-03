//This is the main stuff
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

new Bernie("horizontal", "http://b.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2015/06/3047747-poster-p-2-2016s-presidential-hopefuls-redesigned-as-black-metal-bands.gif"),
new Bernie("horizontal", "http://reverbpress.com/wp-content/uploads/2015/04/bernieblue.jpg"),
new Bernie("horizontal", "http://images.huffingtonpost.com/2016-02-22-1456172662-1597066-BernieSanders.jpg"),
new Bernie("horizontal", "http://s3-origin-images.politico.com/2015/04/30/150430_bernie_sanders_gty_629.jpg"),
new Bernie("horizontal", "http://www.motherjones.com/files/bernie_2.jpg"),
new Bernie("horizontal", "http://assets.forward.com/images/675x/berniesanders-61515-1434466786.jpeg"),
new Bernie("horizontal", "http://i2.cdn.turner.com/cnnnext/dam/assets/150615142612-bernie-sanders-june-12-2015-large-169.jpg"),
new Bernie("horizontal", "http://www.thenation.com/wp-content/uploads/2015/07/bernie_sanders_bw_otu_img.jpg"),
new Bernie("horizontal", "https://i.ytimg.com/vi/kefeEqjZOMU/maxresdefault.jpg"),
new Bernie("horizontal", "http://media.npr.org/assets/img/2015/12/10/ap_896138486979_wide-a39c37e030345bc1e345f6be2bfdcdd4a09fae4a-s900-c85.jpg"),
new Bernie("horizontal", "http://static01.nyt.com/images/2015/07/03/us/04Sanders-web-01/04Sanders-web-01-facebookJumbo.jpg"),
new Bernie("vertical", "http://i.imgur.com/Iv6L3Zi.jpg"),
new Bernie("vertical", "http://www.unionleader.com/storyimage/UL/20150429/NEWS0602/150439941/AR/0/AR-150439941.jpg?q=100"),
new Bernie("vertical", "https://upload.wikimedia.org/wikipedia/commons/1/18/BernieSanders.jpg"),
new Bernie("vertical", "https://s-media-cache-ak0.pinimg.com/236x/41/99/4b/41994bade96c65fe7486088b2a5818e6.jpg"),
new Bernie("vertical", "http://i.kinja-img.com/gawker-media/image/upload/s--tUydYNAu--/oun5vtstytyk4p4hlqkr.jpg"),
new Bernie("vertical", "http://i2.cdn.turner.com/cnnnext/dam/assets/151014182754-bernie-sanders-debate-vertical-large-gallery.jpg"),
new Bernie("vertical", "http://i2.cdn.turner.com/cnnnext/dam/assets/150917090507-bernie-sanders-cnn-new-day-9-17-2015-vertical-large-gallery.jpg"),
new Bernie("vertical", "http://media.gettyimages.com/photos/senator-bernie-sanders-delivers-his-longawaited-speech-on-democratic-picture-id498001492"),
new Bernie("vertical", "http://cache3.asset-cache.net/gc/180942400-sen-bernard-sanders-i-vt-and-his-youngest-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=GkZZ8bf5zL1ZiijUmxa7QXAMkHUR%2FeU8kakCyLZ32ztKmbRytsKwW0rB7Tj9D%2Fe53nhQy4lQ7b%2FfLW0KX34lAA%3D%3D"),
new Bernie("vertical", ""),
new Bernie("square", "http://d1nt4a7y8dwdsx.cloudfront.net/wp-content/uploads/2015/04/Bernie-Sanders-AP77174442780.jpg"),
new Bernie("square", "https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2015/01/30/Editorial-Opinion/Images/Congress_Keystone-0ea87.jpg"),
new Bernie("square", "http://media.washtimes.com.s3.amazonaws.com/media/image/2015/04/29/APTOPIX_DEM_2016_Sanders.JPEG-04b1d.jpg"),
new Bernie("square", "https://kpfa.org/wp-content/uploads/2015/10/Sanders_Circle.png"),
new Bernie("square", "http://assets.nydailynews.com/polopoly_fs/1.2198053.1429909614!/img/httpImage/image.jpg_gen/derivatives/article_970/sanders-image.jpg"),
new Bernie("square", "https://pbs.twimg.com/profile_images/649202007723499524/lBGS6rs6.png"),
new Bernie("square", "http://i.imgur.com/D4eSNpL.jpg"),
new Bernie("square", "http://www.slate.com/content/dam/slate/blogs/moneybox/2015/11/19/bernie_sanders_defines_democratic_socialism_it_s_not_all_that_socialist/497883270-democratic-presidential-candidate-sen-bernie-sanders.jpg.CROP.promo-xlarge2.jpg"),
new Bernie("square", ""),
new Bernie("square", "")

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