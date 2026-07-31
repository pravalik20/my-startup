"use client";

import { motion } from "framer-motion";

import DeveloperModel from "./DeveloperModel";
import HeroCards from "./HeroCards";
import FloatingIcons from "./FloatingIcons";
import MobileCardSlider from "./MobileCardSlider";


export default function HeroScene() {


return (

<div
className="
relative
mx-auto
flex
w-full
max-w-[1400px]
min-h-[760px]
items-center
justify-center
overflow-visible

sm:min-h-[780px]

md:min-h-[750px]

xl:min-h-[700px]
"
>


{/* Background Glow */}

<motion.div

animate={{

scale:[1,1.08,1],

opacity:[0.15,0.3,0.15]

}}

transition={{

duration:6,

repeat:Infinity,

ease:"easeInOut"

}}

className="
absolute
h-[550px]
w-[550px]
rounded-full
bg-violet-600/20
blur-[140px]
"

/>





{/* ================= DESKTOP CENTER CARD ================= */}


<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="

hidden

lg:block

absolute

z-20

left-1/2

top-[100px]

-translate-x-1/2

scale-[0.65]

md:scale-90

xl:scale-100

"

>

<HeroCards

title="Professional Website"

subtitle="Business Website Solutions"

image="/cards/professional.png"

/>

</motion.div>









{/* ================= DESKTOP LEFT CARD ================= */}



<motion.div

initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

className="

hidden

lg:block

absolute

z-20

left-[30px]

top-[300px]


scale-[0.65]


md:left-16

md:top-[280px]

md:scale-90


xl:left-20

xl:top-[260px]

xl:scale-100

"

>

<HeroCards

title="E-Commerce Website"

subtitle="Online Store Solutions"

image="/cards/ecommerce.png"

rotate="-8deg"

/>

</motion.div>









{/* ================= DESKTOP RIGHT CARD ================= */}



<motion.div

initial={{
opacity:0,
x:60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

className="

hidden

lg:block

absolute

z-20


right-[20px]

top-[300px]


scale-[0.65]


md:right-16

md:top-[280px]

md:scale-90


xl:right-20

xl:top-[260px]

xl:scale-100

"

>

<HeroCards

title="Digital Marketing"

subtitle="SEO & Growth Strategy"

image="/cards/marketing.png"

rotate="8deg"

/>

</motion.div>









{/* ================= MOBILE SLIDER ================= */}


<MobileCardSlider />









{/* ================= DEVELOPER MODEL ================= */}



<motion.div


className="
relative
z-30

mt-[50px]

sm:mt-[80px]

md:mt-[120px]

scale-[0.99]

sm:scale-90

md:scale-100

"

>

<DeveloperModel/>


</motion.div>









{/* ================= FLOATING ICONS ================= */}


<div

className="

hidden

md:block

"

>

<FloatingIcons/>

</div>









{/* ================= PARTICLES ================= */}



{
[...Array(16)].map((_,index)=>(


<motion.span

key={index}


className="
absolute
h-2
w-2
rounded-full
bg-white/40
"


style={{

left:`${5+index*6}%`,

top:`${10+(index%6)*15}%`

}}


animate={{

y:[0,-15,0],

opacity:[0.2,1,0.2]

}}


transition={{

duration:3+index*.2,

repeat:Infinity

}}


/>


))
}









{/* LIGHT EFFECT */}


<div

className="

absolute

inset-0

pointer-events-none

bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]

"

/>



</div>


)

}