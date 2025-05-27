let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let checkbox;
btn.addEventListener("click",function(){
    let item = document.createElement('li');
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    

    let text = document.createTextNode(inp.value);

    let dltbtn = document.createElement('button');
    dltbtn.innerText = 'Delete';
    dltbtn.classList.add('delete');

    item.append(checkbox, text, dltbtn);
    ul.appendChild(item);
    inp.value = '';

});



ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){  //event.target indicate where the mouse is clicked
        let listItem=event.target.parentElement;
        listItem.remove();
    }
});

ul.addEventListener("change",function(event){   
    if(event.target.nodeName=='INPUT' && event.target.type=='checkbox'){
        let listItem=event.target.parentElement;
        if(event.target.checked){
            listItem.classList.add('completed');
        }else{
            listItem.classList.remove('completed');;
        }
    }
});

