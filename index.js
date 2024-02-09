import getStateUfs from "./api/fetchStates.js";
import fs from "fs";

const saveStateUfsOnTxt = async (states) => {
  const dateInSeconds = new Date().getTime();

  const statesTxt = states.map((state) => {
    const sqlStatement = `INSERT INTO state_ufs (description, uf, ibge_code) VALUES (${state.description}, '${state.state}', '${state.ibge_code}');`;

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

const saveData = async () => {
  const states = await getStateUfs();
  await saveStateUfsOnTxt(states);
};

saveData();