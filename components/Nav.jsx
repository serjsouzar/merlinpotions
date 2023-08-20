"use client";

import Image from "next/image";
import { useState } from "react";
import { oswald, ebgar } from "@/app/fonts";

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  function dropdownMenu() {
    setToggleDropDown((prev) => !prev);
    const dropdown = document.querySelector(".nav_dropdown");
    const hmb_btn1 = document.querySelector(".hamburguer_icon1");
    const hmb_btn2 = document.querySelector(".hamburguer_icon2");
    const hmb_btn3 = document.querySelector(".hamburguer_icon3");

    toggleDropDown !== true ? (dropdown.style.top = "0%") : "";
    toggleDropDown !== false ? (dropdown.style.top = "-100%") : "";

    hmb_btn1.classList.toggle("hamburguer_close1");
    hmb_btn2.classList.toggle("hamburguer_close2");
    hmb_btn3.classList.toggle("hamburguer_close3");
  }

  return (
    <>
      <div className="navigation">
        <div className="navigation_container">
          <div className="hamburger-button" onClick={() => dropdownMenu()}>
            <span className="hamburguer_icon1"></span>
            <span className="hamburguer_icon2"></span>
            <span className="hamburguer_icon3"></span>
          </div>

          <div className="nav_title">
            <h1 className={oswald.className}>
              MERLIN'S <span>POTIONS</span>
              <br />
              <p
                className={ebgar.className}
                style={{ color: "#523468", fontSize: "20px" }}
              >
                -fine potions since 1026-
              </p>
            </h1>
            <div className="nav_search">
              <Image
                src="/assets/search.png"
                width={20}
                height={20}
                className="search_icon"
                alt="search_icon"
              />
              <input type="search" placeholder="Search our stock" />
            </div>
            <h3 className={ebgar.className}>
              Free shipping <br className="break_line" />
              on orders over $50
            </h3>
          </div>
          <div className="nav_bag">
            <Image
              src="/assets/cauldron.png"
              alt="cauldron_icon"
              width={40}
              height={40}
            />
            <h4
              className={oswald.className}
              style={{ color: "#ccc", fontSize: "13px" }}
            >
              BAG:{" "}
            </h4>
          </div>

          <div className="nav_dropdown">
            <div className="nav_dropdown_search">
              <div className="navigation_menu">
                <div className="close-button" onClick={() => dropdownMenu()}>
                  <span id="x-btn1"></span>
                  <span id="x-btn2"></span>
                </div>
              </div>
              <div className="nav_search2">
                <Image
                  src="/assets/search.png"
                  width={20}
                  height={20}
                  className="search_icon"
                  alt="search_icon"
                />
                <input type="search" placeholder="Search our stock" />
              </div>
            </div>
            <p className={ebgar.className}>Potions</p>
            <p className={ebgar.className}>Ingredients</p>
            <p className={ebgar.className}>Books</p>
            <p className={ebgar.className}>Supplies</p>
            <p className={ebgar.className}>Charms</p>
            <p className={ebgar.className}>Clearance!</p>
            <div className="nav_sign_dropdown">
              <ul>
                <li className={ebgar.className} id="signHover">
                  Sign in
                </li>
                <li className={ebgar.className} style={{ color: "#ccc" }}>
                  or
                </li>
                <li className={ebgar.className} id="signHover">
                  Sign Up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="subTitle-background"></div>
      <div className="nav_menu_container">
        <div className="menu_container">
          <div className="nav_menu">
            <ul>
              <li>
                <p className={ebgar.className}>Potions</p> <span>▾</span>
              </li>
              <li>
                <p className={ebgar.className}>Ingredients</p>
                <span>▾</span>
              </li>
              <li>
                <p className={ebgar.className}>Books</p>
                <span>▾</span>
              </li>
              <li>
                <p className={ebgar.className}>Supplies</p>
                <span>▾</span>
              </li>
              <li>
                <p className={ebgar.className}>Charms</p>
                <span>▾</span>
              </li>
              <li
                className={ebgar.className}
                style={{ backgroundColor: "#3f2055" }}
              >
                Clearance!{" "}
              </li>
            </ul>
          </div>
          <div className="nav_sign">
            <ul>
              <li className={ebgar.className} id="signHover">
                Sign in
              </li>
              <li className={ebgar.className} style={{ color: "#ccc" }}>
                or
              </li>
              <li className={ebgar.className} id="signHover">
                Sign Up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
