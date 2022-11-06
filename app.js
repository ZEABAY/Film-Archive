const openBtn = document.querySelector('.open-btn');
const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');


const customer_Name = document.querySelector('.name');
const customer_Director = document.querySelector('.director');
const customer_Pic = document.querySelector('.pic');
const customer_Url = document.querySelector('.url');


eventListeners();

function eventListeners() {

    openBtn.addEventListener('click', openForm);
    addBtn.addEventListener('click', getFilm);
    cancelBtn.addEventListener('click', closeForm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    customer_Name.value = "";
    customer_Director.value = "";
    customer_Pic.value = "";
    customer_Url.value = "";
}

function getFilm(e) {

    e.preventDefault();

    console.log(customer_Name.value);
    const name = customer_Name.value;
    customer_Name.value = "";

    console.log(customer_Director.value);
    const director = customer_Director.value;
    customer_Director.value = "";

    console.log(customer_Pic.value);
    const pic = customer_Pic.value;
    customer_Pic.value = "";

    console.log(customer_Url.value);
    const url = customer_Url.value;
    customer_Url.value = "";
    console.log("------------------------------------");


    if (name == "" || director == "" || pic == "" || url == "") {
        UI.displayMessages("Tüm Alanları Doldurun ...", "danger", 0);

    } else {
        const newFilm = new Film(name, director, pic, url);
        console.log(newFilm);
        UI.addFilmToUI(newFilm);

        Storage.addFilmToStorage(newFilm);//storage a ekle

        UI.displayMessages("Eklendi", "success", 1)
        document.getElementById("myForm").style.display = "none";
    }




}

function clear() {
    localStorage.removeItem("films");
    location.reload();
}