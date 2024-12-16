import banner from "../../public/Media/banner.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img
        className="max-w-screen-md  rounded-3xl object-cover"
        src={banner}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
