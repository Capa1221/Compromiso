document.getElementById('confirmBtn').addEventListener('click', function() {
    var name = prompt("¡Claro que sí! Pero, ¿cuál es tu nombre?");
    if (name) {
        alert("¡Hola " + name + "! ¡Eres mi novia oficial ahora!");
    }
});
