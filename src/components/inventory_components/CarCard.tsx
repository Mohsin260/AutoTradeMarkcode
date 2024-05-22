import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import Buttons from './Buttons';
import { CapitalOneEntry_button } from './Buttons';

const CarCard = ({ car }) => {
    console.log("car:", car)

    // Create a formatter for currency (price)
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // Create a formatter for large numbers (mileage)
    const numberFormatter = new Intl.NumberFormat('en-US');


    return (
        <div className="car-card-info m-0 w-full border border-solid border-gray-200 px-7 py-5 md:mx-auto md:w-[99%]">
            <div className="w-full lg:flex">
                <div className="w-[100%] gap-5 lg:flex lg:w-[60%]">
                    <div className="w-full min-w-[40%] lg:w-[40%]">
                    {car.vehicleImage &&
                        <Image
                            loading="lazy"
                            src={car.vehicleImage}
                            alt="car_image"
                            width={270}
                            height={155}
                            className="inline-block h-auto w-full max-w-full rounded p-1 leading-7 transition-all duration-200"
                        />
                    }
                        <CapitalOneEntry_button />
                    </div>
                    <div className="car-info-vd">
                        <div className="text-lg font-bold uppercase leading-5 text-black">
                            {car.title}
                        </div>

                        <div className="mt-3 text-sm leading-4 text-neutral-500">
                            MPG: {car.mpg}
                        </div>
                        <div className='my-1 ml-0 w-[190px] bg-blue-700 px-2'>
                            <p className="py-1 text-xl font-semibold leading-7 text-white">
                                Price: {currencyFormatter.format(car.price)}     
                            </p>
                        </div>
                        <div className="flex items-stretch gap-0 pr-20 max-md:pr-5">
                            <div className="text-sm font-semibold leading-6 text-neutral-500">
                                - Mileage: {numberFormatter.format(car.mileage)}
                            </div>
                        </div>
                        <div className="flex items-stretch gap-0 pr-1.5">
                            <div className="text-sm font-semibold leading-6 text-neutral-500">
                                - Ext. Color: {car.extColor}
                            </div>
                        </div>
                        <div className="flex items-stretch gap-0 pr-1.5">
                            <div className="text-sm font-semibold leading-6 text-neutral-500">
                                - Int. Color: {car.intColor}
                            </div>
                        </div>
                        <div className="flex items-stretch gap-0 px-0.5">
                            <div className="text-sm font-semibold leading-6 text-neutral-500">
                                - Stock #: {car.stockNumber}
                            </div>
                        </div>
                        <div className="flex items-stretch gap-0">
                            <div className="grow whitespace-nowrap text-sm font-semibold leading-6 text-neutral-500">
                                - VIN #: {car.vin}
                            </div>
                        </div>
                        <div className="text-sm font-semibold leading-6 text-neutral-500">
                            - Body Style: {car.bodyStyle}
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <Buttons car={car} />
                    <Image
                        loading="lazy"
                        src="/assets/images/autotrade-v4/carfax.svg"
                        alt="Carfax"
                        width={100}
                        height={100}
                    />
                    <Image
                        loading="lazy"
                        src="/assets/images/autotrade-v4/military-discount.png"
                        alt="Military Discount image"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default CarCard;
