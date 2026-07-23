const baseUrl = process.env.PREVIEW_URL || "http://127.0.0.1:3007";

(async () => {
  const response = await fetch(`${baseUrl}/`);
  const html = await response.text();
  const assets = [
    ...new Set(
      [...html.matchAll(/(?:src|href)=["']([^"']*_next\/static[^"']+)["']/g)].map((match) =>
        match[1].replace(/&amp;/g, "&"),
      ),
    ),
  ];
  const checks = [];
  for (const asset of assets) {
    const assetUrl = asset.startsWith("http") ? asset : `${baseUrl}${asset}`;
    const assetResponse = await fetch(assetUrl);
    checks.push({ asset, status: assetResponse.status });
  }
  const output = {
    route: { status: response.status, bytes: html.length },
    staticAssets: {
      count: checks.length,
      failures: checks.filter((item) => item.status >= 400),
    },
  };
  console.log(JSON.stringify(output, null, 2));
  if (response.status !== 200 || output.staticAssets.failures.length > 0) process.exit(1);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
