import Chart from './Chart'

const DashboardPage = () => {
  return (
    <div>
      <div className="mt-8 mb-12 flex items-center flex-col lg:flex-row justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Dashboard</p>
        <div>
          <p className='text-2xl'>Selamat Datang, <b>Putra</b></p>
        </div>
      </div>
      <Chart/>
    </div>
  )
}
export default DashboardPage
