import { React, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated } from "react-spring";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./ImageSlider.css";
import { Parallax, Pagination, Navigation, EffectCreative } from "swiper/modules";

import adobe0 from "../Images/AdobeStock_586068855_Preview.jpeg";
import adobe1 from "../Images/AdobeStock_274008098_Preview.jpeg";
import adobe2 from "../Images/AdobeStock_326985559_Preview.jpeg";
import adobe4 from "../Images/AdobeStock_598856544_Preview.jpeg";
import adobe6 from "../Images/AdobeStock_639720431_Preview.jpeg";
import gif from "../Images/AdobeStock_621474503_Video_HD_Preview.gif";
import gif2 from "../Images/pexels-taryn-elliott-5309435 (1080p).gif";
import gif3 from "../Images/production_id_4569076 (720p).gif";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const textProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const images = [adobe0, adobe1, adobe2, adobe4, adobe6];

  const randomIndex = Math.floor(Math.random() * images.length);
  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex);
  };

  const windowWidth = window.innerWidth;
  return (
    <div className="py-3">
      <Swiper
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        effect={windowWidth <= 600 && "creative"}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "100vh",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        creativeEffect={
          windowWidth <= 600 && {
            prev: {
              shadow: true,
              translate: [0, 0, -400],
              opacity: ".7",
            },
            next: {
              translate: ["100%", 0, 0],
              scale: "1.1",
              opacity: "1",
            },
          }
        }
        modules={[Parallax, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${images[randomIndex]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(80%)",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            transition: "background-image 0.5s ease-in-out", // for onePlus smooth
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <animated.div style={textProps}>
            <div className="title" data-swiper-parallax="-300">
              Velocity Rivals
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Embark on an Epic Journey through the Fast Lane Frontier
            </div>
            <div className="text" data-swiper-parallax="-100">
              <animated.p>
                Feel the wind rush past as you conquer the asphalt, pushing your car to its limits in a high-stakes race
                against time.
              </animated.p>
              <animated.img
                src={adobe1}
                width="225"
                height="auto"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transition: "opacity 0.5s ease-in-out", // Smooth transition on image change
                }}
              />
            </div>
          </animated.div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Turbo Thunder: Ultimate Race
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Navigate the Urban Wilderness in a Symphony of Speed.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <animated.p>
              Experience the thrill of precision steering and the roar of engines as you navigate challenging tracks,
              leaving your competition in the dust.
            </animated.p>
            <animated.img src={gif3} width="225" height="auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Asphalt Adrenaline: Speed Pursuit
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Race Against Time, Across the Horizon, Where Every Second Counts.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <animated.p>
              Racing isn't just about speed; it's about strategy, split-second decisions, and the exhilarating pursuit
              of victory.
            </animated.p>
            <animated.img
              src={adobe2}
              width="225"
              height="auto"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                transition: "opacity 0.5s ease-in-out", // Smooth transition on image change
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3Race Revolution: Fast Lane Fury
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Lead the Revolution, Dominate the Track, and Leave Your Mark
          </div>
          <div className="text" data-swiper-parallax="-100">
            <animated.p>
              From screeching tires to heart-pounding drifts, each race is a symphony of adrenaline-fueled moments that
              define the joy of driving.
            </animated.p>
            <animated.img
              src={gif}
              width="225"
              height="auto"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                transition: "opacity 0.5s ease-in-out", // Smooth transition on image change
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Race Revolution: Fast Lane Fury
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Enter the World of Drifts, Master Precision, and Blitz Your Way to Glory
          </div>
          <div className="text" data-swiper-parallax="-100">
            <animated.p>
              Behind the wheel, you're not just a driver; you're a master of the road, navigating twists and turns with
              skill and pushing your machine to its maximum potential.
            </animated.p>
            <animated.img
              src={gif2}
              width="225"
              height="auto"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                transition: "opacity 0.5s ease-in-out", // Smooth transition on image change
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
