import axiosConfig from "../axios";

export async function login({ email, password, rememberMe }) {
  const response = await axiosConfig.post("/auth/login", {
    email,
    password,
  });

  const data = response.data;

  if (data.success && data.data) {
    if (data.token) {
      if (rememberMe) localStorage.setItem("token", data.token);
      sessionStorage.setItem("token", data.token);
    }

    return { ...data, data: data.data };
  }

  return data;
}

export async function register({ email, password, firstName, lastName }) {
  const response = await axiosConfig.post("/auth/register", {
    email,
    password,
    firstName,
    lastName,
  });

  const data = response.data;

  if (data.success && data.data) {
    if (data.token) {
      sessionStorage.setItem("token", data.token);
    }

    return { ...data, data: data.data };
  }

  return data;
}

export async function logout() {
  sessionStorage.removeItem("token");
  localStorage.removeItem("token");
  return { success: true, message: "Logged out successfully" };
}

export async function checkAuth() {
  const response = await axiosConfig.get("/auth");
  const data = response.data;

  if (data.success && data.data) {
    return { ...data, data: data.data };
  }

  return data;
}
