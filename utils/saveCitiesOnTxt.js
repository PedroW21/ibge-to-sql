import fs from "fs";
const saveCitiesOnTxt = (cities) => {
  console.log("📝", "Saving cities on cities.txt...\n");

  const sqlStatement = cities.map((city) => {
    console.log('💅', 'Actual city: ', city.description, '\n\n')
    return `INSERT INTO cities (id, state, description, ibge_code) VALUES (${city.id}, '${city.state}', '${city.description}', ${city.ibge_code});`;
  });

  const dateInSeconds = new Date().getTime();
  fs.writeFile(
    `./dumps/cities/${dateInSeconds}.txt`,
    sqlStatement.join("\n"),
    (err) => {
      if (err) throw err;

      console.log("🎉", "cities.txt has been saved!\n");
    }
  );
};

export default saveCitiesOnTxt;
