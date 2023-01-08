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
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
  };
  return <DefaultTemplate rankList={rankList} width={220} height={100} />;
}
