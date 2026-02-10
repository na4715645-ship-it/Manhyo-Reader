const PASSWORD = "D3r5t0n3";
const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const extensionsDiv = document.getElementById("extensions");
const readerFrame = document.getElementById("reader-frame");

// List of extension links
const extensions = [
  {name: "MangaFire.to", url: "https://mangafire.to"},
  {name: "ManhwaTop.com", url: "https://manhwatop.com"},
  {name: "Webtoons.com", url: "https://webtoons.com"},
  {name: "MangaDex.org", url: "https://mangadex.org"},
  {name: "ComicExtra", url: "https://www.comicextra.com"}
];

// Check password
loginBtn.addEventListener("click", () => {
  if (passwordInput.value === PASSWORD) {
    loginScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
    renderExtensions();
  } else {
    alert("Wrong password!");
  }
});

// Create buttons for each extension
function renderExtensions() {
  extensionsDiv.innerHTML = "";
  extensions.forEach(ext => {
    const btn = document.createElement("button");
    btn.className = "extension-btn";
    btn.textContent = ext.name;
    btn.onclick = () => openExtension(ext.url);
    extensionsDiv.appendChild(btn);
  });
}

// Try to open in iframe; if blocked, open new tab
function openExtension(url) {
  readerFrame.src = url;
  readerFrame.classList.remove("hidden");

  // Try a quick check for embed — if blank, open new tab
  setTimeout(() => {
    if (!readerFrame.contentWindow.document.body.innerHTML.trim()) {
      window.open(url, "_blank"); // fallback
      readerFrame.classList.add("hidden");
      readerFrame.src = "";
    }
  }, 1000);
}
