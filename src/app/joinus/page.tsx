import Image from "next/image";
import Link from "next/link";

export default function Joinn() {
  return (
    <main>
      <section className="my-20">
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
          <Image
            src={"/nike.png"}
            alt="Nike Logo"
            width={65}
            height={35}
            className="mb-4"
          />
          <div className="items-center justify-center flex flex-col">
            <h1 className="font-bold text-xl">BECOME A NIKE MEMBER</h1>
          </div>
          <div className="mt-10 mb-5 max-w-[280px] mx-auto">
            <p className="text-gray-400 text-[12px]">
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration and community.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-3">
            <input
              type="email"
              placeholder="Email"
              className="w-80 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-80 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-80 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-80 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-80 p-2 border border-gray-300 rounded-md"
            />
            <p className="text-gray-400 text-[12px]">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <select
              className="w-80 p-2 border border-gray-300 rounded-md"
              defaultValue="Pakistan"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
            <div className="flex justify-between gap-x-10">
              <button className="w-36 h-10 p-2 border border-gray-300 rounded-md">
                Male
              </button>
              <button className="w-36 h-10 p-2 border border-gray-300 rounded-md">
                Female
              </button>
            </div>
          </div>
          <div className="flex justify-between max-w-[280px] mx-auto mt-6">
            <p className="text-gray-400 text-[12px] text-center">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-gray-400 text-[12px]">
              By creating an account, you agree to Nike&apos;s{" "}
              <u>Privacy Policy</u>.
            </p>
            <p className="text-gray-400 text-[12px]">
              and <u>Terms of Use</u>.
            </p>
          </div>
          <Link href="/joinus">
            <button className="w-80 p-2 rounded-sm my-6 bg-black text-white">
              JOIN US
            </button>
          </Link>
          <p className="text-gray-400 text-[12px]">
            Already a Member?{" "}
            <Link href="/login">
              <u className="text-black">Sign In?</u>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
