import React from "react";

interface IPros {
  className: string;
  code: string;
  width: number;
  height: number;
}

function Kakao({ className, width, height, code }: IPros) {
  return (
    <aside className={className}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={code}
        data-ad-width={width}
        data-ad-height={height}
      ></ins>
    </aside>
  );
}

export default Kakao;
