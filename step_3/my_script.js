var formValid;
var man, woman, lastName, firstName, mail, phone, website, birthdate;
var missGender, missLastName, missFirstName, missMail, missPhone, missWebsite, missBirthdate;
var checkG, checkLastN, checkFirstN, checkM, checkP, checkW, checkB;

formValid = document.getElementById('submit');

man = document.getElementById('man');
woman = document.getElementById('woman');
lastName = document.getElementById('last_name');
firstName = document.getElementById('first_name');
mail = document.getElementById('mail');
phone = document.getElementById('phone');
website = document.getElementById('website');
birthdate = document.getElementById('birthdate');

missGender = document.getElementById('miss_gender');
missLastName = document.getElementById('miss_last_name');
missFirstName = document.getElementById('miss_first_name');
missMail = document.getElementById('miss_mail');
missPhone = document.getElementById('miss_phone');
missWebsite = document.getElementById('miss_website');
missBirthdate = document.getElementById('miss_birthdate');

formValid.addEventListener('click', validation);

function validation(event) {
	checkG = checkGender();
	checkLastN = checkLastName();
	checkFirstN = checkFirstName();
	checkM = checkMail();
	checkP = checkPhone();
	checkW = checkWebsite();
	checkB = checkBirthdate();
 	event.preventDefault();
	if (checkG && checkLastN && checkFirstN && checkM && checkP && checkW && checkB) {
	document.location.href="my_form.html";
	}
}

function checkGender() {
	if (!man.checked && !woman.checked) {
		missGender.textContent = 'Genre non indiqué';
		missGender.style.color = 'red';
		return false;
	 } else {
		missGender.textContent = '';
		return true;
	}
}

function checkLastName() {
	if (lastName.value == '') {
		lastName.style.backgroundColor = 'red';
		missLastName.textContent = 'Nom manquant';
		missLastName.style.color = 'red';
		return false;
	} else if (lastName.value.length < 2) {
		lastName.style.backgroundColor = 'orange';
		missLastName.textContent = 'Nom incomplet : veuillez préciser au moins deux lettres';
		missLastName.style.color = 'orange';
		return false
	} else {
		lastName.style.backgroundColor = 'white';
		missLastName.textContent = '';
		return true;
	}
}

function checkFirstName() {
	if (firstName.value == '') {
		firstName.style.backgroundColor = 'red';
		missFirstName.textContent = 'Prénom manquant';
		missFirstName.style.color = 'red';
		return false;
	} else if (firstName.value.length < 2) {
		firstName.style.backgroundColor = 'orange';
		missFirstName.textContent = 'Prénom incomplet : veuillez préciser au moins deux lettres';
		missFirstName.style.color = 'orange';
		return false;
	} else {
		firstName.style.backgroundColor = 'white';
		missFirstName.textContent = '';
		return true;
	}
}

function checkMail() {
	if (mail.value == '') {
		mail.style.backgroundColor = 'red';
		missMail.textContent = 'E-mail manquant';
		missMail.style.color = 'red';
		return false;
	} else {
		mail.style.backgroundColor = 'white';
		missMail.textContent = '';
		return true;
	}
}

function checkPhone() {
	if (phone.value == '') {
		phone.style.backgroundColor = 'red';
		missPhone.textContent = 'Téléphone manquant';
		missPhone.style.color = 'red';
		return false;
	} else {
		phone.style.backgroundColor = 'white';
		missPhone.textContent = '';
		return true;
	}
}

function checkWebsite() {
	if (website.value == '') {
		website.style.backgroundColor = 'red';
		missWebsite.textContent = 'Site internet manquant';
		missWebsite.style.color = 'red';
		return false;
	} else {
		website.style.backgroundColor = 'white';
		missWebsite.textContent = '';
		return true;
	}
}

function checkBirthdate() {
	if (birthdate.value == '') {
		birthdate.style.backgroundColor = 'red';
		missBirthdate.textContent = 'Date de naissance manquante';
		missBirthdate.style.color = 'red';
		return false;
	} else {
		birthdate.style.backgroundColor = 'white';
		missBirthdate.textContent = '';
		return true;
	}
}
