// scripts.js

// Inicialización del calendario Flatpickr
flatpickr("#calendar", {
    enableTime: true, // Habilitar selección de hora
    dateFormat: "Y-m-d H:i", // Formato de fecha y hora
    minDate: "today", // No permitir fechas pasadas
    time_24hr: true // Usar formato de 24 horas
  });
  
  // Doctores por especialidad
  const doctoresPorEspecialidad = {
    medicina_general: [
      { nombre: 'Dr. Juan Pérez' },
      { nombre: 'Dra. Ana López' }
    ],
    pediatria: [
      { nombre: 'Dr. Carlos Fernández' },
      { nombre: 'Dra. María González' }
    ],
    dermatologia: [
      { nombre: 'Dr. Pedro García' }
    ],
    cardiologia: [
      { nombre: 'Dr. José Martínez' }
    ],
    neurologia: [
      { nombre: 'Dra. Laura Jiménez' }
    ]
  };
  
  // Referencias a los elementos select
  const especialidadesSelect = document.getElementById('especialidades');
  const doctoresSelect = document.getElementById('doctores');
  
  // Escuchar cambios en el select de especialidades
  especialidadesSelect.addEventListener('change', function () {
    const especialidadSeleccionada = especialidadesSelect.value;
  
    // Limpiar los doctores actuales
    doctoresSelect.innerHTML = '<option value="" disabled selected>Selecciona un doctor</option>';
  
    // Rellenar con los doctores disponibles para la especialidad seleccionada
    if (doctoresPorEspecialidad[especialidadSeleccionada]) {
      doctoresPorEspecialidad[especialidadSeleccionada].forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.nombre;
        option.textContent = doctor.nombre;
        doctoresSelect.appendChild(option);
      });
  
      // Habilitar el select de doctores
      doctoresSelect.disabled = false;
    } else {
      doctoresSelect.disabled = true;
    }
  });
  