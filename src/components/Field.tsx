type FieldProps = {
  children?: React.ReactNode;
};

export const Field = ({ children }: FieldProps) => {
  return (
    <div className="border-2 border-white w-[200px] h-[200px] flex items-center justify-center rounded">
      {children}
    </div>
  );
};
