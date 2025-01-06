export const products = [
  {
    id: 1,
    productName: "Glock 19",
    category: "Handgun",
    brand: "Glock",
    price: 499.99,
    caliber: "9mm",
    weight: "670g",
    material: "Polymer",
    image: require("@/assets/images/ak7bg.png"),
    description:
      "The Glock 19 Gen 5 is a compact 9mm handgun perfect for personal defense.",
    quantity: 25,
  },
  {
    id: 2,
    productName: "Remington 870",
    category: "Shotgun",
    brand: "Remington",
    price: 399.99,
    caliber: "12 gauge",
    weight: "3kg",
    material: "Steel",
    image: require("@/assets/images/ak5bg.png"),
    description:
      "The Remington 870 Tactical is known for its versatility and reliability in self-defense.",
    quantity: 12,
  },
  {
    id: 3,
    productName: "Winchester 5.56 NATO",
    category: "Ammunition",
    brand: "Winchester",
    price: 166.99,
    caliber: "5.56mm",
    weight: "62gr",
    material: "Brass casing",
    image: require("@/assets/images/ak1bg.png"),
    description:
      "Winchester 5.56 NATO ammunition offers reliable performance for target shooting and defense.",
    quantity: 100,
  },
  {
    id: 4,
    productName: "Sig Sauer P320",
    category: "Handgun",
    brand: "Sig Sauer",
    price: 549.99,
    caliber: "9mm",
    weight: "833g",
    material: "Polymer and Stainless Steel",
    image: require("@/assets/images/ak2bg.png"),
    description:
      "The Sig Sauer P320 is a modular and versatile full-size handgun for military and law enforcement.",
    quantity: 0,
  },
  {
    id: 5,
    productName: "Federal Premium 308",
    category: "Ammunition",
    brand: "Federal",
    price: 566.99,
    caliber: ".308 Win",
    weight: "168gr",
    material: "Brass casing",
    image: require("@/assets/images/ak4bg.png"),
    description:
      "Premium .308 Winchester ammunition designed for precision and hunting applications.",
    quantity: 50,
  },

  {
    id: 6,
    productName: "Hornady Critical W345",
    category: "Ammunition",
    brand: "Hornady",
    price: 78.99,
    caliber: "9mm",
    weight: "115gr",
    material: "Nickel-Plated Brass",
    image: require("@/assets/images/coboygunbg.png"),
    description:
      "Hornady Critical Defense is designed for personal protection and ensures consistent expansion.",
    quantity: 200,
  },
  {
    id: 7,
    productName: "Smith & Wesson M&P",
    category: "Handgun",
    brand: "Smith & Wesson",
    price: 449.99,
    caliber: "9mm",
    weight: "620g",
    material: "Polymer",
    image: require("@/assets/images/glockbg.png"),
    description:
      "The M&P Shield offers a lightweight, slim profile for easy concealed carry.",
    quantity: 30,
  },
  {
    id: 8,
    productName: "Winchester 9.8 NATO",
    category: "AK",
    brand: "Smith & Wesson",
    price: 646.99,
    caliber: "17mm",
    weight: "620g",
    material: "Polymer",
    image: require("@/assets/images/ak3bg.png"),
    description:
      "The M&P Shield offers a lightweight, slim profile for easy concealed carry.",
    quantity: 10,
  },
];

export const categoriesCard = [
  {
    id: 1,
    Image: require("@/assets/images/coboygunbg.png"),
    name: "Coboy Gun",
  },
  {
    id: 2,
    Image: require("@/assets/images/glockbg.png"),
    name: "Glock Gun",
  },
  {
    id: 3,
    Image: require("@/assets/images/ak1bg.png"),
    name: "Machine Gun",
  },
  {
    id: 4,
    Image: require("@/assets/images/savage.jpg"),
    name: "Savage Gun",
  },
  {
    id: 5,
    Image: require("@/assets/images/ak7bg.png"),
    name: "Pistol",
  },

  {
    id: 6,
    Image: require("@/assets/images/b1.jpg"),
    name: "Bullet",
  },
  {
    id: 7,
    Image: require("@/assets/images/gun.avif"),
    name: "Short Gun",
  },

  {
    id: 8,
    Image: require("@/assets/images/s1.jpg"),
    name: "Sniper",
  },
];

export const featuredCard = [
  {
    id: 1,
    image: require("@/assets/images/ak5bg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "Sniper",
    description: "A befit Sniper",
    price: 400.0,
  },
  {
    id: 2,
    image: require("@/assets/images/coboygunbg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "Coboy Gun",
    description: "A short gun",
    price: 300.0,
  },
  {
    id: 3,
    image: require("@/assets/images/glockbg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "Glock",
    description: "A hand gun",
    price: 200.56,
  },
  {
    id: 4,
    image: require("@/assets/images/ak7bg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "Pistol Gun",
    description: "A good metal gun with bullet",
    price: 187.05,
  },
  {
    id: 5,
    image: require("@/assets/images/ak1bg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "Machine Gun",
    description: "A Long gun",
    price: 396.07,
  },
  {
    id: 6,
    image: require("@/assets/images/ak3bg.png"),
    span: "HOT",
    rate: "/assets/icons/Rating Group.svg",
    name: "AK-47",
    description: "A befit rifle",
    price: 400.63,
  },
];

export const shopCard = [
  {
    id: "1",
    image: require("@/assets/images/glockbg.png"),
    name: "Glock",
  },
  {
    id: "2",
    image: require("@/assets/images/ak5bg.png"),
    name: "AK-47",
  },
  {
    id: "3",
    image: require("@/assets/images/ak7bg.png"),
    name: "Pistol Gun",
  },
];
