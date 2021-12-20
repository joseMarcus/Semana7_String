


const inputext = document.querySelector("#inputext")
const button = document.querySelector("#btn")

const inputext2 = document.querySelector("#inputext2")

const ListUl = document.querySelector(".lista")




button.addEventListener("click", function(){
    
    const qtde = inputext.value 
    const mud = inputext2.value
    const generator = conte(1, qtde, mud)
                    .map(i => `<li>Text ${i}</li>`)
                    .join('')
    ListUl.innerHTML = generator

    if (mud != "") {
    const generator2 = conte(1, qtde, mud)
                    .map(i => `<li>${mud} ${i}</li>`)
                    .join('')
    ListUl.innerHTML = generator2
    }   
    
})
function conte(inicio,fim){
    let result = []
    for(number = inicio; number <= fim; number++){
        result.push(number)
    }
    return result
}

//Console

alert("Gerador de Lista: TESTE NO CONSOLE");
var itens, text, fLen, i, text2;
text = parseInt(prompt("Quantidade de itens em lista: "), 10);
text2 = prompt("Mudança no nome: Sim(Digite) / Não(Enter)"); 

function conta(inicio,fim){
    let resultado = []
    for(number = inicio; number <= fim; number++){
        resultado.push(number)
    }
    return resultado
}

const gene = conta(1, text)
itens = gene;
fLen = itens.length;
console.log("<ul>");

    for (i = 0; i < fLen; i++) {
        var lista = itens[i];
        if (text2 == "") {
            var result = "  <li>Text " + lista + "</li>";
            console.log(result);
        }
        else {
            var result = "  <li>"+ text2 + " " + lista + "</li>";
            console.log(result);
        }
    }
console.log("</ul>");


    