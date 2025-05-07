window.addEventListener("load", function () {
            setTimeout(function () {
                document.getElementById('loader-container').style.display = 'none';
                const content = document.getElementById('content');
                content.style.display = 'block';
            }, 3000);
        });