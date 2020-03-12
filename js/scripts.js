/*
 
 Samir Babu Gharti 
 Yam Poudel
 Anukul Sharma 
 */

// check required fields have been set, return true/false depending on these
function checkForm() {
    var d = document.getElementById('mainForm'); // just a shortcut
    var errors = false;
    var errorMsg = "";
// basic check required fields
    if (d.name.value == "") {
        errorMsg += "Please enter your name.\n";
        errors = true;
    }
    // check if one of the radio buttons for site rating is selected
    var g = false;
    for (var i = 0; i < 3; i++) {
        if (d.siterating[i].checked)
            checkedSiteRating = true;
    }
    if (!checkedSiteRating) {
        errorMsg += "Please select a site rating.\n";
        errors = true;
    }
	
    // if errors exist, popup error message
    if (errors)
        alert(errorMsg);
    // return true (submit form) or false (don't submit form) depending on errors
    return !errors;
}

// function for resetting the form (need to change the ticks and things back)
function resetForm() {
    var resetChoice = confirm('Do you want to reset all fields?');
    if (resetChoice) {
        console.log("Resetting form modifications.");
        // note: could do this with an array of required fields
        document.mainForm.fnameTick.src = "images/cross.png";
        document.mainForm.fnameTick.alt = "cross";
		document.mainForm.lnameTick.src = "images/cross.png";
        document.mainForm.lnameTick.alt = "cross";
        document.mainForm.passwordTick.src = 'images/cross.png';
        document.mainForm.passwordTick.alt = 'cross';
		document.mainForm.EmailTick.src = 'images/cross.png';
        document.mainForm.EmailTick.alt = 'cross';
		document.mainForm.PhoneTick.src = 'images/cross.png';
        document.mainForm.PhoneTick.alt = 'cross';
		document.mainForm.addressTick.src = 'images/cross.png';
        document.mainForm.addressTick.alt = 'cross';
		document.mainForm.rateTick.src = 'images/cross.png';
        document.mainForm.rateTick.alt = 'cross';
        document.mainForm.areas.style.background = "#fff";
    }
    return resetChoice;
}


// these style-changing functions are called by the events in the input element (e.g. onFocus)
// you can change any CSS style like this
function changeStyle(element) {
    // element is the HTML element that was passed in as "this" when the function was called
    element.style.color = "#FF0000";
}

// in this example function, there are two parameters,
// the element to change and the color (a string) to change it to
function changeColor(element, color) {
    element.style.color = color;
}

// a more useful CSS changing - set field (e.g. phone number) colour to red if it's too short, green if length is OK
function setColourBasedOnLength(name, minValue) {
    var f = document.getElementById(name); // just a shortcut
    if (f.value.length >= minValue)
        f.style.color = "#0C0";
    else
        f.style.color = "#C00";

    // now just for fun - really, this is a bit stupid :)
    // set the size of the text box to the number of characters in the value
    f.size = f.value.length + 1;
    f.style.width = "auto";
}

// when name is entered, set tick image, say "hi" by writing to the page using innerHTML
// innerHTML can be useful for debugging messages, since it doesn't make a modal window like alert() does.
function fnameEntered(fname) {
    if (fname.value != "") {
        document.mainForm.fnameTick.src = "images/tick.png";
        document.mainForm.fnameTick.alt = "tick";
    }
    else {
        document.mainForm.fnameTick.src = "images/cross.png";
        document.mainForm.fnameTick.alt = "cross";
    }
}
function lnameEntered(lname) {
    if (lname.value != "") {
        document.mainForm.lnameTick.src = "images/tick.png";
        document.mainForm.lnameTick.alt = "tick";
    }
    else {
        document.mainForm.lnameTick.src = "images/cross.png";
        document.mainForm.lnameTick.alt = "cross";
    }
}
function passwordEntered(password)
{
	if (/^[A-Za-z]\w{7,15}$/.test(password.value)) {
		document.mainForm.passwordTick.src = "images/tick.png";
		document.mainForm.passwordTick.src = "tick";
	}
	else {
		document.mainForm.passwordTick.src = "images/cross.png";
		document.mainForm.passwordTick.src = "cross";
	}
}
function passwordEntered(repassword)
{
	if (/^[A-Za-z]\w{7,15}$/.test(repassword.value)) {
		document.mainForm.repasswordTick.src = "images/tick.png";
		document.mainForm.repasswordTick.src = "tick";
	}
	else {
		document.mainForm.repasswordTick.src = "images/cross.png";
		document.mainForm.repasswordTick.src = "cross";
	}
}

function emailEntered(email) 
{
   
    if  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
 	
	 {
        document.mainForm.EmailTick.src = "images/tick.png";
        document.mainForm.EmailTick.alt = "tick";
    }
    else {
        document.mainForm.EmailTick.src = "images/cross.png";
        document.mainForm.EmailTick.alt = "cross";
    }
}
function phoneEntered(phone) 
{
   
    if  (/^\d{10}$/.test(phone.value))
 	
	 {
        document.mainForm.PhoneTick.src = "images/tick.png";
        document.mainForm.PhoneTick.alt = "tick";
    }
    else {
        document.mainForm.PhoneTick.src = "images/cross.png";
        document.mainForm.PhoneTick.alt = "cross";
    }
}
function addressEntered(address) {
    if (address.value != "") {
        document.mainForm.addressTick.src = "images/tick.png";
        document.mainForm.addressTick.alt = "tick";
    }
    else {
        document.mainForm.addressTick.src = "images/cross.png";
        document.mainForm.addressTick.alt = "cross";
    }
}
// this checks if one of the area check boxes is selected or not
// and updates the fieldset's background colour accordingly
function checkArea() {
    var areaBoxes = document.mainForm.areaVisited;
    var checked = false;
    for (var i = 0; i < areaBoxes.length; i++) {
        if (areaBoxes[i].checked)
            checked = true;
    }
    if (checked)
        document.mainForm.areas.style.background = "#0f0";
    else
        document.mainForm.areas.style.background = "#fff";
}

// depending on first checkbox, either clear or set all check boxes
function clearArea() {
    var areaBoxes = document.mainForm.areaVisited;
    var changeTo = true;
    if (areaBoxes[0].checked)
        changeTo = false;
    for (var i = 0; i < areaBoxes.length; i++) {
        areaBoxes[i].checked = changeTo;
    }
    // call checkArea because the check boxes have changed - update the fieldset colour
    checkArea()
}

// set tick image if site rating is selected (no need to check since they can't click to deselect (see later)
function checkSiteRating() {
    document.mainForm.rateTick.src = 'images/tick.png';
    document.mainForm.rateTick.alt = 'tick';
}

// clear all radio buttons for rating, set cross image
function clearRating() {
    var ratingButtons = document.mainForm.siterating;
    for (var i = 0; i < ratingButtons.length; i++) {
        ratingButtons[i].checked = false;
    }
    document.mainForm.rateTick.src = 'images/cross.png';
    document.mainForm.rateTick.alt = 'cross';
}

// count characters in textarea and update limit on page
// if more characters than limit (parameter passed in), set value to the first limit-many characters
function updateCharacters(limit) {
    var textArea = document.mainForm.comments;
    if (textArea.value.length > limit)
        textArea.value = textArea.value.substring(0, limit);
    remaining = limit - textArea.value.length;
    document.getElementById('characters').innerHTML = "(" + remaining + " characters remaining)";
    // debugging example - write content length to the message span at the bottom:
    // document.getElementById('message').innerHTML = textArea.value.length;
}


// XMLHTTPRequest (AJAX)

// simple example, just gets contents of a resource at a given URL
// Note that we can't just get data from a different domain for security reasons
function loadXHR() {
    var xhr;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate  (4 = DONE)
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("XHRoutput").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data.txt", true);
    xhr.send();
}


// An XMLHTTPRequest example that uses the value in the form field

// Attach event handler to state button
document.getElementById("setStateButton").addEventListener("click", loadState);
