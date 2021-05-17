const formatCurrency = (value) => {
  const v = Number(value);

  return v.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default formatCurrency;
