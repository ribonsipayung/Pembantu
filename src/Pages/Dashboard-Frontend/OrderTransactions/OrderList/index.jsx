import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ASSISTANT, BOOKINGASSISTANTBYIDUSER } from "../../../../Utils/endpoint";
import { LOCALSTORAGE_TOKEN } from "../../../../Utils/types";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

/* eslint-disable jsx-a11y/anchor-is-valid */
const OrderTransactions = () => {
  const { id } = useParams();
  const [paymentData, setPaymentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const serviceFee = 500000;

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    };
    const obj = JSON.parse(localStorage.getItem("LOCALSTORAGE_USERDETAIL"));

    axios
      .get(BOOKINGASSISTANTBYIDUSER + `${obj.id}`, options)
      .then((res) => {
        setPaymentData(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get(ASSISTANT)
      .then((res) => {
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

  // console.log(data);

  return (
    <div className=" bg-gray-100 px-4 py-5 shadow min-h-screen font-poppins">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen ">
          <ClipLoader color="#4313E1" loading={isLoading} size={30} />
        </div>
      ) : (
        <>
          <h2 className="text-xl sm:text-2xl mt-10 font-semibold mb-6 text-center sm:text-left">
            Transaksi Order Saya
          </h2>
          <div className="overflow-x-auto w-full ">
            <table className="mx-auto  max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden shadow">
              <thead className="bg-[#4313E1]   overflow-hidden overflow-ellipsis whitespace-normal">
                <tr className="text-white text-left">
                  <th className="font-semibold text-sm uppercase px-6 py-4  ">
                    No
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 ">
                    No. Transaksi
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 ">
                    Tanggal
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Biaya Admin
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4  ">
                    Biaya Layanan
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Total Pembayaran
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Status Order
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    {" "}
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 overflow-hidden overflow-ellipsis whitespace-normal">
                {paymentData?.map((item, index) => {
                  // console.log(item)
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        {item?.order_detail?.order_id}
                      </td>
                      <td className="px-6 py-4">
                        {item?.order_detail?.created_at}
                      </td>
                      <td className="px-6 py-4">
                        Rp{" "}
                        {formatNumber(
                          item?.order_detail?.platform_fee +
                            item?.order_detail?.transaction_fee +
                            item?.order_detail?.vat_fee
                        )}
                      </td>
                      <td className="px-6 py-4">
                        Rp {formatNumber(serviceFee)}
                      </td>
                      <td className="px-6 py-4">
                        Rp {formatNumber(item?.order_detail?.total_price)}
                      </td>
                      <td className="px-6 py-4">
                        {item?.order_detail?.status}
                      </td>
                      {/* <td className="px-6 py-4 text-center">
                <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
                  Active
                </span>
              </td> */}
                      <td className="px-6 py-4 text-center">
                        <a
                          href={`/detail-order-transactions/${item?.id}/${item?.order_detail?.desc1}`}
                          className="text-purple-800 hover:underline"
                        >
                          <FaSearch />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
export default OrderTransactions;
