import Hero from "../assets/imgs/Logo2.jpg"
import sun from "../assets/imgs/sun.svg"

const Navbar = () => {
  return (
    <>
     <div className=" sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex justify-between  my-9 bg-slate-800 py-4 px-6">
      <div>
        <img src={Hero} alt="Logo imgs" className="rounded-full w-10" />
      </div>
      <div>
<ul className="flex gap-10 text-xl">
  <li className="hover:text-cyan-200">About</li>
  <li className="hover:text-cyan-400"> Skills</li>
  <li className="hover:text-cyan-400">Projects</li>
  <li className="hover:text-cyan-400">Contact</li>
</ul>
      </div>
  <div>
  <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"#f4f3d9"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M6.99 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12M12 8.99c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01S8.99 13.66 8.99 12 10.34 8.99 12 8.99M13 19h-2v2h2zM11 5h2V3h-2zm-8 6h2v2H3zm16 0h2v2h-2zM4.93 17.66l.71.7.7.71.71-.71.71-.7-.71-.71-.71-.71-.7.71zM17.66 4.93l-.71.71-.71.7.71.71.71.71.7-.71.71-.71-.71-.7zM4.93 6.34l.71.71.7.71.71-.71.71-.71-.71-.7-.71-.71-.7.71zm12.73 12.73.7-.71.71-.7-.71-.71-.7-.71-.71.71-.71.71.71.7z"></path>
</svg>
  </div>

     </div>
    </>
   
  )
}

export default Navbar