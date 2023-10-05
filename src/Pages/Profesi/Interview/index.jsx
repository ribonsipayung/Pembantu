import Img1 from "../../../Assets/profesi/woman2.png";
import StarImg from "../../../Assets/star.svg";
import ImgBRI from "../../../Assets/payment/bankbri.png";
import ImgBNI from "../../../Assets/payment/bankbni.png";
import ImgMandiri from "../../../Assets/payment/bankmandiri.png";
import ImgPermata from "../../../Assets/payment/bankpermata.png";
import ImgBJB from "../../../Assets/payment/bankbjb.png";
import ImgBSI from "../../../Assets/payment/bankbsi.png";
import ImgQRIS from "../../../Assets/payment/qris.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Interview = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };
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
      deskripsi: "hello",
      keterampilan: [
        "Menyuci Pakaian",
        "Menyuci Piring",
        "Menyetrika Pakaian",
        "Membersihkan Halaman Rumah",
        "Memasak Sederhana",
        "Mengendarai Motor",
      ],
    },
    // Add more PRT data items as needed
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 font-poppins">
          {data.map((item, index) => (
            <>
              <div key={index} className="col-span-4 sm:col-span-3 h-full">
                <div className="bg-white shadow rounded-lg p-6">
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
                    <div className="mt-4 flex flex-wrap gap-4 justify-center">
                      <button className=" text-black-800 py-1 px-2 text-xl">
                        Rp 2,200,000
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-t border-gray-300 mt-4" />
                  <div className="flex flex-col">
                    <ul>
                      <li className="mb-2">Umur: {item.umur}</li>
                      <li className="mb-2">Lokasi: {item.lokasi}</li>
                      <li className="mb-2">Provinsi: {item.provinsi}</li>
                      <li className="mb-2">Pengalaman: {item.pengalaman}</li>
                    </ul>
                  </div>
                  <h2 className="text-m font-bold mt-4 mb-2">Wilayah Kerja</h2>
                  <p>{item.wilayahKerja}</p>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9 flex  ">
                <div className="bg-white w-full shadow rounded-lg p-6 h-full ">
                  <form className="bg-white rounded-lg px-8 py-6">
                    <h2 className="text-2xl font-bold mb-6">Form Interview</h2>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Penyalur / Yayasan
                      </label>
                      <input
                        name="pilih_paket"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Deskripsi
                      </label>
                      <input
                        name="biaya_test"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Alamat
                      </label>
                      <input
                        name="biaya_test"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Total
                      </label>
                      <input
                        name="biaya_test"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Tanggal Wawancara
                      </label>
                      <input
                        name="biaya_test"
                        type="date"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Waktu Wawancara
                      </label>
                      <input
                        name="biaya_test"
                        type="time"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-md font-medium text-gray-700 mb-2 ">
                        Metode Pembayaran
                      </label>
                      <div className="flex flex-wrap justify-center">
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank1" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank1")}
                        >
                          <input
                            type="checkbox"
                            id="bank1"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank1" className="cursor-pointer">
                            {selectedPayment === "bank1" ? (
                              <img
                                src={ImgBRI}
                                alt="Bank1"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgBRI}
                                alt="Bank1"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank2" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank2")}
                        >
                          <input
                            type="checkbox"
                            id="bank2"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank2" className="cursor-pointer">
                            {selectedPayment === "bank2" ? (
                              <img
                                src={ImgBNI}
                                alt="Bank2"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgBNI}
                                alt="Bank2"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank3" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank3")}
                        >
                          <input
                            type="checkbox"
                            id="bank3"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank3" className="cursor-pointer">
                            {selectedPayment === "bank3" ? (
                              <img
                                src={ImgMandiri}
                                alt="Bank3"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgMandiri}
                                alt="Bank3"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank4" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank4")}
                        >
                          <input
                            type="checkbox"
                            id="bank4"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank4" className="cursor-pointer">
                            {selectedPayment === "bank4" ? (
                              <img
                                src={ImgPermata}
                                alt="Bank4"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgPermata}
                                alt="Bank4"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank5" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank5")}
                        >
                          <input
                            type="checkbox"
                            id="bank5"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank5" className="cursor-pointer">
                            {selectedPayment === "bank5" ? (
                              <img
                                src={ImgBJB}
                                alt="Bank5"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgBJB}
                                alt="Bank5"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "bank6" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("bank6")}
                        >
                          <input
                            type="checkbox"
                            id="bank6"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="bank6" className="cursor-pointer">
                            {selectedPayment === "bank6" ? (
                              <img
                                src={ImgBSI}
                                alt="Bank6"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgBSI}
                                alt="Bank6"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        <div
                          className={`flex items-center mr-4 mb-3 ${
                            selectedPayment === "qris" ? "bg-blue-200" : ""
                          }`}
                          onClick={() => handlePaymentSelection("qris")}
                        >
                          <input
                            type="checkbox"
                            id="qris"
                            name="paymentMethod"
                            className="hidden"
                          />
                          <label htmlFor="qris" className="cursor-pointer">
                            {selectedPayment === "qris" ? (
                              <img
                                src={ImgQRIS}
                                alt="QRIS"
                                className="lg:w-40 w-20 lg:h-40 h:20 border border-blue-500"
                              />
                            ) : (
                              <img
                                src={ImgQRIS}
                                alt="QRIS"
                                className="lg:w-40 w-20 lg:h-40 h:20"
                              />
                            )}
                          </label>
                        </div>
                        {/* Tambahkan opsi pembayaran lainnya di sini */}
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/payment")}
                      type="submit"
                      className="bg-blue-400 hover:bg-blue-500 text-white mt-4 w-full h-10 rounded-[10px]"
                    >
                      BAYAR SEKARANG
                    </button>
                    
                  </form>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
