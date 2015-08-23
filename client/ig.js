Template.home.events({
	'click .login': function(){
		Meteor.loginWithInstagram(function (err, res) {
		    if (err !== undefined){
		      console.log('success ' + res)
		    } else {
		      console.log('login failed ' + err);
        }
  	});

	},

	'click .logout': function(){
		Meteor.logout();
	}
});

var getNewPhotos = function () {

	var currentUser = Meteor.users.findOne({_id: Meteor.userId()});
	var accessToken = currentUser.services.instagram.accessToken;
	console.log(accessToken)
	$.getJSON('https://api.instagram.com/v1/tags/' + currentUser.services.instagram.username + '/media/recent?access_token=' + accessToken + '', function(data){
	for(var i = 0; i < data.data.length; i++){
		$(".photos").append("<img src='" + data.data[i].images.standard_resolution.url + "'>")
	};
	})
};

$(document).ready(function(){
	getNewPhotos();
})
