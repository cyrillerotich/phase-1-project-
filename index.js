function fetchData() {
    fetch(` http://localhost:3000/articles`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

document.querySelector(`button`).addEventListener(`click`,fetchData)
