<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<title>Formulaire</title>
		<link rel="stylesheet" type="text/css" href="./my_style.css" />
	</head>

<body>

	<h1>FORMULAIRE</h1>

	<form method="post">

		<div class="container">
			<label for="gender">Sexe</label>
			<div class="field">
				<input type="radio" name="gender" value="man" id="man" />
				<label for="man">Homme</label>
				<input type="radio" name="gender" value="woman" id="woman" />
				<label for="woman">Femme</label>
			</div>
			<span id="miss_gender"></span>
		</div>

		<div class="container">
			<label for=civility>Civilité</label>
			<div class="field">
				<select name="civility" id="civility">
					<option value="mister" id="mister">M.</option>
					<option value="madam" id="madam">Mme.</option>
					<option value="miss" id="miss">Mlle.</option>
				</select>
			</div>
		</div>

		<div class="container">
			<label for="last_name">Nom</label>
			<div class="field">
				<input type="text" name="last_name" id="last_name" placeholder="Entrez votre nom"/>
			</div>
			<span id="miss_last_name"></span>
		</div>

		<div class="container">
			<label for="first_name">Prénom</label>
			<div class="field">
				<input type="text" name="first_name" id="first_name" placeholder="Entrez votre prénom" />
			</div>
			<span id="miss_first_name"></span>
		</div>

		<div class="container">
			<label for="mail">Adresse e-mail</label>
			<div class="field">
				<input type="email" name="mail" id="mail" placeholder="Entrez votre e-mail" />
			</div>
			<span id="miss_mail"></span>
		</div>

		<div class="container">
			<label for="phone">Téléphone</label>
			<div class="field">
				<input type="tel" name="phone" id="phone" maxlength="10" placeholder="Entrez votre téléphone" />
			</div>
			<span id="miss_phone"></span>
		</div>

		<div class="container">
			<label for="website">Site internet</label>
			<div class="field">
				<input type="url" name="website" id="website" placeholder="Entrez votre site internet" />
			</div>
			<span id="miss_website"></span>
		</div>

		<div class="container">
			<label for="birthdate">Date de naissance</label>
			<div class="field">
				<input type="date" name="birthdate" id="birthdate" placeholder="JJ/MM/AAAA" />
			</div>
			<span id="miss_birthdate"></span>
		</div>

		<div class="container">
			<fieldset>
			<legend>Hobbies</legend>
			<div class="field">
				<input type="checkbox" name="video_games" id="video_games" />
				<label for="video_games">Jeux vidéo</label>
				<input type="checkbox" name="cinema" id="cinema" />
				<label for="cinema">Cinéma</label>
				<input type="checkbox" name="reading" id="reading" />
				<label for="reading">Lecture</label>
				<input type="checkbox" name="sport" id="sport" />
				<label for="sport">Sport</label>
				<input type="checkbox" name="computer" id="computer" />
				<label for="computer">Informatique</label>
			</div>
			</fieldset>
		</div>

		<input type="hidden" name="token" id="token" value="my_first_website" />

		<button type="submit" id="submit">Validation</button>

	</form>

	<script src="my_script.js"></script>

</body>
</html>
