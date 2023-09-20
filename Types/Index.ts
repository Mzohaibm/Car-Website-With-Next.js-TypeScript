export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEvent<HTMLButtonElement>;
  btnType?: "submit" | "submit";
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a";
  year: number;
}
