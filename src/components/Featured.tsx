
import Link from "next/link";
export default function Featured() {
  return (
    <main className="m-4 ">
      {/* <div>
        <h1 className="font-semibold text-xl py-5 px-10">Featured</h1>
      </div> */}
      {/* <div
           className="bg-cover rounded-md bg-center bg-no-repeat h-screen w-full px-10" 
           style={{backgroundImage: "url('/Featured.png')"}}

      ></div> */}

      <div
        className="flex justify-center items-center flex-col py-10 text-center 
            "
      >
        <p className="text-sm md:text-[16px] text-center  mb-0 font-semibold">
          New This Week
        </p>
        <h2 className="text-[35px] md:text-[60px] font-[1000] font-serif uppercase m-0">
          NIKE AIR <br />
          PEGASUS WAVE
        </h2>
        <p className="text-sm md:text-[16px] text-center px-1  mb-6 font-[500]">
          A new icons forms from the sound of enregy.
        </p>
        <button>
          <Link
            href="/products"
            className="bg-black text-white rounded-full px-3 py-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Shop
          </Link>
        </button>
      </div>
    </main>
  );
}
