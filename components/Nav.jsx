"use client";

import Image from "next/image";
import { useState } from "react";
import { oswald, ebgar } from "@/app/fonts";

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  console.log(toggleDropDown);

  return (
    <>
      <div className="navigation">
        <div className="navigation_container">
          <Image
            src="/assets/hamburguer_icon.png"
            width={40}
            height={40}
            className="navigation_menu"
            onClick={() => setToggleDropDown((prev) => !prev)}
          />
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
              />
              <input type="search" placeholder="Search our stock" />
            </div>
            <div className="subTitle-background"></div>
            <h3 className={ebgar.className}>
              Free shipping on orders over $50
            </h3>
          </div>
          <div className="nav_bag">
            <Image src="/assets/cauldron.png" width={40} height={40} />
            <h4
              className={oswald.className}
              style={{ color: "#ccc", fontSize: "13px" }}
            >
              BAG:{" "}
            </h4>
          </div>
          {toggleDropDown && (
            <div className="nav_dropdown">
              <div className="nav_dropdown_search">
                <Image
                  src="/assets/close.png"
                  width={30}
                  height={30}
                  className="navigation_menu"
                  onClick={() => setToggleDropDown((prev) => !prev)}
                />
                <div className="nav_search2">
                  <Image
                    src="/assets/search.png"
                    width={20}
                    height={20}
                    className="search_icon"
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
            </div>
          )}
        </div>
      </div>
      <div className="nav_menu_container">
        <div className="nav_menu">
          <ul>
            <li className={ebgar.className}>Potions ▾</li>
            <li className={ebgar.className}>Ingredients ▾</li>
            <li className={ebgar.className}>Books ▾</li>
            <li className={ebgar.className}>Supplies ▾</li>
            <li className={ebgar.className}>Charms ▾</li>
            <li className={ebgar.className}>Clearance! </li>
          </ul>
        </div>
        <div className="nav_sign">
          <ul>
            <li className={ebgar.className}>Sign in</li>
            <li className={ebgar.className}>or</li>
            <li className={ebgar.className}>Sign Up</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
