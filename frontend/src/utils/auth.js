// frontend/src/utils/auth.js

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  // Dispatch custom event to notify other components in same tab
  window.dispatchEvent(new CustomEvent('userUpdated', { detail: user }));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  // Dispatch custom event for logout
  window.dispatchEvent(new CustomEvent('userUpdated', { detail: null }));
};
