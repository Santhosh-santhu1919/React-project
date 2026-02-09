const ServiceHeader = () => {
  return (
    <section className="bg-gradient-to-br from-black via-slate-400 to-black text-white py-28">
      <div className="max-w-3xl mx-auto px-6 flex flex-col justify-center items-start space-y-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center">
          Comprehensive Digital
          <br />
          Solutions
        </h1>

        {/* Subtext */}
        <p className="text-slate-100 text-lg md:text-xl max-w-3xl">
          From strategy to execution, we deliver end-to-end 
          services that transform your business and drive growth.
        </p>

      </div>
    </section>
  );
};

export default ServiceHeader;
