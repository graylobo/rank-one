import React from "react";

function Kakao({ className }: any) {
  return (
    <aside className={className}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit="DAN-F3a42R4onMLWbFYg"
        data-ad-width="160"
        data-ad-height="600"
      ></ins>
    </aside>
  );
}

export default Kakao;
