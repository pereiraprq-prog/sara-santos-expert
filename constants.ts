
export const EXPERT = {
  name: "Sara Santos",
  profession: "Designer de sobrancelhas com aplicação de henna e Micropigmentadora",
  city: "Caraguatatuba",
  whatsapp: "https://api.whatsapp.com/message/7QJME3VRLBFFG1?autoload=1&app_absent=0&utm_source=ig",
  instagram: "https://www.instagram.com/sara_sobrancelhasss/"
};

// Lógica de deduplicação para garantir que o usuário não veja fotos repetidas
const deduplicate = (urls: string[]) => Array.from(new Set(urls));

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  expert: "https://i.imgur.com/Qa3R4JO.jpeg",
  results: deduplicate([
    "https://i.imgur.com/68aH4gk.jpeg",
    "https://i.imgur.com/rfmmASL.jpeg",
    "https://i.imgur.com/Wq7T0Og.jpeg",
    "https://i.imgur.com/9YHykfA.jpeg",
    "https://i.imgur.com/Cljl0EH.jpeg",
    "https://i.imgur.com/ai5hM3w.jpeg",
    "https://i.imgur.com/aZUqsgR.jpeg",
    "https://i.imgur.com/KOQZ9bg.jpeg",
    "https://i.imgur.com/uNnr4OK.jpeg",
    "https://i.imgur.com/T2D6E13.jpeg",
    "https://i.imgur.com/rMtz58Z.jpeg"
  ]),
  certificates: deduplicate([
    "https://i.imgur.com/Qu7pCtX.jpeg",
    "https://i.imgur.com/kW7oSIt.jpeg",
    "https://i.imgur.com/LsjtEox.jpeg",
    "https://i.imgur.com/gsW5cYg.jpeg",
    "https://i.imgur.com/TB7Pt68.jpeg",
    "https://i.imgur.com/Cu0nRe8.jpeg",
    "https://i.imgur.com/AsOmdBn.jpeg",
    "https://i.imgur.com/GFL17Wq.jpeg"
  ])
};
