let product = [
    {
        img :  "/images/6d92321b.jfif",
        name :  "High-Back Bench",
        price: "$9.99"
    },
    {
        img :  "/images/22e0d8df.jfif",
        name :  "Utopia Sofa",
        price: "$39.95"
    },
    {
        img :  "/images/078958cd.jfif",
        name :  "Entertainment Center",
        price: "$29.98"
    },
];
function item(chair)
{
    let displaymenu = chair.map(function(item)
    {
    return `<div class="block1">
    <div class="imageblock">
                <div class="buttons"><i class="fa fa-search" id="b1"></i><i class="fa fa-shopping-cart" id="b2"></i></div>
                <img src=${item.img} class="sofa" alt="images">
            </div>
    <div class="detail1">
        <div class="name">${item.name}</div>
        <div class="price">${item.price}</div>
    </div>
    </div>`
    });
    displaymenu = displaymenu.join(" ");
    document.querySelector(".mainblock").innerHTML=displaymenu;
}
window.addEventListener("DOMContentLoaded",item(product));
for(let i=0;i<3;i++)
{
    document.querySelectorAll(".imageblock")[i].addEventListener("mouseover",function(event)
    {
        document.querySelectorAll(".buttons")[i].style.zIndex="2";
        document.querySelectorAll(".sofa")[i].style.zIndex ="-1";
    })
}
for(let i=0;i<3;i++)
{
    document.querySelectorAll(".imageblock")[i].addEventListener("mouseout",function(event)
    {
        document.querySelectorAll(".buttons")[i].style.zIndex ="-1";
        document.querySelectorAll(".sofa")[i].style.zIndex ="2";
    })
}

