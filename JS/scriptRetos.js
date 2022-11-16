/* El commit anterior agrego los archivos*/
function creacioncomentarios(tex, tex2){
    element = document.getElementById('boton');
    element = document.setProperty("color", "");
    element = classList.remover('sub2');
    if(tex.length>=1 && tex2.length>=1){

        element.classList.remover('sub2');
        r1= "Hola bienvenido" + tex;
        document.getElementById("texto").innerHTML=r1;
        element.classList.add("boton");
        element.style.setProperty("color", "blue");
    }else{
        if(tex.length<1){
            element.classList.remover("boton");
            r1= "Porfavor coloque su nombre";
            document.getElementById("texto").innerHTML=r1;
            element.classList.add("sub2");
        }else{
            element.classList.remover("boton");
            r1= "Porfavor coloque su apellido";
            document.getElementById("texto").innerHTML=r1;
            element.classList.add("sub2");
        }
    }
}