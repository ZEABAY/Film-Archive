class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");

        filmList.innerHTML += `

            <div class="col-3">
                <div class="card mb-5 custom-width bg-b " style="width:13rem; height: 33.5rem;">
                    <div class="text-center">
                        <img src="${newFilm.pic}" class=" mt-2 card-img-top " style="width:12rem;">
                    </div>
                    <div class="card-body">
                        <div style="position : absolute; top :300px;">
                            <h5 class="text-lb">
                                ${newFilm.name}
                            </h5>
                        </div>
                        <div style="position : absolute; bottom :70px;">
                            <h6 class="text-b">
                                ${newFilm.director}
                            </h6>
                        </div>
                        <a href="${newFilm.url}" class="bg-lp border-p btn btn-primary text-info" style="position : absolute; bottom :15px;">
                            Filme Git
                        </a>
                    </div>
                </div>
            </div>
          
        `;

    }


    static displayMessages(message, type, i) {
        const popup = document.createElement("h5");
        const infoBody = document.querySelector(".info-body");
        const addTo = document.querySelector("#tag");

        popup.className = `alert alert-${type}`;
        popup.textContent = message;

        if (!i) {
            infoBody.appendChild(popup);
        } else {
            addTo.appendChild(popup);
        }

        setTimeout(function () {
            popup.remove();
        }, 1000);



    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");

        films.forEach(function (film) {

            filmList.innerHTML += `

            <div class="col-3">
                <div class="card mb-5 custom-width bg-b " style="width:13rem; height: 33.5rem;">
                    <div class="text-center">

                        <img src="${film.pic}" class=" mt-2 card-img-top " style="width:12rem;">
                    </div>
                    <div class="card-body">
                        <div style="position : absolute; top :300px;">
                            <h5 class="text-lb">
                                ${film.name}
                            </h5>
                        </div>
                        <div style="position : absolute; bottom :70px;">
                            <h6 class="text-b">
                                ${film.director}
                            </h6>
                        </div>
                        <a href="${film.url}" class="bg-lp border-p btn btn-primary text-info" style="position : absolute; bottom :10px; left:10px;">
                            Filme Git
                        </a>
                    </div>
                </div>
            </div>
          
        `;

        });
    }

    static deleteFilmFromUI(e) {

        e.parentElement.parentElement.parentElement.remove();

    }

    static deleteAllFilmsFromUI() {
        const filmList = document.getElementById("films");

        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }

}