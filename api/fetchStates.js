const STATE_UFS_URL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

const getStateUfs = async () => {
  console.log("👩‍👩‍👦‍👦", "Starting to fetch states\n");

  const response = await fetch(STATE_UFS_URL);
  const states = await response.json();

  console.log("👩‍👩‍👦‍👦", "Finished fetching states\n");

  if (response.status !== 200) throw new Error("Failed to fetch states");

  const formattedStates = states.map((state) => ({
    ibge_code: state.id,
    state: state.sigla,
    description: state.nome,
  }));

  console.log("🙇‍♂️", "Ordering by alphabetic\n");
  const statesByAlphabeticOrder = formattedStates.sort((a, b) =>
    a.description.localeCompare(b.description, "pt-BR")
  );

  const setIdForStates = statesByAlphabeticOrder.map((state, index) => ({
    ...state,
    id: index + 1,
  }));

  return setIdForStates;
};

export default getStateUfs;
