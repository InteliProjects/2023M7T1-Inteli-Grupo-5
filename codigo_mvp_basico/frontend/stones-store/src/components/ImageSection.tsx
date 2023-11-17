export default function ImageSection() {
  return (
    <div className="mx-auto h-full w-3/4 p-8 flex-row rounded-br-2xl rounded-bl-2xl items-center content-center  bg-blue-200 text-center relative bg-[url(https://classic.exame.com/wp-content/uploads/2020/10/IMG_5945-1-1.jpg?quality=70&strip=info&w=960)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto h-full w-full flex-row items-center content-center rounded-2xl border-8 border-solid border-stone-custom-500 text-center">
        <div className="w-full h-full flex items-end">
          <div className="bg-stone-custom-500 w-2/5 rounded-tr-2xl">
            <div className="pt-2">
              <div className="p-6">
                <div className="w-full">
                  <h1 className="text-5xl font-normal text-start text-white">
                    Empreendedores que batalham?
                  </h1>
                  <h1 className="pt-3 text-5xl font-bold text-start text-white uppercase">
                    Stone está por trás
                  </h1>
                </div>
                <h2 className="pt-5 text-2xl text-start">
                  Produtos e serviços para você.
                </h2>
                <div className="w-full text-start mt-6 sm:w-auto">
                  <a
                    href="#"
                    className="inline-flex h-14 text-lg w-72 font-bold items-center justify-center w-full px-4 py-2 text-stone-dark-500 duration-300 bg-white rounded-full"
                  >
                    Encontre o produto ideal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
