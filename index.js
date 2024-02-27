import * as readline from "node:readline/promises";
import toSQL from "./scripts/toSql.js";
import toPHP from "./scripts/toPHP.js";

const main = async () => {
  // Choose what you want to generate

  console.log("Starting the script...\n\n");
  console.log("Choose what you want to generate:\n");
  console.log("1 - SQL Query");
  console.log("2 - PHP Array");

  const option = await readline
    .createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    .question("Option: ");

  if (option === "1") {
    console.log("Generating SQL Query...");
    toSQL();
  } else if (option === "2") {
    console.log("Generating PHP Array...");
    toPHP();
  } else {
    console.log("Invalid option.");
  }
};

main();
