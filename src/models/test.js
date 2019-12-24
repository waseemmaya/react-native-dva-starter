import {loadingStarted, loadingStopped} from '../actions/common';
import {localErrorHandler} from '../utils/errorHandlers';
import Test from '../services/test';

const namespace = 'test';

export default {
  namespace,

  state: {
    loading: false,
    test: {
      key: 'test 12345667890',
    },
  },

  effects: {
    *asyncTest(params, {put, call}) {
      try {
        yield put(loadingStarted(namespace));
        yield call(Test[params.test_name], params.params);
        yield put(loadingStopped(namespace));
      } catch (error) {
        localErrorHandler({namespace, error, stopLoading: true});
      }
    },
  },

  reducers: {
    startLoading(state) {
      return {...state, loading: true};
    },
    stopLoading(state) {
      return {...state, loading: false};
    },
  },
};
