export const loadingStarted = namespace => {
  return {
    type: `${namespace}/startLoading`,
  };
};

export const loadingStopped = namespace => {
  return {
    type: `${namespace}/stopLoading`,
  };
};
