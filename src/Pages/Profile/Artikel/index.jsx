/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ImgArtikel1 from "../../../Assets/artikel/artikel1.jpeg";
import ImgArtikel2 from "../../../Assets/artikel/artikel2.jpeg";
import ImgArtikel3 from "../../../Assets/artikel/artikel3.jpeg";
import ImgArtikel4 from "../../../Assets/artikel/artikel4.jpeg";
const Artikel = () => {
  return (
    <div className="container my-14 px-6 mx-auto font-poppins">
      <h1 className="font-bold text-3xl mb-6">TERPOPULER</h1>
      {/* Section: Design Block */}
      <section className="mb-16 text-gray-800">
      <div className="h-full flex flex-col justify-center items-center">
          <div className="w-full">
            <img
              src={ImgArtikel2}
              className="w-full shadow-lg  mb-6"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          {/* <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
            className="rounded-full mr-2 h-8"
            alt=""
            loading="lazy"
          /> */}
          <div>
            <span>
              {" "}
              Published <u>31.05.2023</u> by {" "}
            </span>
            <a href="https://educourse.id/" className="font-medium">
              Educourse.id
            </a>
          </div>
        </div>

        <h1 className="font-bold text-2xl mb-6 sm:text-2xl md:text-2xl lg:text-5xl xl:text-3xl">
          TIPS UNTUK PEMBANTU RUMAH TANGGA BIAR BETAH
        </h1>
        <ol className="font-semibold">
          <li className="mb-2">1. Memperlakukan mereka dengan hormat</li>
        </ol>
        <p>
          Pembantu rumah tangga kita adalah seorang manusia sama seperti kita
          yang memiliki martabat serta harga diri, meskipun pekerjaan mereka
          kasar di mata kebanyakan orang, kita sama sekali tidak dibenarkan
          merendahkan harga diri serta martabat mereka. Jangan menghinanya,
          tegurlah dengan sopan, berikan tempat tinggal yang layak di rumah
          kita, dan jangan bangkitkan amarahnya dengan kata-kata kasar kita
          sehingga dapat muncul kebencian di dalam hatinya. Dengan memperlakukan
          pembantu rumah tangga kita dengan hormat akan membuat mereka merasa
          senang bekerja untuk kita, sehingga segala pekerjaan yang kita
          tugaskan kepada mereka niscaya akan diselesaikannya dengan sebaik
          mungkin dan penuh tanggung jawab.
        </p>
        <div className="flex justify-left">
          <a
            href="/detail-article"
            className="text-blue-500 hover:text-blue-800 py-1 mt-2"
          >
            Selengkapnya...
          </a>
        </div>
      </section>
      <div className="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <div className="container my-24 px-6 mx-auto mb-4">
          <h1 className="font-bold text-2xl mb-6">BERITA TERBARU</h1>
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800">
            {/* Comment */}
            <div className="flex flex-wrap mb-12 md:mb-0">
              <div className="flex-grow-0 flex-shrink-0 w-full md:w-2/12">
                <img
                  src={ImgArtikel1}
                  className="w-full shadow-lg rounded-lg mb-10"
                  alt=""
                />
              </div>

              <div className="flex-grow-0 flex-shrink-0 w-full md:w-10/12 pl-0 md:pl-6">
                <p className="font-semibold mb-3">
                  PADUAN MENDAFTAR SEBAGAI PENYALUR
                </p>
                <p>
                  Masuk ke website : www.pembantuku.co,id Pilih mendaftar
                  sebagai penyalur Pilih paket : standar atau premium Lengkapi
                  data perusahaan untuk penyalur yang berbentuk CV, PT, LPK
                  dengan mengupload surat ijin yang berlaku.
                </p>
                <div className="flex justify-left">
                  <a
                    href="#!"
                    className="text-blue-500 hover:text-blue-800 py-1 mt-2"
                  >
                    Selengkapnya...
                  </a>
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className="flex flex-wrap mb-12 md:mb-0">
              <div className="flex-grow-0 flex-shrink-0 w-full md:w-2/12">
                <img
                  src={ImgArtikel3}
                  className="w-full shadow-lg rounded-lg mb-10"
                  alt=""
                />
              </div>

              <div className="flex-grow-0 flex-shrink-0 w-full md:w-10/12 pl-0 md:pl-6">
                <p className="font-semibold mb-3">TENTANG PENYALUR</p>
                <p>
                  Pembantuku menawarkan 2 jenis paket penyalur yaitu penyalur
                  standar dan penyalur premium. Penyalur standar adalah
                  penyalur-penyalur yang belum memiliki surat ijin usaha atau
                  seringkali di sebut makelar pembantu. Penyalur standar dapat
                  menyalurkan pembantu sesuai dengan daerah domisili penyalur
                  tersebut.
                </p>
                <div className="flex justify-left">
                  <a
                    href="#!"
                    className="text-blue-500 hover:text-blue-800 py-1 mt-2"
                  >
                    Selengkapnya...
                  </a>
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className="flex flex-wrap">
              <div className="flex-grow-0 flex-shrink-0 w-full md:w-2/12">
                <img
                  src={ImgArtikel4}
                  className="w-full shadow-lg rounded-lg mb-10"
                  alt=""
                />
              </div>

              <div className="flex-grow-0 flex-shrink-0 w-full md:w-10/12 pl-0 md:pl-6">
                <p className="font-semibold mb-3">LOWONGAN PEKERJAAN</p>
                <p>
                  Pembantuku merupakan suatu website dimana para pengangguran
                  yang bingung mencari pekerjaan dapat melamar pekerjaan secara
                  online. Perkembangan jaman yang serba online memudahkan para
                  calon tenaga kerja mengajukan lamaran kerja. Mengingat sejak
                  wabah corona begitu banyak orang yang dirumahkan dan
                  kehilangan sumber penghasilan.
                </p>
                <div className="flex justify-left">
                  <a
                    href="#!"
                    className="text-blue-500 hover:text-blue-800 py-1 mt-2"
                  >
                    Selengkapnya...
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
