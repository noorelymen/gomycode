import axios from "axios";
export const login = ({ email, password }) => {
  axios
    .post("http://localhost:4000/api/auth/login", { email, password })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      window.location = "/admin";
    })
    .catch((err) => {
      alert("Incorrect credentials");
    });
};

//OLD WAY
// export const login = ({ email, password }) => {
//   // send email and password to backend
//   if (email === "a@a.com" && password === "123456789") {
//     const token = "1234";
//     localStorage.setItem("token", token);
//     window.location = "/admin/movies";
//   } else {
//     alert("wrong email or password");
//   }
// };

export const logout = () => {
  const token = localStorage.getItem("token");
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    window.location = "/login";
  }
};
