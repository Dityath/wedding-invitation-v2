import Slider from "react-slick";
import Image from "next/image";

const Amplop = () => {

  const settings = {
    customPaging: function (i) {
      if (i === 0) {
        return (
          <a>
            Bank Transfer
          </a>
        );
      } else if (i === 1) {
        return (
          <a>
            Dana
          </a>
        );
      }
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="amplop">
      <h1>Amplop Online</h1>
      <p>Bagi para undangan yang ingin memberikan amplop secara digital dapat menggunakan motode yang ada di bawah ini </p>
      <div className="amplop-container">
        <Slider {...settings}>
          <div className="inside">
            <div className="image">
              <Image
                src="/amplop/bank.png"
                layout="fill"
              />
            </div>
            158-2030-2294-2
            <b>A/N Muhammad Juliandro</b>
          </div>
          <div className="inside">
            Dana
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Amplop;