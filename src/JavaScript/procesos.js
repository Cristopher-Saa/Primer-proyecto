function eventoInput(elemento,NF,TC) {
    elemento.addEventListener('change',(e)=>{
        console.log(e.target.value);
        let CampoPromedio=document.getElementById('Promedio'+NF);
       // console.log(CampoPromedio);
       CampoPromedio.removeChild(CampoPromedio.firstChild);

       
        let sum=0,promedio=0;
       for(let i=0;i<TC-1;i++){
        const elementoSuma=document.getElementById('campo'+NF+i);
        if(elementoSuma.value)
        {

            sum=parseInt(sum)+parseInt(elementoSuma.value);
            promedio=parseFloat(parseInt(sum)/(TC-1));

        }else {

            sum=parseInt(sum)+0;
            promedio=parseFloat(parseInt(sum)/(TC-1));
        }
        
        }
        CampoPromedio.appendChild(document.createTextNode(promedio));
    });
}
function eventoPromedio(elemento,NF) {
        elemento.addEventListener('change',(e)=>{
           
            let CampoPromedio=document.getElementById('Promedio'+NF);
            const Campo=document.querySelector('.fil-'+NF+'.col-4');

            if(CampoPromedio.innerHTML<51){
            Campo.style.background='red';
            CampoPromedio.style.color='#ffff';
            CampoPromedio.style.fontWeight='bold'; 

            }else if (CampoPromedio.innerHTML>=51 && CampoPromedio.innerHTML<80){
                Campo.style.background='yellow';
                CampoPromedio.style.color='black';
                CampoPromedio.style.fontWeight='bold';  
            }else{
                Campo.style.background='green';
                CampoPromedio.style.color='#ffff';
                CampoPromedio.style.fontWeight='bold';  
            }

        });
}


export default {eventoInput,eventoPromedio}