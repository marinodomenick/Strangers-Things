const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/";

//Register User, imports to Register.jsx

export const registerUser = async (username, password) => {
  const response = await fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};
//fetchme
export const fetchMe = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};


