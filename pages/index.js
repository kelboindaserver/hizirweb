import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
function Homepage(){
    return <>
        <div className="site-container md:site-4xl-container">
            <h1 className="text-white text-3xl text-center font-semibold md:mt-20 mt-8 mb-10">Kiralık Vinç, Kiralık Forklift, Sepetli Platform ve Makaslı Platform</h1>
            <div className="flex flex-col items-center md:space-x-6 space-y-3 mb-6 ">
                <div className="text-white hover:text-semi-blue transition" >
                    <a href="tel:05322666791" className="text-3xl mr-2 font-bold">+90 532 266 67 91</a>
                </div>
                <div className="text-white hover:text-semi-blue transition">
                    <a href="https://www.instagram.com/hizirvinc.official/" target="_blank" className="  flex items-center text-2xl font-semibold"> <FontAwesomeIcon icon={faInstagram} className=" text-4xl mr-2" />hizirvinc.official</a>
                </div>
                <div className="text-white hover:text-semi-blue transition">
                    <a href="mailto:hizirvinc@outlook.com" target="_blank" className=" flex items-center font-semibold text-xl "> <FontAwesomeIcon icon={faEnvelope} className="text-4xl mr-2" />hizirvinc@outlook.com</a>
                </div>

            </div>
            <Carousel  className="mx-5 md:brightness-75 md:hover:brightness-110 md:transition md:delay-100 md:ease-in-out" autoFocus={true}  showArrows={true} infiniteLoop={true} autoPlay={true} interval={6000} showStatus={false} showThumbs={true} >
                <div className="px-8">
                    <img src="vincler/sariman.JPG" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/beyaz-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/beyzman-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/mobil1-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/mobil2-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/mobil3-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/mobil-is-min.jpeg" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/sariagac.JPG" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/sariis.JPG" alt=""/>
                </div>
                <div className="px-8">
                    <img src="vincler/avize-min.jpeg" alt=""/>
                </div>
            </Carousel>
            <p className="text-zinc-50 text-xl pb-10 font-light">Hızır Vinç, faaliyetlerine 1985 yılında Antalya'da başladı. Uzun yıllar Antalya ve çevresinde sürdürülen başarılı çalışmalar, 1995 yılında firmamızı İstanbul'a taşıdı. Prensipli çalışma anlayışı, kaliteli işçiliği ile tanınan ve müşteri memnuniyetini her zaman üstün tutan firmamız gelen talepleri her zaman dikkate alarak müşteri isteklerine anında cevap verebilmektedir. Hızır Vinç yaklaşık 30 yıllık geçmişinde; Side Apollon Tapınağı, Side Antik Sütunları ve Perge Antik Şehri'nin restorasyon çalışmaları, Özbekistaç şirketinin Özbekistan'daki entegre tesislerinin kurulumu gibi önemli projelerde yeralmış ve İGDAŞ, Dedeman Otel, Arburg, Muya Terlik, Sinpaş, Fanset gibi alanlarındaki pek çok önemli kuruluşa hizmet vermiştir.Kendi araçları ile 10 tondan 300 tona kadar vinç hizmeti verebilen firmamız ayrıca kiralık forklift , Sepetli ve Makaslı Platform hizmetleride sunmaktadır.
            </p>
        </div>
    </>
};
export default Homepage