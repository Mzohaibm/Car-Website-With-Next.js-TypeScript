"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/Types/Index";
const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={() => {}}
      >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              fill
              alt="right icon"
              className="object-contain"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;

// title: string;
//   containerStyles?: string;
//   handleClick?: MouseEvent<HTMLButtonElement>;
