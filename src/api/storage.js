const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export { storeToken, getToken };
