Template.home.events({
	'click .login': function(){
		Meteor.loginWithInstagram(function (err, res) {
		    if (err !== undefined)
		      console.log('success ' + res)
		    else
		      console.log('login failed ' + err)
		});
	},

	'click .logout': function(){
		Meteor.logout();
	}
});


