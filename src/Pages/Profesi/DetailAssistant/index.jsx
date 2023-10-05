import { useLocation, useNavigate, useParams } from "react-router-dom";
// import StarImg from "../../../Assets/star.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { ASSISTANT } from "../../../Utils/endpoint";
const DetailProfession = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const history = useLocation();
  // console.log(history);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(ASSISTANT + `${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  function formatNumber(number) {
    if (number) {
      return new Intl.NumberFormat("id-ID").format(number);
    } else {
      return "-";
    }
  }
  const handlePesanClick = () => {
    const token = localStorage.getItem("LOCALSTORAGE_TOKEN");
    const userDetail = localStorage.getItem("LOCALSTORAGE_USERDETAIL");

    const isUserLoggedIn = token && userDetail;
    if (isUserLoggedIn) {
      navigate(`/pesan/${data?.id}/${data?.profession}`);
    } else {
      navigate("/login", { state: { data: history.pathname } });
    }
  };
  // console.log(data);
  // console.log(data.profession);

  return (
    <>
      <div className="bg-gray-100">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4313E1" loading={isLoading} size={30} />
          </div>
        ) : (
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 font-poppins">
              <>
                <div className="col-span-4 sm:col-span-3 ">
                  <div className="bg-white shadow rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center">
                      <div
                        className="h-24 w-24 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                        style={{
                          backgroundImage: `url(${data?.icon})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center top",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "",
                          boxShadow: "none",
                          transition: "box-shadow 300ms ease-in-out",
                          cursor: "pointer",
                        }}
                      ></div>
                      <h1 className="text-md md:text-md font-bold">
                        {data?.name}
                      </h1>
                      <p className="text-gray-600">
                        {data?.profession_detail?.name}
                      </p>
                      {/* <div className="flex gap-1">
                        <img src={StarImg} alt="" width={15} />
                        <img src={StarImg} alt="" width={15} />
                        <img src={StarImg} alt="" width={15} />
                        <img src={StarImg} alt="" width={15} />
                        <img src={StarImg} alt="" width={15} />
                      </div> */}
                      <div className="mt-4 flex flex-wrap gap-4 justify-center">
                        <button
                          onClick={handlePesanClick}
                          className="bg-blue-400 hover:bg-blue-300 text-white py-2 px-4 rounded"
                        >
                          PESAN
                        </button>
                        {/* <button
                          onClick={() => navigate("/interview")}
                          className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded"
                        >
                          INTERVIEW
                        </button> */}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4 justify-center">
                        <button className="text-black-800 py-1 px-2 text-xl">
                          Rp {formatNumber(data?.salary)}
                        </button>
                      </div>
                    </div>
                    <hr className="my-2 border-t border-gray-300 mt-4" />
                    <div className="flex flex-col">
                      {/* <ul>
                        <li className="mb-2">Umur: {data.umur}</li>
                        <li className="mb-2">Lokasi: {data.lokasi}</li>
                        <li className="mb-2">Provinsi: {data.provinsi}</li>
                        <li className="mb-2">Pengalaman: {data.pengalaman}</li>
                      </ul> */}
                    </div>
                    <h2 className="text-m font-bold mt-4 mb-2">
                      Wilayah Kerja
                    </h2>
                    <p>{data?.scope_area}</p>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-9 flex ">
                  <div className="bg-white shadow rounded-lg p-6 h-full w-full">
                    <div>
                      <h2 className="text-xl font-bold mb-2">Deskripsi</h2>
                      <p className="text-gray-700 text-justify">{data?.desc}</p>
                      <h2 className="text-xl font-bold mt-6 mb-2">
                        Keterampilan
                      </h2>
                      <ul className="list-disc pl-6 grid grid-cols-2">
                        {data?.skills?.map((item, index) => {
                          // console.log(item);
                          return (
                            <li key={index} className="mb-1 p-1 mr-6">
                              {item?.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            </div>

            <div className="col-span-4 gap-6 px-4 mt-8">
              <div className="bg-white shadow rounded-lg p-6 overflow-x-auto font-poppins">
                <h2 className="text-xl font-bold mb-4 text-center">RESUME</h2>
                <div className="w-full overflow-x-auto mb-6">
                  {data?.cv && (
                    <embed
                      src={data?.cv}
                      className="md:h-[650px] w-full h-[250px]"
                    />
                  )}
                </div>
                <div className="w-full overflow-x-auto">
                  <table className="min-w-full text-left text-md">
                    <tbody>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">Nama</th>
                        <td className="px-4 py-2 w-1/4 border">{data?.name}</td>
                        <th className="px-4 py-2 w-1/4 border">Pengalaman</th>
                        <td className="px-4 py-2 w-1/4 border"></td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Alamat Lengkap
                        </th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data?.address}
                        </td>
                        <th className="px-4 py-2 w-1/4 border">
                          Pendidikan Terakhir
                        </th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data?.education}
                        </td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Jenis Kelamin
                        </th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data?.gender}
                        </td>
                        <th className="px-4 py-2 w-1/4 border">
                          Status Pernikahan
                        </th>
                        <td className="px-4 py-2 w-1/4 border"></td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">Agama</th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data?.religion}
                        </td>
                        <th className="px-4 py-2 w-1/4 border">
                          Gaji Yang Diharapkan
                        </th>
                        <td className="px-4 py-2 w-1/4 border">
                          Rp {formatNumber(data?.salary)}
                        </td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Perlu Surat Dokter
                        </th>
                        <td className="px-4 py-2 w-1/4 border"></td>
                        <th className="px-4 py-2 w-1/4 border">
                          Perlu Surat Polisi
                        </th>
                        <td className="px-4 py-2 w-1/4 border"></td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Lokasi Sekarang
                        </th>
                        <td className="px-4 py-2 w-1/4 border">{data?.city}</td>
                        <th className="px-4 py-2 w-1/4 border">
                          Pernah Bekerja Diluar Negri
                        </th>
                        <td className="px-4 py-2 w-1/4 border"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DetailProfession;
