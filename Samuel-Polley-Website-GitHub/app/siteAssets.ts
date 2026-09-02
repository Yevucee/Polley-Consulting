export const assetBase = process.env.GITHUB_PAGES === "true" ? "/Polley-Consulting" : "";

export const brand = {
  wordmark: `${assetBase}/brand/polley-consulting-o1.svg`,
  wordmarkReversed: `${assetBase}/brand/polley-consulting-o1-reversed.svg`,
  mark: `${assetBase}/brand/polley-o1-mark.svg`,
  markReversed: `${assetBase}/brand/polley-o1-mark-reversed.svg`,
  favicon: `${assetBase}/brand/favicon.svg`,
  favicon32: `${assetBase}/brand/favicon-32x32.png`,
  appleTouchIcon: `${assetBase}/brand/apple-touch-icon.png`,
} as const;

export type BrandAssets = typeof brand;
