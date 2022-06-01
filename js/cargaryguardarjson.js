let arraypalabras = []; 

function traerDatos(){
    let string;      
    
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'palabras.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){            
            let datos = JSON.parse(this.responseText);            

            for(let item of datos){                  
                if(string==null){
                    string = item.palabra;
                }else{
                    string += " " + item.palabra;
                }
            }
            
            arraypalabras = string.split(" ");                                       
        }
    }    
    
}
