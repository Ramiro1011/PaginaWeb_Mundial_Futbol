

let leermas = document.getElementById('leermas');
let ocultarText = document.getElementById('ocultarText');

let leermas2 = document.getElementById('leermas2');
let ocultarText2 = document.getElementById('ocultarText2');

let leermas3 = document.getElementById('leermas3');
let ocultarText3 = document.getElementById('ocultarText3');

let leermas4 = document.getElementById('leermas4');
let ocultarText4 = document.getElementById('ocultarText4');

leermas.addEventListener('click', toggleText);
leermas2.addEventListener('click', toggleText2);
leermas3.addEventListener('click', toggleText3);
leermas4.addEventListener('click', toggleText4);

function toggleText() {
    ocultarText.classList.toggle('mostrarText');

  if(ocultarText.classList.contains('mostrarText')) {
    leermas.innerHTML = 'Leer menos'
  }
  else {
    leermas.innerHTML = 'Leer mas'
  }
}

function toggleText2() {
    ocultarText2.classList.toggle('mostrarText2');

  if(ocultarText2.classList.contains('mostrarText2')) {
    leermas2.innerHTML = 'Leer menos'
  }
  else {
    leermas2.innerHTML = 'Leer mas'
  }
}

function toggleText3() {
    ocultarText3.classList.toggle('mostrarText3');

  if(ocultarText3.classList.contains('mostrarText3')) {
    leermas3.innerHTML = 'Leer menos'
  }
  else {
    leermas3.innerHTML = 'Leer mas'
  }
}

function toggleText4() {
    ocultarText4.classList.toggle('mostrarText4');

  if(ocultarText4.classList.contains('mostrarText4')) {
    leermas4.innerHTML = 'Leer menos'
  }
  else {
    leermas4.innerHTML = 'Leer mas'
  }
}
