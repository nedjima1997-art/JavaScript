const titre= document.getElementsByClassName("title")
console.log(titre, "la récupération de tous les élements qui contiennent les éléments de Title")

const demo= document.getElementById("demo")
console.log(demo,"la récupération de tous les élements dont l'id est demo")

const tag=document.getElementsByTagName("h2")
console.log( tag, "la récupération des elements dont le tag est h2")

document.getElementById("demo").style.color="red"

// demo.innerHTML="salut"  
// demo.innerHTML="<h1> Mon titre</h1>"
// demo.innerText="hello"

function Salut() {
    console.log("Bonjour")
    if (demo.innerHTML==="Libre pour tout le monde") {
        demo.innerHTML="Bonjour tout le monde"        
    }
    else{
        demo.innerHTML="Libre pour tout le monde"
    }    
}
demo.onclick=Salut

const booklist=document.querySelectorAll("#liste-livres li .name")
console.log(booklist, "my book liste")

const myselector= document.querySelector("#liste-livres li:nth-child(2) .name")
console.log(myselector, "my selector")