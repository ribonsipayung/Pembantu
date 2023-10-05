const KontakKami = () => {
  return (
    <div className="container my-12 px-6 mx-auto font-poppins">
      <section className="mb-32 text-gray-800">
        <div className="flex justify-center">
          <div className="text-center lg:max-w-3xl md:max-w-xl">
            <h2 className="text-3xl font-bold mb-12 px-6">Kontak Kami</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Nama"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  className="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="form-textarea block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Pesan"
                ></textarea>
              </div>
              {/* <div className="mb-6 text-center">
                <input
                  type="checkbox"
                  className="form-checkbox appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  defaultChecked
                />
                <label
                  className="inline-block text-gray-800"
                  htmlFor="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div> */}
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Kirim
              </button>
            </form>
          </div>
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto w-full lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 flex-grow-0 flex-shrink-0 flex-basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <h4 className="text-lg font-bold mb-3">Kontak</h4>
                <p className="text-gray-700">+62 8322 4362 343</p>
              </div>
              <div className="mb-12 flex-grow-0 flex-shrink-0 flex-basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <h4 className="text-lg font-bold mb-3">Alamat</h4>
                <p className="text-gray-700">
                  123 Street Name, City Name, Country
                </p>
              </div>
              <div className="mb-12 flex-grow-0 flex-shrink-0 flex-basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <h4 className="text-lg font-bold mb-3">Email</h4>
                <p className="text-gray-700">example@example.com</p>
              </div>
              <div className="mb-12 flex-grow-0 flex-shrink-0 flex-basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <h4 className="text-lg font-bold mb-3">Social Media</h4>
                <div className="flex">
                <p className="text-gray-700">example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default KontakKami;
