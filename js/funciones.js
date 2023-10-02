//Funciones
window.onload = function () {
	var contenedor = document.getElementById('contenedor_loader');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
}

//Tooltip
$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});