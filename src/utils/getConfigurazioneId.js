export function getConfigurazioneId({
  LPS,
  LivelloLPS,
  InterruttoreGenerale,
  Alimentazione,
  Ambiente,
  Linea
}) {
  if (LPS === "Sì") {
    return `${LPS}-${LivelloLPS}-${InterruttoreGenerale}-${Alimentazione}-${Ambiente}-${Linea}`;
  } else {
    return `${LPS}-${Alimentazione}-${Ambiente}-${Linea}`;
  }
}