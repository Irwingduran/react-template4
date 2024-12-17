import banner from "../../public/Media/banner.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center mt-6 w-full">
      <div className="w-full max-w-screen-md aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={banner}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
