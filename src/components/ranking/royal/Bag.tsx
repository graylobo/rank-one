import React from "react";
import DefaultTemplate from "../DefaultTemplate";

export default function Bag() {
  const rankList = {
    0: {
      hermes: {
        link: "https://www.hermes.com/kr/ko/",
        name: "HERMES",
        logo: "/images/bag/hermes.svg",
      },
    },
    1: {
      louis: {
        link: "https://kr.louisvuitton.com/kor-kr/homepage",
        name: "LOUIS VUITTON ",
        logo: "/images/bag/louis.svg",
      },
      chanel: { link: "https://www.chanel.com/kr", name: "CHANEL", logo: "/images/bag/chanel.svg" },

      goyard: {
        link: "https://www.goyard.com/kr_ko/",
        name: "GOYARD",
        logo: "/images/bag/goyard.svg",
      },
    },
    2: {
      dior: {
        link: "https://www.dior.com/ko_kr/fashion/%EA%B0%80%EB%B0%A9/%EA%B0%80%EB%B0%A9",
        name: "DIOR",
        logo: "/images/bag/dior.svg",
      },
      fendi: {
        link: "https://www.fendi.com/kr-ko/",
        name: "FENDI",
        logo: "/images/bag/fendi.svg",
      },
      bottega: {
        link: "https://www.bottegaveneta.com/ko-kr",
        name: "BOTTEGA VENETA",
        logo: "/images/bag/bottega.svg",
      },
      celine: {
        link: "https://www.celine.com/ko-kr",
        name: "CELINE",
        logo: "/images/bag/celine.svg",
      },
    },
    3: {
      prada: {
        link: "https://www.prada.com/kr/ko.html",
        name: "PRADA",
        logo: "/images/bag/prada.svg",
      },
      gucci: {
        link: "https://www.gucci.com/kr/ko/",
        name: "GUCCI",
        logo: "/images/bag/gucci.svg",
      },
      saint: {
        link: "https://www.ysl.com/ko-kr",
        name: "YSL",
        logo: "/images/bag/saint.svg",
      },
      burberry: {
        link: "https://kr.burberry.com/?selected=Y",
        name: "BURBERRY",
        logo: "/images/bag/burberry.svg",
      },
      loewe: {
        link: "https://www.loewe.com/int/ko/home",
        name: "LOEWE",
        logo: "/images/bag/loewe.svg",
      },
    },
    4: {
      valentino: {
        link: "https://www.valentino.com/ko-kr",
        name: "VALENTINO",
        logo: "/images/bag/valentino.svg",
      },
      alexander: {
        link: "https://www.alexandermcqueen.com/en-nl",
        name: "ALEXANDER MCQUEEN",
        logo: "/images/bag/alexander.svg",
      },
      ferragamo: {
        link: "https://www.ferragamo.com/shop/kor/ko",
        name: "FERRAGAMO",
        logo: "/images/bag/ferragamo.svg",
      },
      chloe: {
        link: "https://www.chloe.com/kr",
        name: "CHLOE",
        logo: "/images/bag/chloe.svg",
      },
      mulberry: {
        link: "https://www.mulberry.com/kr/",
        name: "MULBERRY",
        logo: "/images/bag/mulberry.svg",
      },
    },
    5: {
      mmm: {
        link: "https://www.maisonmargiela.com/ko-kr/",
        name: "MAISON MARTIN MARGIELA",
        logo: "/images/bag/mmm.svg",
      },
      balenciaga: {
        link: "https://www.balenciaga.com/ko-kr",
        name: "BALENCIAGA",
        logo: "/images/bag/balenciaga.svg",
      },
      miumiu: {
        link: "https://www.miumiu.com/kr/ko.html",
        name: "MIUMIU",
        logo: "/images/bag/miumiu.svg",
      },
      thombrowne: {
        link: "https://www.thombrowne.com/kr",
        name: "THOM BROWNE",
        logo: "/images/bag/thombrowne.svg",
      },
      jilsander: {
        link: "https://www.jilsander.com/it-it/home",
        name: "JIN SANDER",
        logo: "/images/bag/jilsander.svg",
      },
      lemaire: {
        link: "https://eu.lemaire.fr/",
        name: "LEMAIRE",
        logo: "/images/bag/lemaire.svg",
      },
    },
    6: {
      coach: {
        link: "https://korea.coach.com/",
        name: "COACH",
        logo: "/images/bag/coach.svg",
      },
      toryburch: {
        link: "https://www.toryburch.co.kr/public/display/main/view",
        name: "TORY BURCH",
        logo: "/images/bag/toryburch.svg",
      },
      michaelkors: {
        link: "https://www.michaelkors.com/",
        name: "MICHAEL KORS",
        logo: "/images/bag/michaelkors.svg",
      },
      marni: {
        link: "https://www.marni.com/ko-kr",
        name: "MARNI",
        logo: "/images/bag/marni.svg",
      },
    },
  };
  return <DefaultTemplate rankList={rankList} />;
}
