import { stringify } from 'querystring';
import { history } from 'umi';
import { getPageQuery } from '@/utils/utils';
import {setUserId, setNickName, setLoginName} from '@/utils/utils';
import {accountLogin} from '@/services/login';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      try {
        const response = yield call(accountLogin, payload);

        const {id, name, nickName} = response.result;
        yield put({
          type: 'changeLoginStatus',
          payload: {id, name, nickName},
        }); // Login successfully
        

        setUserId(id);
        setLoginName(name);
        setNickName(nickName);

        //history.replace('/');
        history.push('/');
        return true;
      } catch (error) {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            id: '',
            name: '',
            nickName: ''
          },
        });
        return false;
      }
    },

    logout() {

      sessionStorage.clear();
      const { redirect } = getPageQuery(); // Note: There may be security issues, please note

      if (window.location.pathname !== '/login' && !redirect) {
        history.replace({
          pathname: '/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
