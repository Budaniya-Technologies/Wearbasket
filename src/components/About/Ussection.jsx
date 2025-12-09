"use client";

// import Image from "next/image";

export default function Ussection() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-1 py-5 mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    {items.map((item, index) => (
                        <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        width={128}
                                        height={128}
                                        className="w-32 mb-3"
                                    />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">
                                    {item.title}
                                </h2>
                                <h2 className="title-font font-regular text-sm text-gray-900">
                                    {item.Subtitle}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const items = [
    {
        title: "Free Shipping",
        Subtitle: "On all orders above ₹500",
        img: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
    },
    {
        title: "100% Money Back",
        Subtitle: "30 days refund policy",
        img: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
    },
    {
        title: "Online Support",
        Subtitle: "24/7 customer support",
        img: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
    },
    {
        title: "Secure Payment",
        Subtitle: "100% safe & encrypted payments",
        img: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
    },
];

