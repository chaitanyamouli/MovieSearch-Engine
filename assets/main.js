


var movieNameElement = document.getElementById("movie-name");

var searchBtn = document.getElementById("search-btn");
let movieContainer = document.getElementById("container");

var movieStatusElement = document.getElementById("movie-status")

var loadingElement = document.getElementById("loading");
var description=document.getElementById("discript")

searchBtn.addEventListener( "click" , function(){
  movieContainer.innerHTML="";
  movieStatusElement.innerText="";
  description.innerText="";
  loadingElement.style.display = "block";
    let movieName = movieNameElement.value;
    
   

    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
          loadingElement.style.display = "none";
          movieStatusElement.innerText="";
          
        
          
           let result = JSON.parse(this.responseText);
           if(result.Response =="True"){
           console.log(result);
           result.Search.map( (item,i) => {
            movieContainer.innerHTML += `
                    <div class="movie-cards">
            <img
             class="movie-thumbnail"
              src = ${item.Poster}
               />
              <p><b>Title : </b> ${item.Title}</p>
              <p><b>Realse Year : </b>${item.Year}</p>
              <p><b>Type : </b>${item.Type}</p>
            </div>
                        `
           })
          }else if(result.Response=="False"){
               movieStatusElement.innerText=" 404 Movie Not Found, Please Try Again..! ";
               
          }
        }
    }
    xhttp.open("GET", `https://www.omdbapi.com/?apikey=45f0782a&s=${movieName}`, true);

    xhttp.send();

})
