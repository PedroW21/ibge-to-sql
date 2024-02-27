import fs from "fs";

const saveStatesFormatPHPOnTxt = (states) => {
  const dateInSeconds = new Date().getTime();

  const statesTxt = states.map((state, idx, arr) => {
    console.log("💅", "Actual state: ", state.description, "\n\n");

    const phpStatement = `['id' => ${state.id}, 'description' => "${state.description}", 'uf' => "${state.state}", 'ibge_code' => ${state.ibge_code}],`;

    return `${phpStatement}`;
  });

  fs.writeFile(
    `./dumps/php/state/php_${dateInSeconds}.txt`,
    statesTxt.join("\n"),
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
};

export default saveStatesFormatPHPOnTxt;
