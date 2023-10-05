import { useEffect, useState } from "react";
// import StarImg from "../../../Assets/star.svg";
import ImgBRI from "../../../Assets/payment/bankbri.png";
import ImgBNI from "../../../Assets/payment/bankbni.png";
import ImgMandiri from "../../../Assets/payment/bankmandiri.png";
import ImgPermata from "../../../Assets/payment/bankpermata.png";
import ImgBJB from "../../../Assets/payment/bankbjb.png";
import ImgBSI from "../../../Assets/payment/bankbsi.png";
import ImgQRIS from "../../../Assets/payment/qris.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import {
  ASSISTANT,
  BOOKING,
  ORDER,
  PROFESSIONPACKAGEBYIDPROFESSION,
} from "../../../Utils/endpoint";
import { LOCALSTORAGE_TOKEN } from "../../../Utils/types";

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

const Order = () => {
  const navigate = useNavigate();
  const { id, profession } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading3, setIsLoading3] = useState(false);
  const [data2, setData2] = useState([]);
  const [isLoading2, setIsLoading2] = useState(true);
  const [price, setPrice] = useState(0);
  const [card, setCard] = useState("BRI");
  const [transactionFee, setTransactionFee] = useState();
  const [vatFee, setVatFee] = useState();
  const platformFee = 1500;
  const serviceFee = 500000;

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
    axios
      .get(PROFESSIONPACKAGEBYIDPROFESSION + `${profession}/`)
      .then((res) => {
        setData2(res.data);
        setIsLoading2(false);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading2(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e) => {
    setIsLoading3(true);
    e.preventDefault();
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    };
    const obj = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERDETAIL"));
    const data = new FormData();
    console.log(data);
    data.append("userId", obj.id);
    data.append("total_price", e.target.total.value);
    data.append("status", "Belum Lunas");
    if (card === "QRIS") {
      data.append("payment_method_with", "QRIS");
      data.append("bank_code", "");
    } else {
      data.append("payment_method_with", "BANK");
      data.append("bank_code", card);
    }
    data.append("transaction_fee", transactionFee);
    data.append("platform_fee", platformFee);
    data.append("vat_fee", vatFee);
    data.append("desc1", id);
    axios
      .post(ORDER, data, options)
      .then((res) => {
        console.log(res.data);
        const data2 = new FormData();
        console.log(data2);
        data2.append("orderId", res.data.id);
        data2.append("start_date", e.target.delivery_date.value);
        data2.append("start_time", e.target.delivery_hour.value);
        data2.append("destination", e.target.address.value);
        axios
          .post(BOOKING, data2, options)
          .then((res1) => {
            console.log(res1.data);
            setTimeout(() => {
              navigate(`/payment/${res.data.id}`);
              setIsLoading(false);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("hello", card);
    if (card) {
      if (card === "QRIS") {
        setTransactionFee(Math.ceil(price * 0.007));
      } else {
        setTransactionFee(4000);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  useEffect(() => {
    console.log("hai", card);
    if (card) {
      if (card === "QRIS") {
        setVatFee(Math.ceil(transactionFee * 0.11));
      } else {
        setVatFee(440);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionFee]);

  // console.log(vatFee)

  function formatNumber(number) {
    if (number) {
      return new Intl.NumberFormat("id-ID").format(number);
    } else {
      return "-";
    }
  }

  return (
    <div className="bg-gray-100">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#4313E1" loading={isLoading} size={30} />
        </div>
      ) : (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 font-poppins">
            <>
              <div className="col-span-4 sm:col-span-3 h-full">
                <div className="bg-white shadow rounded-lg p-6">
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
                      <button className=" text-black-800 py-1 px-2 text-xl">
                        Rp {formatNumber(data?.salary)}
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-t border-gray-300 mt-4" />
                  <div className="flex flex-col">
                    <ul>
                      <li className="mb-2">Umur: {data?.age}</li>
                      <li className="mb-2">Lokasi: {data?.city}</li>
                      <li className="mb-2">Provinsi: {data?.province}</li>
                      <li className="mb-2">
                        {data?.cv ? (
                          <>
                            CV:{" "}
                            <a
                              className="text-blue-500 hover:text-blue-700"
                              href={data?.cv}
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
                  <h2 className="text-m font-bold mt-4 mb-2">Wilayah Kerja</h2>
                  <p>{data?.scope_area}</p>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9 flex  ">
                <div className="bg-white w-full shadow rounded-lg p-6 h-full ">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg px-8 py-6"
                  >
                    <h2 className="text-2xl font-bold mb-6">Form Pemesanan</h2>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Pilih Paket{" "}
                        {isLoading2 && (
                          <ClipLoader
                            color="#4313E1"
                            loading={isLoading2}
                            size={30}
                          />
                        )}
                      </label>
                      <select
                        name="nama_paket"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        required
                        onChange={(event) => {
                          const choice = data2.filter(
                            (item) => item.id === event.target.value
                          );
                          setPrice(choice[0]?.price);
                          setCard("BRI");
                          console.log(choice, card);
                        }}
                      >
                        <option value="">Pilih Paket</option>
                        {data2.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item.package_name} | {item?.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Total yang harus dibayar
                      </label>
                      <input
                        name="total"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div> */}

                    {/* <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Biaya PCR / Antigen (Optional)
                      </label>
                      <select
                        name="biaya_test"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      >
                        <option value="">Tanpa Test</option>
                        <option value="antigen">Antigen - Rp. 95.000</option>
                        <option value="pcr">PCR - Rp. 275.000</option>
                      </select>
                    </div> */}

                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Alamat Antar
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Tanggal Antar
                      </label>
                      <input
                        name="delivery_date"
                        type="date"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Jam Antar
                      </label>
                      <input
                        name="delivery_hour"
                        type="time"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        // placeholder="Pilih paket"
                        required
                      />
                    </div>

                    {/* <div className="flex flex-col ">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Metode Pembayaran
                      </label>
                      <div className="flex flex-wrap justify-center">
                        <Container fluid>
                          <Row>
                            {dataBank.map((item) => {
                              if (
                                item.name === "QRIS" &&
                                data?.total_price >= 10000000
                              ) {
                                return null;
                              }
                              return (
                                <Col
                                  key={item.id}
                                  className={`col-md-3 col-6 mb-3 d-flex align-items-center ${
                                    card === item.name
                                      ? "border border-primary p-3 bg-white rounded"
                                      : ""
                                  }`}
                                  style={{ height: "100px" }}
                                >
                                  <div
                                    className="w-100 d-flex justify-content-center align-items-center"
                                    onClick={() => {
                                      setCard(item.name);
                                      setLink(item.link);
                                    }}
                                  >
                                    <img
                                      src={item.link}
                                      alt={item.name}
                                      className="w-50"
                                    />
                                  </div>
                                </Col>
                              );
                            })}
                          </Row>
                        </Container>
                      </div>
                    </div> */}
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-10">
                        Metode Pembayaran
                      </label>
                      <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-3 text-center text-center">
                          {dataBank.map((item) => {
                            if (item.name === "QRIS" && price >= 10000000) {
                              return null;
                            }
                            return (
                              <div
                                sm={8}
                                key={item.id}
                                className={`${
                                  card === item.name
                                    ? "border border-primary p-3 bg-white rounded"
                                    : ""
                                } flex justify-center items-center`}
                                style={{
                                  height: "100px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                    onClick={() => {
                                      setCard(item.name);
                                      // console.log(item.name);
                                    }}
                                  >
                                    <img
                                      src={item.link}
                                      alt={item.name}
                                      className="w-40 flex-wrap"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Biaya Admin
                      </label>
                      <input
                        name="admin_fee"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        value={vatFee + transactionFee + platformFee}
                        required
                        disabled
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Biaya Layanan
                      </label>
                      <input
                        name="service_fee"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        value={serviceFee}
                        required
                        disabled
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-md font-medium text-gray-700 mb-2">
                        Total yang harus dibayar
                      </label>
                      <input
                        name="total"
                        type="text"
                        className="w-full border text-sm border-gray-300 outline-none p-2 rounded-[10px] mb-3"
                        required
                        value={
                          price +
                          transactionFee +
                          vatFee +
                          serviceFee +
                          platformFee
                        }
                        disabled
                      />
                    </div>

                    <button
                      // onClick={() => navigate("/payment")}
                      type="submit"
                      className="bg-blue-400 hover:bg-blue-500 text-white mt-4 w-full h-10 rounded-[10px]"
                      disabled={isLoading3}
                    >
                      {isLoading3 ? "Loading..." : "BAYAR SEKARANG"}
                    </button>
                  </form>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
