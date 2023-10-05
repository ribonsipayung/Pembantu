import { FaSearch } from "react-icons/fa";

/* eslint-disable jsx-a11y/anchor-is-valid */
const InterviewTransactions = () => {
  return (
    <div className="bg-gray-100 px-4 py-5 shadow min-h-screen font-poppins">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Transaksi Wawancara Saya Sebagai (Majikan)
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden shadow">
          <thead className="bg-[#4313E1] max-w-[50px] overflow-hidden overflow-ellipsis whitespace-normal">
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
              <th className="font-semibold text-sm uppercase px-6 py-4 ">
                Member
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Perusahaan
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Pekerja
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Total Pembayaran
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4  ">
                Tanggal dan Waktu Wawancara
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Status Wawancara
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 max-w-[50px] overflow-hidden overflow-ellipsis whitespace-normal">
            <tr>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">WWC230524040939-1168</td>
              <td className="px-6 py-4">8 Juni 2023</td>
              <td className="px-6 py-4">Maleo</td>
              <td className="px-6 py-4">PT. Maleo Edukasi Teknologi</td>
              <td className="px-6 py-4">PRT</td>
              <td className="px-6 py-4">Rp 50,000</td>
              <td className="px-6 py-4">10 Juni 2023 11:30:00</td>
              <td className="px-6 py-4">Menunggu Pembayaran</td>
              {/* <td className="px-6 py-4 text-center">
                <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
                  Active
                </span>
              </td> */}
              <td className="px-6 py-4 text-center">
                <a href="/detailinterviewtransactions" className="text-purple-800 hover:underline">
                  <FaSearch />
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">2 </td>
              <td className="px-6 py-4">WWC230524040939-2484</td>
              <td className="px-6 py-4">10 Juni 2023</td>
              <td className="px-6 py-4">Maleo2</td>
              <td className="px-6 py-4">PT. Maleo Edukasi Teknologi</td>
              <td className="px-6 py-4">Cleaning Service</td>
              <td className="px-6 py-4">Rp 50,000</td>
              <td className="px-6 py-4">12 Juni 2023 08:00:00</td>
              <td className="px-6 py-4">Menunggu Pembayaran</td>
              {/* <td className="px-6 py-4 text-center">
                <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
                  Active
                </span>
              </td> */}
              <td className="px-6 py-4 text-center">
                <a href="/detail-interview-transactions" className="text-purple-800 hover:underline">
                  <FaSearch />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InterviewTransactions;
