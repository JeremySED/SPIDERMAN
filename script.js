const frases = [
  "Un gran poder conlleva una gran responsabilidad.",
  "Cualquiera puede usar la máscara, lo importante es lo que haces con ella.",
  "Spider-Man no se rinde nunca.",
  "La esperanza es lo que nos hace héroes."
];

document.getElementById("fraseBtn").addEventListener("click", () => {
  const random = frases[Math.floor(Math.random() * frases.length)];
  alert(random);
});
