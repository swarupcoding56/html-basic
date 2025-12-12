const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
  document.body.classList.add("dark")
} else {
  document.body.classList.add("light")
}
