function validateForm() {
    // Obtiene los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    // Valida el usuario (puedes personalizar esta validación)
    if (username.length < 4) {
        usernameError.innerHTML = "El usuario debe tener al menos 4 caracteres.";
        return false; // Impide el envío del formulario
    } else {
        usernameError.innerHTML = "";
    }

    // Valida la contraseña (puedes personalizar esta validación)
    if (password.length < 8) {
        passwordError.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return false; // Impide el envío del formulario
    } else {
        passwordError.innerHTML = "";
    }

    return true; // Permite el envío del formulario si pasa todas las validaciones
    // Simula la autenticación exitosa (debes reemplazar esto con una autenticación real)

var username = document.querySelector('input[name="roonye"]').value;
var password = document.querySelector('input[name="roonye2468"]').value;

// Define las credenciales correctas
var credencialesCorrectas = {
    usuario: 'roonye',
    contraseña: 'roonye2468'
};

// Validación simple (debe mejorarse en un entorno real)
if (username === credencialesCorrectas.usuario && password === credencialesCorrectas.contraseña) {
    // Redirige a la segunda interfaz (student_panel.html)
    window.location.href = 'student_panel.html';
    return false;
} else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
    return false;
}

}

