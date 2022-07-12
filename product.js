let product = [
    {
        img :  "/images/6d92321b.jfif",
        name :  "High-Back Bench",
        price: "9.99"
    },
    {
        img :  "/images/img5.jfif",
        name :  "Albany Table",
        price: "79.99"
    },
    {
        img :  "/images/img9.jfif",
        name :  "Accent Chair",
        price: "25.99"
    },
    {
        img :  "/images/img1.jfif",
        name :  "Wooden Table",
        price: "45.99"
    },
    {
        img :  "/images/img7.jfif",
        name :  "Dining Table",
        price: "6.99"
    },
    {
        img :  "/images/img4.jfif",
        name :  "Sofa Set",
        price: "69.99"
    },
    {
        img :  "/images/img2.jfif",
        name :  "Modern Bookshelf",
        price: "21.99"
    },
    {
        img :  "/images/img6.jfif",
        name :  "Emperor Bed",
        price: "21.99"
    },
    {
        img :  "/images/22e0d8df.jfif",
        name :  "Utopia Sofa",
        price: "39.95"
    },
    {
        img :  "/images/078958cd.jfif",
        name :  "Entertainment Center",
        price: "29.98"
    },
    {
        img :  "/images/img8.jfif",
        name :  "Albany Sectional",
        price: "10.99"
    },
    {
        img :  "/images/img3.jfif",
        name :  "Leather Sofa",
        price: "9.99"
    },
];
function item(chair)
{
    let displaymenu = chair.map(function(item)
    {
    return `<div class="block1">
    <div class="imageblock">
                <div class="buttons"><i class="fa fa-search" id="b1"></i><i class="fa fa-shopping-cart b2" ></i></div>
                <img src=${item.img} class="sofa" alt="images">
            </div>
    <div class="detail1">
        <div class="name">${item.name}</div>
        <div class="price">$${item.price}</div>
    </div>
    </div>`
    });
    displaymenu = displaymenu.join(" ");
    document.querySelector(".mainblock").innerHTML=displaymenu;
    for(let i=0;i<product.length;i++)
    {
        document.querySelectorAll(".imageblock")[i].addEventListener("mouseover",function(event)
        {
            document.querySelectorAll(".buttons")[i].style.zIndex="2";
            document.querySelectorAll(".sofa")[i].style.zIndex ="-1";
        })
    }
    for(let i=0;i<product.length;i++)
    {
        document.querySelectorAll(".imageblock")[i].addEventListener("mouseout",function(event)
        {
            document.querySelectorAll(".buttons")[i].style.zIndex ="-1";
            document.querySelectorAll(".sofa")[i].style.zIndex ="2";
        })
    }
    addEvent();
}
window.addEventListener("DOMContentLoaded",item(product));
document.querySelector("#r1").value
var x = document.querySelector("#r1").value;
document.querySelector(".val").innerHTML=x;
document.querySelector("#r1").oninput= function()
{
    document.querySelector(".val").innerHTML=this.value;
}
document.querySelector("#s1").addEventListener("keyup",function(event)
{
    let display=product.filter(function(items)
    {
        if(items.name.substring(0,event.target.value.length).toLowerCase()==event.target.value.toLowerCase())
        return items;
        
   });
// if(display.length!=0)
  item(display);
//   else
//   {
//       document.querySelector(".mainblock").innerHTML="hello";
//   }
});
document.querySelector("#r1").addEventListener("input",function(event)
{
    var values=this.value;
    let display=product.filter(function(items)
    {
        let prices1=parseFloat(items.price.substring(1))
        if(prices1<= values)
        return items;
   });
   item(display);
  
});
document.querySelector(".cart").addEventListener("click",function()
{
    document.querySelector(".blockes").style.right="0";
    document.querySelector(".blockes").style.transition="all 0.3s";
    document.querySelector(".container").style.filter = "brigthness(20%)";
    document.querySelector(".container").style.filter = "opacity(60%)"
});
document.querySelector("#fa1").addEventListener("click",function()
{
    document.querySelector(".blockes").style.right="-100%";
    // document.querySelector(".blockes").style.transition="all 0.3s";
    // document.querySelector(".container").style.filter = "brigthness(0%)";
    document.querySelector(".container").style.filter = "opacity(100%)"
});
function card(val)
{
    return `<img src="${val.img}" alt="images" id="drishyam">
    <div class="detailcontainer">
        <div class="furname">${val.title}</div>
        <div class="kimat">${val.price}</div>
        <div class="remove">remove</div>
    </div>
    <div class="quantitybar">
    <i class="fa fa-chevron-up" aria-hidden="true" id="chevron-up"></i>
    <div class="quantitynumber">1</div>
    <i class="fa fa-chevron-down" aria-hidden="true" id="chevron-down"></i>
    </div>`;
}
function addEvent()
{
  document.querySelectorAll(".b2").forEach(function(item,index)
  {
    item.addEventListener("click",function(event)
    {
        let i,count=0;
        var array = Array.from(document.querySelectorAll(".block1"));
        for(i=0;i<array.length;i++)
        {
            if(array[i].dataset.id==index)
            count++;
        }
        if(count == 0)
        {
        var carts=event.currentTarget.parentElement.parentElement.childNodes[3].getAttribute("src");
        var carts1=event.currentTarget.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML;
        var carts2=event.currentTarget.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].innerHTML;
        var val={
            img:carts,
            price:carts2,
            title:carts1
        };
        console.log(val.img)
        const para = document.createElement("div");
        para.classList.add("listcontainer");
        
        para.innerHTML=card(val);
        document.querySelector(".cartcontainer").appendChild(para);
        add(val.price.substring(1),1);
        para.querySelector(".fa-chevron-up").addEventListener("click",function(event)
        {
            var count = event.currentTarget.parentElement.childNodes[3].innerHTML;
            count++;
            event.currentTarget.parentElement.childNodes[3].innerHTML=count;
            console.log(count);
            add(val.price.substring(1),1);
        })
        para.querySelector(".fa-chevron-down").addEventListener("click",function(event)
        {
            var count = event.currentTarget.parentElement.childNodes[3].innerHTML;
            if(count==1)
            {
                document.querySelector(".cartcontainer").removeChild(para);
            }
            else
            {
                count--;
                event.currentTarget.parentElement.childNodes[3].innerHTML=count;   
            }
            add(val.price.substring(1),0);
        })
    }
    })
  });
}
function add(price,add1)
{
   let current= document.querySelector(".total span").innerHTML;
   if(add1==0)
   {
    current=Number(current)-Number(price);
   }
   else
   current=Number(current)+Number(price);
   document.querySelector(".total span").innerHTML=Number(current).toFixed(2);
}
