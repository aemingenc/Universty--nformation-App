class List {
    constructor(){
        this.url="http://universities.hipolabs.com/search?";
    }
    // async getFirstData(){
    //     const dataFirst = await fetch(this.url +"name=middle")
    //    const resultFirst = await  dataFirst.json();
    //    const firstArr =[];
    //    resultFirst.forEach(i=>{
    //     firstArr.push(i.country.toLowerCase());
    //    })
    //     return firstArr;
    // }
     async getData(country){
        const data = await fetch(this.url + "country=" + country);
       const result = await  data.json();
       const ARR =[];
       result.forEach(i=>{
        ARR.push(i.name.toLowerCase());
       })
        return ARR;
    }
   
    
}