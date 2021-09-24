const PintarFila=(filas,columnas,Nf,NTabla)=>{
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            var ob2=NTabla.rows[i].cells[j];
            if(Nf=='fil-'+i){
                //console.log(ob2,'---',Nf,'----',Nc);
                ob2.setAttribute('style','background: blue');
            }
            else{
                ob2.setAttribute('style','background: #fff');
            }
            
    }
    }
}

const PintarColumna=(filas,columnas,Nc,NTabla)=>{
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            var ob2=NTabla.rows[i].cells[j];
            if(Nc=='col-'+j){
                    ob2.setAttribute('style','background: green');
            }
            else{
                ob2.setAttribute('style','background: #fff');
            }
            
    }
    }
}

const PintarCruz=(filas,columnas,Nf,Nc,NTabla)=>{
    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            var ob2=NTabla.rows[i].cells[j];
            if(Nf=='fil-'+i){
                ob2.setAttribute('style','background: blue');
            }else if(Nc=='col-'+j){
                    ob2.setAttribute('style','background: green');
            }
            else{
                ob2.setAttribute('style','background: #fff');
            }
            
    }
    }
}

const PintarX=(filas,columnas,Nf,Nc,NTabla)=>{
    let NumFil=Nf.split('-');
    let NumCol=Nc.split('-');
    let suma=parseInt(NumFil[1])+parseInt(NumCol[1]);
    let resta=parseInt(NumFil[1])-parseInt(NumCol[1]); 
   console.log(suma);

    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            var ob2=NTabla.rows[i].cells[j];
            if(suma==(i+j)){
                ob2.setAttribute('style','background: blue');
            }else if(resta==(i-j)){
                    ob2.setAttribute('style','background: green');
            }
            else{
                ob2.setAttribute('style','background: #fff');
            }
            
    }
    }
}

const PintarAsterisco=(filas,columnas,Nf,Nc,NTabla)=>{
    let NumFil=Nf.split('-');
    let NumCol=Nc.split('-');
    let suma=parseInt(NumFil[1])+parseInt(NumCol[1]);
    let resta=parseInt(NumFil[1])-parseInt(NumCol[1]); 
   console.log(suma);

    for(let i=0;i<filas;i++){
        for(let j=0;j<columnas;j++){
            var ob2=NTabla.rows[i].cells[j];
            if(suma==(i+j)){
                ob2.setAttribute('style','background: blue');
            }else if(resta==(i-j)){
                    ob2.setAttribute('style','background: green');
            }
            else  if(Nf=='fil-'+i){
                ob2.setAttribute('style','background: blue');
            }else if(Nc=='col-'+j){
                    ob2.setAttribute('style','background: green');
            }
            else{
                ob2.setAttribute('style','background: #fff');
            }

            
    }
    }
}

export default {PintarFila,PintarColumna,PintarCruz,PintarX,PintarAsterisco}
