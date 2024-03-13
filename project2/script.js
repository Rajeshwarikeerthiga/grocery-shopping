const groceries=document.getElementsByClassName('groceries')[0];
const pencil=document.getElementById('pencil');
const allItems=document.getElementById("allItems");
const userInput=document.getElementById("userInput");
pencil.addEventListener("click", function(){
    allItems.innerHTML= "";

})
userInput.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    addItem();
})
function addItem(){
    var h2=document.createElement("h2");
    h2.innerHTML="- "  +userInput.value;
    h2.style.fontSize="30px";
    h2.style.marginLeft="200px";
    

    h2.addEventListener("click",function(){
        h2.style.textDecoration="line-through";

    })
    allItems.insertAdjacentElement("beforeend",h2 )
    userInput.value="";
}