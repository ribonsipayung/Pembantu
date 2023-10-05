import React from "react";
import { useEffect, useState } from "react";
// import StarImg from "../../../Assets/star.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { ASSISTANTBYIDPROFESSION } from "../../../Utils/endpoint";

const ProfessionById = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    axios
      .get(ASSISTANTBYIDPROFESSION + `${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-gray-100">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#4313E1" loading={isLoading} size={30} />
        </div>
      ) : data.length === 0 ? (
        <div className="flex justify-center items-center h-screen font-poppins">
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white w-1/2 sm:w-1/3 h-44 p-8 rounded-md shadow-md flex flex-col justify-center items-center">
                <p className="text-center">Data belum tersedia!</p>
                <button
                  className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-4 rounded mt-10"
                  onClick={() => {
                    setShowModal(false);
                    navigate("/");
                  }}
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        // {data?.map((item, index) => (
        //   <div key={index} className="col-span-4 sm:col-span-3 h-full">
        //     {/* ... konten lainnya ... */}
        //   </div>
        //   <div className="col-span-4 sm:col-span-9">
        //     {/* ... konten lainnya ... */}
        //   </div>
        // ))}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 font-poppins">
            {data?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="col-span-4 sm:col-span-3 h-full">
                  <div className="bg-white shadow rounded-lg p-6 h-full">
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
                      <h1 className="text-md md:text-md font-bold">{item?.name}</h1>
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
                      {/* <div className="mt-4 flex flex-wrap gap-4 justify-center">
                      <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
                        PESAN
                      </button>
                      <button className="bg-[#F59E0B] hover:bg-[#FCD34D] text-black-800 py-2 px-4 rounded">
                        INTERVIEW
                      </button>
                    </div> */}
                    </div>
                    <hr className="my-2 border-t border-gray-300 mt-4" />
                    <div className="flex flex-col">
                      <ul>
                        <li className="mb-2">Umur: {item?.age}</li>
                        <li className="mb-2">Lokasi: {item?.city}</li>
                        <li className="mb-2">Provinsi: {item?.province}</li>
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
                                Link
                              </a>
                            </>
                          ) : (
                            "CV: -"
                          )}
                        </li>
                      </ul>
                    </div>
                    <h2 className="text-m font-bold mt-4 mb-2">
                      Wilayah Kerja
                    </h2>
                    <p>{item?.scope_area}</p>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-9">
                  <div className="bg-white shadow rounded-lg p-6 h-full w-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-2">Deskripsi</h2>
                      <p className="text-gray-700 text-justify">{item?.desc}</p>
                      <h2 className="text-xl font-bold mt-6 mb-2">
                        Keterampilan
                      </h2>
                      <ul className="list-disc pl-6 grid grid-cols-2">
                        {item?.skills?.map((item, index) => {
                          // console.log(item);
                          return <li key={index}  className="mb-1 p-1 mr-6">{item?.name}</li>;
                        })}
                      </ul>
                    </div>
                    
                    <div className="justify-start">
                      <button
                        onClick={() =>
                          navigate("/detail-profession/" + item?.id)
                        }
                        className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-10 rounded mt-1"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionById;
