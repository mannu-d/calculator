let buttons = document.querySelectorAll(".btn")
let string = ""
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            try{
                string = eval(string)
                document.querySelector('input').value = string
            }catch(x){
                // console.log(x);
                document.querySelector('input').value = "invalid input !"
            }
            
        }
        else if(e.target.innerHTML == "C"){
            string=""
            document.querySelector('input').value = string
        }
        else{
            // console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})