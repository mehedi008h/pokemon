import {
    brush,
    image1,
    image2,
    image3,
    image4,
    image5,
    sideImage,
} from "@/assets";
import Image from "next/image";
import React from "react";

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
                    {/* first half  */}
                    <div className="w-3/5 mb-12">
                        <div className="flex gap-2">
                            <div className="w-3/4">
                                <p className="text-xs text-justify font-semibold">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Risus cursus nibh elementum ornare a aliquet
                                    ac. Feugiat scelerisque ultrices tempor
                                    facilisi tempus risus nunc. Proin quis morbi
                                    posuere nisl etiam scelerisque. Proin
                                    pretium gravida semper ut erat nisi.
                                    Pulvinar ac mattis porta amet et. Nisl urna
                                    non fames felis leo. Vitae pulvinar sed
                                    viverra sit pretium lorem elementum. Iaculis
                                    sit maecenas sodales mi convallis justo
                                    aliquam. Tincidunt semper ut ornare vivamus
                                    lectus.
                                </p>
                                <div className="flex items-end gap-2 my-2">
                                    <p className="text-xs text-justify tracking-tighter font-semibold">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Turpis integer massa consectetur sed
                                        enim quis viverra. Vestibulum eu nibh
                                        dolor semper. Nisl feugiat quis nec odio
                                        pulvinar feugiat velit. Nulla massa sit
                                        morbi morbi. Tortor viverra eget lacus
                                        feugiat. Tempus vitae vitae orci at
                                        ultrices nisi diam faucibus. Ultricies
                                        in cursus volutpat aliquam turpis urna
                                        in sed. Hendrerit arcu sit lectus
                                        adipiscing egestas semper nunc. Ante
                                        consectetur id congue pulvinar libero
                                        tristique et orci. Platea convallis
                                        dictum dui augue. Tincidunt mattis urna
                                        sit semper sed duis feugiat mi.
                                    </p>
                                    <Image
                                        className="w-48 h-48"
                                        src={image4}
                                        alt="image3"
                                    />
                                </div>
                                <p className="text-xs text-justify tracking-tighter font-semibold">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Tincidunt at cras tortor non volutpat
                                    quisque facilisis. Ultricies consequat sed
                                    vitae ac. Nisl eu nam id lectus tellus sit
                                    egestas. Orci iaculis et vehicula nisi
                                    facilisi neque lorem. In vulputate feugiat
                                    lobortis eros viverra. Turpis viverra vel
                                    fames enim tortor. Scelerisque dictumst
                                    aliquam gravida eget ut accumsan. A est dis
                                    platea vitae blandit quis. Ultricies ac at
                                    urna vel morbi diam. Donec ut sit sit et.
                                    Etiam cum faucibus eu elementum ut fermentum
                                    in cursus.{" "}
                                </p>
                            </div>
                            <div>
                                <Image
                                    className="w-48 h-48"
                                    src={image3}
                                    alt="image3"
                                />
                                <Image
                                    className="mt-2 w-48 h-48"
                                    src={image5}
                                    alt="image1"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-justify tracking-tighter mt-2 font-semibold">
                            At a enim parturient id. Suspendisse ullamcorper
                            fermentum accumsan diam tellus. Nibh pretium
                            ultrices scelerisque dolor at etiam lectus gravida
                            sed. Sit in turpis suspendisse et aliquam. Vulputate
                            sit phasellus proin eget arcu. Enim nec ante velit
                            erat nibh nunc amet. Tellus at sit imperdiet non.
                            Cras dictum curabitur urna mauris in. Ut dui odio
                            sagittis ut imperdiet ultricies mauris ac. A sit id
                            etiam vitae non posuere tristique. Morbi sit mi sed
                            nam amet tristique tellus. Sed quam aliquam pharetra
                            nunc ipsum mattis. Volutpat pellentesque cras
                            euismod habitant sit nibh. Dictum odio at aliquam
                            sed. Orci odio lacinia id sem sed suspendisse mi
                            fringilla purus. Quis sed ultricies ac nullam odio.
                            Gravida sollicitudin viverra ornare pretium etiam
                            tortor imperdiet tellus. Id purus etiam nunc
                            hendrerit quam in. Dui netus lectus nulla cursus
                            ultrices nulla. Morbi sit in gravida fermentum. Non
                            sed lobortis amet eget sed donec.At a enim
                            parturient id. Suspendisse ullamcorper fermentum
                            accumsan diam tellus. Nibh pretium ultrices
                            scelerisque dolor at etiam lectus gravida sed. Sit
                            in turpis suspendisse et aliquam. Vulputate sit
                            phasellus proin eget arcu. Enim nec ante velit erat
                            nibh nunc amet. Tellus at sit imperdiet non. Cras
                            dictum curabitur urna mauris in. Ut dui odio
                            sagittis ut imperdiet ultricies mauris ac. A sit id
                            etiam vitae non posuere tristique. Morbi sit mi sed
                            nam amet tristique tellus. Sed quam aliquam pharetra
                            nunc ipsum mattis. Volutpat pellentesque cras
                            euismod habitant sit nibh. Dictum odio at aliquam
                            sed. Orci odio lacinia id sem.
                        </p>
                    </div>
                    {/* second half  */}
                    <div className="w-2/5 mb-12">
                        <p className="text-xs text-justify tracking-tighter mt-2 font-semibold">
                            Lorem ipsum dolor sit amet consectetur. Risus cursus
                            nibh elementum ornare a aliquet ac. Feugiat
                            scelerisque ultrices tempor facilisi tempus risus
                            nunc. Proin quis morbi posuere nisl etiam
                            scelerisque. Proin pretium gravida semper ut erat
                            nisi. Pulvinar ac mattis porta amet et. Nisl urna
                            non fames felis leo. Vitae pulvinar sed viverra .
                        </p>
                        <div className="flex items-end gap-2">
                            <Image
                                className="w-48 h-48"
                                src={image2}
                                alt="image1"
                            />
                            <p className="text-xs text-justify tracking-tighter mt-2 font-semibold">
                                Lorem ipsum dolor sit amet consectetur. Turpis
                                integer massa consectetur sed enim quis viverra.
                                Vestibulum eu nibh dolor semper. Nisl feugiat
                                quis nec odio pulvinar feugiat velit. Nulla
                                massa sit morbi morbi. Tortor viverra eget lacus
                                feugiat. Tempus vitae vitae orci at ultrices
                                nisi diam faucibus. Ultricies in cursus volutpat
                                aliquam turpis urna in sed. Hendrerit arcu sit
                                lectus adipiscing egestas semper nunc. Ante
                                consectetur id congue pulvinar libero tristique
                                et orci. Platea convallis dictum dui augue.
                                Tincidunt mattis urna sit semper sed duis
                                feugiat mi.Ante consectetur id congue
                            </p>
                        </div>
                        <div className="flex items-end gap-2 mt-2">
                            <Image
                                className="w-48 h-48"
                                src={image1}
                                alt="image1"
                            />
                            <p className="text-xs text-justify tracking-tighter mt-2 font-semibold">
                                Lorem ipsum dolor sit amet consectetur.
                                Tincidunt at cras tortor non volutpat quisque
                                facilisis. Ultricies consequat sed vitae ac.
                                Nisl eu nam id lectus tellus sit egestas. Orci
                                iaculis et vehicula nisi facilisi neque lorem.
                                In vulputate feugiat lobortis eros viverra.
                                Turpis viverra vel fames enim tortor.
                                Scelerisque dictumst aliquam gravida eget ut
                                accumsan. A est dis platea vitae blandit quis.
                                Ultricies ac at urna vel morbi diam. Donec ut
                                sit sit et. Etiam cum faucibus eu elementum ut
                                fermentum in cursus. Ante consectetur id congue
                                Ante consectetur id congue
                            </p>
                        </div>
                        <p className="text-xs text-justify tracking-tighter mt-2 font-semibold">
                            At a enim parturient id. Suspendisse ullamcorper
                            fermentum accumsan diam tellus. Nibh pretium
                            ultrices scelerisque dolor at etiam lectus gravida
                            sed. Sit in turpis suspendisse et aliquam. At a enim
                            parturient id. Suspendisse ullamcorper fermentum
                            accumsan diam tellus. Nibh pretium ultrices
                            scelerisque dolor at etiam lectus gravida sed. Sit
                            in turpis suspendisse et aliquam. Vulputate sit
                            phasellus proin eget arcu. Enim nec ante velit erat
                            nibh nunc amet. Tellus at sit imperdiet non. Cras
                            dictum curabitur urna mauris in. Ut dui odio
                            sagittis ut imperdiet ultricies mauris ac. A sit id
                            etiam vitae non posuere tristique. Morbi sit mi sed
                            nam amet tristique tellus. Sed quam aliquam
                            pharetra.
                        </p>
                    </div>
                </div>
                {/* description for mobile  */}
                <div className="xl:hidden lg:hidden md:hidden flex flex-col gap-2 w-full mt-16 px-4 mb-8">
                    <p className="text-xs text-justify font-semibold">
                        Lorem ipsum dolor sit amet consectetur. Risus cursus
                        nibh elementum ornare a aliquet ac. Feugiat scelerisque
                        ultrices tempor facilisi tempus risus nunc. Proin quis
                        morbi posuere nisl etiam scelerisque. Proin pretium
                        gravida semper ut erat nisi. Pulvinar ac mattis porta
                        amet et. Nisl urna non fames felis leo. Vitae pulvinar
                        sed viverra sit pretium lorem elementum. Iaculis sit
                        maecenas sodales mi convallis justo aliquam. Tincidunt
                        semper ut ornare vivamus lectus.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-3/5 flex justify-end items-center gap-2">
                            <Image
                                className="w-24 h-24"
                                src={image3}
                                alt="image3"
                            />
                            <div className="flex flex-col gap-2">
                                <Image
                                    className="w-24 h-24"
                                    src={image3}
                                    alt="image3"
                                />
                                <Image
                                    className="w-24 h-24"
                                    src={image5}
                                    alt="image1"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-2 mt-8">
                            <Image
                                className="w-24 h-24"
                                src={image5}
                                alt="image3"
                            />
                            <Image
                                className="w-24 h-24"
                                src={image1}
                                alt="image1"
                            />
                        </div>
                    </div>
                    <p className="text-xs text-justify font-semibold">
                        Lorem ipsum dolor sit amet consectetur. Risus cursus
                        nibh elementum ornare a aliquet ac. Feugiat scelerisque
                        ultrices tempor facilisi tempus risus nunc. Proin quis
                        morbi posuere nisl etiam scelerisque. Proin pretium
                        gravida semper ut erat nisi. Pulvinar ac mattis porta
                        amet et. Nisl urna non fames felis leo. Vitae pulvinar
                        sed viverra sit pretium lorem elementum. Iaculis sit
                        maecenas sodales mi convallis justo aliquam. Tincidunt
                        semper ut ornare vivamus lectus.
                    </p>
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
