const baseURL = 'http://localhost:5050';

export async function postToServer(path: string, body: string) {
  let responseData = null;
  try {
    const response = await fetch(
      // process.env.REACT_APP_URL_BASE  +
      baseURL + path,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      },
    );
    if (!response.ok) {
      return Promise.reject(response);
    } else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}
