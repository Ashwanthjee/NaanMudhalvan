const form = document.querySelector('form');
const caption = document.querySelector('#caption');
form.addEventListener('submit', async (e) => {
e.preventDefault();
const formData = new FormData(form);
const imageFile = formData.get('image');
const response = await fetch('https://api.example.com/visual-recognition', {
method: 'POST',
body: formData
});
const data = await response.json();
caption.textContent = data.caption;
});

