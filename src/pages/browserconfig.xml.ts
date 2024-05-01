import { manifest } from "@config/manifest";

export function GET() {
  const xmlContent = `
  <?xml version="1.0" encoding="utf-8"?>
    <browserconfig>
      <msapplication>
        <tile>
          <square150x150logo src="/images/favicons/mstile-150x150.png" />
          <TileColor>${manifest.theme}</TileColor>
        </tile>
      </msapplication>
    </browserconfig>`.trim();

  return new Response(xmlContent);
}