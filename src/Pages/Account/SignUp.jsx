import { useNavigate } from "react-router-dom";
import Img from "../../Assets/Banner.svg";
import { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import { AUTH_URL_REGISTRATION } from "../../Utils/endpoint";

const SignUp = () => {
  // const router = useRouter();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("fullname", e.target.name.value);
    data.append("phone", e.target.phone.value);
    data.append("email", e.target.email.value);
    data.append("status", e.target.tipe.value);
    data.append("password", e.target.password.value);
    axios
      .post(AUTH_URL_REGISTRATION, data)
      .then((res) => {
        console.log(res.data)
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err.response);
        setError(true);
        console.log(err.response.data.password);
        if (err.response.data.password) {
          setMsg(err.response.data.password[0]);
        } else if (err.response.data.email) {
          setMsg(err.response.data.email[0]);
        } else {
          setMsg("Silahkan Periksa Kembali Data Anda");
        }
        setLoading(false);

        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-fixed flex items-center justify-center font-poppins"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6 bg-white bg-opacity-80 rounded-md shadow-lg p-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Tipe Pendaftar
              </label>
              <div className="mt-2">
                <select
                  id="tipe"
                  name="tipe"
                  type="tipe"
                  autoComplete="tipe"
                  required
                  className="w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm hover:blue"
                >
                  <option value="">Pilih tipe pendaftar</option>
                  <option value="Pencari Pekerja">Pencari Pekerja</option>
                  <option value="Pekerja">Pekerja</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Masukan Nama Lengkap
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Masukan Alamat Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Telepon/WhatsApp
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="phone"
                  required
                  className="w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  required
                  className="w-full rounded-md border-gray-300 py-2 px-4 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <p className="text-center block  text-[14px]">
              Sudah punya akun? {""}
              <span
                onClick={() => navigate("/login")}
                style={{ color: "#4F46E5", cursor: "pointer" }}
              >
                Masuk disini
              </span>
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
