const CITIES_BY_UF_URL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/UF/municipios";

const getCitiesByUf = async (state) => {
  console.log("👨‍⚕️", "Starting getCitiesByUf\n");
  const citiesJson = await fetch(CITIES_BY_UF_URL.replace("UF", state.state));
  const cities = await citiesJson.json();

  if (citiesJson.status !== 200) {
    console.log("👃", "Error: ", citiesJson.status, "\n\n");
    throw new Error("Failed to fetch cities");
  }
  console.log("🤒", "Response:", cities[0], "\n\n");

  console.log("😩", "Formatting cities...\n");
  const formattedCities = cities.map((city) => ({
    state: state.id,
    description: city.nome,
    ibge_code: city.id,
  }));

  console.log("🤓", "Sorting cities alphabetically...\n");
  const alphabeticallyOrderedCities = formattedCities.sort((a, b) =>
    a.description.localeCompare(b.description, "pt-BR")
  );

  return alphabeticallyOrderedCities;
};

export default getCitiesByUf;
