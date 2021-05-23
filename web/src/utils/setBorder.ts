export const setBorder = (artifactType: string) => {
  let artifact = '';

  if (artifactType === 'Contas') {
    artifact = '0.2rem solid #A9DEF9';
  } else if (artifactType === 'Objetivos') {
    artifact = '0.2rem solid #E4C1F9';
  } else if (artifactType === 'Transações') {
    artifact = '0.2rem solid #AAF5C8';
  } else if (artifactType === 'Categorias') {
    artifact = '0.2rem solid #F5EC97';
  }

  return artifact;
};
