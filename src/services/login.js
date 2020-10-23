import { formatParams, formatRequest } from '@/utils/utils';
import { loginRequest } from '@/utils/request';

export async function accountLogin(params) {
  const data = formatParams('userService', 'login', params);

  return loginRequest('/api/route', {
    method: 'POST',
    data,
  });
}

export async function getUserMenuList(parmas) {
  return formatRequest('userService', 'getUserMenuList', params);
}

export async function getPowerListByUserId(params) {
  return formatRequest('userService', 'getPowerListByUserId', params);
}
