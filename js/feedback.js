//Function for feedback form
//Validation by Gurjeet Singh
function checkData(){
	var nameinput = document.response.fname;
	var firstname = document.response.fname.value;
	var emailinput = document.response.email;
	var f_mail = document.response.email.value;
	var messageinput = document.response.message;
	var f_message = document.response.message.value;
	//Conditional statements to check if the name is valid or not
	if(firstname==""){
		alert("Please enter in your name.");
		nameinput.focus();
		return false;
	} else if(firstname.length <= 1){
		alert("Please Enter valid name.");
		messageinput.focus();
		return false;
	} else if(!firstname.match(/^[A-Za-z]*[A-Za-z]*$/)){
		alert("Numerical numbers and spaces are not allowed in name.");
		nameinput.focus();
		return false;
		//Conditional statements to check if the email is valid or not
	} else if(f_mail ==""){
		alert("Please enter your email.");
		emailinput.focus();
		return false;
	} else if (!f_mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		alert("Please enter vaild email.");
		emailinput.focus();
		return false;
		//Conditional statements to check if the message is entered properly
	} else if(f_message == ""){
		alert("Please enter your message.");
		messageinput.focus();
		return false;
	} else if(f_message.length <= 20){
		alert("Please enter your message with atleast 20 Characters.");
		messageinput.focus();
		return false;
	} else {
		return true;
	}
}

