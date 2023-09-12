// Function to ask the user for TV series data
function askTvSerie() {
    let tvSerie = {};
    tvSerie.name = prompt("Enter the name of your favorite TV series:");
    tvSerie.productionYear = prompt("Enter the production year:");
    tvSerie.castMembers = [];
  
    while (true) {
      let castMember = prompt("Enter a cast member's name (or type 'done' to finish):");
      if (castMember.toLowerCase() === "done") {
        break;
      }
      tvSerie.castMembers.push(castMember);
    }
  
    return tvSerie;
  }
  
  // Function to randomize the cast members
  function randomizeCast(tvSerie) {
    let randomCast = [...tvSerie.castMembers];
    for (let i = randomCast.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomCast[i], randomCast[j]] = [randomCast[j], randomCast[i]];
    }
    return randomCast;
  }
  
  // Main program
  let userTvSerie = askTvSerie();
  let randomizedCast = randomizeCast(userTvSerie);
  /*
  console.log("Your TV series data in JSON format:");
  console.log(JSON.stringify(userTvSerie, null, 2));
  */
  console.log("Randomized cast members for your next series:");
  console.log(randomizedCast);