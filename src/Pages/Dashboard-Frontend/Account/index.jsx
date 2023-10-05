import { FaRegUserCircle } from "react-icons/fa";
const Dashboard = () => {
  const dataDashboard = localStorage.getItem("LOCALSTORAGE_USERDETAIL");
  const obj = JSON.parse(dataDashboard);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen font-poppins ">
      <div className="p-4 px-2 bg-white border border-gray-200 rounded-lg shadow w-full sm:max-w-md ">
        <FaRegUserCircle className="text-4xl sm:text-8xl mx-auto mb-4  text-gray-600" />
        <h5 className="mb-4 text-xl sm:text-2xl tracking-tight items-center text-center">
          {`Selamat Datang, ${obj.fullname} di dashboard Pembantuku`}
        </h5>
        <p className="mb-4 text-base text-gray-700 text-center">
          Tipe Pengguna
        </p>
        <div className="px-4 py-2 mt-4 text-sm font-medium text-center">
          <span className="bg-green-700 text-white px-4 py-2 rounded">
            MAJIKAN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
