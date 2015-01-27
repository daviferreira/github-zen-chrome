var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/zen', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
        document.getElementById('quote').innerText = xhr.responseText;
    }
};
xhr.send();
