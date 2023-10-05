import { useState, useEffect } from "react";
// import StarImg from "../../../Assets/star.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { ASSISTANT } from "../../../Utils/endpoint";

const AllProfession = () => {
  const [selectedProfesi, setSelectedProfesi] = useState("");
  const [selectedAgama, setSelectedAgama] = useState("");
  const [selectedUmur, setSelectedUmur] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(ASSISTANT)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(data);

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

  return (
    <section className="w-full py-24 bg-gray-100 font-poppins">
      <div className="flex flex-col items-center">
        <h1 className="font-poppins text-2xl lg:text-5xl font-medium ">
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
            {/* <option value={`${18}-${26}`}>18-26</option> */}
            <option value="5">5</option>
            <option value="24">24</option>

            <option value="34-50">34-50</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100 ">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4313E1" loading={isLoading} size={30} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-40 px-12 mb-4 mt-4 ">
            {filteredData.map((item, index) => {
              // console.log(item.id)
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
                        onClick={() => navigate("/detail-profession/" + item.id)}
                        className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-20 rounded mt-4"
                      >
                        Detail
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default AllProfession;
