const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const apellidop = document.querySelector(".apellidoP");
const apellidom = document.querySelector(".apellidoM");
const fecha = document.querySelector(".fecha");
const usuario = document.querySelector(".usuario");

//Mostrar información

const textoGuardado = localStorage.getItem("name");
const textoGuardado2 = localStorage.getItem("ap");
const textoGuardado3 = localStorage.getItem("am");
const textoGuardado4 = localStorage.getItem("date");

if(textoGuardado != "" && textoGuardado2 != "" && textoGuardado3!="" && textoGuardado4!=""){
    usuario.textContent = `Guardado: ${textoGuardado} ${textoGuardado2} ${textoGuardado3} ${textoGuardado4}`;

}
btnGuardar.addEventListener("click"), ()=>{
    const name = nombre.value;
    const ap = apellidoP.value;
    const am = apellidoM.value;
    const date = fecha.value;

    if(name!="" && ap!="" && am!="" && date!="" ){
        localStorage.setItem('name', name);
        localStorage.setItem('ap', ap);
        localStorage.setItem('am', am);
        localStorage.setItem('date', date);

        usuario.textContent = `Guardado: ${name}${ap}${am}${date}`;
    }else{
            alert("No hay datos que mostrar.")
        }
    }
