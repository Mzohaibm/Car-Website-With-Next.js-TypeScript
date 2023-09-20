"use client";

import { CarProps } from "@/Types/Index";
import { calculateCarRent } from "@/Utils/Index";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { CarDetails } from "./Index";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { year, city_mpg, make, model, transmission, drive } = car;
  const CarRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-car group">
      <div className="car-card__content-title">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="slef-start text-[14px] font-semibold">$</span>
        {CarRent}
        <span className="slef-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car-model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full m-t-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyle="min-w-[400px] py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
