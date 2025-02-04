import { SlMagnifier } from "react-icons/sl";
import { IoFilterSharp } from "react-icons/io5";
import Link from "next/link";

const stores = [
  {
    name: "Nike Morocco Mall",
    address1: "Rue Jean-Baptiste Van Péstraat 22",
    address2: "1190 Vorst/Forest, Belgium",
    status: "Closed",
    openingTime: "11:00 am",
  },
  {
    name: "Nike Casablanca",
    address1: "Rue Jean-Baptiste Van Péstraat 22",
    address2: "1190 Vorst/Forest, Belgium",
    status: "Open",
    openingTime: "10:00 am",
  },
  {
    name: "Nike Rabat",
    address1: "Rue Jean-Baptiste Van Péstraat 22",
    address2: "1190 Vorst/Forest, Belgium",
    status: "Closed",
    openingTime: "10:00 am",
  },
  
  
  
];

export default function Location() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row w-full h-full items-center p-5 gap-5">
        {/* Left Sidebar */}
        <div className="bg-white w-full lg:w-[40%] xl:w-[40%] p-6 rounded-md shadow-lg overflow-y-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Find a Store</h2>

            {/* Search Input */}
            <div className="flex w-full p-3 gap-3 items-center border rounded-md shadow-sm">
              <SlMagnifier className="text-gray-500" />
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search Location"
                className="outline-none w-full text-sm text-gray-700"
              />
            </div>

            {/* Filter and Store Count */}
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-gray-700">
                {stores.length} store{stores.length > 1 && "s"} near you
              </p>
              <button className="rounded-full flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 transition">
                <span className="text-sm">Filter</span>
                <IoFilterSharp className="text-gray-600" />
              </button>
            </div>

            {/* Store List */}
            {stores.map((store, index) => (
              <div key={index} className="flex flex-col gap-1 py-5 border-t">
                <h2 className="text-sm font-bold text-gray-800">
                  {store.name}
                </h2>
                <p className="text-xs text-gray-600">{store.address1}</p>
                <p className="text-xs text-gray-600">{store.address2}</p>
                <p className="text-xs text-gray-600">
                  <span
                    className={`text-sm font-medium ${store.status === "Open" ? "text-green-600" : "text-red-600"}`}
                  >
                    {store.status}
                  </span>{" "}
                  • Opens at {store.openingTime}
                </p>
              </div>
            ))}

            {/* View All Stores Link */}
            <Link
              className="text-blue-600 hover:underline font-bold text-sm"
              href={"#"}
            >
              View all stores
            </Link>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[60vh] lg:h-[100vh] rounded-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1816711630646!2d-7.7100001!3d33.5766848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d5c5eedb941b%3A0xff9da7bebd270af2!2sNike%20Store%20Morocco%20Mall!5e0!3m2!1sen!2s!4v1696791234567!5m2!1sen!2s"
            className="w-full h-full border-none"
            title="Nike Morocco Mall Location"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
