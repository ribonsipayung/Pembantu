import { useState, useEffect, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../Features/sidebar/sidebarSlice";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PROFESI } from "../../Utils/endpoint";

const Navbar = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const pembantukuRef = useRef(null);
  const profileRef = useRef(null);
  const akunRef = useRef(null);

  const [isPembantukuOpen, setIsPembantukuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAkunOpen, setIsAkunOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        pembantukuRef.current &&
        !pembantukuRef.current.contains(event.target)
      ) {
        setIsPembantukuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (akunRef.current && !akunRef.current.contains(event.target)) {
        setIsAkunOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    axios
      .get(PROFESI)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navbarClasses = `w-full h-28 fixed z-[99] top-0 flex justify-between items-center lg:px-48 px-16 transition-all duration-700 bg-white backdrop-blur-xl shadow-xl sticky`;

  const handleLogout = () => {
    // Hapus item email dan password dari local storage
    localStorage.removeItem("LOCALSTORAGE_TOKEN");
    localStorage.removeItem("LOCALSTORAGE_USERDETAIL");

    // Lakukan tindakan lain setelah logout
    // ...

    // Navigasi ke halaman login
    navigate("/");
  };

  const dataDashboard = localStorage.getItem("LOCALSTORAGE_USERDETAIL");
  const obj = JSON.parse(dataDashboard);
  // const dataDashboard = "LOCALSTORAGE_USERDETAIL"

  // console.log(obj.fullname)

  return (
    <div className={navbarClasses}>
      <h1
        onClick={() => navigate("/")}
        className={`text-[40px] font-bold font-poppins text-blue-600 cursor-pointer`}
      >
        .Logo
      </h1>
      <div className="flex gap-6 font-poppins">
        <FiAlignJustify
          size={30}
          className={`lg:hidden text-blue-600`}
          onClick={() => dispatch(toggleSidebar())}
        />
        <ul className={`lg:flex hidden gap-9 items-center text-blue-600`}>
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </li>
          <li
            ref={pembantukuRef}
            className={`relative flex items-center cursor-pointer ${
              isPembantukuOpen ? "active transition-all" : ""
            }`}
            onClick={() => setIsPembantukuOpen(!isPembantukuOpen)}
          >
            Profesi <FiChevronDown />
            {isPembantukuOpen && (
              <ul className="absolute top-8 left-0 mt-2 p-4 bg-white shadow-lg rounded-lg w-[180px] text-black flex flex-col gap-2">
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:text-blue-600"
                      onClick={() => navigate(`/profession/${item?.id}`)}
                    >
                      {item?.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li
            ref={profileRef}
            className={`relative flex items-center cursor-pointer ${
              isProfileOpen ? "active" : ""
            }`}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            Profile <FiChevronDown />
            {isProfileOpen && (
              <ul className="absolute top-8 left-0 mt-2 p-4 bg-white shadow-lg rounded-lg w-[180px] text-black flex flex-col gap-2">
                <li
                  className="hover:text-blue-600"
                  onClick={() => navigate("/article")}
                >
                  Artikel
                </li>
                <li
                  className="hover:text-blue-600"
                  onClick={() => navigate("/contact-us")}
                >
                  Kontak Kami
                </li>
                <li
                  className="hover:text-blue-600"
                  onClick={() => navigate("/about-us")}
                >
                  Tentang Kami
                </li>
              </ul>
            )}
          </li>
          {localStorage.getItem("LOCALSTORAGE_USERDETAIL") ? (
            <li
              ref={akunRef}
              className={`relative flex items-center cursor-pointer ${
                isAkunOpen ? "active" : ""
              }`}
              onClick={() => setIsAkunOpen(!isAkunOpen)}
            >
              {`Halo, ${obj.fullname}`} <FiChevronDown />
              {isAkunOpen && (
                <ul className="absolute top-8 left-0 mt-2 p-4 bg-white shadow-lg  rounded-lg w-[260px] text-black flex flex-col gap-2">
                  <li
                    className="hover:text-blue-600"
                    onClick={() => navigate("/account")}
                  >
                    Dashboard
                  </li>
                  <li
                    className="hover:text-blue-600"
                    onClick={() => navigate("/order-transactions")}
                  >
                    Transaksi Order Saya
                  </li>
                  {/* <li
                    className="hover:text-blue-600"
                    onClick={() => navigate("/interview-transactions")}
                  >
                    Transaksi Wawancara Saya
                  </li> */}
                  <li className="hover:text-blue-600" onClick={handleLogout}>
                    Keluar
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <button
                onClick={() => navigate("/login")}
                className="w-24 bg-blue-400 hover:bg-blue-500 text-white h-[44px] rounded-lg hidden lg:flex lg:items-center lg:justify-center"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
