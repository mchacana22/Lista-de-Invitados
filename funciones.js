document.getElementById('confirmForm').addEventListener('submit', function(e){
    e.preventDefault();
    // Evita que el formulario se envie de forma tradicional (que recarge la pagina)

    // ahora capturamos los valores del formulario usando su id
    const nombre = document.getElementById('nombre').value.trim(); //trim elimina espacios delante y atras
    const respuesta = document.getElementById('respuesta').value;

    // capturamos la referencia del div donde mostraremos html
    const container = document.getElementById('respuestaContainer');

    if (nombre && respuesta) { //verifica que ambas constantes tengan data
        
        // con innerhtml insertamos html en alguna referencia
        container.innerHTML = `
        <div class="alert alert-success" role="alert">
            Gracias ${nombre}, has respondido que ${respuesta}.
        </div>
        `;

        this.reset();
        //limpiamos el formulario
    }
});