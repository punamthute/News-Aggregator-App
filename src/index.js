// <--Main Part-->

function fetchlatestnews(){
  fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=557b993c41734ec19746057e5f21d17c")

  .then(responce =>{
    if(!responce.ok){
      throw Error ('ERROR');
    }
           return responce.json();
    
    })

.then(articles => {
 console.log(articles.articles);
 const html = articles.articles
 .map(article => {
    return `
   
        <ul id="news-article"> 
             <li class="article"> 
                <img class="article-img" src=${article.urlToImage} alt="article-img"></img>
                    <h2 class="article.title">${article.title}</h2>
                        <p class="article-description">${article.description}</p>
                           <span class="article-author">${article.author}</span>
                               <a class="article-link" href=${article.url}>See more</a>
  
              </li>

          </ul>  `;
         
     
  })
    
    .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
 
  })
  .catch(error =>{
    console.log(error);
  });
 
}


// <--Enable Togle Button-->
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// <---loader---> //

var preloader = document.getElementById('loading');
 function myLoader(){
   preloader.style.display ='none';
 }
 
fetchlatestnews ();


      
    
