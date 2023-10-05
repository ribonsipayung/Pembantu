/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ImgArtikel2 from "../../../../Assets/artikel/artikel2.jpeg";

const DetailArtikel = () => {
  return (
    <div className="container my-14 px-6  mx-auto font-poppins">
      <h1 className="font-bold text-2xl mb-6 sm:text-2xl md:text-2xl lg:text-5xl xl:text-3xl">
        TIPS UNTUK PEMBANTU RUMAH TANGGA BIAR BETAH
      </h1>
      {/* Section: Design Block */}
      <section className="mb-16 text-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-full">
            <img src={ImgArtikel2} className="w-full shadow-lg  mb-6" alt="" />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <span>
            {" "}
            Published <u>31.05.2023</u> by {" "}
          </span>
          <a href="https://educourse.id/" className="font-medium">
            Educourse.id
          </a>
        </div>

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
        <ol className="font-semibold mt-4">
          <li className="mb-2">2. Memanggilnya dengan sebutan yang pantas</li>
        </ol>
        <p>
          Hindarilah menyebut pembantu rumah tangga kita dengan kata-kata yang
          tidak pantas. Masih ada banyak majikan yang memanggil pembantu mereka
          dengan sebutan budak, babu, pelayan, jongos, buruh, kacung, dan
          sebagainya. Memanggilnya dengan sebutan yang pantas, atau
          menganggapnya sebagai karyawan Anda akan sangat menghargai perasaannya
          sehingga pembantu Anda tidak akan merasa rendah diri. Ada sebutan yang
          elegan dalam bahasa Inggris untuk pembantu rumah tangga yaitu
          housemaid, atau jika Anda ingin menyebut pembantu Anda dengan istilah
          yang lebih keren Anda dapat menjulukinya sebagai damage controller.
        </p>
        <ol className="font-semibold mt-4">
          <li className="mb-2">3. Menetapkan jadwal kerja yang manusiawi</li>
        </ol>
        <p>
          Jam kerja seorang pembantu rumah tangga bisa tidak beraturan terserah
          sang majikan menginginkannya seperti apa. Cara demikian sudah
          sepatutnya tidak dilakukan lagi mengingat kita sebagai manusia moderen
          memahami bahwa setiap orang memiliki keterbatasan. Tetapkan jadwal
          yang manusiawi kepada pembantu kita, berilah mereka hari libur
          sehingga mereka dapat mengerjakan segala keperluan pribadinya atau
          untuk sejenak istirahat dari rasa lelah yang mereka rasakan. Pembantu
          rumah tangga yang tidak memiliki jam kerja yang baik imbasnya dapat
          dirasakan langsung oleh sang majikan, bila mereka sakit, atau mereka
          merasa tertekan akhirnya dapat menyebabkan cara bekerja mereka
          asal-asalan. Oleh karena itu, tetapkanlah jadwal kerja yang baik,
          jangan anggap mereka sebagai mesin.
        </p>
      </section>
    </div>
  );
};

export default DetailArtikel;
