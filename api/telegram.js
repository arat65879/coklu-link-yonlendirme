const phones = {
  ahsen: "33748335697",
  alp: "33776136412",
  asena: "34686199061",
  ayaz: "33647766901",
  azra: "33771471301",
  baris: "34662580557",
  bartu: "447825767598",
  berk: "393508829015",
  "betcio-tg-destek": "33758573049",
  celik: "393511947072",
  cem: "33773359239",
  defne: "33774946991",
  demet: "33754077287",
  deniz: "33753363593",
  deren: "393512065831",
  dilara: "34680119785",
  dogukan: "34692875714",
  ece: "33605583037",
  elisa: "34677128560",
  emir: "33776144809",
  eren: "33689172529",
  esref: "33776151188",
  eylem: "33759832421",
  gorkem: "33754077274",
  gozde: "33751182874",
  idil: "34696621856",
  ilayda: "33773881918",
  leyla: "34625139455",
  mehmet: "34649222506",
  melis: "34692874383",
  mert: "33776122547",
  okan: "33748507873",
  orkun: "34636606844",
  ruya: "33780750351",
  sarp: "34636491411",
  sercan: "33759392590",
  serhat: "33748341346",
  simay: "34669022487",
  sude: "34683638893",
  tansel: "33776514294",
  umit: "393510793252"
};

export default function handler(request, response) {
  const { searchParams } = new URL(request.url, `https://${request.headers.host}`);
  const id = searchParams.get("id");
  const phone = phones[id];

  if (!phone) {
    response.status(404).send("Telegram linki bulunamadi.");
    return;
  }

  response.setHeader("Location", `tg://resolve?phone=${phone}`);
  response.status(302).end();
}
