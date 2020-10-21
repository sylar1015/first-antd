import { parse } from 'querystring';
import request from '@/utils/request';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getUserId = () => {
  return '' || sessionStorage.getItem('userId');
}

export const setUserId = (userId) => {
  sessionStorage.setItem('userId', userId);
}

export const getNickName = () => {
  return '' || sessionStorage.getItem('nickName');
}

export const setNickName = (nickName) => {
  sessionStorage.setItem('nickName', nickName);
}

export const formatParams = (model, action, params) => {
  return {
    head:{
      model,
      action,
      userId: getUserId()
    },
    body:params
  }
}

export const formatRequest = (model, action, params) => {
  const data = formatParams(model, action, params);
  return request('/api/route',
    {
      method: 'POST',
      data
    });
}