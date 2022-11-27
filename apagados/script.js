window.addEventListener("click", loggin);

var div = document.getElementById("divperfil");
var fotoDoPerfil = document.getElementById("iconeperfil");
var formulario = document.createElement("input");

function loggin(div, fotoDoPerfil, formulario) {
    formulario.setAttribute("type", "email");
    formulario.setAttribute("id", "iddoemail");
    div.replaceChild(fotoDoPerfil, formulario);
    document.ol = div;
}
