//Header.jsx
const Header = ({ className }) => {
  const baseClasses = "fixed h-screen w-full bg-white p-[10px] md:p-[20px]";
  return (
    <header className={`${baseClasses} ${className}`}>
      <h1 className="whitespace-nowrap font-AgrandirGrandBold text-[39px] uppercase leading-[40px] md:text-[80px] md:leading-[80px] lg:text-[104px] lg:leading-[105px] xl:text-[152px] xl:leading-[150px]">
        EVA LAMBERT
      </h1>
      <h2 className="mt-[10px] whitespace-nowrap text-right leading-[27px] md:mt-[20px] md:leading-[41px] lg:mt-[40px] xl:mt-[60px]">
        <span className="pr-[30px] font-CartaNueva text-[50px] md:pr-[62px] md:text-[100px] lg:text-[120px] xl:text-[200px]">
          (
        </span>
        <span className="pr-[40px] font-FK text-[35px] md:pr-[14%] md:text-[72px] lg:text-[104px] xl:text-[168px]">
          Web development
        </span>
        <br />
        <span className="pr-[10px] font-CartaNueva text-[49px] md:text-[100px] lg:text-[120px] xl:text-[200px]">
          Graphic design )
        </span>
      </h2>
    </header>
  );
};
export default Header;
