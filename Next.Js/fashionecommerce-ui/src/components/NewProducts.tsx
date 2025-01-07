import React from "react";
import ProductCard from "./ProductCard";

interface productsData {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const productsData: productsData[] = [
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image1.png",
    title: "Nike Black",
    desc: "Black Nike Sneakers",
    rating: 5,
    price: "80.00",
  },
];

export default function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-bold text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
