const Footer = () => {
  return (
    <section className="bg-[#4313E1] lg:px-48 px-4 py-12 sm:py-24 flex flex-col sm:flex-row items-center justify-between font-poppins">
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold font-poppins text-white">.Logo</h1>
        <p className="text-white mt-4 sm:mt-2 text-justify">
          Pembantuku adalah sebuah Platform yang bergerak di bidang jasa
          Penyediaan pekerja rumah tangga. Dimana para pengguna jasa dapat
          memilih pekerja rumah tangga sesuai kriteria yang dibutuhkan, dari
          usia pekerja, Domisili, kemampuan dan pengalaman, besaran gaji yang di
          sesuaikan dengan kemampuan finansial dari pengguna jasa.
        </p>
        <p className="text-white mt-4 sm:mt-6">&copy; 2023</p>
      </div>
      <div className="flex flex-col sm:flex-row text-white mt-8 sm:mt-0 mx-6 gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl sm:text-xl">Contact</h1>
          <p>Educourse@gmail.com</p>
          <p>081232132312</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl sm:text-xl">Social Media</h1>
          <p>@educourse.id</p>
          <p>Educourse.id</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
