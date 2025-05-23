import { useState } from "react";


const Navbar = () => {

    const [open , setOpen] = useState(false);

    return(
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/blogger.png" alt="Blogvue" className="w-8 h-8"/>
                <span>Blogvue</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="md:hidden">
                
            </div>

            {/* Mobile Menu */}
            <div className="hidden md:flex">
               <button className="cursor-pointer text-4xl" onClick={() => setOpen(prev => !prev)}>
                {!open ? "☰" : "x"}
               </button>
            </div>
        </div>
    )
}

export default Navbar;