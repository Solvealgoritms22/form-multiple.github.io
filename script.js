// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    cargarDatosJson();
});

// Función para cargar datos desde un archivo JSON
function cargarDatosJson() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Cargar datos personales
        document.getElementById('nombre').value = data.datosPersonales.nombre;
        document.getElementById('apellido').value = data.datosPersonales.apellido;
        // Aquí deberías continuar cargando los otros campos...

        // Cargar datos de familiares, condiciones de salud, etc.
        // Nota: Esto dependerá de cómo estén estructurados tus formularios y tu JSON
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}

// Función para guardar datos del formulario
function guardarDatosFormulario() {
    var datosFormulario = {
        "datosPersonales": {
            "nombre": document.getElementById('nombre').value,
            "apellido": document.getElementById('apellido').value
            // Continúa con los demás campos...
        },
        // Continúa con las otras secciones del formulario...
    };

    // Aquí puedes enviar datosFormulario a un servidor o hacer lo que necesites con él
    console.log(datosFormulario);
}

// Puedes llamar a guardarDatosFormulario cuando se envíe el formulario, por ejemplo:
// document.getElementById('miFormulario').addEventListener('submit', guardarDatosFormulario);
