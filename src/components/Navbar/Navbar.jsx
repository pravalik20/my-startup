"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];



export default function Navbar() {

const [open,setOpen] = useState(false);


return (

<>

{/* ================= HEADER ================= */}


<header

className="
fixed
top-0
left-0
z-[60]
w-full
border-b
border-white/10
bg-[#070313]/70
backdrop-blur-2xl
"

>


<div

className="
mx-auto
flex
h-20
w-full
max-w-[1400px]
items-center
justify-between
px-10
"

>


{/* LOGO */}


<Link

href="/"

className="
flex
items-center
gap-3
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-gradient-to-br
from-violet-600
via-fuchsia-500
to-cyan-400
text-xl
font-bold
text-white
shadow-lg
shadow-violet-600/30
"

>

F

</div>



<div>


<h2

className="
text-2xl
font-bold
leading-none
text-white
"

>

My start UP

</h2>


<p

className="
mt-1
text-[10px]
uppercase
tracking-[4px]
text-white/55
"

>

Get Your Site Here

</p>


</div>


</Link>





{/* DESKTOP MENU */}


<nav

className="
hidden
lg:flex
absolute
left-1/2
-translate-x-1/2
"

>


<div

className="
flex
items-center
gap-10
"

>


{

navLinks.map((item)=>(


<a

key={item.name}

href={item.href}

className="
group
relative
text-[15px]
font-medium
text-white/80
transition
hover:text-violet-300
"

>

{item.name}


<span

className="
absolute
-bottom-2
left-0
h-[2px]
w-0
bg-gradient-to-r
from-violet-500
to-cyan-400
transition-all
duration-300
group-hover:w-full
"

/>


</a>


))

}


</div>


</nav>





{/* DESKTOP BUTTON */}


<div

className="
hidden
lg:flex
"

>


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:.96
}}

className="
group
flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-violet-600
via-fuchsia-500
to-cyan-400
px-7
py-3
font-semibold
text-white
shadow-lg
shadow-violet-600/25
"

>

Get Started


<ArrowUpRight

size={18}

className="
transition
duration-300
group-hover:rotate-45
"

/>


</motion.button>


</div>





{/* MOBILE ICON */}


<button

onClick={()=>setOpen(!open)}

className="
ml-auto
flex
items-center
justify-center
text-white
lg:hidden
"

>


{

open

?

<X size={30}/>

:

<Menu size={30}/>

}


</button>



</div>


</header>









{/* ================= MOBILE FULL SCREEN MENU ================= */}



<AnimatePresence>


{

open && (


<motion.div


initial={{

opacity:0,

clipPath:"circle(0% at 90% 5%)"

}}


animate={{

opacity:1,

clipPath:"circle(150% at 90% 5%)"

}}


exit={{

opacity:0,

clipPath:"circle(0% at 90% 5%)"

}}


transition={{

duration:.5,

ease:"easeInOut"

}}


className="
fixed
inset-0
z-50
bg-[#070313]
lg:hidden
"


>


{/* Glow */}


<div

className="
absolute
top-1/4
left-1/2
h-[400px]
w-[400px]
-translate-x-1/2
rounded-full
bg-violet-600/20
blur-[130px]
"

/>




{/* Menu Content */}


<div

className="
relative
flex
h-full
flex-col
items-center
justify-center
gap-8
"

>


{

navLinks.map((item,index)=>(


<motion.a


key={item.name}


href={item.href}


onClick={()=>setOpen(false)}


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.06

}}


className="
text-3xl
font-semibold
text-white/90
transition
hover:text-violet-400
"


>


{item.name}


</motion.a>


))


}






<motion.button


whileTap={{

scale:.95

}}


className="
mt-5
flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-violet-600
via-fuchsia-500
to-cyan-400
px-10
py-4
text-lg
font-semibold
text-white
shadow-xl
shadow-violet-600/30
"


>


Get Started


<ArrowUpRight size={20}/>


</motion.button>




</div>



</motion.div>


)


}


</AnimatePresence>



</>


);

}