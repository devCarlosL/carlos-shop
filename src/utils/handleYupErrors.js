const handleYupErrors = (err) => {
  const errors = {};

  if (err?.inner?.length > 0) {
    err.inner.forEach((error) => {
      errors[error.path] = error.message;
    });
  } else {
    errors[err.path] = err.message;
  }

  return errors;
};

export default handleYupErrors;
