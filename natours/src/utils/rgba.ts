export const rgba = (hex: string, alpha = 1) => {
  const match = hex.match(/\w\w/g)
  if (!match) throw new Error(`Invalid color hex: ${hex}`)

  const [r, g, b] = match.map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
