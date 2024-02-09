import fs from "fs";

const saveStateUfsOnTxt = (states) => {
  const dateInSeconds = new Date().getTime();

  const statesTxt = states.map((state) => {
    const sqlStatement = `
    INSERT INTO state_ufs (id, description, uf, ibge_code) 
    VALUES (${state.id}, '${state.description}', '${state.state}', '${state.ibge_code}');`;

    return sqlStatement;
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
