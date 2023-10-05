// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ASSISTANT, BOOKING } from "../../../../Utils/endpoint";
import { LOCALSTORAGE_TOKEN } from "../../../../Utils/types";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const DetailOrderTransactions = () => {
  const { id, assistant } = useParams();
  const [data2, setData2] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const data = [
  //   {
  //     nama: "ANI",
  //     profesi: "PRT",
  //     gambar: Img1,
  //     umur: 19,
  //     lokasi: "TANGERANG",
  //     provinsi: "BANTEN",
  //     pengalaman: "2 Tahun",
  //     wilayahKerja: "JABODETABEK",
  //     deskripsi:
  //       "Mba ani art berusia 19th berpengalaman menjadi art dijakarta selatan sambil momong anak usia 2,5th selama 1th bisa masak untuk anak dan dewasa (sederhana) seperti tumis2 sop bening,balado omlet ayam goreng ikan dll. Mba ani baik telaten inisiatif dan tidak pilih2 pekerjaan. Mba ani siap sambil momong anak siap bekerja sama dengan pekerja lain. Mba ani siap menerima kritik dan saran dari majikan mba ani tidak mabok perjalanan. Mba ani sudah vaksin 3x dalam keadaan sehat walafiat dan siap bekerja hari ini juga.",
  //     keterampilan: [
  //       "Menyuci Pakaian",
  //       "Menyuci Piring",
  //       "Menyetrika Pakaian",
  //       "Membersihkan Halaman Rumah",
  //       "Memasak Sederhana",
  //       "Mengendarai Motor",
  //     ],
  //   },
  // ];
  useEffect(() => {
    axios
      .get(ASSISTANT + `${assistant}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // useEffect(() => {
  //   const options = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
  //     },
  //   };
  //   const obj = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERDETAIL"));

  //   axios
  //     .get(BOOKINGASSISTANTBYIDUSER + `${obj.id}` , options)
  //     .then((res) => {
  //       setPaymentData(res.data);
  //       setIsLoading(false);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // }, [id]);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    };
    axios
      .get(BOOKING + `${id}`, options)
      .then((res) => {
        setData2(res.data);
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

  // console.log(data2);

  return (
    <>
      <div className="bg-gray-100">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen ">
            <ClipLoader color="#4313E1" loading={isLoading} size={30} />
          </div>
        ) : (
          <div className="container mx-auto py-8">
            <div className="col-span-4 gap-6 px-4 mt-2 mb-8">
              <div className="bg-white shadow rounded-lg p-6 overflow-x-auto font-poppins">
                <div className="w-full overflow-x-auto">
                  <table className="min-w-full text-left text-md">
                    <tbody>
                      <th className="px-4 py-2 w-1/4 border">No. Transaksi</th>
                      <td className="px-4 py-2 w-1/4 border">
                        {data2?.order_detail?.order_id}
                      </td>
                      <th className="px-4 py-2 w-1/4 border">
                        Tanggal Transaksi
                      </th>
                      <td className="px-4 py-2 w-1/4 border">
                        {data2?.order_detail?.created_at}
                      </td>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">Alamat Antar</th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data2?.destination}
                        </td>
                        <th className="px-4 py-2 w-1/4 border">Jam Antar</th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data2?.start_time}
                        </td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Tanggal Antar
                        </th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data2?.start_date}
                        </td>
                        <th className="px-4 py-2 w-1/4 border">Status Order</th>
                        <td className="px-4 py-2 w-1/4 border">
                          {data2?.order_detail?.status}
                        </td>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 w-1/4 border">
                          Total Pembayaran
                        </th>
                        <th className="px-4 py-2 w-1/4 border">
                          Rp {formatNumber(data2?.order_detail?.total_price)}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

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
          </div>
        )}
      </div>
    </>
  );
};
export default DetailOrderTransactions;
