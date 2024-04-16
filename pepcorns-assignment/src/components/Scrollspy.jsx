import React from "react";
import { Link } from "react-scroll";

const scrollspy = () => {
  return (
    <div>
      <nav className="sticky top-0 left-0 bg-white">
        <ul className="menu flex flex-row justify-between">
          <li>
            <Link activeClass="active" smooth spy to="Highlights">
              Highlights
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="Traction">
              Traction
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="Key statistics">
              Key statistics
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="The Supersapiens Advantage"
            >
              Advantage
            </Link>
          </li>
        </ul>
      </nav>

      <section id="Highlights" className="mt-10 ml-5 flex flex-col gap-5">
        <h2 className="font-bold text-gray-600 text-xl">Highlights</h2>
        <hr className="w-12"></hr>
        <ul className="list-disc flex flex-col gap-2 ml-5">
          <li>
            Q1 2024: Supersapiens enters US market with a focus on diabetes
          </li>
          <li>
            Glucose monitoring platform for optimizing health &amp; performance
          </li>
          <li>
            Insights for metabolic health via glucose, first launched in Europe
          </li>
          <li>
            Partnered with a market leader to enhance US diabetes management
          </li>
          <li>
            World's largest glucose dataset (non-diabetic): 1B+ data points
          </li>
          <li>
            Trusted by Olympians, F1, UEFA, NBA, PGA, NFL, NHL, MLB, TDF,
            Ironman
          </li>
          <li>
            Seamlessly integrates with Apple Health, Oura, Garmin, Wahoo, and
            others
          </li>
        </ul>
      </section>
      <section id="Traction" className="mt-10 ml-5 flex flex-col gap-5">
        <h2 className="font-bold text-gray-600 text-xl">Traction</h2>
        <hr className="w-12"></hr>
        <figure>
          <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/108/838/108838-1701290596-66c7d5aed74cf13c03652feaef8519e6e7bd6515.png" />
          <figcaption>(data to date as of Oct 31, 2023)</figcaption>
        </figure>
        <figure>
          <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/105/480/105480-1699385791-81898449bdddc89f8b62563d56ff67fd081c8b92.png" />
          <figcaption>
            <a href="#">
              <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/081/169/81169-1671649163-c26d2200ab78e9dd0992f7ed400de33266e90d83.png"></img>
            </a>
          </figcaption>
        </figure>
      </section>
      <section id="Key statistics" className="mt-10 ml-5 flex flex-col gap-5">
        <h2 className="font-bold text-gray-600 text-xl">Key statistics</h2>
        <hr className="w-12"></hr>
        <ul className="list-disc flex flex-col gap-2 ml-5">
          <li>Headquarters: Atlanta, GA</li>
          <li>Founded: 2019</li>
          <li>Commercial launch: September 2020</li>
          <li>Total FTEs: 16 (including EU) (as of 11/01/23)</li>
          <li>2022 Revenue: $2M</li>
          <li>Sensor users: 15,800 to date, 1,800 in US clinical trial</li>
          <li>Sensors per customer per year: 5.71</li>
          <li>
            Third-party data integration: over 200M potential collective users
          </li>
          <li>
            Working in conjunction with a market leader in sensor and device
            technology
          </li>
        </ul>
      </section>
      <section
        id="The Supersapiens Advantage"
        className="mt-10 ml-5 flex flex-col gap-5"
      >
        <h2 className="font-bold text-gray-600 text-xl">
          The Supersapiens Advantage
        </h2>
        <hr className="w-12"></hr>
        <figure>
          <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/109/440/109440-1701507921-06d4ac29b1a9d6b7d498f3b480bd08e05fe4961b.png"></img>
          <figcaption>
            ...{" "}
            <a href="#" className="text-blue-600">
              Read more
            </a>
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default scrollspy;
