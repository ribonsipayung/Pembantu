// import { useNavigate } from "react-router-dom";
import Img1 from "../../../../Assets/profesi/woman2.png";
import StarImg from "../../../../Assets/star.svg";
const DetailInterviewTransactions = () => {
//   const navigate = useNavigate();
  const data = [
    {
      nama: "ANI",
      profesi: "PRT",
      gambar: Img1,
      umur: 19,
      lokasi: "TANGERANG",
      provinsi: "BANTEN",
      pengalaman: "2 Tahun",
      wilayahKerja: "JABODETABEK",
      deskripsi:
        "Mba ani art berusia 19th berpengalaman menjadi art dijakarta selatan sambil momong anak usia 2,5th selama 1th bisa masak untuk anak dan dewasa (sederhana) seperti tumis2 sop bening,balado omlet ayam goreng ikan dll. Mba ani baik telaten inisiatif dan tidak pilih2 pekerjaan. Mba ani siap sambil momong anak siap bekerja sama dengan pekerja lain. Mba ani siap menerima kritik dan saran dari majikan mba ani tidak mabok perjalanan. Mba ani sudah vaksin 3x dalam keadaan sehat walafiat dan siap bekerja hari ini juga.",
      keterampilan: [
        "Menyuci Pakaian",
        "Menyuci Piring",
        "Menyetrika Pakaian",
        "Membersihkan Halaman Rumah",
        "Memasak Sederhana",
        "Mengendarai Motor",
      ],
    },
  ];
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="col-span-4 gap-6 px-4 mt-2 mb-8">
            <div className="bg-white shadow rounded-lg p-6 overflow-x-auto font-poppins">
              <div className="w-full overflow-x-auto">
                <table className="min-w-full text-left text-md">
                  <tbody>
                    <th className="px-4 py-2 w-1/4 border">No. Transaksi</th>
                    <td className="px-4 py-2 w-1/4 border">
                      WWC230524040939-1168
                    </td>
                    <th className="px-4 py-2 w-1/4 border">
                      Tanggal Transaksi
                    </th>
                    <td className="px-4 py-2 w-1/4 border">8 Juni 2023</td>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Pengguna</th>
                      <td className="px-4 py-2 w-1/4 border">Maleo</td>
                      <th className="px-4 py-2 w-1/4 border">
                        Perusahaan/Yayasan
                      </th>
                      <td className="px-4 py-2 w-1/4 border">
                        PT. Maleo Edukasi Teknologi
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">
                        Biaya Administrasi
                      </th>
                      <td className="px-4 py-2 w-1/4 border">Rp 2,200,000</td>
                      <th className="px-4 py-2 w-1/4 border">
                        Informasi Lainnya
                      </th>
                      <td className="px-4 py-2 w-1/4 border">
                        Garansi 2 Bulan dan dapat diganti 1 kali
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Biaya Layanan</th>
                      <td className="px-4 py-2 w-1/4 border">Rp 4,500</td>
                      <th className="px-4 py-2 w-1/4 border">Status Order</th>
                      <td className="px-4 py-2 w-1/4 border">SELESAI</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">
                        Total Pembayaran
                      </th>
                      <td className="px-4 py-2 w-1/4 border">2,204,500</td>
                      <th className="px-4 py-2 w-1/4 border">Pengantaran</th>
                      <td className="px-4 py-2 w-1/4 border">
                        Diantar Tanggal 10 Juni 2023 Pukul 13:00:00
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Alamat Antar</th>
                      <td className="px-4 py-2 w-1/4 border">Educourse.id</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-span-4 gap-6 px-4 mt-8">
            <div className="bg-white shadow rounded-lg p-6 overflow-x-auto font-poppins">
              <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 font-poppins mb-8 ">
                {data.map((item, index) => (
                  <>
                    <div key={index} className="col-span-4 sm:col-span-3 ">
                      <div className="bg-white shadow rounded-lg p-6 h-full">
                        <div className="flex flex-col items-center">
                          <img
                            className="w-24 h-24"
                            src={item.gambar}
                            alt="Gambar Identitas"
                          />
                          <h1 className="text-xl font-bold">{item.nama}</h1>
                          <p className="text-gray-600">{item.profesi}</p>
                          <div className="flex gap-1">
                            <img src={StarImg} alt="" width={15} />
                            <img src={StarImg} alt="" width={15} />
                            <img src={StarImg} alt="" width={15} />
                            <img src={StarImg} alt="" width={15} />
                            <img src={StarImg} alt="" width={15} />
                          </div>
                          {/* <div className="mt-4 flex flex-wrap gap-4 justify-center">
                            <button
                              onClick={() => navigate("/pesan")}
                              className="bg-blue-400 hover:bg-blue-300 text-white py-2 px-4 rounded"
                            >
                              PESAN
                            </button>
                            <button
                              onClick={() => navigate("/interview")}
                              className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded"
                            >
                              INTERVIEW
                            </button>
                            <button className=" text-black-800 py-1 px-2 text-xl">
                              Rp 2,200,000
                            </button>
                          </div> */}
                        </div>
                        <hr className="my-2 border-t border-gray-300 mt-4" />
                        <div className="flex flex-col">
                          {/* <ul>
                        <li className="mb-2">Umur: {item.umur}</li>
                        <li className="mb-2">Lokasi: {item.lokasi}</li>
                        <li className="mb-2">Provinsi: {item.provinsi}</li>
                        <li className="mb-2">Pengalaman: {item.pengalaman}</li>
                      </ul> */}
                        </div>
                        <h2 className="text-m font-bold mt-4 mb-2">
                          Wilayah Kerja
                        </h2>
                        <p>{item.wilayahKerja}</p>
                      </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9 flex ">
                      <div className="bg-white shadow rounded-lg p-6 w-full h-full">
                        {/* <h2 className="text-xl font-bold mb-2">Deskripsi</h2>
                    <p className="text-gray-700 text-justify">
                      {item.deskripsi}
                    </p> */}
                        <h2 className="text-xl font-bold mt-6 mb-2">
                          Keterampilan
                        </h2>
                        <ul>
                          {item.keterampilan.map((skill, index) => (
                            <li key={index} className="mb-2">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-4 text-center">RESUME</h2>
              <div className="w-full overflow-x-auto">
                <table className="min-w-full text-left text-md">
                  <tbody>
                    <th className="px-4 py-2 w-1/4 border">Nama</th>
                    <td className="px-4 py-2 w-1/4 border">ANI</td>
                    <th className="px-4 py-2 w-1/4 border">Pengalaman</th>
                    <td className="px-4 py-2 w-1/4 border">3 Tahun</td>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Alamat Lengkap</th>
                      <td className="px-4 py-2 w-1/4 border">
                        Jl. Sasak raya no 23 Rt/Rw 001/008 Kel. Limo.Kec.
                        Limo.Kota Depok
                      </td>
                      <th className="px-4 py-2 w-1/4 border">
                        Pendidikan Terakhir
                      </th>
                      <td className="px-4 py-2 w-1/4 border">SMP</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Jenis Kelamin</th>
                      <td className="px-4 py-2 w-1/4 border">WANITA</td>
                      <th className="px-4 py-2 w-1/4 border">
                        Status Pernikahan
                      </th>
                      <td className="px-4 py-2 w-1/4 border">LAJANG</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Agama</th>
                      <td className="px-4 py-2 w-1/4 border">ISLAM</td>
                      <th className="px-4 py-2 w-1/4 border">Tinggi Badan</th>
                      <td className="px-4 py-2 w-1/4 border">165</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">
                        Gaji Yang Diharapkan
                      </th>
                      <td className="px-4 py-2 w-1/4 border">2,200,000</td>
                      <th className="px-4 py-2 w-1/4 border">Berat Badan</th>
                      <td className="px-4 py-2 w-1/4 border">53</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Takut Anjing</th>
                      <td className="px-4 py-2 w-1/4 border">TIDAK</td>
                      <th className="px-4 py-2 w-1/4 border">Suku</th>
                      <td className="px-4 py-2 w-1/4 border">LAINNYA</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">
                        Perlu Surat Dokter
                      </th>
                      <td className="px-4 py-2 w-1/4 border">TIDAK</td>
                      <th className="px-4 py-2 w-1/4 border">Akomodasi</th>
                      <td className="px-4 py-2 w-1/4 border">MENGINAP</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">
                        Perlu Surat Polisi
                      </th>
                      <td className="px-4 py-2 w-1/4 border">TIDAK</td>
                      <th className="px-4 py-2 w-1/4 border">
                        Lokasi Sekarang
                      </th>
                      <td className="px-4 py-2 w-1/4 border">TANGERANG</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 w-1/4 border">Berbadan Sehat</th>
                      <td className="px-4 py-2 w-1/4 border">YA</td>
                      <th className="px-4 py-2 w-1/4 border">
                        Pernah Bekerja Diluar Negri
                      </th>
                      <td className="px-4 py-2 w-1/4 border">TIDAK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailInterviewTransactions;
