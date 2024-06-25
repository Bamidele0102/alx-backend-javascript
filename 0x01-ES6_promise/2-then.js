export function handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        if (success) {
          resolve({ status: 200, body: 'Success' });
        } else {
          reject(new Error('The fake API is not working currently'));
        }
      });
    }
    promise
    result = 'Got a response from the API';
    .then(result => console.log(result));
