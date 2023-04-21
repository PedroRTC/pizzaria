function fetchJson(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

function productsResponse() {
  return fetchJson(`cardapio.json`);
}
