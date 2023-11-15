import { MouseEventHandler } from "react";

type FieldProps = {
  children?: React.ReactNode;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

export const Field = ({ children, handleClick }: FieldProps) => {
  return (
    <div
      onClick={handleClick}
      className="border-2 border-white w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] flex items-center justify-center rounded cursor-pointer hover:scale-105 hover:border-red-600 transition-all duration-300"
    >
      {children}
    </div>
  );
};
