// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript cargado');
  
    // Validación de formulario - Los alumnos pueden completar la función
    const form = document.querySelector('.contacto-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Lógica de validación aquí
      alert('Formulario enviado correctamente');
    });
  });
  