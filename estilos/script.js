document.getElementById('searchButton').addEventListener('click', function() {
    let searchValue = document.getElementById('searchInput').value.trim().toLowerCase(); // Obtener el valor del input de búsqueda
    if (searchValue) { // Verificar si se ingresó un término de búsqueda
        loadSectionsAndFilter(searchValue); // Cargar el contenido de secciones.html y aplicar el filtro de búsqueda
    }
});

function loadSectionsAndFilter(searchValue) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = xhr.responseText;
                document.getElementById('searchResults').innerHTML = response;
                filterResults(searchValue); // Aplicar el filtro de búsqueda después de cargar el contenido de secciones.html
            } else {
                console.error('Hubo un error al cargar las secciones.');
            }
        }
    };
    xhr.open('GET', 'secciones.html', true);
    xhr.send();
}

function filterResults(searchValue) {
    let containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        let id = container.id.toLowerCase();
        if (id.includes(searchValue)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}
