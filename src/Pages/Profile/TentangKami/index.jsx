/* eslint-disable jsx-a11y/alt-text */
import Icon1 from "../../../Assets/icon/1.svg";

const TentangKami = () => {
  return (
    <div className="container my-12 px-6 mx-auto font-poppins">
      <section className="mb-32 text-gray-800">
        <div className="flex justify-center">
          <div className="text-center lg:max-w-3xl md:max-w-xl">
            <h2 className="text-3xl font-bold mb-12 px-6">Tentang Kami</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto mb-12 lg:mb-0 w-full lg:w-6/12 px-6">
            <img src={Icon1} />
          </div>
          <div className=" flex flex-grow-0 flex-shrink-0 flex-basis-auto mb-12 lg:mb-0 w-full lg:w-6/12 px-6 text-justify justify-c items-center">
            <p>
              Pembantuku adalah sebuah Platform yang bergerak di bidang jasa
              Penyediaan pekerja rumah tangga. Adapun bidang pekerjaan rumah
              tangga lainya meliputi: Baby Sitter Bayi & Balita, Perawat Orang
              Sakit, Perawat Jompo, Pembantu Laki-Laki, Pembantu Wanita, Tukang
              Kebun, Sopir, Office Boy, Penjaga Toko, dll. Pembantuku adalah
              sebuah marketplace dimana para penyalur di seluruh Indonesia bisa
              menawarkan pekerja-pekerja kepada semua pengguna jasa yang
              membutuhkan.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="text-center lg:max-w-3xl md:max-w-xl">
            <h2 className="text-xl font-bold mb-4 px-6">
              Nikmati kemudahan merekrut pekerja rumah tangga dengan berbagai
              layanan kami:
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:w-4/12 px-4">
            <p>
              <strong>
                Keanggotaan Majikan (Free)
                <br />
              </strong>
              Dengan menjadi member (Register/Login) Maka Majikan bisa
              menggunakan semua layanan yang tersedia di website Pembantuku
              seperti melakukan pemesanan pekerja, Interview, Riwayat transaksi,
              Dll.
            </p>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <p>
              <strong>Pemesanan</strong> <br />
              Majikan bisa melakukan pemesanan kepada calon pekerja yang akan di
              hiring, dengan menekan tombol button pemesanan pada display
              profile pekerja
            </p>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <p>
              <strong>Interview</strong> <br />
              Guna untuk meyakinkan calon pekerja yang sesuai, Majikan bisa
              mewawancarai terlebih dahulu sebelum melakukan pemesanan, hingga
              majikan benar-benar yakin akan calon pekerja yang akan di hiring
            </p>
          </div>
        </div>
        <div className="flex mt-12">
          <div className="w-full lg:w-4/12 px-4">
            <p>
              <strong>
                Layanan Indent
                <br />
              </strong>
              Majikan bisa melakukan pemesanan custom dengan sesuai kriteria
              yang diminta jika pada catalog beranda masih ada yang belum sesuai
              dengan kriteria yang dibutuhkan
            </p>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <p>
              <strong>
                Instant Replace
                <br />
              </strong>
              Dengan menjadi Member anda bisa menggunakan semua layanan
              dipembantuku
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
