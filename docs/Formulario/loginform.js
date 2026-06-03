document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formularioLogin");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const usuario = document.getElementById("nombre").value.trim();
            const password = document.getElementById("password").value.trim();

            const usuarioCorrecto = "admin";
            const passwordCorrecta = "1234";

            if (usuario === usuarioCorrecto && password === passwordCorrecta) {
                alert("Login exitoso 🎉 Bienvenido " + usuario);
                window.location.href = "../index.html";
            } else {
                alert("Usuario o contraseña incorrectos ❌");
            }
        }); 
    }
});