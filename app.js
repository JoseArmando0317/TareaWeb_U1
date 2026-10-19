// Interacción 1: Menú adaptable accesible
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    // Alterna la clase para mostrar u ocultar
    menu.classList.toggle('activo');
    
    // Mejora de accesibilidad: actualiza el estado aria-expanded
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
});

// Interacción 2: Validación accesible en formulario
const form = document.getElementById('reserva-form');

form.addEventListener('submit', (evento) => {
    const nombre = document.getElementById('nombre').value;
    
    // Si el nombre solo tiene espacios en blanco, detiene el envío
    if (nombre.trim() === '') {
        evento.preventDefault(); 
        alert('Por favor, ingresa tu nombre de forma válida.');
        // Retorna el foco al input con error (requerido para accesibilidad)
        document.getElementById('nombre').focus(); 
    } else {
        evento.preventDefault(); 
        alert('¡Solicitud enviada correctamente! Nos pondremos en contacto pronto.');
        form.reset();
    }
});