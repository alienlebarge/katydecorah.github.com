var apiSmall="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";$.getJSON(apiSmall,function(e){$.each(e.photoset.photo,function(t,n){var r=e.photoset.photo.length-1;if(t===r){$("body").css("background-image","url("+n.url_n+")");$(".title").html("<a href='http://www.flickr.com/photos/91218249@N05/sets/72157633859537779/'><i class='icon-flickr'></i>"+n.title+"</a>")}})});if($(window).width()<500){var apiSmall="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";$.getJSON(apiSmall,function(e){$.each(e.photoset.photo,function(t,n){var r=e.photoset.photo.length-1;t===r&&$("body").css("background-image","url("+n.url_n+")")})})}else if($(window).width()<800){var apiMedium="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_z";$.getJSON(apiMedium,function(e){$.each(e.photoset.photo,function(t,n){var r=e.photoset.photo.length-1;t===r&&$("body").css("background-image","url("+n.url_z+")")})})}else{var apiLarge="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o";$.getJSON(apiLarge,function(e){$("body").append("<div class='helper'></div>");$.each(e.photoset.photo,function(t,n){var r=e.photoset.photo.length-1;if(t===r){$(".helper").css("background-image","url("+n.url_o+")");$(window).load(function(){$("body").css("background-image","url("+n.url_o+")");$(".helper").remove()})}})})};