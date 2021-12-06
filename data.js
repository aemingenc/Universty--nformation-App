class List {
    constructor(){
        this.url="http://universities.hipolabs.com/search?country=";
    }
     async getData(country){
        const data = await fetch(this.url + country);
       const result = await  data.json();
       const ARR =[];
       result.forEach(i=>{
        ARR.push(i.name.toLowerCase());
       })
        return ARR;
    }
    
}