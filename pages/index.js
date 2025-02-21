import React, { Component } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const craneData = [
  {
    id: 1,
    title: "28 K 1595",
    image: "/vincler/28k-1.JPG",
    description: "28 K 1595 | Çekici"
  },
  {
    id: 2,
    title: "34 DGV 32",
    image: "/vincler/dgv32-1.JPG",
    description: "34 DGV 32 | Kayar Kasa"
  },
  {
    id: 3,
    title: "34 FUK 641",
    image: "/vincler/fuk641-1.jpg",
    description: "34 FUK 641 | Vinç"
  },
  {
    id: 4,
    title: "34 HR 1409",
    image: "/vincler/hr1409-1.jpeg",
    description: "34 HR 1409 | Vinç"
  },
  {
    id: 5,
    title: "34 JMP 45",
    image: "/vincler/jmp45-1.jpeg",
    description: "34 JMP 45 | Vinç"
  },
  {
    id: 6,
    title: "34 JU 2117",
    image: "/vincler/ju2117-1.JPG",
    description: "34 JU 2117 | Vinç"
  },
  {
    id: 7,
    title: "34 KRT 781",
    image: "/vincler/krt781-1.JPG",
    description: "34 KRT 781 | Vinç"
  },
  {
    id: 8,
    title: "34 LYV 10",
    image: "/vincler/lyv10-1.jpg",
    description: "34 LYV 10 | Vinç"
  },
  {
    id: 9,
    title: "34 MDA 85",
    image: "/vincler/mda85-1.JPG",
    description: "34 MDA 85 | Vinç"
  },
  {
    id: 10,
    title: "34 DGV 32",
    image: "/vincler/dgv32-2.JPG",
    description: "34 DGV 32 | Kayar Kasa"
  },
  {
    id: 12,
    title: "34 FUK 641",
    image: "/vincler/fuk641-2.jpeg",
    description: "34 FUK 641 | Vinç"
  },
  {
    id: 13,
    title: "34 JMP 45",
    image: "/vincler/jmp45-2.jpeg",
    description: "34 JMP 45 | Vinç"
  },
  {
    id: 14,
    title: "34 JU 2117",
    image: "/vincler/ju2117-2.JPG",
    description: "34 JU 2117 | Vinç"
  },
  {
    id: 15,
    title: "34 KRT 781",
    image: "/vincler/krt781-2.jpeg",
    description: "34 KRT 781 | Vinç"
  },
  {
    id: 16,
    title: "34 MDA 85",
    image: "/vincler/mda85-2.JPG",
    description: "34 MDA 85 | Vinç"
  },
  {
    id: 17,
    title: "34 DGV 32",
    image: "/vincler/dgv32-3.jpeg",
    description: "34 DGV 32 | Kayar Kasa"
  },
  {
    id: 18,
    title: "34 FUK 641",
    image: "/vincler/fuk641-3.jpeg",
    description: "34 FUK 641 | Vinç"
  },
  {
    id: 19,
    title: "34 JMP 45",
    image: "/vincler/jmp45-3.jpg",
    description: "34 JMP 45 | Vinç"
  },
  {
    id: 20,
    title: "34 JU 2117",
    image: "/vincler/ju2117-3.JPG",
    description: "34 JU 2117 | Vinç"
  },
  {
    id: 21,
    title: "34 KRT 781",
    image: "/vincler/krt781-3.jpeg",
    description: "34 KRT 781 | Vinç"
  },
  {
    id: 22,
    title: "34 MDA 85",
    image: "/vincler/mda85-3.jpg",
    description: "34 MDA 85 | Vinç"
  },
  {
    id: 23,
    title: "34 DGV 32",
    image: "/vincler/dgv32-4.jpg",
    description: "34 DGV 32 | Kayar Kasa"
  },
  {
    id: 24,
    title: "34 FUK 641",
    image: "/vincler/fuk641-4.jpeg",
    description: "34 FUK 641 | Vinç"
  },
  {
    id: 25,
    title: "34 JU 2117",
    image: "/vincler/ju2117-4.JPG",
    description: "34 JU 2117 | Vinç"
  },


];

const referencesData = [
  { id: 1, image: "/referans/abb.png", alt: "ABB" },
  { id: 2, image: "/referans/akfen.jpg", alt: "Akfen" },
  { id: 3, image: "/referans/akyapı.png", alt: "Akyapı" },
  { id: 4, image: "/referans/astaldi.png", alt: "Astaldi" },
  { id: 5, image: "/referans/akır İnşaat İTH. İHR. SAN. TİC. LTD. ŞTİ.png", alt: "Akır İnşaat" },
  { id: 6, image: "/referans/Alan Grup İnşaat.png", alt: "Alan Grup İnşaat" },
  { id: 7, image: "/referans/botaş.png", alt: "Botaş" },
  { id: 8, image: "/referans/dkt.png", alt: "DKT" },
  { id: 9, image: "/referans/dogus.png", alt: "Doğuş" },
  { id: 10, image: "/referans/Efe Project.png", alt: "Efe Project" },
  { id: 11, image: "/referans/ento.png", alt: "Ento" },
  { id: 12, image: "/referans/eryap.png", alt: "Eryap" },
  { id: 13, image: "/referans/freyşaş.jpg", alt: "Freyşaş" },
  { id: 14, image: "/referans/Gülermak Ağır Sanayi İnşaat ve Taahhüt A.Ş..jpg", alt: "Gülermak" },
  { id: 15, image: "/referans/Ilgaz İnşaat ve Tic.Ltd.Şti..png", alt: "Ilgaz İnşaat" },
  { id: 16, image: "/referans/iston.jpg", alt: "İston" },
  { id: 17, image: "/referans/Kale Havacılık Sanayi A.Ş..png", alt: "Kale Havacılık" },
  { id: 18, image: "/referans/KaleKalıp Makina ve Kalıp Sanayi A.Ş.png", alt: "KaleKalıp" },
  { id: 19, image: "/referans/kowansoo.png", alt: "Kowansoo" },
  { id: 20, image: "/referans/Kurumahmutoğlu İnşaat.png", alt: "Kurumahmutoğlu" },
  { id: 21, image: "/referans/makro.png", alt: "Makro" },
  { id: 22, image: "/referans/Makyol İnşaat Sanayi Turizm ve Ticaret A.Ş..png", alt: "Makyol" },
  { id: 23, image: "/referans/MERKEZ HİDROLİK MAK SAN.TİC.LTD.ŞTİ.png", alt: "Merkez Hidrolik" },
  { id: 24, image: "/referans/muya.png", alt: "Muya" },
  { id: 25, image: "/referans/nan Makina Sanayi ve Ticaret A.Ş..png", alt: "Nan Makina" },
  { id: 26, image: "/referans/polimeks.png", alt: "Polimeks" },
  { id: 27, image: "/referans/rainfırced.png", alt: "Rainfırced" },
  { id: 28, image: "/referans/ronesans.png", alt: "Rönesans" },
  { id: 29, image: "/referans/sinpaş.png", alt: "Sinpaş" },
];

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          autoplaySpeed: 2000,
          swipeToSlide: true,
        }
      }
    ]
  };

  const referenceSettings = {
    ...settings,
    slidesToShow: 5,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          swipeToSlide: true,
        }
      }
    ]
  };

  return (
    <>
      <section
        id="about"
        className="h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-[5]"></div>
          <video
            src="/intro-bg.mp4"
            autoPlay
            muted
            loop
            controlsList="noplaybackrate nofullscreen nodownload"
            disablePictureInPicture
            playsInline
            className="w-full h-full object-cover filter brightness-75"
          ></video>
        </div>
        <div className="relative z-[7]">
          <div className="animate-fade-in mt-[4rem]">
            <motion.h1
              className="text-4xl md:text-7xl leading-tight text-center inter-black text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              HIZIR VİNÇ
            </motion.h1>
            <motion.h3
              className="max-w-6xl px-6 text-sm md:text-2xl leading-tight text-center inter-bold mt-[0.75rem] text-white/80"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              1985 yılında Antalya'da başladığımız yolculuğumuza, 1995'ten
              itibaren İstanbul'da devam ediyoruz. Kaliteli işçiliğimiz ve
              müşteri odaklı hizmet anlayışımızla restorasyon projelerinden
              sanayi tesislerine kadar birçok büyük projede yer aldık. 10 tondan
              300 tona kadar vinç kiralama, forklift, sepetli ve makaslı
              platform hizmetlerimizle, her zaman hızlı ve güvenilir çözümler
              sunuyoruz.
            </motion.h3>
            <motion.h4
              className="max-w-6xl px-6 text-md md:text-4xl leading-tight text-center inter-bold md:mt-[3rem] mt-[1.5rem] text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              BİZİMLE İLETİŞİME GEÇİN
            </motion.h4>
            <div className="flex flex-col md:flex-row justify-around lg:items-start items-center md:mt-[2rem] mt-[0.25rem]">
              <div className="flex flex-col justify-center items-center">
                <motion.h4
                  className="max-w-6xl px-6 text-md md:text-2xl leading-tight text-center inter-bold mt-[1.5rem] text-white/80 uppercase"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  telefon
                </motion.h4>
                <motion.p
                  className="max-w-6xl px-6 text-sm md:text-2xl leading-tight text-center inter-bold mt-[0.25rem] text-white/80 uppercase"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  0533 333 33 33
                </motion.p>
              </div>
              <div className="flex flex-col justify-center">
                <motion.h4
                  className="max-w-6xl px-6 text-md md:text-2xl leading-tight text-center inter-bold mt-[1.5rem] text-white/80 uppercase"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  email
                </motion.h4>
                <motion.p
                  className="max-w-6xl px-6 text-sm md:text-2xl leading-tight text-center inter-bold mt-[0.25rem] text-white/80"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  hizirvinc@outlook.com
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h4 className="max-w-6xl px-6 text-lg md:text-2xl leading-tight text-center inter-bold mt-[1.5rem] text-white/80 uppercase">
                  adres
                </motion.h4>
                <iframe
                  className="rounded max-w-[250px] max-h-[75px] md:max-w-[800px] md:max-h-[300px]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12031.076689448495!2d28.809129!3d41.074038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x941d8ab65906ca56!2zSMSxesSxciBWaW7Dpw!5e0!3m2!1str!2str!4v1667151271781!5m2!1str!2str"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <motion.p className="max-w-sm px-6 text-sm md:text-xl leading-tight text-center inter-bold mt-[0.25rem] text-white/80">
                  İOSB Dolapdere Sanayi Sitesi 21. Ada NO:22 Başakşehir/İstanbul
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="cranes" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-6xl inter-black text-center mb-12 text-white">Vinçlerimiz</h2>
          <Slider {...settings}>
            {craneData.map((crane) => (
              <div key={crane.id} className="px-4">
                <div className="bg-white/50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={crane.image} 
                    alt={crane.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl inter-extrabold mb-2 text-white">{crane.title}</h3>
                    <p className="text-white/70 inter-medium">{crane.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="references" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-6xl inter-black text-center mb-12 text-white">Referanslarımız</h2>
          <Slider {...referenceSettings}>
            {referencesData.map((reference) => (
              <div key={reference.id} className="px-4">
                <div className="flex items-center justify-center h-40 bg-white/50 backdrop-blur-lg rounded-lg shadow-md overflow-hidden p-4">
                  <img
                    src={reference.image}
                    alt={reference.alt}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Homepage;
