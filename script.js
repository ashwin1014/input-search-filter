import users from './items.js';


const inputSearch = (function() {

    document.querySelector("#userSearch").addEventListener('keyup', (e)=>{
        let searchedWord = e.target.value.toLowerCase();
        let filteredData = users.filter(({id, name, address, pincode, items})=>{
            return (
                id.toLowerCase().includes(searchedWord) 
                || name.toLowerCase().includes(searchedWord)
                || address.toLowerCase().includes(searchedWord)
                || pincode.toLowerCase().includes(searchedWord)
                || items.filter(ele=>ele.toLowerCase().includes(searchedWord)).length > 0
            );
        })
        

        let userHTML =  filteredData.map(({id, name, address})=>{
             return `
                <div class="itemsHolder__item">
                    <p>${id}</p>
                    <p>${name}</p>
                    <p>${address}</p>
                    <hr/>
                </div>
             `;
         });

         if(document.querySelector("#userSearch").value === "") 
            document.querySelector("#itemsHolder").innerHTML = "";
         else 
            document.querySelector("#itemsHolder").innerHTML = userHTML.join('');
    });

})();




