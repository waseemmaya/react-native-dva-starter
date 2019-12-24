import React from 'react';
import dva from 'dva';
import {createMemoryHistory} from 'history';
import {globalErrorHandler} from './src/utils/errorHandlers';
import Main from './src/Main';
import {loadGlobalModels} from './src/AllModels';

//create a dva app instance
const app = dva({
  history: createMemoryHistory(), //history object (reqd)
  onError(e, dispatch) {
    globalErrorHandler(e, dispatch); //global error handler
  },
});

//load models that need to be loaded globally on app startup
loadGlobalModels(app);

//register app router to navigate between views
app.router(() => <Main />);

//start the app instance and export it to be rendered
export default app.start();
