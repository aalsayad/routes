interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({ children, icon }: ButtonProps) => {
  return (
    <div className='cursor-pointer flex items-center gap-3 p-2 border-[1px] border-white/15 hover:bg-white/5 rounded-lg'>
      {icon}
      {children}
    </div>
  );
};

export default Button;
