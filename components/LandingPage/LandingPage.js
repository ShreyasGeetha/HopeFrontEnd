import MiddleSection from "./MiddleSection";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-header h-full mx-auto max-w-7xl ">
        <div class="relative h-96 lg:h-98 mx-auto max-w-7xl overflow-hidden">
          <img src="https://www.aljazeera.com/wp-content/uploads/2021/11/000_9PK6MZ.jpg?fit=1170%2C780" alt="Avatar" className="object-cover mt-4 w-full h-full " />
          {/* Text on image */}
          <div class="absolute w-full  top-0 inset-y-0  text-white text-5xl md:text-6xl lg:text;7xl
          mt-7 md:mt-4 lg:mt-6
          font-sans font-bold text-center leading-40
          backdrop-filter backdrop-blur-sm
          backdrop-opacity-30 ">
            Let's not waste our wonderful world
          </div>

          <div className="absolute w-full bottom-0 mb-2
          text-xl md:text-2xl
          p-4 md:p-5 lg:p-6 border-2 border-red-500
          text-header font-bold
          font-middleSectionFont
          flex justify-center bg-black
          backdrop-filter backdrop-blur-sm">
            <div className="">
              Share More
              <span className="font-bold text-white text-2xl">.</span>{' '}
            </div>
            <div>
              Waste Less
              <span className="font-bold text-white text-2xl">.</span>
            </div>
          </div>
        </div>                   
      </div>
      <MiddleSection />
    </div>    
  );
}

export default LandingPage;