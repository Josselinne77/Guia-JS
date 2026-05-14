let usuario = prompt("Usuario:");
let contraseña = prompt("Contraseña:");

if (usuario == "admin" && contraseña == "1234") {
    console.log("Bienvenido");
} else {
    console.log("Credenciales incorrectas");
}