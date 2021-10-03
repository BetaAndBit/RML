document.write("<style>"+
	"@keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg) scale(0.8);-o-transform: rotateY(0deg) scale(0.8);-ms-transform: rotateY(0deg) scale(0.8);-moz-transform: rotateY(0deg) scale(0.8);transform: rotateY(0deg) scale(0.8);}to {-webkit-transform: rotateY(-180deg) scale(0.8);-o-transform: rotateY(-180deg) scale(0.8);-ms-transform: rotateY(-180deg) scale(0.8);-moz-transform: rotateY(-180deg) scale(0.8);transform: rotateY(-180deg) scale(0.8);}}"+
	"@-webkit-keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg) scale(0.8);-o-transform: rotateY(0deg) scale(0.8);-ms-transform: rotateY(0deg) scale(0.8);-moz-transform: rotateY(0deg) scale(0.8);transform: rotateY(0deg) scale(0.8);}to {-webkit-transform: rotateY(-180deg) scale(0.8);-o-transform: rotateY(-180deg) scale(0.8);-ms-transform: rotateY(-180deg) scale(0.8);-moz-transform: rotateY(-180deg) scale(0.8);transform: rotateY(-180deg) scale(0.8);}}"+
	".loadingRun{-webkit-animation : loadingAnimate 1.2s infinite;animation : loadingAnimate 1.2s infinite;}" + 
	".loader,.loader:after {border-radius: 50%;width: 60px;height: 60px;}" +
".loader {margin: 60px auto;font-size: 10px;position: relative;text-indent: -9999em;border-top: 1.1em solid rgba(255, 255, 255, 0.2);border-right: 1.1em solid rgba(255, 255, 255, 0.2);border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);" + 
  "border-left: 1.1em solid #ffffff;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation: load8 1.1s infinite linear;animation: load8 1.1s infinite linear;}" +
 "@-webkit-keyframes load8 {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}" +
 "@keyframes load8 {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}" +
"</style>");

var videoImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABYCAYAAAAUeMJLAAAABHNCSVQICAgIfAhkiAAABRBJREFUeF7tnb2rHUUYxp8H/wBjo6Wd2ARvesFYCTbJBRtBMCqmsAhGEPEDTNBCBSGQQrQxkYhCiqhNRBAjtkJu8APBSgu1EExEwaj4ynPdve7ds4dzdmZ2Z+fu+8LlwLkz884+v/l4z+zsDrHEzOwQgA0AB6vPfcvS+vdJFbgKYAvAJX2SfL+rdLa/NDPBerOClbRGXliQAoL4EEl97tgucGb2PIATQcV7pqEVOEHyZO1kB5yZCZjAuU1XgeMkT6l62+Cq4fFyR33PAjhTjbUae90GVsDMFEtoujoC4MEOdwc0bNbgBE2Ja7sG4DBJTZBumRQwMwWG7wG4sVEFBSwHaGaHAVxo1e1uh5aJVsttBe+T1tebAtee286SVDd1m4gCZqbpqjlsnhQ4DYd3NerovW0iwOpqdPS6TwXuFwDNH9c3kfRAZELwqoBFnGq7KnDWrCPJhR/lXdfQzpfiOnP5zuVXmoX6dnAR4uVsrA7OwcW3v9BhI9ZzLr8+VEaSc3CFCujgHFxvBUIbjQcnHpz0bmwLGUJbX6znXH6zBCexYnn+fgosLJSErpz0c+upYxVwcLEKZsrv4DIJH+vWwcUqmCm/g8skfKxbBxerYKb8Di6T8LFu9wQ4M7sBwG3aWUjym1hRSshfPDgzewDAqwBurgT/GcDbAJ4j+VsJEELqWDQ4M7sdwJcA1OPa9h2AoyQ/ChFm6nlKB3cewH0rRH4LwDGS2tS7Z6x0cD8BuGUNGj8CeIykdgHvCSsdnLYNNrdjr4IicI+S1DxYtM0NnGAJmobOd0omN0dwNS8FLQpeFMQUZ3MGJ1i/A3gGwGmSuzYCT53k3MHVfD4D8AjJb6cOrK6fg/uf1B8A9GjuKyT/mTpAB7dI6HMAD5P8YsrwHFw3nb8AvAzgRZLXpwiwdHDtR8JSa/wVgHtJfp+64NjyHNxqBb8GoAfk/1yddLwUDm49rdXrLq6XdJxUpYPru+QVqurTJF8KzTxEPge3nqr3k3x3vaTjpHJwq3X+FcCtU3sOvnRwQ0eVWhI7RPLj1XzHTVE6uCHnuEkvgzm4xY6iO+VPAXhjygvPDm43OG0yepKk7phP2hzcf3iK21g0d3C6C3AawLMkFYgUY3MGp9V/3QXQ3YDibI7gtNr/QnXfTXcBirS5gZt0iN+nBc0FnHZ2PQHg3JRD/DmB+xDAPSsuWCH+43thL2XzOkvvcV2vIa6vr7gQfzY9ThdqZq9rf2Tjov8G8BoA3YopKsSfFbgK3n4Ad4ojgA9I/tBHhBLTFj1Ulih4qjo7uFRKjlyOgxtZ8FTuHFwqJUcux8GNLHgqdw4ulZIjl+PgRhY8lTsHl0rJkctxcCMLnspdMnDtglJUMNcrdnP5lWahvv1l2hHi5WysDs7Bxbe/0GEj1nMuvz5URpJzcIUK6OAcXG8FQhuNBycenPRubAsZQltfrOdcfmODk/ajS364bWxLSJy/43Dba36cdGKRhyhu2XHSfoD7EGonLHPZAe5dexX9EPeEwscU1dHbVNzm9pnfZrYF4I6GA817myQvxTj1vHEKVNAuANjXKOkKyY0a3AaAyx1uzgDQnxILptvAClSBiDrRkeqv7VFvPdraBlf1uvZcN3AVvfgABY6TPLX9M6KZ2cwcXoCaI2XZgbYArup5GjY1PDbnvJHq5m46FLiiIVPDY/N/u3pcq/cp2hTEg9Vnn9fGO4FwBfT6DkFSYLi17OyEfwGiWm1shbv/BgAAAABJRU5ErkJggg==";
var parseBool = function(value,defaultValue){

	if(value === true || value === false) return value;
	if(value == undefined || value == null) return false;
	defaultValue = !!defaultValue;

	if(typeof(value) == "number") return (value != 0);
	if(typeof(value) != "string") return false;

	if(value == "") return false;

	var trueArr=['true','yes','show','enable'],
	falseArr=['false','no','hide','disable'],
	value = value.toLowerCase();

	if(trueArr.indexOf(value) < 0 && falseArr.indexOf(value) < 0){
		return defaultValue;
	}else{
		return trueArr.indexOf(value)>=0;
	}
};

window.waitForLoading = true;
var LoadingJS = function(){
	this.initConfig();

	this.initHtml();
	this.initCss();

	this.startLoading();
	this.onResize();

	var self = this;
	window.onresize =function(){
		self.onResize();
	};

	window.setTimeout(function(){window.waitForLoading = false;},250);
}

LoadingJS.prototype = {

	initConfig : function(){
		try{
		  this.loadingCaption = bookConfig.loadingCaption ? bookConfig.loadingCaption : document.title;
		  this.loadingCaptionFontSize = !isNaN(bookConfig.loadingCaptionFontSize) ? parseInt(bookConfig.loadingCaptionFontSize) : 28;
		  this.loadingCaptionFontSize = Math.min(100, this.loadingCaptionFontSize);
		  this.loadingCaptionFontSize = Math.max(0, this.loadingCaptionFontSize);
		  this.loadingCaptionColor = bookConfig.loadingCaptionColor ? bookConfig.loadingCaptionColor : "#DDDDDD";
		  this.loadingBackground = bookConfig.loadingBackground ? bookConfig.loadingBackground : "#1F2232";
		  this.loadingPicture = bookConfig.loadingPicture ? bookConfig.loadingPicture : "";
		//   this.loadingPictureWidth = !isNaN(bookConfig.loadingPictureWidth) ? parseInt(bookConfig.loadingPictureWidth) : 80;
		  this.loadingPictureHeight = !isNaN(bookConfig.loadingPictureHeight) ? parseInt(bookConfig.loadingPictureHeight) : 150;
		  this.loadingDisplayTime = !isNaN(bookConfig.loadingDisplayTime) ? parseInt(bookConfig.loadingDisplayTime) : 0;
		  this.loadingSpacing = !isNaN(bookConfig.loadingSpacing) ? parseInt(bookConfig.loadingSpacing) : 20;
		  this.showLoadingGif = (bookConfig.showLoadingGif != undefined) ? parseBool(bookConfig.showLoadingGif, true) : true;
		  this.loadingVideo = bookConfig.loadingVideo ? bookConfig.loadingVideo : "";
		  if(this.loadingVideo) this.showLoadingGif = false;
		}catch(err){
		  this.loadingCaption = document.title;
		  this.loadingCaptionFontSize = 28;
		  this.loadingCaptionColor = "#DDDDDD";
		  this.loadingBackground = "#1F2232";
		  this.loadingPicture = "";
		  this.showLoadingGif = true;
		//   this.loadingPictureWidth = 80;
		  this.loadingPictureHeight = 150;
		  this.loadingDisplayTime = 0;
		  this.loadingSpacing = 20;
		  this.loadingVideo = "";
		}
  },

	initHtml : function(){
		this.stop = false;

		this.instance = document.createElement("div");
		this.title = document.createElement("p");
		this.title.innerHTML = this.loadingCaption;
		this.copyright = document.createElement("p");
		this.copyright.setAttribute("style", "position:absolute;bottom:5%;font-size:1.1rem;width:100%;text-align:center;");
		if(window.userInfo && window.userInfo.copyright) this.copyright.innerHTML = window.userInfo.copyright;

		this.bg = document.createElement("div");
		this.bg.setAttribute("style", "transform:scale(1);");

		if(this.showLoadingGif)
			this.initAnimationHtml();

		if(this.loadingVideo) {
			this.initVideo();
		}

		if(this.loadingPicture) {
			this.image = document.createElement("img");
			this.image.src = this.loadingPicture;
			this.instance.appendChild(this.image);
		}
		this.instance.appendChild(this.title);
		this.instance.appendChild(this.copyright);
		this.bg.appendChild(this.instance);
		document.body.appendChild(this.bg);
	},

	initVideo: function(){
		this.videoImage = document.createElement("img");
		this.videoImage.src = videoImage;
		this.videoImage.setAttribute("style", "position: absolute; top: 0px; right: 0px;left:0;bottom:0;margin:auto; z-index: 4;");
		this.videoImage.addEventListener("click", function(){
			this.video.style.display = "block";
			this.instance.style.display = "none";
			this.video.play();
		}.bind(this));

		this.videoLoadImage = document.createElement("div");
		this.videoLoadImage.setAttribute("style", "position: absolute; top: auto; right: 0px;left:0;bottom:50%;margin:auto; z-index: 4;");
		this.videoLoadImage.setAttribute("class", "loader");

		this.video = document.createElement("video");
		this.video.src = this.loadingVideo;
		// this.video.setAttribute("webkit-playsinline", "true");
		// this.video.setAttribute("x5-playsinline", "true");
		// this.video.setAttribute("playsinline", "");
		this.video.setAttribute("preload", "auto");
		// this.video.setAttribute("controls", "controls");
		// this.video.setAttribute("muted", "");
		// this.video.setAttribute("x-webkit-airplay", "allow");
		this.video.setAttribute("style", "width: 100%; height: 100%; display:none;object-fit: fill; position: absolute; top: 0px; right: 0px; z-index: 3;");
		this.bg.appendChild(this.video);
		this.instance.appendChild(this.videoImage);
		this.instance.appendChild(this.videoLoadImage);
		this.video.load();
	},

	showVideo: function(){
		// $(this.instance).fadeOut(500, function(){
			
		// }.bind(this));
		// $(this.videoImage).fadeIn(500, function(){
			this.videoImage.style.display = "block";
			this.videoLoadImage.style.display = "none";
		// });
	},

	loadingSvg: function(){
		// this.loadImageUrl = "<svg t=\"1525916222299\" class=\"icon\" style=\"\" viewBox=\"130 0 800 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2478\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"49\" height=\"56\"><defs><style type=\"text/css\"></style></defs><path d=\"M835.55027 48.761905C876.805122 48.761905 910.222223 81.441158 910.222223 121.753604L910.222223 902.095C910.222223 902.095 910.222223 942.409011 876.805 975.238095L113.777778 975.238095 113.777778 24.380952 88.888889 48.761905 835.55027 48.761905ZM64 0 64 24.380952 64 1024L960 1024C835.55027 1024 904.277615 1024 960 969.325498L960 54.49204C960 54.49204 904.277615 0 835.55027 0L88.888889 0 64 0Z\" p-id=\"2479\"></path><path d=\"M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z\" p-id=\"2481\"></path><path d=\"M775.164361 365.714285C788.910114 365.714285 800.05325 354.798562 800.05325 341.333333 800.05325 327.868105 788.910114 316.952382 775.164361 316.952382L263.111111 316.952382C249.365357 316.952382 238.222222 327.868105 238.222222 341.333333 238.222222 354.798562 249.365357 365.714285 263.111111 365.714285L775.164361 365.714285Z\" p-id=\"2482\"></path><path d=\"M775.164361 536.380951C788.910114 536.380951 800.05325 525.465229 800.05325 512 800.05325 498.534771 788.910114 487.619049 775.164361 487.619049L263.111111 487.619049C249.365357 487.619049 238.222222 498.534771 238.222222 512 238.222222 525.465229 249.365357 536.380951 263.111111 536.380951L775.164361 536.380951Z\" p-id=\"2483\"></path></svg>";

		var loadImageUrl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
		loadImageUrl.setAttribute("t", "1525916222299");
		loadImageUrl.setAttribute("class", "icon");
		loadImageUrl.setAttribute("style", "");
		loadImageUrl.setAttribute("viewBox", "130 0 800 1024");
		loadImageUrl.setAttribute("version", "1.1");
		loadImageUrl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		loadImageUrl.setAttribute("p-id", "2478");
		loadImageUrl.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
		loadImageUrl.setAttribute("width", "49");
		loadImageUrl.setAttribute("height", "56");

		var defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
		var style = document.createElementNS("http://www.w3.org/2000/svg", 'style');
		style.setAttribute("type", "text/css");
		var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path1.setAttribute("d", "M835.55027 48.761905C876.805122 48.761905 910.222223 81.441158 910.222223 121.753604L910.222223 902.095C910.222223 902.095 910.222223 942.409011 876.805 975.238095L113.777778 975.238095 113.777778 24.380952 88.888889 48.761905 835.55027 48.761905ZM64 0 64 24.380952 64 1024L960 1024C835.55027 1024 904.277615 1024 960 969.325498L960 54.49204C960 54.49204 904.277615 0 835.55027 0L88.888889 0 64 0Z");
		path1.setAttribute("p-id", "2479");

		var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path2.setAttribute("d", "M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z");
		path2.setAttribute("p-id", "2481");

		var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path3.setAttribute("d", "M775.164361 365.714285C788.910114 365.714285 800.05325 354.798562 800.05325 341.333333 800.05325 327.868105 788.910114 316.952382 775.164361 316.952382L263.111111 316.952382C249.365357 316.952382 238.222222 327.868105 238.222222 341.333333 238.222222 354.798562 249.365357 365.714285 263.111111 365.714285L775.164361 365.714285Z");
		path3.setAttribute("p-id", "2482");

		var path4 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path4.setAttribute("d", "M775.164361 536.380951C788.910114 536.380951 800.05325 525.465229 800.05325 512 800.05325 498.534771 788.910114 487.619049 775.164361 487.619049L263.111111 487.619049C249.365357 487.619049 238.222222 498.534771 238.222222 512 238.222222 525.465229 249.365357 536.380951 263.111111 536.380951L775.164361 536.380951Z");
		path4.setAttribute("p-id", "2483");

		defs.appendChild(style);
		loadImageUrl.appendChild(defs);
		loadImageUrl.appendChild(path1);
		loadImageUrl.appendChild(path2);
		loadImageUrl.appendChild(path3);
		loadImageUrl.appendChild(path4);

		return loadImageUrl;
	},

	initAnimationHtml : function(){
		if(!document.createElementNS) return;

		this.loadBox = document.createElement("div");
		var img1 = this.loadingSvg();
		var img2 = this.loadingSvg();
		this.img3 = this.loadingSvg();
		this.img3.setAttribute("class", "loadingRun");

		this.img3.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"z-index : -1;" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill :"  + this.loadingCaptionColor + ";"
		));

		img2.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"-webkit-transform:rotateY(180deg) scale(0.8);" +
			"-o-transform:rotateY(180deg) scale(0.8);" +
			"-ms-transform:rotateY(180deg) scale(0.8);" +
			"-moz-transform:rotateY(180deg) scale(0.8);" +
			"transform:rotateY(180deg) scale(0.8);" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill : " + this.loadingCaptionColor + ";"
		));

		img1.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"-webkit-transform:rotateY(0) scale(0.8);" +
			"-o-transform:rotateY(0) scale(0.8);" +
			"-ms-transform:rotateY(0) scale(0.8);" +
			"-moz-transform:rotateY(0) scale(0.8);" +
			"transform:rotateY(0) scale(0.8);" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill : " + this.loadingCaptionColor + ";"
		));

		this.loadBox.appendChild(img1);
		this.loadBox.appendChild(img2);
		this.loadBox.appendChild(this.img3);
		this.instance.appendChild(this.loadBox);
	},

	startLoading : function(){
		
	},

	destroy : function(){

		// video1.removeEventListener('ended',this);
                            
        //                     $('.shade').hide();
        //                     $("#videoID").hide();
        //                     $(".flipbook").show();
        //                     // $('.flipbook-viewport').show();
        //                     $('.flipbook-viewport').fadeIn(3000);
        //                     $('#musicinfo').show();
		if(global.isIE8()||global.isIE9()){
			$(this.bg).animate({"opacity":"0"},0.6,function(){
				$("body>style").html("");
				$(this.bg).remove();
				$("body").css({"background-color" : ""});
			}.bind(this));
		}else{
			animateOnce($(this.bg) , {"opacity":"0"} , 0.6 ,function(){
				$(this.img3).attr("class", "");
				$("body>style").html("");
				$(this.bg).remove();
				$(this.image).attr("src", "");
				$("body").css({"background-color" : ""});
			}.bind(this));
		}

	},

	initCss : function(){
		document.getElementsByTagName("html")[0].setAttribute("style",(
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;"
		));

		document.body.setAttribute("style", (
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;" +
			"position : fixed;" +
			"background-color :" + this.loadingBackground + ";"
		));

		this.bg.setAttribute("style", (
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;" +
			"position : fixed;" +
			"background-color:"  + this.loadingBackground + ";"
		));

		this.instance.setAttribute("style", (
			"width : 100%;" +
			"height : 100%;" +
			"opacity : 1;" +
			"color :" +  this.loadingCaptionColor + ";" +
			"text-align : center;" +
			"vertical-align : middle;" +
			"font-family : Tahoma;" +
		  "position : relative;"

		));

		var titleTran = "translate(-50%, " + this.loadingSpacing/2 + "px)";
		var loadingBoxTran = "translate(-50% , -" + (this.loadingSpacing/2 + 45) + "px)";
		var videoImageTran = "translate(-50% , -" + (this.loadingSpacing/2 + 60) + "px)";
		// var videoLoadImageTran = "translate(-50% , -" + (this.loadingSpacing/2 + 60) + "px)";
		var imageTran = "translate(-50% , 0)";
		var imageTop = "5%";
		var imageDisplay = "block";

		var loadingPictureHeight = Math.min(window.innerHeight * 0.35, this.loadingPictureHeight);
		if(this.showLoadingGif || this.loadingVideo){
			if(window.innerHeight <= 300) imageDisplay = "none";
		} else {
			imageTop = "50%";
			imageTran = "translate(-50% , -" + (this.loadingSpacing/2 + loadingPictureHeight) + "px)";
		}

		if(this.image) this.image.setAttribute("style", (
			"display : " + imageDisplay + ";" +
			"position : absolute;" +
			"top : " + imageTop + ";" +
			"left : 50%;" +
			"-webkit-transform :"  + imageTran + ";" +
		  "-moz-transform :"  + imageTran + ";" +
		  "-ms-transform :" + imageTran + ";" +
		  "-o-transform :" + imageTran + ";" +
			"transform :"  +imageTran + ";" +
			// "width : " + this.loadingPictureWidth + "px;" +
			"height : " + this.loadingPictureHeight + "px;" +
			"max-width : 90%;" +
			"max-height : 35%;"
		));

		this.title.setAttribute("style", (
			"font-family:Arial,Helvetica,sans serif;" +
		  "font-size : " + this.loadingCaptionFontSize + "px;" +
		  "position : absolute;" +
		  "top : 50%;" +
		  "left : 50%;" +
		  "-webkit-transform :"  + titleTran + ";" +
		  "-moz-transform :"  + titleTran + ";" +
		  "-ms-transform :" + titleTran + ";" +
		  "-o-transform :" + titleTran + ";" +
			"transform :"  +titleTran + ";" +
		  "margin : 0;" +
		  "padding : 0;" +
		  "width:90%;"
		));

		if(this.videoImage) this.videoImage.setAttribute("style", (
			"position:relative;" +
			"cursor:pointer;" +
			"display:none;" +
			"z-index:4;" +
			"perspective:200px;" +
			"-webkit-transform-style:preserve-3d;" +
			"-o-transform-style:preserve-3d;" +
			"-ms-transform-style:preserve-3d;" +
			"-moz-transform-style:preserve-3d;" +
			"transform-style:preserve-3d;" +
			"position : absolute;" +
			"width : auto;" +
			"height : 60px;" +
			"left : 50%;" +
			"top : 50%;" +
			"-webkit-transform : " +videoImageTran + ";" +
		  "-moz-transform : " +videoImageTran + ";" +
		  "-ms-transform : " +videoImageTran + ";" +
		  "-o-transform : " +videoImageTran + ";" +
			"transform : " + videoImageTran + ";" +
		  "padding : 0;"
		));

		if(this.videoLoadImage) 
			this.videoLoadImage.style["margin-bottom"] = this.loadingSpacing/2 + "px";

		if(this.loadBox) this.loadBox.setAttribute("style", (
			"position:relative;" +
			"perspective:200px;" +
			"-webkit-transform-style:preserve-3d;" +
			"-o-transform-style:preserve-3d;" +
			"-ms-transform-style:preserve-3d;" +
			"-moz-transform-style:preserve-3d;" +
			"transform-style:preserve-3d;" +
			"position : absolute;" +
			"width : 39.2px;" +
			"height : 44.8px;" +
			"left : 50%;" +
			"top : 50%;" +
			"-webkit-transform : " +loadingBoxTran + ";" +
		  "-moz-transform : " +loadingBoxTran + ";" +
		  "-ms-transform : " +loadingBoxTran + ";" +
		  "-o-transform : " +loadingBoxTran + ";" +
			"transform : " + loadingBoxTran + ";" +
		  "padding : 0;"
		));
	},

	onResize : function(){}

}

var jsLoadingBar = new LoadingJS();