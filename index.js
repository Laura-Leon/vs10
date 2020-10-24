//declaración global2
//buenas practicas: poner los botones como const ya que no son cambiantes
//usar let para for y var para globales que funcionen en todo el codigo

//views 
//primero instancio botones y espacio de textos

const IDS = document.getElementById('IDS');
const Nombre = document.getElementById('Nombre');
const bregistrar = document.getElementById('bregistrar');
const idd = document.getElementById('idd');
const bvotar = document.getElementById('bvotar');
const bverCandidatosr = document.getElementById('bverCandidatosr');
const bverVotaciones = document.getElementById('bverVotaciones');


var database = firebase.database();

//toca declarar las fuctions antes de utilizarla en los events

registrar = ()=> {
let d = IDS.value;
let n = Nombre.value;
let r = bregistrar.value;
let i = idd.value;
let v = bvotar.value;
let vc = bverCandidatosr.value;
let vv = bverVotaciones.value;

let objUsuario = {
Nombre: n,
ID: d,

}
let json = JSON.stringify(objUsuario);
console.log(json);

console.log(objUsuario);
database.ref('Candidatos').push().set(objUsuario);
}

bregistrar.addEventListener('click',registrar);


database.ref('Candidatos').on('value',function(data){
   console.log(data.val());
})
//bverCandidatosr.addEventListener('click',+data);

