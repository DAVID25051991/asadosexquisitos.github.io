var titulo = document.getElementById("titulo");
var tituloarray = titulo.textContent.split('');
titulo.textContent = '';
for (var i = 0; i < tituloarray.length; i++) {
    titulo.innerHTML += '<span style="transform:rotate(' + ((i + 28) * 10) + 'deg)">' + tituloarray[i] + '</span>';
}
