const memberRepresentatives = {
  arat: "mehmet"
};

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

export default function handler(request, response) {
  const { searchParams } = new URL(request.url, `https://${request.headers.host}`);
  const username = normalizeText(searchParams.get("username"));
  const representativeId = memberRepresentatives[username];

  if (!representativeId) {
    response.status(404).json({ found: false });
    return;
  }

  response.status(200).json({ found: true, representativeId });
}
