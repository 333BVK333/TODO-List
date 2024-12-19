let btn=document.querySelector("#btn");

btn.addEventListener("click", ()=> {

    let value=document.querySelector("#input").value;
    if((value.replaceAll(" ","")==""))
    {
        alert("Enter a string!")
    }
    else{
        document.querySelector(".content").innerHTML +=`<div class="data">
                <div id="name" >${value}</div>
                <img src="delete.svg" id="delete" />
            </div>`;
    }

    document.querySelector("#input").value="";

    let del=document.querySelectorAll("#delete");
    del.forEach(ele => {
        ele.addEventListener("click",()=>{
            ele.parentNode.remove();
        });
    });

    let text=document.querySelectorAll(".data #name");
    text.forEach(element => {
        element.addEventListener("click",()=> {
            element.classList.toggle('title');
        });
    });

});
