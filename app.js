let btns= document.querySelectorAll("button");
let inp=document.querySelector("input");
let string=" ";

for(btn of btns){
    btn.addEventListener("click", function(){
        let value= this.innerText;
        if(value=="="){
           string = eval(string);
           inp.value= string;
           string="";
        }else if(value == "CE"){
            string="";
            inp.value= string;
        }else{
        string+=value;
        inp.value=string;
        }
    });
}