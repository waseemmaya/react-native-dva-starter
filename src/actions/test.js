const namespace = 'test';

//View Accessible Actions
export const doAsynTest = (test_name, params) => {
  return {
    type: `${namespace}/asyncTest`,
    test_name,
    params,
  };
};
