window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById('loader-container').style.display = 'none';
        const content = document.getElementById('content');
        content.style.display = 'block';
        content.style.opacity = '1'; // Assurez-vous que le contenu est visible
    }, 3000);
});