function match(usefulness, months) {
  let husbandUsefulness = 0;
  for (let i = 0; i < usefulness.length; i++) {
    husbandUsefulness += usefulness[i];
  }

  const initialNeeds = 100;
  const decayRate = 0.15;
  let currentNeeds = initialNeeds;

  for (let i = 0; i < months; i++) {
    currentNeeds *= 1 - decayRate;
  }

  return husbandUsefulness >= currentNeeds ? "Match!" : "No match!";
}
