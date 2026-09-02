import type { BrandAssets } from "./siteAssets";

type BrandLogoProps = {
  brand: BrandAssets;
  reversed?: boolean;
  className?: string;
};

export default function BrandLogo({
  brand,
  reversed = false,
  className,
}: BrandLogoProps) {
  const wordmark = reversed ? brand.wordmarkReversed : brand.wordmark;

  return (
    <a
      className={`brandLogo${className ? ` ${className}` : ""}`}
      href="#top"
      aria-label="Polley Consulting"
    >
      <img
        className="brandLogoWordmark"
        src={wordmark}
        alt=""
        width={620}
        height={170}
      />
    </a>
  );
}
