var $ = function (id) {
	return document.getElementById(id);
}

var joinList = function () {
	var emailAddress = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true; 

	if (emailAddress == "") {
	// Checks for content in email text input boxes before submission
	// Verifies email addresses provided match before submission
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = ""; }

	if (emailAddress2 == "") {
		$("email_address2_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }

	if (emailAddress !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "Email addresses must match.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }


	if ($("first_name").value == "") {
	// Checks there is data in the name fields
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = ""; }


	if (isValid) {
	// Submits form if all fields are valid
		$("subscribe_form").submit(); } 
}

window.onload = function () {
	$("submit_form").onclick = joinList; 
}