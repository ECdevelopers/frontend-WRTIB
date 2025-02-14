export const login = () => {
  window.location.href = "/api/auth/discord";
};

export const logout = () => {
  localStorage.removeItem("jwt_token");
  window.history.replaceState(null, "", "/");
  window.location.reload();
};
