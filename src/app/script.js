const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (username === '' || password === '') {
		alert('Por favor ingrese su nombre de usuario y contraseña.');
	} else {
		// Aquí puedes agregar la lógica para enviar el formulario a tu servidor
		// o realizar alguna acción en el cliente si los datos son válidos
		console.log('Nombre de usuario:', username);
		console.log('Contraseña:', password);
	}
});