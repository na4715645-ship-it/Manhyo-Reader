const password = "D3r5t0n3";

document.getElementById('passwordBtn').addEventListener('click', () => {
  const input = document.getElementById('passwordInput').value;
  if(input === password) {
    document.getElementById('passwordScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  } else {
    alert("Incorrect password!");
  }
});

// Open extensions full screen in new window, ESC closes them
function openExtension(url) {
  const w = window.open(url, "_blank", "width=1000,height=800");
  w.focus();
}
