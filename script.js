import users from './items.js';


const inputSearch = (function() {

    'use strict'

    let elemIndex = -1;
    let elemSelected;

    document.querySelector("#userSearch").addEventListener('keyup', (e)=> {
        let searchedWord = e.target.value.toLowerCase();
        let filteredData = users.filter(({id, name, address, pincode, items})=>{
            return (
                   id.toLowerCase().includes(searchedWord) 
                || name.toLowerCase().includes(searchedWord)
                || address.toLowerCase().includes(searchedWord)
                || pincode.toLowerCase().includes(searchedWord)
                || items.filter(ele=>ele.toLowerCase().includes(searchedWord)).length > 0
            );
        });        

        let userHTML = filteredData.map(({id, name, address})=>{
             return `
                <div class="itemsHolder__item">
                    <p>${id}</p>
                    <p>${name}</p>
                    <p>${address}</p>
                    <hr/>
                </div>`;
         });

       

         if(document.querySelector("#userSearch").value === "") 
            document.querySelector("#itemsHolder").innerHTML = "";
         else {
            document.querySelector("#itemsHolder").innerHTML = userHTML.join('');
            document.querySelectorAll('.itemsHolder__item').forEach(ele=>{
                ele.addEventListener('mouseover', (e)=>{
                    ele.classList.add('selected');
                })
            });

            document.querySelectorAll('.itemsHolder__item').forEach(ele=>{
                ele.addEventListener('mouseout', (e)=>{
                    ele.classList.remove('selected');
                })
            });
         }
            


            let nextElem;
            let elemLength = document.querySelectorAll('.itemsHolder__item').length-1;
    
            switch (e.keyCode) {
                case 40:
                  
                    elemIndex++;
                    if(elemSelected) {
                        if(elemSelected.classList) elemSelected.classList.remove('selected');
                        nextElem = itemsHolder.querySelectorAll('.itemsHolder__item')[elemIndex];
    
                        if(typeof nextElem !== undefined && elemIndex <= elemLength) {
                            elemSelected = nextElem;
                        } else {
                            elemIndex = 0;
                            elemSelected = itemsHolder.querySelectorAll('.itemsHolder__item')[0];
                        }
    
                        if(elemSelected.classList) {
                            elemSelected.classList.add('selected');                            
                          //  userSearch.value = document.querySelector('.selected').children[1].textContent;
                        }
                    } else {
                        elemIndex = 0;
                        elemSelected = itemsHolder.querySelectorAll('.itemsHolder__item')[0];
                        if(elemSelected.classList) {
                            elemSelected.classList.add('selected');                            
                         //   userSearch.value = document.querySelector('.selected').children[1].textContent;
                        }
                    }                
                    break;
    
                case 38:
            
                if(elemSelected) {
                    if(elemSelected.classList) elemSelected.classList.remove('selected');
                    elemIndex--;
                    nextElem = itemsHolder.querySelectorAll('.itemsHolder__item')[elemIndex];
                    if(typeof nextElem !== undefined && elemIndex >=0){
                        elemSelected = nextElem;
                    } else {
                        elemIndex = elemLength;
                        elemSelected = itemsHolder.querySelectorAll('.itemsHolder__item')[0];
                    }
                    if(elemSelected.classList) {                       
                        elemSelected.classList.add('selected');
                      //  userSearch.value = document.querySelector('.selected').children[1].textContent;
                    }
                } else {
                    elemIndex = 0;
                    elemSelected = itemsHolder.querySelectorAll('.itemsHolder__item')[len];
                    if(elemSelected.classList) {                       
                        elemSelected.classList.add('selected');
                      //  userSearch.value = document.querySelector('.selected').children[1].textContent;
                    }
                }
                break;     
                          
            
                default:
                    break;
            }

    });

   
    document.querySelector('#itemsHolder').addEventListener('click', (e)=> {
       let selectedElement = e.target;
       if(selectedElement.className === "itemsHolder__item") {
            document.querySelector("#userSearch").value = selectedElement.children[1].textContent;
            document.querySelector("#itemsHolder").innerHTML = "";
       } else if(selectedElement.nodeName === 'P') {
            document.querySelector("#userSearch").value = selectedElement.parentElement.children[1].textContent;
            document.querySelector("#itemsHolder").innerHTML = "";
       }
    });

    document.querySelector('.search').addEventListener('submit', (e)=>{
        e.preventDefault();
    });

})();




