import getCitiesByUf from "../api/fetchCitiesByUf.js";
import getStateUfs from "../api/fetchStates.js";
import saveCitiesFormatPHPOnTxt from "../utils/saveCitiesFormatPHPOnTxt.js";
import saveStatesFormatPHPOnTxt from "../utils/saveStatesFormatPHPOnTxt.js";

const toPHP = async () => {
  const states = await getStateUfs();
  console.log("🧖‍♀️", "Fetched the states...", "\n\n");
  saveStatesFormatPHPOnTxt(states);

  const cities = states.map(async (state) => {
    console.log("😔", "Actual state: ", state.state, "\n");
    const citiesByUf = await getCitiesByUf(state);
    return citiesByUf;
  });

  const allCities = await Promise.all(cities);
  const mergedCities = allCities.flat();

  console.log("🧖‍♀️", "Fetched the cities...", "\n\n");
  saveCitiesFormatPHPOnTxt(mergedCities);

  console.log("🧖‍♀️", "States saved to PHP format...", "\n\n");
  console.log("🧖‍♀️", "Ending the script...", "\n\n");
  console.log("🧖‍♀️", "Bye!", "\n\n");
  console.log("🧖‍♀️", "👋", "\n\n");
};

export default toPHP;
