function generateColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
  const colorCode = document.getElementById('color-code');
  colorCode.textContent = randomColor;
}

document.getElementById('color-code').addEventListener('click', function () {
  navigator.clipboard.writeText(this.textContent);
  alert('Color code copied to clipboard!');
});
