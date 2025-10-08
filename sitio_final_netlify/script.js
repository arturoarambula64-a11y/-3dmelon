const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form?.addEventListener('submit', e => {
  e.preventDefault();
  statusEl.textContent = '¡Gracias! Tu mensaje fue enviado (simulado).';
  statusEl.style.color = 'green';
  form.reset();
});
