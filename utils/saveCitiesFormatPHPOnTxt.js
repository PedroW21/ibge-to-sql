import fs from "fs";

const saveCitiesFormatPHPOnTxt = async (cities) => {
  console.log("📝", "Saving cities on PHP format at dumps/php/cities...\n");

  const sqlStatement = cities.map((city, idx, arr) => {
    console.log("💅", "Actual city: ", city.description, "\n\n");

    return `['description' => "${city.description}", 'state' => ${city.state}, 'ibge_code' => ${city.ibge_code}],`;
  });

  const dateInSeconds = new Date().getTime();
  fs.writeFile(
    `./dumps/php/cities/${dateInSeconds}.txt`,
    sqlStatement.join("\n"),
    (err) => {
      if (err) throw err;

      console.log("🎉", "cities has been saved!\n");
    }
  );
};

export default saveCitiesFormatPHPOnTxt;
