const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keyup', adicionar);


function adicionar(e){
    if(e.key === "Enter"){
        
        let texto = input.value;
    
        let li = document.createElement("li");

        li.innerText = texto;

        ul.appendChild(li);
        
        input.value = '';
    }
}