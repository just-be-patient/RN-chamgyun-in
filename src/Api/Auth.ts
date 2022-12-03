import Api from './api';

interface LocalLoginParmas {
  email: string;
  password: string;
}

export default class Auth extends Api {
  public static async localLogin({email, password}: LocalLoginParmas) {
    const res = await Api.apiPost('/auth/login/local', {email, password});

    if (res?.status === 200) {
      return 'SUCCESS';
    } else {
      return 'FAILED';
    }
  }
}
