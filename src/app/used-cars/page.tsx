"use client";

import Link from "next/link";
import React, { useState, useEffect, Children } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
// import Image from "next/image";
import CarCard from "@/components/inventory_components/CarCard";
import Pagination from "@/components/inventory_components/Pagination";
// import FiltersDropdown from "../components/inventory_components/Filters/FiltersDropdown";
// import Image from "next/image";
// import MakeModelDropdown from "../components/inventory_components/Filters/MakeModelDropdown";
import Filters from "@/components/inventory_components/Filters/Filters";
import { fetchInventory, fetchInventoryCount } from "../actions/readInventory";

interface InventoryItem {
  id: string;
  vehicleID: number;
  modelYear: number | null;
  make: string | null;
  model: string | null;
  title: string | null;
  title_href: string | null;
  price: number | null;
  mileage: number | null;
  extColor: string | null;
  intColor: string | null;
  stockNumber: string | null;
  vin: string | null;
  bodyStyle: string | null;
  trim: string | null;
  isNew: boolean | null;
  driveType: string | null;
  mpg: string | null;
  inStockDate: Date | null;
  age: number | null;
  ageBand: string | null;
  condition: string | null;
  internetPrice: number | null;
  retailPrice: number | null;
  wholesalePrice: number | null;
  reducedPrice: number | null;
  isPublished: boolean | null;
  featured: boolean | null;
  salePending: boolean | null;
  spotLight: boolean | null;
  vehicleImage: string | null;
  vehicle800Image: string | null;
  vehicleTotalImages: number | null;
  doors: number | null;
  creditApplicationCount: number | null;
  vehicleLeadCount: number | null;
  liveDate: Date | null;
  liveAge: number | null;
  engine: string | null;
  transmission: string | null;
  fuelType: string | null;
  priceLastUpdated: Date | null;
  purchaseDate: Date | null;
  priceLastUpdatedDays: number | null;
  btnlinks: {
    view_details?: string | null;
    test_drive?: string | null;
    email_us?: string | null;
    car_photos?: string | null;
    apply_now?: string | null;
    call_us?: string | null;
    trade_ins?: string | null;
    capital_one?: string | null;
    capital_oneImg?: string | null;
  } | null;
  badges: {
    [key: string]: string;
  } | null;
}

const InventoryPage = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [sortOption, setSortOption] = useState("1");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log("InventoryPage");
  // app/inventory/page.tsx
  //setSortOption("2");

  useEffect(() => {
    console.log("useEffect1");
    const fetchData = async () => {
      const skip = (currentPage - 1) * perPage;
      try {
        const { inventory, totalPages } = await fetchInventory(
          skip,
          perPage,
          sortOption
        );
        console.log("inventoryData", inventory);
        setInventory(inventory);
        setTotalPages(totalPages);
      } catch (err) {
        console.error("Failed to fetch inventory:", err);
      }
    };

    fetchData();
  }, [currentPage, perPage, sortOption]);

  const handlePerPageChange = (e: any) => {
    setPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleSortChange = (e: any) => {
    const selectedSortOption = e.target.value;
    setSortOption(selectedSortOption);
    setCurrentPage(1); // Optionally reset to the first page on sort change
    // You might want to fetch the sorted inventory here or in a useEffect if sortOption is a dependency
  };

  useEffect(() => {
    console.log("useEffect2");
    const fetchCount = async () => {
      const count = await fetchInventoryCount();
      setInventoryCount(count);
    };

    fetchCount();
  }, []); // Add any dependencies if the count should update in response to changes

  return (
    <>
      <Header />
      <main className="flex flex-col items-stretch">
        <section className="flex w-full max-w-full flex-col items-center justify-center border border-solid border-[#555] bg-[#0069BF] py-1">
          <div className="max-w-full flex-nowrap items-center justify-center gap-5 px-9 py-10 max-md:px-5 md:flex md:w-[1050px] md:flex-wrap md:justify-between md:py-5">
            <div className="mx-auto my-5 flex flex-col items-center gap-4 md:my-0 md:gap-2">
              <h3 className="whitespace-nowrap text-2xl font-bold leading-4 text-white">
                What&apos;s my car worth?
              </h3>
              <span className="text-sm leading-3 text-white">
                Appraise your vehicle in 3 steps!
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter Year Make Model"
              className="w-full max-w-full grow items-start justify-center self-stretch whitespace-nowrap rounded-sm bg-white py-3.5 pl-3.5 text-base text-neutral-400 shadow-sm outline-blue-500 md:pr-5"
            />
            <div className="flex basis-[0%] flex-col items-stretch self-start py-1 pl-1.5 pr-16 max-md:pr-5">
              <div className="mx-auto mt-5 flex text-sm text-[#fff] md:mt-0 md:block md:gap-4">
                <span>powered by</span>
                <span className="h-17 leading-17 ml-[2px] text-[#fff] md:ml-[-2px] md:mt-5">
                  <svg
                    className="h-inherit align-top text-white"
                    style={{ width: "7rem", height: "2rem" }}
                    data-name="EdmundsLogoImage"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 -1 238 39"
                    height="100%"
                    width="100%"
                    focusable="false"
                  >
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M76.71,11.14A10.56,10.56,0,0,0,66.07,21.86,10.55,10.55,0,0,0,76.75,32.49a10.23,10.23,0,0,0,5.75-1.71,10.56,10.56,0,0,0,3.2-3.33,1.23,1.23,0,0,0,0-1.26,1.25,1.25,0,0,0-1.1-.65H83.1a1.25,1.25,0,0,0-1.06.58,6,6,0,0,1-5.3,2.77,6.31,6.31,0,0,1-6.5-5.72H86A1.25,1.25,0,0,0,87.26,22a10.73,10.73,0,0,0-3.1-7.86A10.55,10.55,0,0,0,76.71,11.14Zm0,3.58h.13a6.23,6.23,0,0,1,6.25,5.18H70.32A6.17,6.17,0,0,1,76.71,14.73Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M110.14,4.58h-1.62a1.26,1.26,0,0,0-1.25,1.25v8.71a8.51,8.51,0,0,0-7.17-3.4c-5.86,0-10.27,4.57-10.27,10.64s4.35,10.71,10.35,10.71a8.09,8.09,0,0,0,7.24-3.61v1.77a1.26,1.26,0,0,0,1.25,1.25h1.47a1.26,1.26,0,0,0,1.25-1.25V5.83A1.26,1.26,0,0,0,110.14,4.58Zm-2.65,17.14a6.47,6.47,0,0,1-1.89,4.88,6.78,6.78,0,0,1-4.84,2,6.64,6.64,0,0,1-6.8-6.8v0a6.77,6.77,0,1,1,13.53-.07Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M138.92,11.14a7.51,7.51,0,0,0-5.37,2.13A8,8,0,0,0,132.24,15v0a8.87,8.87,0,0,0-1.14-1.68,6.81,6.81,0,0,0-5.23-2.17A7.13,7.13,0,0,0,120,14.09V13a1.26,1.26,0,0,0-1.25-1.25h-1.4A1.26,1.26,0,0,0,116.1,13V30.66a1.26,1.26,0,0,0,1.25,1.25H119a1.26,1.26,0,0,0,1.25-1.25V20.87a6.88,6.88,0,0,1,1-4,4.43,4.43,0,0,1,7.23,0,6.75,6.75,0,0,1,.78,3.85v9.86a1.26,1.26,0,0,0,1.25,1.25h1.66a1.26,1.26,0,0,0,1.25-1.25V20.8a6.41,6.41,0,0,1,.89-3.93A4.19,4.19,0,0,1,138,15.05a3.74,3.74,0,0,1,3.41,1.58,6.9,6.9,0,0,1,1.06,4.31v9.71a1.26,1.26,0,0,0,1.25,1.25h1.62a1.26,1.26,0,0,0,1.25-1.25V20.8c0-4-.54-5.87-2.24-7.6A7.63,7.63,0,0,0,138.92,11.14Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M168,11.73h-1.62A1.26,1.26,0,0,0,165.1,13V23c0,3.6-1.87,5.6-5.27,5.63s-5.12-2-5.12-6V13a1.26,1.26,0,0,0-1.25-1.25h-1.62A1.26,1.26,0,0,0,150.58,13V23.53c0,7.76,5.13,8.94,8.19,9h.11c2.91,0,5.21-1.14,6.43-3.15v1.31a1.26,1.26,0,0,0,1.25,1.25H168a1.26,1.26,0,0,0,1.25-1.25V13A1.26,1.26,0,0,0,168,11.73Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M184.32,11.14c-3,0-5.31,1.11-6.55,3.15V13a1.26,1.26,0,0,0-1.25-1.25h-1.4A1.26,1.26,0,0,0,173.86,13V30.66a1.26,1.26,0,0,0,1.25,1.25h1.62A1.26,1.26,0,0,0,178,30.66v-10c0-3.6,1.87-5.6,5.27-5.63a4.84,4.84,0,0,1,3.59,1.23,6.42,6.42,0,0,1,1.49,4.7v9.68a1.26,1.26,0,0,0,1.25,1.25h1.66a1.26,1.26,0,0,0,1.25-1.25V20.1C192.51,12.39,187.38,11.18,184.32,11.14Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M216.25,4.58h-1.62a1.26,1.26,0,0,0-1.25,1.25v8.71a8.51,8.51,0,0,0-7.17-3.4c-5.86,0-10.27,4.57-10.27,10.64s4.35,10.71,10.35,10.71a8.09,8.09,0,0,0,7.24-3.61v1.77a1.26,1.26,0,0,0,1.25,1.25h1.47a1.26,1.26,0,0,0,1.25-1.25V5.83A1.26,1.26,0,0,0,216.25,4.58ZM213.6,21.72a6.47,6.47,0,0,1-1.89,4.88,6.78,6.78,0,0,1-4.84,2,6.64,6.64,0,0,1-6.8-6.8v0a6.77,6.77,0,1,1,13.53-.07Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__text eva-edmunds-logo__text--default"
                      d="M229.15,19.71l-.09,0c-2-.56-3.42-1.24-3.49-2.73a2.2,2.2,0,0,1,.62-1.61,2.79,2.79,0,0,1,2.06-.77h.09a2.34,2.34,0,0,1,2.54,1.74,1.24,1.24,0,0,0,1.21.93h1.54a1.26,1.26,0,0,0,1.22-1.57c-.86-3.34-4-4.53-6.55-4.53-4,0-6.84,2.6-6.84,6.19,0,3.34,2.76,4.59,5.11,5.3,3.57,1.18,4.92,1.8,5,3.64a2.91,2.91,0,0,1-3.08,2.79,3.2,3.2,0,0,1-3.21-2.26,1.26,1.26,0,0,0-1.21-1h-1.61a1.26,1.26,0,0,0-1.22,1.55c.82,3.52,4.21,5.1,7.21,5.1a7.67,7.67,0,0,0,5.48-2.15,6.14,6.14,0,0,0,1.77-4.52C235.53,21.48,232.14,20.54,229.15,19.71Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__icon eva-edmunds-logo__icon--default"
                      d="M40.6,6.91h-5a1.88,1.88,0,0,0-2.05,1.66v2.7a1.11,1.11,0,0,0,.09.52A5.79,5.79,0,0,1,38.12,9.7a6.59,6.59,0,0,1,4.45,2.05,1.56,1.56,0,0,0,.09-.48V8.57A1.88,1.88,0,0,0,40.6,6.91Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__icon eva-edmunds-logo__icon--default"
                      d="M28.23,4.78"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__icon eva-edmunds-logo__icon--default"
                      d="M55.77,11.49a1.44,1.44,0,0,0-1.48-1.38l-3.16.09a1.43,1.43,0,0,0-1.37,1.25,3.69,3.69,0,0,1-.1.46l-.36-.7a33.71,33.71,0,0,0-4.81-7h0a8.48,8.48,0,0,0-4.66-2.53h0A61.69,61.69,0,0,0,28.36.93a61.69,61.69,0,0,0-11.45.7h0a8.48,8.48,0,0,0-4.66,2.53h0a33.72,33.72,0,0,0-4.81,7L7,12a3.9,3.9,0,0,1-.12-.55,1.43,1.43,0,0,0-1.37-1.25l-3.16-.09A1.44,1.44,0,0,0,.89,11.49L.85,13a1.44,1.44,0,0,0,1.38,1.48l3.35.39,0-.07L5.55,15a8.45,8.45,0,0,0-2,3.95A17.36,17.36,0,0,0,3,23.77a86.87,86.87,0,0,0,1,8.76V35.4A2.59,2.59,0,0,0,6.57,38h3.51a2.59,2.59,0,0,0,2.59-2.59V33.27c3.68-.34,9.67-.45,15.7-.46s12,.13,15.7.46V35.4A2.59,2.59,0,0,0,46.64,38h3.51a2.59,2.59,0,0,0,2.59-2.59V32.53a86.88,86.88,0,0,0,1-8.76A15.11,15.11,0,0,0,51.17,15l0-.1,3.3-.38A1.44,1.44,0,0,0,55.81,13ZM11.2,26.66a3.39,3.39,0,1,1,3.72-3.72A3.4,3.4,0,0,1,11.2,26.66Zm33.62,0a3.39,3.39,0,1,1,3.72-3.72A3.4,3.4,0,0,1,44.82,26.66ZM14.1,9.23v2.7a1.41,1.41,0,0,0,.29.84,41.7,41.7,0,0,0-4.6.68,23.82,23.82,0,0,1,4.33-7.13,7.24,7.24,0,0,1,3.66-1.87,64.28,64.28,0,0,1,9.85-.67H29.1a64.28,64.28,0,0,1,9.85.67,7.24,7.24,0,0,1,3.66,1.87,23.82,23.82,0,0,1,4.33,7.13,57.91,57.91,0,0,0-10.32-1l-2.6,0H23.09a1.36,1.36,0,0,0,.08-.46V9.23a1.88,1.88,0,0,0-2.05-1.66h-5A1.88,1.88,0,0,0,14.1,9.23Zm16,20a11.81,11.81,0,0,1-1.76.19,11.81,11.81,0,0,1-1.76-.19,12,12,0,0,1-8.95-7.59c2,2.33,6.12,3.53,10.7,3.58S37,23.93,39,21.6A12,12,0,0,1,30.08,29.19Z"
                      transform="translate(-0.85 -0.93)"
                    />
                    <path
                      fill="white"
                      className="eva-edmunds-logo__icon eva-edmunds-logo__icon--default"
                      d="M28.23,4.78"
                      transform="translate(-0.85 -0.93)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="usd-cr bg-[#f4f8fa] py-5 text-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #e1ffff 0%, #b1d8f5 100%)",
          }}
        >
          <div className="mx-auto">
            <h1 className="text-[36px] font-bold text-[#183558]">USED CARS</h1>
          </div>
        </section>
        <section className="bg-white py-10">
          <div className="mx-3 flex flex-col gap-5">
            {/* Smart Search */}
            <div className="smart-search mx-2">
              <div className="w-full ">
                <form action="/used-cars" method="get">
                  <div>
                    <input
                      type="search"
                      placeholder="Search makes, models or any keywords"
                      name="QuickSearch"
                      className="search-input h-16 w-full border border-gray-300 bg-white bg-left bg-no-repeat px-16 py-2 font-sans text-xl placeholder-gray-500 opacity-90"
                      spellCheck="false"
                      // style={{ backgroundImage: 'url(/assets/images/automember-v2/search-icon.png)', marginRight: '8rem' }}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mx-auto max-w-full items-center justify-center gap-2 bg-gradient-to-b from-white via-gray-100 to-gray-200 px-6 py-5 shadow-md sm:mx-0 sm:justify-between md:flex md:px-12">
              {/* Total Numbers Of Records */}
              <div className="mx-auto sm:mx-0">
                <h3 className="text-xl font-bold text-[#183558]">
                  RESULTS: {inventoryCount}
                </h3>
              </div>
              <div className="gap-5 sm:flex xl:gap-36">
                {/* Sort by Dropdown */}
                <div className="flex flex-row items-center gap-4">
                  <span>Sort by:</span>
                  <div className="">
                    <select
                      className="max-w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none xl:w-[22rem]"
                      onChange={handleSortChange}
                      value={sortOption}
                    >
                      <option value="1">Make Ascending</option>
                      <option value="2">Low Price</option>
                      <option value="3">High Price</option>
                      <option value="4">Low Mileage</option>
                      <option value="5">High Mileage</option>
                      <option value="7">Year Latest</option>
                      <option value="6">Latest</option>
                    </select>
                  </div>
                </div>
                {/* Per Page Dropdown */}
                <div className="flex items-center gap-2">
                  <span>Per Page:</span>
                  <div className="">
                    <select
                      name="Size"
                      id="Size"
                      className="css-dropdowns opt-input max-w-full rounded border border-gray-300 focus:border-blue-500 focus:outline-none xl:w-[22rem]"
                      value={perPage}
                      onChange={handlePerPageChange}
                      tabIndex={10}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="70">70</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center bg-white">
          <div className="max-w-full gap-10 lg:flex">
            <div className="flex w-full lg:w-[30%]">
              <div className="flex flex-col items-stretch">
                <div className="flex w-full flex-col items-center pb-6 pl-4 pt-2.5 lg:items-center">
                  <div className="w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/478387ef1715e71d951334641567b6fe5668f2f66f74cf4b43bf521c7d7061dd?apiKey=1e7ac611270b478ab91f23b9ddd71833&"
                      className="w-full max-w-full self-center overflow-hidden object-center lg:aspect-[8.15]"
                    />
                  </div>
                  {/* // Filters */}
                  <div className="hidden w-full lg:flex lg:flex-col">
                    <Filters />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full">
              {inventory.map((car, id) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>

          <div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InventoryPage;
