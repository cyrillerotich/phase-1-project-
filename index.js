  const newscontainer = document.getElementById(`news details`)
  

  fetch(` https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb1faecdb871438096228c3a4e5d5ec5`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.articles);
            const object = data.articles
            object.forEach(data=> {
                const newsDetails = document.createElement(`div`)
                newsDetails.id = "news"
                const headline = document.createElement(`p`)
                headline.innerHTML = data.title
                headline.addEventListener(`click`,function(){
                    window.open(data.url,"_blank")
                    // fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb1faecdb871438096228c3a4e5d5ec5/${data.id}`)
                    // .then(function(response){
                    //   return  response.json()
                    // })
                    // .then(function(data){
                    //     console.log(data)

                    // })
                })
                const images = document.createElement(`img`)
                images.src = data.urlToImage 
                images.src = data.urlToImage ? data.urlToImage : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                newsDetails.appendChild(images)
                newsDetails.appendChild(headline)
                newscontainer.appendChild(newsDetails)



            });
        })




