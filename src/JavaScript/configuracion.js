console.log('Hola JavaScript');// equivalente en java a un System.out.println('mensaje');
//alert('Hola JavaScript');// mensaje de alerta predefinido

    const padre=document.querySelector('.contenedor');// con esta linea estamos llamando a una etiqueta por su ID
    const lista=document.getElementById('lista');
    //let etiqueta=document.querySelector('.etiqueta');
    let etiqueta='';
    let clase='titulo', NombreTitulo=null; ContenidoParrafo=null; rutaimagen=null; ContenidoDescripcion=null; NombreLabel=null; NombreLabel1=null; NombreLabel2=null; NombreTituloForm=null; 
    lista.addEventListener('mousedown',designar=(e)=>{
        //const referencia=document.getElementsByTagName(e.target.id);
        etiqueta=document.getElementById(e.target.id);
        if(etiqueta.id==='mostrar'){
            NombreTitulo='Se selecciono la opcion Ver alerta';
            ContenidoParrafo='ALERTA';
            rutaimagen='../src/image/Alerta.jpg';
            ContenidoDescripcion='NO ENTRES O ERES FEO';
            NombreTituloForm='FORMULARIO 1';
            NombreLabel='Nombre';
            NombreLabel1='Apellido';
            NombreLabel2='Apodo';

        } else if(etiqueta.id==='mostrar1'){
            NombreTitulo='MI PRIMER BLOG';
            ContenidoParrafo='Hola viejo, dime cómo estás Los años pasan, no hemos vuelto a hablar Y no quiero que te pienses Que me he olvidado de ti Yo por mi parte no me puedo quejar Trabajando como siempre, igual Aunque confieso que en mi vida Hay mucha soledad En el fondo tú y yo somos casi igual, ah-ah Y me vuelvo loco solo con pensar Quizás la vida nos separe cada día más Quizás la vida nos aleje de la realidad Quizás tú buscas un desierto y yo busco un mar Quizás que gracias a la vida hoy te quiero más Hola viejo, dime cómo estás Hay tantas cosas que te quiero explicar Porque uno nunca sabe Si mañana está aquí A veces hemos ido marcha atrás Y la razón siempre querías llevar Pero estoy cansado No quiero discutir En el fondo tú y yo somos casi igual, ah-ah Y me vuelvo loco solo con pensarbQuizás la vida nos separe cada día más Quizás la vida nos aleje de la realidad Quizás tú buscas un desierto y yo busco un mar Quizás que gracias a la vida hoy te quiero más Quizás la vida nos separe cada día más Quizás la vida nos aleje de la realidad Quizás tú buscas un desierto y yo busco un mar Quizás que gracias a la vida hoy te quiero más Hola viejo, dime cómo estás Los años pasan, no hemos vuelto a hablar Y no quiero que te pienses Que me he olvidado de ti';
            rutaimagen='../src/image/etap.jpeg';
            ContenidoDescripcion='Empresa ETAP';
            NombreTituloForm='FORMULARIO 2';
            NombreLabel='Deporte';
            NombreLabel1='Color';
            NombreLabel2='Numero';

        } else if(etiqueta.id==='mostrar2'){
            NombreTitulo='MI SEGUNDO BLOG';
            ContenidoParrafo='Yo te miro, se me corta la respiración     Cuando tú me miras se me sube el corazón        (Aceleras a mi corazón)        Y en un silencio tu mirada dice mil palabras        La noche en la que te suplico que no salga el sol                (Bailando, bailando, bailando, bailando)        La noche calentando, tu cuerpo meneando        Subiendo y bajando (subiendo y bajando)        (Bailando, bailando, bailando, bailando)        Este fuego acá dentro, subiendo, creciendo        Ardiendo y quemando                Con tu física y tu química también tu anatomía        La cerveza y el tequila y tu boca con la mía        Ya no puedo más (no aguanto más)        Ya no puedo más (no aguanto más)        Con esa melodía, eres mi fantasía        Con tu filosofía, mi mente está vacía        No aguanto más (ya no puedo más)        No aguanto más (ya no puedo más)                Yo quiero estar contigo, vivir contigo        Bailar contigo, tener contigo        Una noche loca (una noche loca)        Ay, besar tu boca (y besar tu boca)        Yo quiero estar contigo, vivir contigo        Bailar contigo y tener contigo        Una noche loca (una noche loca)        Una noche loca                Oh, oh, oh, oh, oh                Tú me miras y me llevas a otra dimensión        (Entro en otra dimensión)        Tus latidos aceleran a mi corazón        (Tu suspiro acelera a mi corazón)        Qué ironía del destino no poder tocarte        Abrazarte y sentir la magia de tu olor              (Bailando, bailando, bailando, bailando)        La noche calentando, tu cuerpo meneando        Subiendo y bajando (subiendo y bajando)        (Bailando, bailando, bailando, bailando)        Este fuego acá dentro, subiendo, creciendo        Ardiendo y quemando                Con tu física y tu química también tu anatomía        La cerveza y el tequila y tu boca con la mía        Ya no puedo más (no aguanto más)        Ya no puedo más (no aguanto más)        Con esa melodía, eres mi fantasía        Con tu filosofía, mi mente está vacía        No aguanto más (ya no puedo más)        No aguanto más (ya no puedo más)           Yo quiero estar contigo, vivir contigo        Bailar contigo, tener contigo        Una noche loca (una noche loca)        Ay, besar tu boca (y besar tu boca)        Yo quiero estar contigo, vivir contigo        Bailar contigo tener contigo        Una noche loca (una noche loca)        Una noche loca        Oh, oh, oh, oh, oh   Bailando, amor        Bailando, amor        Es que se me va el dolor';
            rutaimagen='../src/image/logo3.png';
            ContenidoDescripcion='Logo Empresa Tarea';
            NombreTituloForm='FORMULARIO 3';
            NombreLabel='Edad';
            NombreLabel1='Celular';
            NombreLabel2='Comida';

        } else if(etiqueta.id==='mostrar3'){
            NombreTitulo='MI TERCER BLOG';
            ContenidoParrafo='Cantar por cantar        No hace falta pues cantar        De que sirve buena voz        Si es vacía tu canción        De que sirve buena voz        Si es vacía tu cancion        Vivir por vivir        No hace falta pues vivir        Tiene que haber un motivo        Tienes que luchar por el        Tiene que haber un motivo        Tienes que luchar por el        Yo vivo y canto a mi patria        Porque la llevo en mi ser        Rojo, Amarillo y Verde        Es el tono de mi voz        Rojo, Amarillo y Verde        Es el tono de mi voz        Rojo, Amarillo y Verde        Es el tono de mi voz        Cantar por cantar        No hace falta pues cantar        De que sirve buena voz        Si es vacía tu canción        De que sirve buena voz        Si es vacía tu canción        Vivir por vivir        No hace falta pues vivir        Tiene que haber un motivo        Tienes que luchar por el        Tiene que haber un motivo        Tienes que luchar por el        Yo vivo y canto a mi patria        Porque la llevo en mi ser        Rojo, amarillo y verde        Es el tono de mi voz        Rojo, amarillo y verde        Es el tono de mi voz        Rojo, amarillo y verde        Es el tono de mi voz.';
            rutaimagen='../src/image/pmdt.jpeg';
            ContenidoDescripcion='PMDT Logo sacado de internet';
            NombreTituloForm='FORMULARIO 4';
            NombreLabel='Profesion';
            NombreLabel1='Juego';
            NombreLabel2='Direccion';

        }
            //if(document.querySelector('.titulo')){
            if(document.querySelector('.'+clase) || clase==!null){
               // padre.removeChild(document.querySelector('.titulo'));
              // padre.removeChild(document.querySelector('.'+clase));
              // padre.removeChild(document.querySelector('.parrafo'));
               padre.removeChild(document.querySelector('.CajaImagen'));
               padre.removeChild(document.querySelector('.CajaParrafo'));
               padre.removeChild(document.querySelector('.CajaFormulario'));
            }
            /*if(document.querySelector('.parrafo',)){
                padre.removeChild(document.querySelector('.parrafo')); 
            }*/

            var ElementoCajaDeFormulario=document.createElement('div');
            ElementoCajaDeFormulario.setAttribute('class','CajaFormulario');

            var ElementoLabel=document.createElement('label');// creamos un elemento
            ElementoLabel.setAttribute('for','');
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido4=document.createTextNode(NombreLabel);// contenidos de los elementos
            ElementoLabel.appendChild(contenido4);// agregar un elemento contenido dentro de dicha etiqueta
            
            var input=document.createElement('input');// creamos un elemento
            input.setAttribute('id','');
            input.setAttribute('Type','Text');



            var ElementoLabel1=document.createElement('label');// creamos un elemento
            ElementoLabel1.setAttribute('for','');
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido8=document.createTextNode(NombreLabel1);// contenidos de los elementos
            ElementoLabel1.appendChild(contenido8);// agregar un elemento contenido dentro de dicha etiqueta
      
            var input1=document.createElement('input');// creamos un elemento
            input1.setAttribute('id','');
            input1.setAttribute('Type','Text');
            
            var ElementoLabel2=document.createElement('label');// creamos un elemento
            ElementoLabel2.setAttribute('for','');
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido9=document.createTextNode(NombreLabel2);// contenidos de los elementos
            ElementoLabel2.appendChild(contenido9);// agregar un elemento contenido dentro de dicha etiqueta
      
            var input2=document.createElement('input');// creamos un elemento
            input2.setAttribute('id','');
            input2.setAttribute('Type','Text');

            // var contenido2=document.createTextNode(ContenidoParrafo);
            var ElementoTitulo1=document.createElement('h1');// creamos un elemento
            ElementoTitulo1.setAttribute('class',clase);
            ElementoCajaDeFormulario.appendChild(ElementoTitulo1);
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido5=document.createTextNode(NombreTituloForm);// contenidos de los elementos
            ElementoTitulo1.appendChild(contenido5);

            var input4=document.createElement('input');// creamos un elemento
            input4.setAttribute('id','');
            input4.setAttribute('value','Guardar');
            input4.setAttribute('Type','Button');

            ElementoCajaDeFormulario.appendChild(ElementoLabel);
            ElementoCajaDeFormulario.appendChild(input);
            ElementoCajaDeFormulario.appendChild(ElementoLabel1);
            ElementoCajaDeFormulario.appendChild(input1);
            ElementoCajaDeFormulario.appendChild(ElementoLabel2);
            ElementoCajaDeFormulario.appendChild(input2);
            ElementoCajaDeFormulario.appendChild(input4);

            var ElementoCajaDeImagen=document.createElement('div');
            ElementoCajaDeImagen.setAttribute('class','CajaImagen');
            var Imagen=document.createElement('img');
            Imagen.setAttribute('src',rutaimagen);
            ElementoCajaDeImagen.appendChild(Imagen);
            var ParrafoDescripcion=document.createElement('p');
            ParrafoDescripcion.setAttribute('class','ParrafoDescripcion');
            var contenido3=document.createTextNode(ContenidoDescripcion);
            ParrafoDescripcion.appendChild(contenido3);
            ElementoCajaDeImagen.appendChild(ParrafoDescripcion);


            var ElementoCajaDeParrafo=document.createElement('div');
            ElementoCajaDeParrafo.setAttribute('class','CajaParrafo');
            var ElementoTitulo=document.createElement('h1');// creamos un elemento
            ElementoTitulo.setAttribute('class',clase);
            ElementoCajaDeParrafo.appendChild(ElementoTitulo);
            //var contenido=document.createTextNode('Se selecciono la opcion Ver alerta');// contenidos de los elementos
            var contenido=document.createTextNode(NombreTitulo);// contenidos de los elementos
            ElementoTitulo.appendChild(contenido);// agregar un elemento contenido dentro de dicha etiqueta
            var parrafo=document.createElement('p');// creamos un elemento
            parrafo.setAttribute('class','parrafo');
            var contenido2=document.createTextNode(ContenidoParrafo);

            parrafo.appendChild(contenido2);
            ElementoCajaDeParrafo.appendChild(parrafo);
            //padre.appendChild(parrafo);
            padre.appendChild(ElementoCajaDeParrafo);
            padre.appendChild(ElementoCajaDeImagen);
            padre.appendChild(ElementoCajaDeFormulario);
    });

    
 
inicial=()=>{
   // pintar();
} // esta funcion es la que iniciara todo mi codigo JavaScript
