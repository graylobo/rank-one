import React from "react";
import DefaultTemplate from "../DefaultTemplate";

export default function Bag() {
  const rankList = {
    0: {
      patekPhlippe: {
        link: "https://www.patek.com/en/home",
        name: "Patek Phlippe(파텍필립)",
        logo: "/images/royal/watch/patek-philippe.svg",
      },
    },
    1: {
      breguet: {
        link: "https://www.breguet.com/kr",
        name: "Breguet(브레게)",
        logo: "/images/royal/watch/breguet.svg",
      },
      audemars: {
        link: "https://www.audemarspiguet.com/com/en/home.html",
        name: "Audemars Piguet(오데마 피게)",
        logo: "/images/royal/watch/audemars-piguet.svg",
      },
      vacheron: {
        link: "https://www.vacheron-constantin.com/kr/ko/home.html",
        name: "Vacheron Constantin(바쉐론 콘스탄틴)",
        logo: "/images/royal/watch/vacheron.svg",
      },
      alange: {
        link: "https://www.alange-soehne.com/kr-en",
        name: "Alange&Soehne(아 랑에 운트 죄네)",
        logo: "/images/royal/watch/a-lange-sohne.svg",
      },
    },
    2: {
      glashuette: {
        link: "https://www.glashuette-original.com/en/",
        name: "Glashütte(글라슈테)",
        logo: "/images/royal/watch/glashuette.svg",
      },
      piaget: {
        link: "https://www.piaget.com/kr-ko",
        name: "piaget(피아제)",
        logo: "/images/royal/watch/piaget.svg",
      },
      jaegerLecoultre: {
        link: "https://www.jaeger-lecoultre.com/kr-ko",
        name: "jaeger-lecoultre(예거-리쿨트르)",
        logo: "/images/royal/watch/jaeger-lecoultre.svg",
      },
      blancpain: {
        link: "https://www.blancpain.com/ko",
        name: "blancpain(블랑팡)",
        logo: "/images/royal/watch/blancpain.svg",
      },
      richardmille: {
        link: "https://www.richardmille.com/",
        name: "richardmille(리차드 밀)",
        logo: "/images/royal/watch/richardmille.svg",
        scaleX: 1,
        scaleY: 0.35,
      },
      rogerdubuis: {
        link: "https://www.rogerdubuis.com/kr-ko",
        name: "rogerdubuis(로저 드뷔)",
        logo: "/images/royal/watch/rogerdubuis.svg",
      },
    },
    3: {
      rolex: {
        link: "https://www.rolex.com/ko",
        name: "rolex(롤렉스)",
        logo: "/images/royal/watch/rolex.svg",
      },
      breitling: {
        link: "https://www.breitling.com/kr-ko/",
        name: "breitling(브라이틀링)",
        logo: "/images/royal/watch/breitling.svg",
      },
      panerai: {
        link: "https://www.panerai.com/kr/ko/home.html",
        name: "panerai(파네라이)",
        logo: "/images/royal/watch/panerai.svg",
      },
      iwc: {
        link: "https://www.iwc.com/kr/ko/home.html",
        name: "International Watch Company(IWC)",
        logo: "/images/royal/watch/iwc.svg",
      },
      omega: {
        link: "https://www.omegawatches.co.kr/",
        name: "omega(오메가)",
        logo: "/images/royal/watch/omega.svg",
      },
      hublot: {
        link: "https://www.hublot.com/en-us",
        name: "hublot(위블로)",
        logo: "/images/royal/watch/hublot.svg",
      },
    },
    4: {},
    5: {},
    6: {},
  };
  return <DefaultTemplate rankList={rankList} width={220} height={100} />;
}
