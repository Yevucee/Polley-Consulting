import type { BrandAssets } from "./siteAssets";

type BrandLogoProps = {
  brand: BrandAssets;
  reversed?: boolean;
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({
  brand,
  reversed = false,
  compact = false,
  className,
}: BrandLogoProps) {
  const wordmark = reversed ? brand.wordmarkReversed : brand.wordmark;
  const mark = reversed ? brand.markReversed : brand.mark;

  return (
    <a
      className={`brandLogo${compact ? " brandLogoCompact" : ""}${className ? ` ${className}` : ""}`}
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
      <img className="brandLogoMark" src={mark} alt="" width={120} height={120} />
    </a>
  );
}
