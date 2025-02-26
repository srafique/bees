import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  // const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  // const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-[#b38600] dark:text-[#ffcb1e]"
              >
                <Image
                  src="/beelogo.svg"
                  alt="N"
                  width={32}
                  height={32}
                  className="h-auto"
                />
                <span>Bee Craft Handyman Service</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            Providing safe, humane, and eco-friendly bee & wasp removal services across the Inland Empire, Orange County, and Los Angeles County. We specialize in live bee relocation, hive removal, and wasp extermination, ensuring the safety of your home, business, and the environment.
            </div>
            <p>📞 Call Us: <a href="tel:951-594-7694" className="font-semibold underline hover:text-yellow-400">(951) 594-7694</a></p>            
          </div>

          {/* <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#b38600] focus:text-[#b38600] focus:bg-[#ffcb1e] focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div> */}
          {/* <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#b38600] focus:text-[#b38600] focus:bg-[#ffcb1e] focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div> */}
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.yelp.com/biz/bee-craft-handyman-service-colton-2"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <Yelp />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Bee Craft Handyman Service LLC.
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}


const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Yelp = ({ size = 24 }) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
  
  <path d="M 11.136719 2.011719 C 9.929688 2.054688 7.363281 2.835938 6.832031 3.390625 C 6.636719 3.597656 6.542969 3.867188 6.601563 4.09375 C 6.699219 4.292969 10.753906 10.761719 10.753906 10.761719 C 11.355469 11.75 11.847656 11.59375 12.007813 11.542969 C 12.167969 11.492188 12.652344 11.34375 12.597656 10.1875 C 12.539063 8.839844 12.15625 2.839844 12.109375 2.558594 C 12.042969 2.304688 11.828125 2.109375 11.546875 2.035156 C 11.4375 2.011719 11.308594 2.003906 11.136719 2.011719 Z M 17.261719 7.921875 C 17.140625 7.929688 17.03125 7.957031 16.925781 8.027344 C 16.796875 8.113281 16.699219 8.238281 14.902344 10.734375 C 14.902344 10.734375 14.09375 11.871094 14.082031 11.882813 C 13.867188 12.144531 13.875 12.519531 14.082031 12.84375 C 14.300781 13.183594 14.644531 13.355469 14.980469 13.261719 C 14.980469 13.261719 14.984375 13.28125 14.980469 13.289063 C 15.144531 13.226563 15.441406 13.132813 15.980469 13.003906 C 19.335938 12.175781 19.460938 12.152344 19.59375 12.0625 C 19.792969 11.925781 19.890625 11.671875 19.875 11.386719 C 19.875 11.378906 19.875 11.371094 19.875 11.359375 C 19.789063 10.523438 18.355469 8.355469 17.644531 8 C 17.519531 7.9375 17.378906 7.917969 17.261719 7.921875 Z M 5.988281 11.28125 C 5.742188 11.273438 5.523438 11.40625 5.371094 11.648438 C 5.054688 12.171875 4.929688 13.789063 5.039063 14.878906 C 5.078125 15.238281 5.125 15.558594 5.21875 15.734375 C 5.347656 15.984375 5.5625 16.117188 5.808594 16.128906 C 5.964844 16.132813 6.085938 16.101563 9.035156 15.136719 C 9.035156 15.136719 10.335938 14.722656 10.34375 14.71875 C 10.667969 14.636719 10.882813 14.328125 10.90625 13.9375 C 10.925781 13.539063 10.726563 13.179688 10.394531 13.054688 C 10.394531 13.054688 9.472656 12.664063 9.472656 12.664063 C 6.296875 11.332031 6.148438 11.285156 5.988281 11.28125 Z M 15.03125 14.953125 C 14.785156 14.949219 14.519531 15.066406 14.339844 15.292969 C 14.089844 15.605469 14.0625 16.027344 14.261719 16.335938 L 14.773438 17.195313 C 16.527344 20.089844 16.671875 20.269531 16.796875 20.371094 C 16.992188 20.527344 17.230469 20.554688 17.488281 20.449219 C 18.238281 20.148438 19.859375 18.054688 19.976563 17.246094 C 20.015625 16.964844 19.933594 16.726563 19.742188 16.570313 C 19.617188 16.472656 19.519531 16.4375 16.566406 15.449219 C 16.566406 15.449219 15.277344 15.015625 15.261719 15.007813 C 15.183594 14.976563 15.113281 14.957031 15.03125 14.953125 Z M 11.445313 15.890625 C 11.273438 15.929688 11.117188 16.039063 11.007813 16.179688 C 11.007813 16.179688 10.367188 16.960938 10.367188 16.960938 C 8.140625 19.613281 8.0625 19.71875 8.011719 19.875 C 7.976563 19.96875 7.949219 20.089844 7.960938 20.1875 C 7.972656 20.332031 8.03125 20.449219 8.136719 20.578125 C 8.652344 21.203125 11.140625 22.125 11.929688 21.984375 C 12.203125 21.933594 12.382813 21.804688 12.46875 21.570313 C 12.519531 21.414063 12.535156 21.3125 12.546875 18.15625 C 12.546875 18.15625 12.542969 16.765625 12.546875 16.75 C 12.566406 16.410156 12.363281 16.085938 12.007813 15.945313 C 11.824219 15.871094 11.617188 15.851563 11.445313 15.890625 Z"/>
</svg>
);