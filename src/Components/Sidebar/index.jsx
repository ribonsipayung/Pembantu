import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Features/sidebar/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { PROFESI } from "../../Utils/endpoint";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const { open } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pembantukuRef = useRef(null);
  const profilRef = useRef(null);
  const akunRef = useRef(null);

  const sidebarActiveStyles = `fixed top-0 font-poppins left-0 z-[999] w-full h-auto bg-[#4313E1] px-12 overflow-auto transition-all duration-200 ease-in-out scroll-y ${
    open ? "" : "-translate-y-full"
  }`;

  const [isPembantukuOpen, setIsPembantukuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAkunOpen, setIsAkunOpen] = useState(false);

  const handleTogglePembantuku = () => {
    setIsPembantukuOpen(!isPembantukuOpen);
  };

  const handleToggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const handleToggleAkun = () => {
    setIsAkunOpen(!isAkunOpen);
  };
  useEffect(() => {
    axios
      .get(PROFESI)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        pembantukuRef.current &&
        !pembantukuRef.current.contains(event.target) &&
        profilRef.current &&
        !profilRef.current.contains(event.target) &&
        akunRef.current &&
        !akunRef.current.contains(event.target)
      ) {
        dispatch(toggleSidebar());
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch]);

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

  return (
    <aside className={sidebarActiveStyles}>
      <div className="flex justify-between items-center px-4 py-6">
        <h1 className="text-[40px] font-bold text-white">.Logo</h1>
        <FiAlignJustify
          size={30}
          className="text-white cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
      {/* add your sidebar content here */}
      <div className="flex flex-col items-center">
        <ul className="gap-9 items-center text-white flex flex-col justify-center">
          <li
            onClick={() => {
              navigate("/");
              dispatch(toggleSidebar());
            }}
          >
            Home
          </li>
          <li className="text-center flex flex-col items-center">
            <div
              className="flex gap-2 items-center"
              onClick={handleTogglePembantuku}
            >
              Profesi
              <FiChevronDown />
            </div>
            {isPembantukuOpen && (
              <ul className="mt-2 p-4 bg-white rounded-lg w-[180px] text-black flex flex-col gap-2">
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(`/profession/${item?.id}`);
                        dispatch(toggleSidebar());
                      }}
                    >
                      {item?.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li className="text-center flex flex-col items-center">
            <div
              className="flex gap-2 items-center"
              onClick={handleToggleProfile}
            >
              Profile
              <FiChevronDown />
            </div>
            {isProfileOpen && (
              <ul className="mt-2 p-4 bg-white rounded-lg w-[180px] text-black flex flex-col gap-2">
                <li
                  onClick={() => {
                    navigate("/article");
                    dispatch(toggleSidebar());
                  }}
                >
                  Artikel
                </li>
                <li
                  onClick={() => {
                    navigate("/contact-us");
                    dispatch(toggleSidebar());
                  }}
                >
                  Kontak Kami
                </li>
                <li
                  onClick={() => {
                    navigate("/about-us");
                    dispatch(toggleSidebar());
                  }}
                >
                  Tentang Kami
                </li>
              </ul>
            )}
          </li>
          {localStorage.getItem("LOCALSTORAGE_USERDETAIL") ? (
            <li className="text-center flex flex-col items-center mb-8">
              <div
                className="flex gap-2 items-center "
                onClick={handleToggleAkun}
              >
                {`Halo, ${obj.fullname}`}
                <FiChevronDown />
              </div>
              {isAkunOpen && (
                <ul className="mt-2 mb-4 p-4 bg-white rounded-lg w-full text-black flex flex-col gap-2">
                  <li
                    onClick={() => {
                      navigate("/account");
                      dispatch(toggleSidebar());
                    }}
                  >
                    Dashboard
                  </li>
                  <li
                    onClick={() => {
                      navigate("/order-transactions");
                      dispatch(toggleSidebar());
                    }}
                  >
                    Transaksi Order Saya
                  </li>
                  {/* <li
                    onClick={() => {
                      navigate("/interview-transactions");
                      dispatch(toggleSidebar());
                    }}
                  >
                    Transaksi Wawancara Saya
                  </li> */}
                  <li
                    onClick={() => {
                      dispatch(toggleSidebar());
                      handleLogout();
                    }}
                  >
                    Keluar
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <button
                onClick={() => navigate("/login")}
                className="w-24 bg-blue-400 hover:bg-blue-500 text-white h-[44px] rounded-lg my-9"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
