import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Services from "./Services";
import Product from "./Product";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7x2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 right-0 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://www.ombrulla.com/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-4">
                    <a href="#" className="black px-2 mt-1">
                      Home
                    </a>
                    <a href="#" className="black px-2 mt-1">
                      <Services />
                    </a>
                    <a href="#" className="black px-2 mt-1">
                      <Product />
                    </a>
                    <a href="#" className="black px-2 mt-1">
                      About
                    </a>
                    <a href="#" className="black px-2 mt-1">
                      Blog
                    </a>
                    <a href="#" className="black px-2 mt-1">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button className="text-white">
                <div className="flex flex-col">
                  <a className="text-black">HOME</a>
                  <a className="text-black">HOME</a>
                  <a className="text-black">HOME</a>
                  <a className="text-black">HOME</a>
                  <a className="text-black">HOME</a>
                  <a className="text-black">HOME</a>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
