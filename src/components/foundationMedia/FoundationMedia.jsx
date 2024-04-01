import React from "react";
import Link from "next/link";

const FoundationMedia = () => {
  return (
    <div className={"foundation"}>
      <span className={"foundation__rights"}>
        © {new Date().getFullYear()} БО &quot;ПРИКАРПАТГАРАНТ&quot;, All Rights reserved
      </span>
      <div>
        <Link href="/privacy-policy">
          <span className="foundation__privacy">Політика конфіденційності</span>
        </Link>
      </div>
    </div>
  );
};

export default FoundationMedia;
