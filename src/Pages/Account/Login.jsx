import { useLocation, useNavigate } from "react-router-dom";
import Img from "../../Assets/Banner.svg";
import React from "react";
import { useState } from "react";
import axios from "axios";
import moment from "moment";
import { AUTH_URL_LOGIN, AUTH_URL_USERME } from "../../Utils/endpoint";
import {
  LOCALSTORAGE_TOKEN,
  LOCALSTORAGE_USERDETAIL,
  LOCALSTORAGE_YEAR,
} from "../../Utils/types";
import { message } from "antd";

const Login = () => {
  const history = useLocation();
  console.log(history);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  // const [isVisibleAlert, setVisibleAlert] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    axios
      .post(AUTH_URL_LOGIN, data)
      .then((res) => {
        const token = res.data.auth_token;
        localStorage.setItem(LOCALSTORAGE_TOKEN, token);
        console.log("res 1", res);
        axios
          .get(AUTH_URL_USERME, {
            headers: { Authorization: `Token ${token}` },
          })
          .then((userData) => {
            const userdetail = userData.data;

            console.log("res 2", userdetail);

            localStorage.setItem(
              LOCALSTORAGE_USERDETAIL,
              JSON.stringify(userdetail)
            );
            localStorage.setItem(LOCALSTORAGE_YEAR, moment().format("YYYY"));
            messageApi.open({
              key,
              type: "success",
              content: "Berhasil Login!",
              duration: 2,
            });
            if (userdetail?.status === "Admin") {
              navigate("/dashboard");
            } else {
              if (history.state != null) {
                navigate(history.state.data);
              } else {
                navigate("/");
              }
            }
          })
          .catch(() => {
            messageApi.error({
              key,
              type: "primary",
              content: "Email & password tidak sama!",
              duration: 2,
            });
          });
      })
      .catch(() => {
        // setLoading(false)
        messageApi.error({
          key,
          type: "primary",
          content: "Email & password tidak sama!",
          duration: 2,
        });
      });
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center font-poppins"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {contextHolder}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login
          </h2>

          {/* {loading ? <p>Loading...</p> : ''}
          {errorMsg ? <p>{errorMsg}</p> : ''} */}

          <form
            className="mt-10 space-y-6 bg-white bg-opacity-80 rounded-md shadow-lg p-6"
            onSubmit={onSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <p className="text-center block  text-[14px]">
              Belum punya akun? {""}
              <span
                onClick={() => navigate("/signup")}
                style={{ color: "#4F46E5", cursor: "pointer" }}
              >
                Daftar disini
              </span>
            </p>
            {/* <p className="text-center text-[#4CA7B1] text-[12px] sm:text-[16px]">
            Sudah punya akun?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#F9A826", cursor: "pointer" }}
            >
              Masuk disini
            </span>
          </p> */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:ring-opacity-50"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
