export default class Api {
  private static readonly baseURL =
    'http://api-chi.ap-northeast-2.elasticbeanstalk.com';
  private static readonly defaultHeader = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };

  protected static async apiGet(url: string, params?: any) {
    const requestUrl = params
      ? this.baseURL + url + '?' + new URLSearchParams(params)
      : this.baseURL + url;
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: this.defaultHeader,
    })
      .then(res => res.json())
      .then(data => data)
      .catch(e => console.error(e));

    return response;
  }

  protected static async apiPost(url: string, body: Object) {
    const response = await fetch(this.baseURL + url, {
      method: 'POST',
      headers: this.defaultHeader,
      body: JSON.stringify(body),
    })
      .then(res => res)
      .catch(e => console.error(e));

    return response;
  }
}
