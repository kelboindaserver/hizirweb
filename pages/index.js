import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Homepage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        zIndex: -1,
        scroll: true,
        arrows: true,
        nextArrow: <div className="slick-next"><span className="text-blue-900">▶</span></div>,
        prevArrow: <div className="slick-prev"><span className="text-blue-900">◀</span></div>,
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    arrows : false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <>
        <style jsx global>{`
            .slick-prev:before,
            .slick-next:before {
                color: #1e3a8a !important; /* text-blue-900 renk kodu */
                font-size: 24px;
            }
            
            .slick-dots li button:before {
                color: #1e3a8a !important;
            }
            
            .slick-dots li.slick-active button:before {
                color: #1e3a8a !important;
            }
        `}</style>
        <div className="site-container md:max-w-[1300px] text-gray-800">
                <h1 className="text-4xl text-center font-semibold text-blue-900 md:mt-20 mt-8 mb-10">
                    Kiralık Vinç, Kiralık Forklift, Sepetli Platform ve Makaslı Platform
                </h1>
                <Slider {...settings} className="my-24">
                    <div className="px-4">
                        <img src="/vincler/avize-min.jpeg" alt="Vinç Hizmeti 1" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4"  >
                        <img src="/vincler/beyaz-min.jpeg" alt="Vinç Hizmeti 2" className="w-full rounded-xl    " />
                    </div>
                    <div className="px-4"  >
                        <img src="/vincler/beyzman-min.jpeg" alt="Vinç Hizmeti 3" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/mobil-is-min.jpeg" alt="Vinç Hizmeti 4" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/mobil1-min.jpeg" alt="Vinç Hizmeti 5" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/mobil2-min.jpeg" alt="Vinç Hizmeti 6" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/mobil3-min.jpeg" alt="Vinç Hizmeti 7" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/sariagac.jpg" alt="Vinç Hizmeti 8" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/sariman.jpg" alt="Vinç Hizmeti 9" className="w-full rounded-xl" />
                    </div>
                    <div className="px-4">
                        <img src="/vincler/sariis.jpg" alt="Vinç Hizmeti 10" className="w-full rounded-xl" />
                    </div>
                </Slider>
         
            <div className="flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-6 space-y-3 mb-6 justify-center">
                <div className="hover:text-yellow-500 text-blue-900 transition">
                    <a href="tel:05322666791" className="text-3xl mr-2 font-bold">
                        +90 532 266 67 91
                    </a>
                </div>
                <div className="hover:text-yellow-500 text-blue-900 transition ">
                    <a
                        href="https://www.instagram.com/hizirvinc.official/"
                        target="_blank"
                        className="flex items-center text-2xl font-semibold"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-yellow-500 text-4xl mr-2"/>
                        hizirvinc.official
                    </a>
                </div>
                <div className="hover:text-yellow-500 text-blue-900 transition">
                    <a
                        href="mailto:hizirvinc@outlook.com"
                        target="_blank"
                        className="flex items-center font-semibold text-xl"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 text-4xl mr-2"/>
                        hizirvinc@outlook.com
                    </a>
                </div>
            </div>
            <p className="text-gray-600 text-xl pb-10 font-light">
                Hızır Vinç, faaliyetlerine 1985 yılında Antalya'da başladı. Uzun yıllar Antalya
                ve çevresinde sürdürülen başarılı çalışmalar, 1995 yılında firmamızı
                İstanbul'a taşıdı. Prensipli çalışma anlayışı, kaliteli işçiliği ile tanınan
                ve müşteri memnuniyetini her zaman üstün tutan firmamız gelen talepleri her zaman
                dikkate alarak müşteri isteklerine anında cevap verebilmektedir. Hızır Vinç
                yaklaşık 30 yıllık geçmişinde; Side Apollon Tapınağı, Side Antik Sütunları ve
                Perge Antik Şehri'nin restorasyon çalışmaları, Özbekistaç şirketinin
                Özbekistan'daki entegre tesislerinin kurulumu gibi önemli projelerde yer almış
                ve İGDAŞ, Dedeman Otel, Arburg, Muya Terlik, Sinpaş, Fanset gibi alanlarındaki
                pek çok önemli kuruluşa hizmet vermiştir. Kendi araçları ile 10 tondan 300
                tona kadar vinç hizmeti verebilen firmamız ayrıca kiralık forklift, Sepetli ve
                Makaslı Platform hizmetleri de sunmaktadır.
            </p>
        </div>
        <div className="">
            <Slider {...settings} className="my-24">
                <div className="px-4">
                    <img src="/vincler/avize-min.jpeg" alt="Vinç Hizmeti 1" className="w-full rounded-xl" />
                </div>
                <div className="px-4">
                    <img src="/vincler/avize-min.jpeg" alt="Vinç Hizmeti 1" className="w-full rounded-xl" />
                </div>
                <div className="px-4">
                    <img src="/vincler/avize-min.jpeg" alt="Vinç Hizmeti 1" className="w-full rounded-xl" />
                </div>
                <div className="px-4">
                    <img src="/vincler/avize-min.jpeg" alt="Vinç Hizmeti 1" className="w-full rounded-xl" />
                </div>
            </Slider>
        </div>
    </>
};
export default Homepage