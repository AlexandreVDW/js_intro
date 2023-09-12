function askTvSerie() {
    let serie = {};
  
    serie.name = prompt("Enter the name of your favorite TV series:");
  
    serie.productionYear = parseInt(prompt("Enter the production year of the TV series:"));
  
    serie.castMembers = [];
  
    while (true) {
      let castMember = prompt("Enter a cast member's name (leave empty to finish):");
      if (castMember.trim() === "") {
        break;
      }
      serie.castMembers.push(castMember);
    }
  
    return serie;
  }
  
  let favoriteTvSerie = askTvSerie();
  
  console.log(JSON.stringify(favoriteTvSerie, null, 2)); 