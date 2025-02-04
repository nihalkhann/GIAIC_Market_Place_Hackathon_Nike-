"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero(){
  return (
    
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
            <div className="flex justify-center flex-col items-center pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"} className="underline font-semibold text-gray-800"> Get Your Great</Link>
        </p>
            </div>
    
            
            <Image src={"/Image (13).png"} alt={"shoes"} width={1344} height={700} className="rounded-md"/>
            <div className="flex justify-center items-center flex-col py-10 pt-4 text-center 
            ">
                <p className="text-sm text-center font-semibold">First Look</p>
                <h2 className="text-[24px]  md:text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
          <div className="flex justify-center items-center gap-3">
            <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
              Notify Me
            </button>
            <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
              Shop Air Max
            </button>
                </div>
            </div>
      </section>  
    )
    
}