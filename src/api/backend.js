
const BASE_URL = 'http://localhost:8083/';

const API = {
  call: async (urlPath, method, payload, header) => {
    const accessToken = localStorage.getItem('accessToken');
    const headerOptions = { "Content-Type": "application/json" };
    if (accessToken) {
      headerOptions.Authorization = "Bearer " + accessToken;
    }
    console.log("accessToken : ", accessToken)
    const requestOptions = {
      method: method,
      headers: headerOptions,
    };
    if (payload) {
      requestOptions.body = JSON.stringify(payload)
    }
    const url = `${BASE_URL}${urlPath}`;
    return await fetch(url, {
      method: method,
      headers: headerOptions,
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        return {
          success: true,
          res: data
        }
      })
      .catch(error => {
        return {
          success: false,
          message: error
        }
      });
    }
  }

export default API;