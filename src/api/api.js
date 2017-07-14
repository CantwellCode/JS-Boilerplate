import 'whatwg-fetch';

const baseUrl = getBaseUrl();

// Handle 'get' requests
export function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Handle 'post' requests
export function post(url, params) {
  var data = new FormData();
  data.append('json', JSON.stringify(params));
  const request = new Request(baseUrl + url, {
    method: 'POST',
    body: data
  });
  return fetch(request).then(onSuccess, onError);
}

// Handle 'delete' requests
export function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

// Handle a successful api call
function onSuccess(response) {
  return response.json();
}

// Handle api call errors
function onError(error) {
  console.error(error); // eslint-disable-line no-console
}

// If the url has parameter 'useMockApi', then return the base url for the mock api
function getBaseUrl() {
  return window.location.hostname === 'localhost' ? 'http://localhost:3001/' : 'http://api.yourapp.domain';
  // return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

// function getQueryStringParameterByName(name, url) {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, '\\$&');
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
//   var results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }
