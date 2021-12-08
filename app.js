const input=document.getElementById("input");
const search_button  = document.getElementById("search");
const last_search = document.getElementById("last_search");
const country = new List();

const searchUnı =[];
// window.addEventListener("load",()=>{
//     const country = new List();
//     country.getFirstData().then(response => response.forEach(i =>{
//         console.log(i)
//     }))

// })

search_button.addEventListener("click", ()=>{

    // const searchUnı=[];     

    
     country.getData(input.value).then(response => response.forEach(i=>{
         
        searchUnı.push(i);
        // console.log(searchUnı);
        }));
      last_search.innerHTML = `<input id="uni" type="text" placeholder=".....university">
      <button id="uni_search">unı search</button>`
      const unı_search = document.getElementById("uni");
      unı_search.addEventListener("input",(e)=>{
        filterSearch(e.target.value);
})

    
})
const filterSearch = (wantedWord) => {
    show.innerHTML = "";
    const wantedKey = new RegExp(wantedWord, "gi") //büyük küçük duyarsız
    console.log(wantedKey)
    let equals = searchUnı.filter(word => {
        if(word.search(wantedKey)== 0){
            const otherOutput = document.createElement("li");
            show.appendChild(otherOutput);
            otherOutput.innerText = word;
        }
        
       
    });
    

}


