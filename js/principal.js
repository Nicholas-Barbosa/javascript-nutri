var pacientes = document.querySelectorAll(".paciente");

const cssInvalidPacient="paciente-invalido";

for(var i=0;i<pacientes.length;i++){
   var currentPacient = pacientes[i];

   var peso = currentPacient.querySelector(".info-peso").textContent;
   var imc = currentPacient.querySelector(".info-imc");
   if(peso <=300){
        var altura = currentPacient.querySelector(".info-altura").textContent;
        var resultImc = peso / (altura * altura);

        imc.textContent = resultImc.toFixed(2);
   }else{
        imc.textContent="Peso invalido!";
        currentPacient.classList.add(cssInvalidPacient);
   }
}

