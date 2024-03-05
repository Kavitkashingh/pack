
import Slider from "react-slick";
import img from "../assets/banner 9.png"
import imga from "../assets/3.jpg"
import imgs from "../assets/banner 8.png"

function Slidex() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
  };


  return (
    <div className="w-[95%]   justify-center items-center mx-auto my-10">
      <Slider {...settings} >
        
        <div > 
          <div>
            <img src={img} alt="" className="h-[170px] w-[390px]   rounded-xl" />
          </div>
        </div>

        <div>
          <div >
            <img src={imga} alt="" className=" h-[170px] w-[390px]  rounded-xl" />
          </div>
        </div>

        <div>
          <div >
            <img src={imgs} alt="" className="h-[170px] w-[390px] rounded-xl" />
          </div>
        </div>

        
      </Slider>
    </div>
  );
}

export default Slidex;
