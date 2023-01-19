function alternarDestaque()
{
    var cards = document.getElementsByClassName("card-produto");
    cards = Array.from(cards);

    for(let i = 0; i < cards.length; i++)
    {
        cards[i].classList.toggle('card-produto-destaque');
    }
}



function getProducts()
{
    fetch('http://localhost:3000/produtos').then( (response) => response.json()).then((dados) => {

        var list = document.getElementById("product-list");
        for(let i = 0; i < dados.length; i++){
        
        list.innerHTML = list.innerHTML + ` <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="sport_product card-produto">
           <figure><img width="250px" height="20px" src=${dados[i].urlImagem} alt="img" /></figure>
           <h3><strong class="price_text">${dados[i].preco}</strong></h3>
           <h4>${dados[i].nomeProduto}</h4>
        </div>
     </div>`
        }
    })
}

getProducts();
setInterval(alternarDestaque, 1500);
