export const baseURL = "http://localhost:3000/todos";

export function fetchData(url = baseURL, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  };

  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
    });
}
