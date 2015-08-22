Meteor.loginWithInstagram(function (err, res) {
        if (err !== undefined)
          console.log('success ' + res)
        else
          console.log('login failed ' + err)
    });
