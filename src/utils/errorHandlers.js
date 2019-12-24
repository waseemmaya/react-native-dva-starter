import {loadingStopped} from '../actions/common';

/*
    namespace: string (reqd)
    error: obj Error (reqd)
    stopLoading: boolean=false (optional)
*/
export const localErrorHandler = props => {
  const {namespace, error, stopLoading} = props;
  throw {error, stopLoading: stopLoading ? namespace : false, namespace};
};

export const globalErrorHandler = (e, dispatch) => {
  //prevent default behavior of throwing exception
  e.preventDefault();
  let error = e;
  //if 'error' field is present, this means this error has been thrown by error handler
  if (e.error) error = e.error;
  console.log(error);
  //if 'message' field is present then show the error message
  // if (error.message) Toast.info(error.message, 3, undefined, false);
  console.log('error.message: ', error.message);
  //else just show hard coded message
  // else Toast.info('An error occurred!', 2, undefined, false);
  //if 'stopLoading' field is sent by the handler then stopLoading that module
  if (e.stopLoading) dispatch(loadingStopped(e.stopLoading));
};
