function loadTabContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('tabContent').innerHTML = data;
    });
}

















