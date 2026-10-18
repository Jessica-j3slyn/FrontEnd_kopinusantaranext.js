"use client";

import { useState } from "react";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top site-header">
      <div className="container">
        <a className="navbar-brand brand" href="#beranda">
          Kopi Nusantara
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-lg-end${open ? " show" : ""}`}
        >
          <ul className="navbar-nav gap-lg-3">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
