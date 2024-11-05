// script.js
const trashCan = document.getElementById('trashCan');
const trash = document.getElementById('trash');

// Set up drag and drop events
trash.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text', e.target.id);
});

trashCan.addEventListener('dragover', (e) => {
  e.preventDefault();
});

trashCan.addEventListener('drop', (e) => {
  e.preventDefault();
  const trashId = e.dataTransfer.getData('text');
  const draggedTrash = document.getElementById(trashId);
  
  // Make the trash "jump" out of the can
  draggedTrash.style.position = 'absolute';
  draggedTrash.style.left = `${Math.random() * window.innerWidth}px`;
  draggedTrash.style.top = `${Math.random() * window.innerHeight}px`;
  
  // Optional: Play a sound or show a message
  alert("The trash won't stay in the can!");
});
