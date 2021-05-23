export const setBackground = (artifactType: string) => {
  let artifact = '';
  let title = '';

  if (artifactType === 'Contas') {
    artifact = 'linear-gradient(95.32deg, #a9def9 0%, #e4f2fa 100%)';
    title = '#3A7B9C';
  } else if (artifactType === 'Objetivos') {
    artifact = 'linear-gradient(95.32deg, #e4c1f9 0%, #eee2f4 100%)';
    title = '#AE84C8';
  } else if (artifactType === 'Transações') {
    artifact = 'linear-gradient(95.32deg, #aaf5c8 0%, #e5f9ed 100%)';
    title = '#57B77D';
  } else if (artifactType === 'Categorias') {
    artifact = 'linear-gradient(95.32deg, #f5ec97 0%, #f5f2da 100%)';
    title = '#BDB354';
  }

  return { artifact, title };
};
