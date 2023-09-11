/*try to import the array from the 3_0 but doesn't seem to work */
/*
import { myArray } from '/home/becode/Documents/becode/js_intro/Exercice 3/3_0.js'; 

function useArray() {
  console.log(myArray);
}

useArray();
*/
let learners = ["Elodie","Mathias","Lucas","Rosalie","Lidwine","Stephane","Tim","Virginie","Justine_L","Carole","Thomas","Antoine","Kimi","Valentin","Justine_F","Elisabeth","Pierre","Justin","Robin","Layla","Marie","Alexandre_Vens","Alexandre_VDW","Bastien","Dorian"];

function pickLearner(inputAr, n){
    if (n <= 0 || n > inputAr.length) {
    throw new Error("Invalid value of n");
  }

let Rdm_ar =[...learners];

for(let i = Rdm_ar.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [Rdm_ar[i], Rdm_ar[j]] = [Rdm_ar[j], Rdm_ar[i]];
  }
  return Rdm_ar.slice(0, n);
}

let n = prompt ("Give me a numbers");
let selectedLearners = pickLearner(learners, n);
console.log(selectedLearners);