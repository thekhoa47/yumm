function handleSignUp() {
	var email= document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;

	if (email.length < 4) {
		alert ('Please enter a valid email');
		return;
	} 

	if (password.length < 4) {
		alert ('Please enter stronger password');
		return;
	}

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function() {
		//Success
	})
	.catch(function(error){
		alert(error.message);
	})
}

function handleSignIn () {
	var email = document.getElementById('form-email').value;
	var password = document.getElementById('form-password').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then (function(){
		//only if succesfully signed in control flow is here
		window.location.href="https://google.com"
	})
	.catch(
		function(error) {
			alert(error.message);
		}
		)
}

function handleSignOut() {
	firebase.auth().signOut()
	.then(function() {
  		alert('Signed Out');
  		clear();
	}, function(error) {
  		console.error('Sign Out Error', error);
	});
}

function clear() {
	document.getElementById('form-email').value = "";
	document.getElementById('form-password').value="";
}

function handleFBLogin() {
	if(!firebase.auth().currentUser){
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
				.then(function(result){
					var token = result.credential.accessToken;
					var user = result.user;
					alert (user.email);
					window.location.href="https://google.com"
				})
				.catch(
					function (error) {
						alert(error.message);
					}
				)
	}
	else {
		handleSignOut();
		alert("User has already signed in");
	}
}