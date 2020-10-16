const mainServerUrl = 'https://my-json-server.typicode.com/artemveremienko/jsondb/'

export default (url, options = {}, baseUrl = mainServerUrl) => {
  return fetch(baseUrl + url, options)
    .then(response => {
      console.log(response.status)
      if (response.status !== 200) {
        return response.text().then(text => {
          throw new Error(text)
        })
      }

      return response.json();
    })
}
