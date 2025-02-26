"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Hero = () => {
    return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-start justify-center w-full lg:w-[40%]">
          <div className="">
          <Carousel showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            autoPlay={true}
            interval={2000}
            showThumbs={false}
            >
            <div>
              <Image
                  src="/main/bees.png"
                  width="500"
                  alt="Hero Illustration"
                  height="500"
                  className={"object-cover"}
                  priority
                />
            </div>
            <div>
              <Image src="/main/1.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/2.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/3.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/4.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/5.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/6.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/7.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/8.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/9.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/11.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
            <div>
              <Image src="/main/12.png" width="616" alt="Hero Illustration" height="617" className={"object-cover"}/>
            </div>
          </Carousel>
            
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 lg:order-first">
          <div className="max-w-2xl mb-8">

          <h3 className="text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-snug xl:text-2xl xl:leading-snug dark:text-white">
              Safe & Humane Bee & Wasp Removal Services
            </h3>

            <h3 className="text-lg font-semibold leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-snug xl:text-2xl xl:leading-snug dark:text-white">
              Protect Your Home & The Bees & Wasps
            </h3>

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Are bees or wasps swarming around your home or business? Don’t risk painful stings or property damage—our expert 
              removal services provide safe, effective, and eco-friendly solutions. We relocate bees responsibly, 
              ensuring they thrive in a safer environment, and handle wasp infestations efficiently to keep your space sting-free.
            </p>


            <h1 className="text-2xl font-bold leading-normal tracking-tight text-gray-800 lg:text-2xl lg:leading-snug xl:text-3xl xl:leading-snug dark:text-white">
              📞 Call Now: <a href="tel:951-594-7694" className="font-semibold underline hover:text-yellow-400">(951) 594-7694</a>
              📍 Serving Inland Empire, Orange County, and Los Angeles County
            </h1>
          </div>
        </div>
      </Container>
    </>
  );
}

