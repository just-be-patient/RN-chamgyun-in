import Api from './api';

export default class Interest extends Api {
  public static async getMyInterest() {
    const data = await this.apiGet('/user/interest');
    return data;
  }
}
