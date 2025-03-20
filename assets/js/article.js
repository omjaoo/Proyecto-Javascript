let articles = document.querySelector(".layout-articles");
let fechActual = new Date();

console.log(fechActual)

let post = [

    {
        title: "Dacia revoluciona el mercado Europeo",
        date: fechActual,
        body: "El ultimo Dacia Sandero, que ha sacado la marca tiene unas especificaciones mejoradas a nivel del conductor que lo hacen el coche mas atractivo de Europa ahora mismo"
    },

    {
        title: "Volkswaguen revoluciona el mercado Europeo",
        date: fechActual,
        body: "El ultimo Volkswaguen Golf, que ha sacado la marca tiene unas especificaciones mejoradas a nivel del conductor que lo hacen el coche mas atractivo de Europa ahora mismo"
    },

    {
        title: "Renault revoluciona el mercado Europeo",
        date: fechActual,
        body: "El ultimo Renault Clio, que ha sacado la marca tiene unas especificaciones mejoradas a nivel del conductor que lo hacen el coche mas atractivo de Europa ahora mismo"
    },

    {
        title: "Tesla revoluciona el mercado Europeo",
        date: fechActual,
        body: "El ultimo Tesla model Y, que ha sacado la marca tiene unas especificaciones mejoradas a nivel del conductor que lo hacen el coche mas atractivo de Europa ahora mismo"
    },
]


post.forEach(article => {
    articles.innerHTML += 

    `<article class="article-article">
                <h3 class="article-title">${article.title}</h3>
                <span class="article-date">${article.date}</span>
                <p class="article-body">
                    ${article.body}
                </p>
                <a href="#" class="article-btn">Leer más</a>
        </article>`
})