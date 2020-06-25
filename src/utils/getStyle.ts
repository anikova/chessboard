export const getStyle = (index: number) => {
  let color = '';
  let backgroundColor = '';
  if (index % 16 < 8) {
    if (index % 2 === 0) {
      color = 'white';
      backgroundColor = 'black';
    } else {
      backgroundColor = 'white';
      color = 'black';
    }
  } else {
    if (index % 2 !== 0) {
      color = 'white';
      backgroundColor = 'black';
    } else {
      backgroundColor = 'white';
      color = 'black';
    }
  }
  return { color, backgroundColor };
};
