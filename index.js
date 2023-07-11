  const newsDetails = document.getElementById(`news details`)
  
  fetch(` https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb1faecdb871438096228c3a4e5d5ec5`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
             data.forEach((articles) => {
                const images = document.createElement(`img`)
                images.src = articles.urlToImage
                newsDetails.appendChild(images)

            });
        })




