import { brush, sideImage } from "@/assets";
import Image from "next/image";
import React from "react";
import MobileDescription from "./MobileDescription";
import WebDescription from "./WebDescription";

const Description = () => {
    return (
        <div className="w-full xl:min-h-screen lg:min-h-screen md:min-h-screen flex justify-between gap-12">
            {/* left  */}
            <div className="h-screen xl:flex lg:flex md:flex hidden">
                <Image className="h-full" src={sideImage} alt="left" />
            </div>
            {/* center  */}
            <div className="mt-12 w-full">
                <div className="relative text-center flex justify-center">
                    <Image src={brush} alt="brush" />
                    <h1
                        className="font-bold xl:text-5xl lg:text-5xl md:text-5xl text-2xl absolute top-5 left-"
                        style={{ color: "#257BC4" }}
                    >
                        Ash & Pikachu Arrive in <br /> Pokémon Universe
                    </h1>
                </div>
                {/* description for web  */}
                <div className="xl:flex lg:flex md:flex hidden gap-2 w-full mt-16 ">
                    <WebDescription />
                </div>
                {/* description for mobile  */}
                <div className="xl:hidden lg:hidden md:hidden flex flex-col gap-2 w-full mt-16 px-4 mb-8">
                    <MobileDescription />
                </div>
            </div>
            {/* right  */}
            <div className="h-screen xl:flex lg:flex md:flex hidden">
                <Image className="h-full" src={sideImage} alt="right" />
            </div>
        </div>
    );
};

export default Description;
