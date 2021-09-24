import Mostrarmodal from '../JavaScript/GenerarEtiqueta.js'

function NewModal(Titulo,form) {
    var ModalContainer=document.createElement('div');
    ModalContainer.setAttribute('class','modalcontainer');
    var ModalHeader=document.createElement('div');
    ModalHeader.setAttribute('class','modalheader');
    var CajaBtnCerrar=document.createElement('div');
    CajaBtnCerrar.setAttribute('class','CajaBtnCerrar');
    var ElementoBtn=document.createElement('input');
    ElementoBtn.setAttribute('type','button');
    ElementoBtn.setAttribute('class','BtnCerrarModal');
    ElementoBtn.setAttribute('id','BtnModalClose');
    ElementoBtn.setAttribute('value','X');
    CajaBtnCerrar.appendChild(ElementoBtn);
    EventosBtnModales(ElementoBtn);
    ModalHeader.appendChild(CajaBtnCerrar);
    var ElementoTitulo=document.createElement('h1');
    ElementoTitulo.setAttribute('class','titulomodal');
    var contenidoTitulo=document.createTextNode(Titulo);
    ElementoTitulo.appendChild(contenidoTitulo);
    ModalHeader.appendChild(ElementoTitulo);
    var ModalBody=document.createElement('div');
    ModalBody.setAttribute('class','modalbody');
    ModalBody.appendChild(form);
    var ModalFooter=document.createElement('div');
    ModalFooter.setAttribute('class','modalfooter');
    var CajaBtnAgregar=document.createElement('div');
    CajaBtnAgregar.setAttribute('class','CajaBtnAgregar');
    var btnagrega=document.createElement('input');
    btnagrega.setAttribute('type','button');
    btnagrega.setAttribute('class','BtnAgregar');
    btnagrega.setAttribute('id','RegistroAgregar');
    btnagrega.setAttribute('value','Guardar');
    CajaBtnAgregar.appendChild(btnagrega);
    EventosBtnModales(btnagrega);
    ModalFooter.appendChild(CajaBtnAgregar);
    ModalContainer.appendChild(ModalHeader);
    ModalContainer.appendChild(ModalBody);
    ModalContainer.appendChild(ModalFooter);
    var padre=document.querySelector('.contenedor');
    padre.appendChild(ModalContainer);   
}
function EventosBtnModales(btn) {
    btn.addEventListener('click',(e)=>{
        if(e.target.id==='BtnModalClose'){
            Mostrarmodal.mostrarmodal('cerrar');
            var formulario=document.getElementById('formModal');
            formulario.reset();
        }
        if(e.target.id==='RegistroAgregar'){
            agregarfila();
        }
    });
}
function agregarfila() {
    let Nombre=document.getElementById('Nombre').value;
    let Nota1=document.getElementById('Nota-1').value;           
    let Nota2=document.getElementById('Nota-2').value;
    let Nota3=document.getElementById('Nota-3').value;
    let Nota4=document.getElementById('Nota-4').value;
    let Nota5=document.getElementById('Nota-5').value;
    if(Nota1!=''&& Nota2!=''&& Nota3!=''&& Nota4!=''&& Nota5!=''){
    let Notas=[Nota1,Nota2,Nota3,Nota4,Nota5];
    let suma=parseInt(Nota1)+parseInt(Nota2)+parseInt(Nota3)+parseInt(Nota4)+parseInt(Nota5);
    let promedio=parseFloat(parseInt(suma)/5);
    var tabla=document.getElementById('tablaRegistros');
    let rows=document.getElementsByTagName('tr');
    let Fila=rows.length;
    var col=[],valor='';
    let newFila=document.createElement('tr');
    newFila.setAttribute('class','fila');
    tabla.appendChild(newFila);
    for(let j=0;j<7;j++){
        col[j]=document.createElement('td');
        if(j>0 && j<6){
            valor=document.createElement('input');
            valor.setAttribute('id','campo'+Fila+j);
            valor.setAttribute('type','number');
            valor.setAttribute('min','0');
            valor.setAttribute('max','100');
            valor.setAttribute('value',Notas[j-1]);
            valor.setAttribute('disabled',true);
        }else if(j===0){
            valor=document.createElement('label');
            valor.setAttribute('id','Nombre'+Fila);
            let contenido=document.createTextNode(Nombre);
            valor.appendChild(contenido);
        }else{
            valor=document.createElement('label');
            valor.appendChild(document.createTextNode(promedio));
            valor.setAttribute('id','Promedio'+Fila);
        }
        col[j].setAttribute('class','columna fil-'+Fila+' col-'+j);
        col[j].appendChild(valor);
        newFila.appendChild(col[j]);
    }
    let CampoPromedio=document.getElementById('Promedio'+Fila);
    const Campo=document.querySelector('.fil-'+Fila+'.col-6');
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
        cargartarjetas(promedio);
        var formulario=document.getElementById('formModal');
            formulario.reset();
    }else{alert('Debe llenar todos los campos')};
    
    
}    

function cargartarjetas(promedio) {
    let rows=document.getElementsByTagName('tr');
    let Fila=rows.length;
    let NumeroAlumnos='', PromedioAlumnos='';
    let newIcon='';
    var max=0, min=0;
    if(promedio<51){
        NumeroAlumnos=document.getElementById('Nidreprobado');
        PromedioAlumnos=document.getElementById('Pidreprobado');
        newIcon=document.getElementById('Iidreprobado');
        max=51;
        min=0;
        }else if (promedio>=51 && promedio<80){
            NumeroAlumnos=document.getElementById('Nidmerito');
            PromedioAlumnos=document.getElementById('Pidmerito');
            newIcon=document.getElementById('Iidmerito');
            max=80;
            min=51;
        }else{
            NumeroAlumnos=document.getElementById('Nidexcelencia');
            PromedioAlumnos=document.getElementById('Pidexcelencia');
            newIcon=document.getElementById('Iidexcelencia');
            max=101;
            min=80;
        }
        let newNumero=parseInt(NumeroAlumnos.innerHTML)+1;
        NumeroAlumnos.removeChild(NumeroAlumnos.firstChild);
        NumeroAlumnos.appendChild(document.createTextNode(newNumero));
        let SP=0,PG=0;
        for(let i=1;i<Fila;i++){
            let col=document.getElementById('Promedio'+i);
            if (col.innerHTML>=min && col.innerHTML<max){
                    SP+=parseInt(col.innerHTML);       
                    
                }
        }
        PG=parseFloat(parseInt(SP)/newNumero);
        
        if(PromedioAlumnos.innerHTML<PG){
            newIcon.style.visibility='visible';
            newIcon.style.opacity='1';
            newIcon.classList.add('fa-chevron-up','iconocrece');
            newIcon.classList.remove('fa-chevron-down','iconodecrece');
            newIcon.classList.remove('fa-ellipsis-h','iconoigual');
        }else if(PromedioAlumnos.innerHTML>PG){
            newIcon.style.visibility='visible';
            newIcon.style.opacity='1';
            newIcon.classList.remove('fa-chevron-up','iconocrece');
            newIcon.classList.remove('fa-ellipsis-h','iconoigual');
            newIcon.classList.add('fa-chevron-down','iconodecrece');
            
        }else{
            newIcon.style.visibility='visible';
            newIcon.style.opacity='1';
            newIcon.classList.remove('fa-chevron-up','iconocrece');
            newIcon.classList.remove('fa-chevron-down','iconodecrece');
            newIcon.classList.add('fa-ellipsis-h','iconoigual');
        }
        PromedioAlumnos.removeChild(PromedioAlumnos.firstChild);
        PromedioAlumnos.appendChild(document.createTextNode(PG));
}
export default{NewModal};