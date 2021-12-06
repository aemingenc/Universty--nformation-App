const input=document.getElementById("input");
const search_button  = document.getElementById("search");
const show = document.getElementById("show");
const universty = document.getElementById("uni");
const unı_search = document.getElementById("uni");
const country = new List();

const searchUnı =["a"];
search_button.addEventListener("click", ()=>{

    // const searchUnı=[];     

    
     country.getData(input.value).then(response => response.forEach(i=>{
         
        searchUnı.push(i);
        // console.log(searchUnı);
        }));
      
})
unı_search.addEventListener("input",(e)=>{
    filterSearch(e.target.value);
    console.log("ban");
})
const filterSearch = (wantedWord) => {
    show.innerHTML = "";
    const wantedKey = new RegExp(wantedWord, "gi") //büyük küçük duyarsız
    console.log(wantedKey)
    let equals = searchUnı.filter(word => wantedKey.test(word));
    console.log(equals)

    if (wantedWord.length < 1) {
        equals = []
    } else {
        equals.forEach(es => {
            const otherOutput = document.createElement("li");
            show.appendChild(otherOutput);
            otherOutput.innerHTML = es;
            //output.innerHTML = `<li>${es}</li>`;
        })
    }

}

// resultFilter(e.target.value);
