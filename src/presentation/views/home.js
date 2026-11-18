export function showHome(
    container,
    presenter
){
    container.innerHTML = `
            <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://blog.jumboprinters.com/wp-content/uploads/2021/09/consejos-imagenes.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5nP2Hjvd4hQsPq9REV1l0rTmJX_3Z4njqwBU1zEcDw&s=10">
            </div>
            <div class="carousel-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Atardecer_en_El_Caracol_-_Foto_de_Jos%C3%A9_Serrano_Vicente.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    `;
}