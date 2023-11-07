"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">DevelopedByNikola</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode((prev) => !prev)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Nikola Djokovic
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full stack developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-xl mx-auto">
              Freelancer providing services for programming and design content
              needs. Contact me down below!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-3 dark:text-white">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as
              <span className="text-teal-500"> a freelance developer</span>,
              I've done remote work for different agencies.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              I offer
              <span className="text-teal-500"> a wide range of services</span>,
              including brand desing, prgramming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-white py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-white py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-white py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-white py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-white py-1">Illustrator</p>
              <p className="text-gray-800 dark:text-white py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as
              <span className="text-teal-500"> a freelance developer</span>,
              I've done remote work for different agencies.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              I offer
              <span className="text-teal-500"> a wide range of services</span>,
              including brand desing, prgramming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                height={"100%"}
                width={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
