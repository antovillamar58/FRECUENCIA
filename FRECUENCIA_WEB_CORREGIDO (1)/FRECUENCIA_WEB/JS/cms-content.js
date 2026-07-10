// Cargar configuración de la portada

fetch("content/inicio.json")
.then(res => res.json())
.then(data => {

    // Título
    document.getElementById("titulo-inicio").textContent = data.titulo;

    // Subtítulo
    document.getElementById("subtitulo-inicio").textContent = data.subtitulo;

    // Botón
    document.getElementById("boton-inicio").textContent = data.boton;

    document.getElementById("boton-inicio").onclick = () =>{
        location.href=data.enlace_boton;
    }

    // Imagen de fondo
    document.getElementById("portada-principal").style.backgroundImage =
        `url('${data.fondo}')`;

});
