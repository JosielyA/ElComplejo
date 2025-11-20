export const HomePage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center pt-40 lg:mt-10 lg:items-start lg:pt-0 lg:pl-20 xl:mt-0 xl:pl-40">
        <section className="rounded-3xl px-5 py-10 text-start sm:px-20 sm:pt-20 sm:pb-50 lg:p-0">
          <div className="mx-auto max-w-3xl space-y-12 sm:space-y-20 lg:space-y-12">
            <h2 className="text-morado font-roboto-mono px-2 text-3xl font-light italic drop-shadow-[0_2px_1px_rgba(225,225,225,1)] sm:text-3xl lg:text-4xl 2xl:text-4xl">
              Tu partido está a un click
            </h2>
            <h1 className="px-2 text-4xl font-bold italic drop-shadow-[0_2px_1px_rgba(225,225,225,1)] sm:text-6xl">
              Todo lo que necesitas para practicar{" "}
              <span className="text-morado">tenis</span> está al alcance de tu
              mano.
            </h1>
            <a
              className="border-morado inline-block rounded-full border-2 bg-white px-6 py-3 font-medium shadow-2xl transition-transform hover:scale-105 md:px-12 md:py-5"
              href="#reservar"
            >
              <span className="font-roboto-mono from-morado via-azul to-lima bg-linear-to-r bg-clip-text text-xl font-medium text-transparent italic sm:text-2xl md:text-3xl">
                Ver disponibilidad ahora
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
