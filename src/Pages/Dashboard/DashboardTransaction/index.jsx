import TableTransaction from "./TableTransaction"

const DashboardTransaction = () => {
  return (
    <div>
      <div className="mt-8 mb-12 flex items-center flex-col lg:flex-row justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Transaksi</p>
        <div>
          <p className="text-2xl">
            Berikut List Data <b>Transaksi</b>
          </p>
        </div>
      </div>
      {/* <Chart /> */}
      <TableTransaction />
    </div>
  )
}
export default DashboardTransaction