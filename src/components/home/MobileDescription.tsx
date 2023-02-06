import { image1, image2, image3, image4, image5 } from "@/assets";
import Image from "next/image";
import React, { Fragment } from "react";

const MobileDescription = () => {
    return (
        <Fragment>
            <p className="text-xs text-justify font-semibold">
                Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl
                etiam scelerisque. Proin pretium gravida semper ut erat nisi.
                Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
                Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis
                sit maecenas sodales mi convallis justo aliquam. Tincidunt
                semper ut ornare vivamus lectus.
            </p>
            <div className="flex gap-2">
                <div className="w-3/5 flex justify-end items-center gap-2">
                    <Image className="w-24 h-24" src={image3} alt="image3" />
                    <div className="flex flex-col gap-2">
                        <Image
                            className="w-24 h-24"
                            src={image4}
                            alt="image3"
                        />
                        <Image
                            className="w-24 h-24"
                            src={image2}
                            alt="image1"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2 mt-8">
                    <Image className="w-24 h-24" src={image5} alt="image3" />
                    <Image className="w-24 h-24" src={image1} alt="image1" />
                </div>
            </div>
            <p className="text-xs text-justify font-semibold">
                Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl
                etiam scelerisque. Proin pretium gravida semper ut erat nisi.
                Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
                Vitae pulvinar sed viverra sit pretium lorem elementum. Iaculis
                sit maecenas sodales mi convallis justo aliquam. Tincidunt
                semper ut ornare vivamus lectus.
            </p>
        </Fragment>
    );
};

export default MobileDescription;
