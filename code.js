

function calculate() {
    event.preventDefault();
    var wh = parseFloat(document.getElementById("ww").value);
    var he = parseFloat(document.getElementById("hh").value);
    var ic = parseFloat(document.getElementById("ii").value);
    var result = document.getElementById("result");

    if (wh && he && ic) {
        var totalHeightMeters = (he * 0.3048) + (ic * 0.0254); // Convert feet & inches to meters
        let bmi = wh / (totalHeightMeters * totalHeightMeters); // Correct BMI formula

        if (bmi < 18.6) {
            result.innerHTML = `<h4 style="color:red;">Underweight</h4><span>${bmi.toFixed(2)}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<h4 style="color:blue;">Normal</h4> <span>${bmi.toFixed(2)}</span>`;
        } else {
            result.innerHTML = `<h4 style="color:red;">Overweight</h4> <span>${bmi.toFixed(2)}</span>`;
        }
    } else {
        alert('Enter a valid weight, height, and inches');
    }
}

function find() {
    var m=document.getElementById("mid");
var p=document.getElementById("ii").value;
m.innerHTML='<p>Loading...</p>'
var b=document.getElementById("ii1").value;
    fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=%20${b}%20${p}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8d8e1cfce9msh6cb8cbfef687a5ap1381d2jsn20d9d034c5be",
            "x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var c=data[0].calories ;
            
           var d=data[0].serving_size_g;
            m.innerHTML = `<p id="good"> <h4 style="color:red;">${c}</h4>  serving ${d} grams.</p>`

        });

}  
var k=document.getElementById("ii2").value;
async function fetchAPI() {
    var k=document.getElementById("ii2").value;
    console.log(k,'hiii')
    if(k)
    {
    const baseURL = `https://api.edamam.com/search?q=${k}&app_id=375afcf3&app_key=
  4e86a684782953065557c1d5efa49e2e	&from=0&to=10`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    }
    else
    {
        alert('Enter food item')
    }
 
} 
let recipe = document.getElementById("recipe");
function generateHTML(results) {
    recipe.innerHTML='<p>Loading..</p>'
    let generatedHTML = "";
    results.map((result) => {
        generatedHTML += `
      <div class="item">
    <div id="a">
        <img src="${result.recipe.image}"class="im"style=" border:2px solid #24A19C;width:200px">
    </div>
    <div id="b"style="color:#24A19C; ">
          <h1 class="lead"style="color:#24A19C;" text-align:center ">${result.recipe.label}</h1>
          <a class="view" href="${result.recipe.url
            }"style="color: red;">View Recipe</a>
          <p class="item1">Calories: ${result.recipe.calories.toFixed(2)}</p>       
         
    </div>
    </div>
    `;
    });

    recipe.innerHTML = generatedHTML;
}
var news=document.getElementById("news");
var a=0;
function find1()
{
    document.getElementById("news").style.color = "#097c79";
    if(a<=10)
a=a+1;
news.innerHTML=`you have ${a} glass of water..keep it up`;
if(a==0)
    {
       
        news.innerHTML=`Buck up! your body needs water`
    }
   else if(a>=10)
{
    document.getElementById("news").style.color = "red";

    news.innerHTML=`you did complete the water limit! Excess of it can cause potential health risk`; 
}
else if(a>=8)
{
   

    news.innerHTML=`congo! ${a} glass completed.`; 
}

}
function find2()
{
    document.getElementById("news").style.color = "#097c79";
    if(a==0)
    {
        news.innerHTML=`Buck up! your body needs water`
    }
    else if(a>0)
    {
    a=a-1;
    news.innerHTML=`you have ${a} glass of water.. `;
    }
}



