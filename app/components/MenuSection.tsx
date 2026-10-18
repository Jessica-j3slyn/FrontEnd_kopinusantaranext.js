"use client";

import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

const menus: MenuItem[] = [
  {
    name: "Kopi Susu Gula Aren",
    desc: "Espresso robusta lokal dipadukan susu segar dan gula aren asli.",
    price: "Rp 25.000",
    img: "/images/kopi-susu-gula-aren.jpeg",
  },
  {
    name: "Kopi Tubruk Nusantara",
    desc: "Kopi hitam tradisional, diseduh kasar khas warung kopi rumahan.",
    price: "Rp 27.000",
    img: "/images/kopi-tubruk.jpeg",
  },
  {
    name: "Cappuccino",
    desc: "Minuman kopi khas Italia yang dibuat dari perbandingan seimbang antara espreso, susu panas, dan busa susu.",
    price: "Rp 24.000",
    img: "/images/cappucino.jpeg",
  },
  {
    name: "Americano",
    desc: "Minuman kopi hitam yang dibuat dengan mencampurkan satu atau dua shot espresso dengan air panas",
    price: "Rp 22.000",
    img: "/images/americano.jpeg",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="card menu-card h-100">
      <Image
        src={item.img}
        alt={item.name}
        width={736}
        height={736}
        sizes="(min-width: 992px) 25vw, (min-width: 576px) 50vw, 100vw"
        className="card-img-top menu-img"
      />
      <div className="card-body pb-2">
        <h3 className="h5">{item.name}</h3>
        <p className="card-text small">{item.desc}</p>
      </div>
      <div className="card-footer menu-footer">
        <span className="price">{item.price}</span>
        <div className="like-widget">
          <button
            className={`like-btn${liked ? " liked" : ""}`}
            type="button"
            aria-label="Suka menu ini"
            aria-pressed={liked}
            onClick={() => setLiked(!liked)}
          >
            {liked ? "\u2665" : "\u2661"}
          </button>
          <span className="like-count">{liked ? 1 : 0}</span>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-5">
      <div className="container text-center">
        <h2>Menu Favorit Kami</h2>
        <p className="section-lead mb-4">
          Dipilih dari biji kopi pilihan berbagai daerah di Indonesia.
        </p>
      </div>
      <div className="container">
        <div className="row g-4 text-start">
          {menus.map((m) => (
            <div className="col-12 col-sm-6 col-lg-3" key={m.name}>
              <MenuCard item={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
