/*
    deals.js
    Applies to deal_history.html.
    Loads deal information into the html.
*/

let placeholder = "Etiam eu hendrerit est. Donec tellus tortor, bibendum vel pretium eget, suscipit eu elit. Donec ut libero et ipsum tristique facilisis. Morbi fermentum urna nec enim tincidunt rutrum. In tincidunt egestas lectus a porta. Pellentesque finibus aliquam nulla bog tenidem.";

// Deal object type
class Deal {
    constructor(name, year, img, desc=placeholder) {
        this.name = name;
        this.year = year;
        this.img = img;
        this.desc = desc;
    }
}

// Deal data
let Deals = [
    new Deal("Accumold", 2022, "accumold.png"),
    new Deal("Casey's General Store", 2023, "caseys.png"),
    new Deal("Time Magazine", 2021, "time.svg.png"),
    new Deal("IBM", 2020, "ibm.svg.png"),
    new Deal("Saks Fifth Avenue", 2015, "saks-fifth-avenue.png"),
    new Deal("Eurofins", 2010, "eurofins.svg.png"),
    new Deal("Siegwerk", 2009, "siegwerk.svg.png"),
    new Deal("Summit Equity Group", 2004, "seg.png"),
    new Deal("Davis Equipment", 2004, "davis.jpg"),
    new Deal("Lomont Molding", 2003, "lomont.jpg"),
    new Deal("Parallel AG", 2002, "parallel.png.webp"),
    new Deal("Mid American Energy", 2000, "midamerican.png"),
    new Deal("Color Converting", 1999, ""),
    new Deal("Vision Bank", 1996, "visionbank.png"),
    new Deal("Equity Dynamics", 1993, "equity-dynamics.png.webp"),
    new Deal("Medicap", 1992, "medicap.png"),
    new Deal("Hammer Pharmacy", 1989, ""),
    new Deal("Hammer Medical Supply", 1983, "hms.png"),
    new Deal("Kemin Industries", 1984, "kemin.png"),
    new Deal("Meredith Corporation", 1987, "meredith.png"),
];

function getDealElement(year){
    if(year >= 2020){
        return $(".deals-20");
    } else if (year >= 2010){
        return $(".deals-10");
    } else if (year >= 2000){
        return $(".deals-00");
    } else if (year >= 1990){
        return $(".deals-90");
    } else if (year >= 1980){
        return $(".deals-80");
    }
}

function sortDealsByYear(){
    Deals.sort((a, b) => b.year - a.year);
}

// Load data into webpage
$(document).ready(function() {
    // Sort deals by year
    sortDealsByYear();

    // Add deals to webpage
    for(let i = 0; i < Deals.length; i ++){
        let dealOuter = document.createElement("div");
        let dealInner = document.createElement("div");
        let dealFront = document.createElement("div");
        let dealBack = document.createElement("div");
        let dealLogo = document.createElement("div");
        let dealLogoImg = document.createElement("img");
        let title = document.createElement("h3");
        let year = document.createElement("h5");
        $(dealOuter).addClass("deal");
        $(dealInner).addClass("deal-inner");
        $(dealFront).addClass("deal-front");
        $(dealBack).addClass("deal-back");
        $(dealLogo).addClass("deal-img");
        $(dealLogoImg).attr("src", "../images/deal-logos/" + Deals[i].img);
        title.textContent = Deals[i].name;
        year.textContent = Deals[i].year;
        $(dealLogo).append(dealLogoImg);
        $(dealFront).append(dealLogo);
        $(dealFront).append(title);
        $(dealFront).append(year);
        $(dealBack).append(dealLogo.cloneNode(true));

        let backTitle = document.createElement("h2");
        backTitle.textContent = Deals[i].name;
        $(dealBack).append(backTitle);
        let description = document.createElement("p");
        description.textContent = Deals[i].desc;
        $(dealBack).append(description);

        $(dealInner).append(dealFront);
        $(dealInner).append(dealBack);
        $(dealOuter).append(dealInner);


        $(getDealElement(Deals[i].year)).append(dealOuter);
    }

    /*
        <div class = "deal">
            <div class = "deal-logo">
                <img>
            </div>
            <h3>
            <h5>
        </div>

        goes to

    <div class="deal">
                <div class="deal-inner">
                    <div class="deal-front">
                        <div class = "deal-img">
                            <img src = "../images/deal-logos/caseys.png">
                        </div>
                        <h3>Casey's General Store</h3>
                        <h5>2022</h5>
                    </div>
                    <div class="deal-back">
                        <div class = "deal-img">
                            <img src = "../images/deal-logos/caseys.png">
                        </div>
                        <h2>Casey's General Store</h2> 
                        <p>Etiam eu hendrerit est. Donec tellus tortor, bibendum vel pretium eget, suscipit eu elit. Donec ut libero et ipsum tristique facilisis. Morbi fermentum urna nec. In tincidunt egestas lectus a porta. Pellentesque finibus aliquam nulla.</p>
                    </div>
                </div>
            </div>
    */
});