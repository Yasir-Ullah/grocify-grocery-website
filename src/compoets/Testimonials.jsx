import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosStar } from "react-icons/io";
// import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Customer1 from "../assets/customer1.jpg";
import Customer2 from "../assets/customer2.jpg";
import Customer3 from "../assets/customer3.jpg";
import Customer4 from "../assets/customer4.jpg";
import Customer5 from "../assets/customer5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 mb-10">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end gap-x-3 py-5">
          <button className="custm-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custon-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>
        {/* swper */}
        <Swiper
          navigation={{
            nextEl: ".custon-next",
            prevEl: ".custm-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8 ">
                <div className="flex gap-5 items-center">
                  <div className="w-15 h-15 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full " />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>

                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <IoIosStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* card */}
      </div>
    </section>
  );
};

export default Testimonials;

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    image: Customer1,
    rating: 5,
    para: "The quality of the products is amazing. Everything arrived fresh, delicious, and perfectly packed.",
  },
  {
    id: 2,
    name: "Michael Smith",
    profession: "Chef",
    image: Customer2,
    rating: 5,
    para: "I absolutely love the freshness and quality. The delivery was fast and the service was excellent.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    profession: "Nutritionist",
    image: Customer3,
    rating: 4,
    para: "Great selection of fresh and healthy products. I highly recommend this service to everyone.",
  },
  {
    id: 4,
    name: "James Brown",
    profession: "Food Lover",
    image: Customer4,
    rating: 5,
    para: "Everything was fresh and tasty. The ordering process was simple and the delivery was on time.",
  },
  {
    id: 5,
    name: "Olivia Davis",
    profession: "Home Cook",
    image: Customer5,
    rating: 5,
    para: "The vegetables and fruits were incredibly fresh. I will definitely be ordering again.",
  },
];
