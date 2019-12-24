import TestModel from './models/test';

export const loadGlobalModels = app => {
  app.model(TestModel);
};
