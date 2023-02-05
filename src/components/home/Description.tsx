import { brush, sideImage } from "@/assets";
import Image from "next/image";
import React from "react";

const Description = () => {
    return (
        <div className="w-full h-screen flex justify-between gap-2">
            {/* left  */}
            <div className="h-screen">
                <Image className="h-full" src={sideImage} alt="left" />
            </div>
            {/* center  */}
            <div className="my-12">
                <div className="relative">
                    <Image className="" src={brush} alt="brush" />
                    <h1
                        className="font-bold text-5xl text-center absolute top-5"
                        style={{ color: "#257BC4" }}
                    >
                        Ash & Pikachu Arrive in <br /> Pokémon Universe
                    </h1>
                </div>
            </div>
            {/* right  */}
            <div className="h-screen">
                <Image className="h-full" src={sideImage} alt="right" />
            </div>
        </div>
    );
};

export default Description;
