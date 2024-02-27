import getCitiesByUf from "../api/fetchCitiesByUf.js";
import getStateUfs from "../api/fetchStates.js";
import saveCitiesOnTxt from "../utils/saveCitiesOnTxt.js";
import saveStateUfsOnTxt from "../utils/saveStateOnTxt.js";

const toSQL = async () => {
  console.log("🧛", "Starting the script to SQL...\n\n");

  const states = await getStateUfs();
  saveStateUfsOnTxt(states);

  const cities = states.map(async (state) => {
    console.log("😔", "Actual state: ", state.state, "\n");
    const citiesByUf = await getCitiesByUf(state);
    return citiesByUf;
  });

  const allCities = await Promise.all(cities);
  const mergedCities = allCities.flat();
  saveCitiesOnTxt(mergedCities);
};

export default toSQL;
