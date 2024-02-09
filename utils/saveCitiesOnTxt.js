import fs from "fs";
const saveCitiesOnTxt = (cities) => {
  console.log("📝", "Saving cities on cities.txt...\n");

  const initialSqlStatement = `INSERT INTO cities (id, state, description, ibge_code) VALUES`;

  const sqlStatement = cities.map((city, idx, arr) => {
    console.log("💅", "Actual city: ", city.description, "\n\n");

    const sqlStatement = `(${city.id}, "${city.state}", "${city.description}", ${city.ibge_code})`;

    if (idx === 0) return `${initialSqlStatement} ${sqlStatement},`;

    if (idx === arr.length - 1) return `${sqlStatement};`;

    return `${sqlStatement},`;
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
