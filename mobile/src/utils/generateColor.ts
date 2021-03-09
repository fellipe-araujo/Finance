export const randomColor = () => {
  const characters = '0123456789ABCDEF';
  var color = '';

  for (var i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }

  return '#' + color;
};
