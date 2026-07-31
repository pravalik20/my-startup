"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroCards({
  title,
  subtitle,
  image,
  rotate = "0deg",
}) {

return (

<motion.div

whileHover={{
y:-12,
scale:1.03
}}

transition={{
duration:0.35
}}

style={{
transform:`rotate(${rotate})`
}}

className="
relative
w-[360px]
h-[290px]
max-sm:w-[300px]
max-sm:h-[240px]
rounded-[40px]
overflow-hidden
border
border-white/20
bg-[#0b0618]
shadow-[0_25px_80px_rgba(124,58,237,0.45)]
"

>


{/* IMAGE */}

<div

className="
absolute
top-0
left-0
w-full
h-[210px]
max-sm:h-[170px]
overflow-hidden
"

>

<img

src={image}

alt={title}

className="
w-full
h-full
object-cover
"

/>

</div>



{/* GRADIENT */}

<div

className="
absolute
bottom-0
left-0
w-full
h-[105px]
bg-gradient-to-t
from-[#090313]
via-[#090313]/95
to-transparent
"

/>



{/* CONTENT */}

<div

className="
absolute
bottom-5
left-10
right-0
z-10
flex
items-end
justify-between
px-6
pb-6
"

>


<div>

<h3

className="
text-[22px]
max-sm:text-[17px]
leading-none
font-extrabold
text-white
"

>

{title}

</h3>


<p

className="
mt-2
text-[15px]
max-sm:text-[12px]
text-white/60
"

>

{subtitle}

</p>


</div>



<div

className="
flex
h-12
w-12
max-sm:h-10
max-sm:w-10
items-center
justify-center
rounded-full
bg-violet-600
"

>

<ArrowUpRight

size={25}

/>

</div>


</div>


</motion.div>

)

}