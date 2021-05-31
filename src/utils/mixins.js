export const rem = (px) => {
  const ratio = 16;
  px = parseInt(px);

  return px / ratio + 'rem';
}