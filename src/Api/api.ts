export default class Api {
  private static readonly baseURL =
    'http://api-alpha.ap-northeast-2.elasticbeanstalk.com';
  private static readonly defaultHeader = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };

  protected static apiGet(url: string, params?: any) {
    const requestUrl = params
      ? this.baseURL + url + '?' + new URLSearchParams(params)
      : this.baseURL + url;
    console.log(requestUrl);
    const response = fetch(requestUrl, {
      method: 'GET',
    })
      .then(res => res)
      .catch(e => console.error(e));

    return response;
  }

  protected static apiPost(url: string, body: Object) {
    const response = fetch(this.baseURL + url, {
      method: 'POST',
      headers: this.defaultHeader,
      body: JSON.stringify(body),
    })
      .then(res => res)
      .catch(e => console.error(e));

    return response;
  }
}
