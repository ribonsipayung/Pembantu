import Image from "../../Assets/Banner.svg";
// import StarImg from "../../Assets/star.svg";
import Icon1 from "../../Assets/icon/1.svg";
import Icon2 from "../../Assets/icon/2.svg";
import Icon3 from "../../Assets/icon/3.svg";
import Layanan1 from "../../Assets/layanan/1.svg";
import Layanan2 from "../../Assets/layanan/2.svg";
import Layanan3 from "../../Assets/layanan/3.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../../Assets/defaultImage.png";
import { ClipLoader } from "react-spinners";
import { ASSISTANT, PROFESI } from "../../Utils/endpoint";

const Home = () => {
  const [selectedProfesi, setSelectedProfesi] = useState("");
  const [selectedAgama, setSelectedAgama] = useState("");
  const [selectedUmur, setSelectedUmur] = useState("");
  const [data2, setData2] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(PROFESI)
      .then((res) => {
        setData2(res.data);
        setIsLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(ASSISTANT)
      .then((res) => {
        setData(res.data);
        setIsLoading2(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading2(false);
      });
  }, []);
  // console.log(data);

  const filteredData = data.filter((item) => {
    // console.log(item?.age)
    const filterByProfesi =
      selectedProfesi === "" ||
      item?.profession_detail?.name === selectedProfesi;
    const filterByAgama =
      selectedAgama === "" || item?.religion === selectedAgama;
    const filterByUmur =
      selectedUmur === "" || String(item?.age) === selectedUmur;

    return filterByProfesi && filterByAgama && filterByUmur;
  });

  function formatNumber(number) {
    if (number) {
      return new Intl.NumberFormat("id-ID").format(number);
    } else {
      return "-";
    }
  }
  // function scrollToTop() {
  //   const element = document.getElementById('top'); // Ganti 'top' dengan ID elemen yang ingin ditampilkan di bagian atas
  //   element.scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <div>
      {/* Section Banner */}
      <section
        className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center flex-col gap-3 text-white font-poppins px-12"
        style={{
          backgroundImage: "url(" + Image + ")",
        }}
      >
        <h1 className="font-semibold lg:text-5xl text-center text-[30px]">
          Selamat Datang
        </h1>
        <p className="lg:text-md text-sm text-center">
          Kami memiliki berbagai pekerja profesi
        </p>
        <p className="lg:text-md text-sm text-center">
          Penyedia layanan profesional dengan kemudahan dan kenyamanan pesanan
          di seluruh Indonesia
        </p>
      </section>

      {/* Section List Profesi */}
      <section className="w-full py-10 lg:py-24 ">
        <div className="flex flex-col items-center ">
          <h1 className="font-poppins text-2xl lg:text-5xl font-medium">
            Seluruh Profesi
          </h1>
          <div className="border-4 w-10 lg:w-20 border-[#98E3F5]"></div>
        </div>
        <div>
          <p className="font-poppins text-center text-sm lg:text-base mt-6">
            Silahkan Pilih Jenis Profesi Yang Anda Inginkan
          </p>
        </div>
        <div className="flex justify-center lg:justify-items-center flex-wrap gap-4 mt-10 mb-10">
          {isLoading ? (
            <div className="flex justify-center items-center ">
              <ClipLoader color="#4313E1" loading={isLoading} size={30} />
            </div>
          ) : (
            data2.map((item, index) => {
              const iconSrc = item?.icon || defaultImage;
              return (
                <section
                  key={index}
                  onClick={() => navigate(`/profession/${item?.id}`)}
                  // onClick={() => navigate(`/${item?.name?.toLowerCase()}`)}
                  className="w-32 lg:w-30 h-32 lg:h-30 bg-[#3366CC] rounded-2xl flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={iconSrc}
                      alt="Img"
                      className="w-10 md:w-16 h-10 md:h-16 object-cover"
                    />
                    <p className="text-white text-center mt-2 overflow-hidden text-ellipsis">
                      {item?.name}
                    </p>
                  </div>
                </section>
              );
            })
          )}
        </div>
      </section>

      {/* Section List Volunteer */}
      <section className="w-full py-24 bg-[#4313E1] font-poppins">
        <div className="flex flex-col items-center">
          <h1 className="font-poppins text-2xl lg:text-5xl font-medium text-white">
            Seluruh Profesi
          </h1>
          <div className="border-4 w-10 lg:w-20 border-[#98E3F5]"></div>
        </div>
        <div className="flex lg:gap-12 gap-4 flex-wrap justify-center py-10">
          <label>
            <select
              value={selectedProfesi}
              onChange={(e) => setSelectedProfesi(e.target.value)}
              className="outline-none rounded-md pt-1 pb-1 px-2 "
              style={{ minWidth: "270px" }}
              placeholder="Pilih Profesi"
            >
              <option value="">Pilih Profesi</option>
              <option value="ART">ART</option>
              <option value="Baby Siter">Baby Siter</option>
              <option value="Security">Security</option>
              <option value="Cleaning Service">Cleaning Service</option>
            </select>
          </label>
          <div>
            <select
              value={selectedAgama}
              onChange={(e) => setSelectedAgama(e.target.value)}
              className="outline-none rounded-md pt-1 pb-1 px-2"
              style={{ minWidth: "270px" }}
              placeholder="Pilih Agama"
            >
              <option value="">Pilih Agama</option>
              <option value="Islam">Islam</option>
              <option value="Kristen Protestan">Kristen Protestan</option>
              <option value="Katolik">Katolik</option>
              <option value="Budha">Budha</option>
              <option value="Hindu">Hindu</option>
            </select>
          </div>
          <div>
            <select
              value={selectedUmur}
              onChange={(e) => setSelectedUmur(e.target.value)}
              className="outline-none rounded-md pt-1 pb-1 px-2"
              style={{ minWidth: "270px" }}
              placeholder="Umur"
            >
              <option value="">Pilih Umur</option>
              <option value={`${34}-${50}`}>34-50</option>
              <option value="5">5</option>
              <option value="24">24</option>
              {/* <option value="34-50">34-50</option> */}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-40 px-10 ">
          {isLoading2 ? (
            <div className="flex justify-center items-center ">
              <ClipLoader color="#FFFFFF" loading={isLoading} size={30} />
            </div>
          ) : (
            filteredData
              .filter((x, y) => y < 4)
              .map((item, index) => {
                // console.log(item?.profession_detail?.icon)
                return (
                  <div key={index} className="bg-white shadow rounded-lg p-6 ">
                    <div className="flex flex-col items-center">
                      <div
                        className="h-24 w-24 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                        style={{
                          backgroundImage: `url(${item?.icon})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center top",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "",
                          boxShadow: "none",
                          transition: "box-shadow 300ms ease-in-out",
                          cursor: "pointer",
                        }}
                      ></div>

                      <h1 className="text-md text-center font-bold">
                        {item?.name}
                      </h1>
                      <p className="text-gray-600">
                        {item?.profession_detail?.name}
                      </p>
                      {/* <div className="flex gap-1">
                      <img src={StarImg} alt="" width={15} />
                      <img src={StarImg} alt="" width={15} />
                      <img src={StarImg} alt="" width={15} />
                      <img src={StarImg} alt="" width={15} />
                      <img src={StarImg} alt="" width={15} />
                    </div> */}
                      <div className="mt-4 flex flex-wrap gap-4 justify-center">
                        <button className="text-black-800 py-1 px-2 text-xl">
                          Rp {formatNumber(item?.salary)}
                        </button>
                      </div>
                    </div>
                    <hr className="my-2 border-t border-gray-300 mt-4" />
                    <div className="flex flex-col">
                      <ul>
                        <li className="mb-2">Umur: {item?.age}</li>
                        <li className="mb-2">Lokasi: {item?.city}</li>
                        <li className="mb-2">Provinsi: {item?.province}</li>
                        <li className="mb-2">Agama: {item?.religion}</li>
                        <li className="mb-2">
                          {item?.cv ? (
                            <>
                              CV:{" "}
                              <a
                                className="text-blue-500 hover:text-blue-700"
                                href={item?.cv}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Klik disini
                              </a>
                            </>
                          ) : (
                            "CV: -"
                          )}
                        </li>
                        <h2 className="text-m font-bold mt-4 mb-2">
                          Wilayah Kerja
                        </h2>
                        {item?.scope_area ? <p>{item.scope_area}</p> : <p>-</p>}
                      </ul>
                    </div>
                    {item && (
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() =>
                            navigate("/detail-profession/" + item?.id)
                          }
                          className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-20 rounded mt-4"
                        >
                          Detail
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/profesi")}
            className="bg-white hover:text-blue-500 py-1 px-10 rounded mt-8"
          >
            Lihat Lainnya...
          </button>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="flex flex-col items-center">
          <h1 className="font-poppins text-2xl lg:text-5xl font-medium">
            Keunggulan Maleo
          </h1>
          <div className="border-4 w-10 lg:w-20 border-[#98E3F5]"></div>
        </div>
        <div className="py-12 flex flex-col gap-6 font-poppins">
          <section className="flex flex-col lg:flex-row lg:gap-24 gap-6 lg:px-48 px-12">
            <img src={Icon1} alt="" className="basis-1/2 order-0 w-full" />
            <div className="basis-1/2 flex flex-col gap-3 justify-center">
              <h1 className="bg-[#4313E1] w-32 rounded-full p-3 text-white text-center">
                Top Pekerja
              </h1>
              <p>
                Pekerja telah melalui seleksi dan proses verifikasi dari
                Pembantuku
              </p>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row lg:gap-24 gap-6 lg:px-48 px-12">
            <img src={Icon2} alt="" className="basis-1/2 lg:order-1 order-0" />
            <div className="basis-1/2 flex flex-col gap-3 justify-center items-end">
              <h1 className="bg-[#4313E1] w-62 rounded-full p-3 text-white text-center">
                Jangkauan Layanan
              </h1>
              <p className="text-right">
                Kami menyediakan pengiriman pekerja hingga di seluruh Indonesia
              </p>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row gap-24 lg:px-48 px-12">
            <img src={Icon3} alt="" className="basis-1/2 w-full" />
            <div className="basis-1/2 flex flex-col gap-3 justify-center">
              <h1 className="bg-[#4313E1] w-56 rounded-full p-3 text-white text-center">
                Jaminan Pembayaran
              </h1>
              <p>
                Berbagai macam metode pembayaran virtual hingga cash on delevery
              </p>
            </div>
          </section>
        </div>
      </section>

      {/*  */}
      <section className="px-4 lg:pt-24 pb-24 sm:px-6 lg:px-8 font-poppins">
        <div className="bg-[#4313E1] mx-auto max-w-7xl rounded-3xl py-12">
          <div className="flex flex-col items-center">
            <h1 className="font-poppins text-4xl font-medium text-white">
              Layanan Kami
            </h1>
            <div className="border-4 w-20 border-cyan-300"></div>
          </div>
          <section className="flex flex-wrap gap-8 sm:gap-12 justify-center items-center my-12">
            <div className="text-white flex items-center gap-4 sm:gap-8">
              <img src={Layanan1} alt="Layanan1" className="w-16 sm:w-28" />
              <h1 className="text-lg sm:text-xl">Interview</h1>
            </div>
            <div className="text-white flex items-center gap-4 sm:gap-8">
              <img src={Layanan2} alt="Layanan2" className="w-16 sm:w-28" />
              <h1 className="text-lg sm:text-xl">Indent</h1>
            </div>
            <div className="text-white flex items-center gap-4 sm:gap-8">
              <img src={Layanan3} alt="Layanan3" className="w-16 sm:w-28" />
              <h1 className="text-lg sm:text-xl">Pemesanan</h1>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Home;
