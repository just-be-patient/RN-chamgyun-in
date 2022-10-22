const baseURL = 'http://api-alpha.ap-northeast-2.elasticbeanstalk.com';
const defaultHeader = {'Content-Type': 'application/json', accept: '*/*'};

const apiGet = <T>(url: string, params?: any) => {
  const requestUrl = params
    ? baseURL + url + '?' + new URLSearchParams(params)
    : baseURL + url;
  console.log(requestUrl);
  const response = fetch(requestUrl, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });

  return response;
};

const apiPost = <T>(url: string, body: Object) => {
  const response = fetch(baseURL + url, {
    method: 'POST',
    headers: defaultHeader,
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });

  return response;
};

export {apiGet, apiPost};
