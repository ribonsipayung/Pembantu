import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ORDER } from "../../../Utils/endpoint";
import { LOCALSTORAGE_TOKEN } from "../../../Utils/types";
import { ClipLoader } from "react-spinners";
import ImgBRI from "../../../Assets/payment/bankbri.png";
import ImgBNI from "../../../Assets/payment/bankbni.png";
import ImgMandiri from "../../../Assets/payment/bankmandiri.png";
import ImgPermata from "../../../Assets/payment/bankpermata.png";
import ImgBJB from "../../../Assets/payment/bankbjb.png";
import ImgBSI from "../../../Assets/payment/bankbsi.png";
import ImgQRIS from "../../../Assets/payment/qris.png";

const dataBank = [
  {
    id: 0,
    name: "BRI",
    link: ImgBRI,
  },
  {
    id: 1,
    name: "BNI",
    link: ImgBNI,
  },
  {
    id: 2,
    name: "MANDIRI",
    link: ImgMandiri,
  },
  {
    id: 3,
    name: "PERMATA",
    link: ImgPermata,
  },
  {
    id: 4,
    name: "BJB",
    link: ImgBJB,
  },
  {
    id: 5,
    name: "BSI",
    link: ImgBSI,
  },
  {
    id: 6,
    name: "QRIS",
    link: ImgQRIS,
  },
];

const Payment = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [paymentData, setPaymentData] = useState(null);
  const serviceFee = 500000;
  const [isLoading, setIsLoading] = useState(true);

  const handleCopy = () => {
    // Logika penyalinan nomor VA di sini

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    };
    axios
      .get(ORDER + `${id}`, options)
      .then((res) => {
        setPaymentData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
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

  // console.log(paymentData)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-poppins">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#4313E1" loading={isLoading} size={30} />
        </div>
      ) : (
        <div className="w-3/4 lg:w-full px-4 py-8 bg-white shadow-lg rounded-lg mb-4 mt-4">
          <div className="flex items-center justify-between mb-6 text-center">
            <h1 className="text-xl font-bold">Informasi Pembayaran</h1>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-3/4 pr-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="text-sm border border-gray-300 py-2 px-4">
                        Kode Pembayaran
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 w-full">
                          {paymentData?.payment_code}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm border border-gray-300 py-2 px-4">
                        Nomor Invoice
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 w-full">
                          {paymentData?.order_id}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm border border-gray-300 py-2 px-4">
                        Tanggal Transaksi
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 w-full">
                          {paymentData?.created_at}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm border border-gray-300 py-2 px-4">
                        Biaya Admin
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 w-full">
                          Rp{" "}
                          {formatNumber(
                            paymentData?.platform_fee +
                              paymentData?.transaction_fee +
                              paymentData?.vat_fee
                          )}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm border border-gray-300 py-2 px-4">
                        Biaya Layanan
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 w-full">
                          Rp {formatNumber(serviceFee)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-semibold border border-gray-300 py-2 px-4">
                        Total Pembayaran
                      </td>
                      <td className="border border-gray-300">
                        <span className="text-md px-2 py-2 font-semibold w-full">
                          Rp {formatNumber(paymentData?.total_price)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => navigate("/order-transactions")}
                className="w-full mt-8 py-2 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
              >
                Dashboard
              </button>
            </div>

            <div className="w-full md:w-1/2 flex flex-col mt-2 px-14 items-center">
              <div>
                <p className="text-sm font-semibold text-center">
                  Kode Pembayaran
                </p>
              </div>
              {dataBank.map((item) => {
                if (item.name === paymentData?.bank_code) {
                  return (
                    <img
                      key={item.id}
                      src={item.link}
                      alt="Gambar Pembayaran"
                      className="mt-2 h-40 w-40"
                    />
                  );
                }
                return null;
              })}
              <p className="text-sm text-center mb-2">
                Silahkan melakukan pembayaran melalui VA berikut:
              </p>
              <div className="text-center">
                <p className="text-sm font-semibold bg-gray-200 py-2">
                  VIRTUAL ACCOUNT
                </p>
                <div className="flex items-center justify-center bg-blue-600 text-white py-4 px-20">
                  <span>{paymentData?.id}</span>
                  <span className="ml-2" onClick={handleCopy}>
                    <CopyToClipboard text={paymentData?.id}>
                      <FaCopy />
                    </CopyToClipboard>
                  </span>
                </div>
                {isCopied && <p>Nomor VA berhasil disalin!</p>}
              </div>
            </div>
          </div>
          {/* <div className="items-center flex justify-center">
          <button onClick={() => navigate("/")} className="mt-8 py-2 px-6 bg-[#70BBFD] text-white rounded-md hover:bg-blue-400">
            Kembali
          </button>
        </div> */}
          <div className="mt-20 lg:w-1/2 mx-auto ">
            <p className="text-sm mb-2 font-semibold">Cara Pembayaran</p>
            <div className="">
              <button
                className="flex items-center justify-between w-full py-2 px-4 bg-gray-300 rounded-md mb-2"
                onClick={() => handleAccordionClick(0)}
              >
                Transfer melalui ATM
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 transform ${
                    activeAccordion === 0 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeAccordion === 0 && (
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <p className="text-sm text-gray-600">
                    Instruksi Transfer melalui ATM:
                  </p>
                  <ol className="list-decimal pl-4 mt-2">
                    <li>Masukkan kartu ATM</li>
                    <li>Pilih menu Transfer</li>
                    <li>Masukkan nomor rekening tujuan</li>
                    <li>Masukkan jumlah transfer</li>
                    <li>Ikuti petunjuk untuk menyelesaikan transfer</li>
                  </ol>
                </div>
              )}
            </div>
            <div>
              <button
                className="flex items-center justify-between w-full py-2 px-4 bg-gray-300 rounded-md mb-2"
                onClick={() => handleAccordionClick(1)}
              >
                Transfer melalui Internet Banking
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 transform ${
                    activeAccordion === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeAccordion === 1 && (
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <p className="text-sm text-gray-600">
                    Instruksi Transfer melalui Internet Banking:
                  </p>
                  <ol className="list-decimal pl-4 mt-2">
                    <li>Login ke akun Internet Banking</li>
                    <li>Pilih menu Transfer</li>
                    <li>Masukkan nomor rekening tujuan</li>
                    <li>Masukkan jumlah transfer</li>
                    <li>Ikuti petunjuk untuk menyelesaikan transfer</li>
                  </ol>
                </div>
              )}
            </div>
            <div>
              <button
                className="flex items-center justify-between w-full py-2 px-4 bg-gray-300 rounded-md mb-2"
                onClick={() => handleAccordionClick(2)}
              >
                Transfer melalui Mobile Banking
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 transform ${
                    activeAccordion === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeAccordion === 2 && (
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <p className="text-sm text-gray-600">
                    Instruksi Transfer melalui Mobile Banking:
                  </p>
                  <ol className="list-decimal pl-4 mt-2">
                    <li>Buka aplikasi Mobile Banking</li>
                    <li>Pilih menu Transfer</li>
                    <li>Masukkan nomor rekening tujuan</li>
                    <li>Masukkan jumlah transfer</li>
                    <li>Ikuti petunjuk untuk menyelesaikan transfer</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
