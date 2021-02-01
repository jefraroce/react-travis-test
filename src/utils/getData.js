const getData = (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.error('Error fetching data: ', error));
};

export default getData;
