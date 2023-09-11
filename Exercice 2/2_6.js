/*Premiere version else if*/
while (true) {
    const day = prompt("give me a number");
    if (day <=1 && day >=7) {
      alert("wrong number");
    }else if (day == 1){
        document.write("lundi");
        break;
    }else if (day == 2){
        document.write("mardi");
        break;
    }else if (day == 3){
        document.write("mercredi");
        break;
    }else if (day == 4){
        document.write("jeudi");
        break;
    }else if (day == 5){
        document.write("vendredi");
        break;
     }else if (day == 6){
        document.write("samedi");
        break;
     }else if (day == 7){
        v("dimanche");
        break;
     }
    }

/* Deuxieme version switch : */
/*
while (true) {
    const day = prompt("Give me a number between 1 and 7");
    
    switch (parseInt(day)) {
      case 1:
        document.write("lundi");
        break;
      case 2:
        document.write("mardi");
        break;
      case 3:
        document.write("mercredi");
        break;
      case 4:
        document.write("jeudi");
        break;
      case 5:
        document.write("vendredi");
        break;
      case 6:
        document.write("samedi");
        break;
      case 7:
        document.write("dimanche");
        break;
      default:
        alert("Wrong number. Please enter a number between 1 and 7.");
        break;
    }
  
    if (day >= 1 && day <= 7) {
      break;
    }
  }
  */
  /* Troisieme version tableau : */
  /*
  const daysOfWeek = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
  ];
  
  while (true) {
    const day = prompt("Give me a number between 1 and 7");
  
    if (day >= 1 && day <= 7) {
      document.write(daysOfWeek[day - 1]);
      break;
    } else {
      alert("Wrong number. Please enter a number between 1 and 7.");
    }
  }
  */
