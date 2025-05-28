import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/Logo/image.png";

const navigation = [
  { name: "Home", href: "/admin/dashboard", current: true },
  { name: "Blogs", href: "/admin/blogs", current: false },
  { name: "Blog History", href: "/admin/bloghistory", current: false },
  { name: "Services", href: "/admin/services", current: false },
  { name: "Service History", href: "/admin/servicehistory", current: false },
  { name: "Before-After", href: "/admin/beforeafter", current: false },
  {
    name: "Before-After History",
    href: "/admin/beforeafterhistory",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      {/* Main Navigation */}
      <Disclosure as="nav" className={`bg-transparent absolute w-full`}>
        <div
          className={`mx-auto max-w-full  sm:px-6 lg:px-8  ${
            scrolled ? "bg-[#3a3550]" : "bg-[#3a3550]"
          }`}
        >
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-start gap-2 md:gap-3 pr-4">
              <img alt="Your Company" src={logo} className="h-10 w-auto" />
              <p
                className={`text-green-600 font-semibold sm:hidden xl:block md:text-[24px]`}
              >
                DEREJE TURA ENGINEERING
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#d8d7dc] hover:bg-[#615d73] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="relative flex space-x-3">
                {navigation.map((item) =>
                  item.subItems ? (
                    <div key={item.name} className="relative group">
                      <div
                        className={`${
                          scrolled ? " text-[#d8d7dc]" : "text-white"
                        } hover:bg-[#615d73] hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center transition duration-500`}
                      >
                        <a
                          href={item.href}
                          className="text-[16px] font-semibold"
                        >
                          {item.name}
                        </a>
                        <ChevronDownIcon className="ml-2 h-5 w-5 hover: transition duration-500" />
                      </div>
                      <div className="absolute z-10 mt-2 w-48 rounded-md bg-[#3a3550] shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-col">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-[#d8d7dc] hover:bg-[#615d73] hover:text-white transition duration-500"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        "text-white hover:text-white relative group",
                        "rounded-md px-3 py-2 text-sm font-medium transition duration-500 text-[16px]"
                      )}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links for Mobile */}
        <DisclosurePanel className="sm:hidden bg-[#3a3550]">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) =>
              item.subItems ? (
                <Disclosure as="div" key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        onClick={() => handleDropdownToggle(item.name)}
                        className={` block text-[#d8d7dc] rounded-md px-3 py-2 text-base font-medium  items-center w-full ${
                          item.current
                            ? "bg-[#615d73] text-[#d8d7dc]"
                            : "text-[#d8d7dc] hover:bg-[#615d73] hover:text-white"
                        }`}
                      >
                        {item.name}
                        {openDropdown === item.name && open ? (
                          <ChevronUpIcon className="ml-auto h-5 w-5" />
                        ) : (
                          <ChevronDownIcon className="ml-auto h-5 w-5" />
                        )}
                      </DisclosureButton>
                      <DisclosurePanel
                        className={`pl-2 ${
                          openDropdown === item.name ? "block" : "hidden"
                        }`}
                      >
                        <div className="flex flex-col">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-[#d8d7dc] hover:bg-[#615d73] hover:text-white"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-[#615d73] text-[#d8d7dc]"
                      : "text-[#d8d7dc] hover:bg-[#615d73] hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}
