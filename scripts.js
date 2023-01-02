const horas =document.getElementById('horas')
const minutos =document.getElementById('minutos')
const segundos =document.getElementById('segundo')

const relogio =setInterval(function time() {
  let datetoday = new Date ();
  let hr =datetoday.getHours();
  let min =datetoday.getMinutes();
  let s =datetoday.getSeconds();

 horas.textContent = hr;
 minutos.textContent= min;
segundos.textContent =s

})
