const greetingElement = document.getElementById('greeting');
const changeNameButton = document.getElementById('changeNameButton');

changeNameButton.addEventListener('click', () => {
  const newName = prompt('¿Cuál es tu nombre?');
  if (newName !== null) { // Check if prompt was cancelled
    greetingElement.textContent = `Hola ${newName}`;
  }
});