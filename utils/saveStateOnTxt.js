import fs from "fs";

const saveStateUfsOnTxt = (states) => {
  const dateInSeconds = new Date().getTime();
  const initialSqlStatement = `
  INSERT INTO state_ufs (id, description, uf, ibge_code) 
  VALUES`;

  const statesTxt = states.map((state, idx, arr) => {
    console.log("💅", "Actual state: ", state.description, "\n\n");

    const sqlStatement = `(${state.id}, "${state.description}", "${state.uf}", ${state.ibge_code})`;

    if (idx === 0) return `${initialSqlStatement} ${sqlStatement},`;

    if (idx === arr.length - 1) return `${sqlStatement};`;

    return `${sqlStatement},`;
  });

  fs.writeFile(
    `./dumps/state/${dateInSeconds}.txt`,
    statesTxt.join("\n"),
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
};

export default saveStateUfsOnTxt;
