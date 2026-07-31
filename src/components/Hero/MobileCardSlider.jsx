"use client";

import {useState,useEffect} from "react";
import {AnimatePresence,motion} from "framer-motion";
import HeroCards from "./HeroCards";


const cards=[

{
title:"E-Commerce Website",
subtitle:"Online Store Solutions",
image:"/cards/ecommerce.png"
},

{
title:"Professional Website",
subtitle:"Business Website Solutions",
image:"/cards/professional.png"
},

{
title:"Digital Marketing",
subtitle:"SEO & Growth Strategy",
image:"/cards/marketing.png"
}

];



export default function MobileCardSlider(){


const [active,setActive]=useState(0);



useEffect(()=>{

const timer=setInterval(()=>{

setActive(prev=>(prev+1)%cards.length)

},3000);


return()=>clearInterval(timer);


},[]);



return(

<div

className="
absolute
top-[100px]
left-0
w-full
z-20
flex
justify-center
lg:hidden
"

>


<AnimatePresence mode="wait">


<motion.div

key={active}

initial={{
opacity:0,
x:120
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-120
}}

transition={{
duration:.5
}}

>

<HeroCards

title={cards[active].title}

subtitle={cards[active].subtitle}

image={cards[active].image}

/>


</motion.div>


</AnimatePresence>


</div>

)

}