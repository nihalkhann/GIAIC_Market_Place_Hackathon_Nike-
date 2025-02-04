import Image from "next/image";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

interface ButtonProps {
  text: string;
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({ text, classNames = "" }) => (
  <button
    className={`bg-black text-white px-6 hover:bg-gray-800 transition-colors duration-200 ${classNames}`}
  >
    {text}
  </button>
);

interface FAQItem {
  question: string;
  answer: string;
  additionalInfo?: string;
}

const faqs: FAQItem[] = [
  {
    question: "Does my card need international purchases enabled?",
    answer:
      "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.",
    additionalInfo:
      "Please note, some banks may charge a small transaction fee for international orders.",
  },
  {
    question: "Can I pay for my order with multiple methods?",
    answer:
      "No, payment for Nike orders can't be split between multiple payment methods.",
  },
  {
    question: "What payment method is accepted for SNKRS orders?",
    answer: "You can use any accepted credit card to pay for your SNKRS order.",
  },
  {
    question: "Why don't I see Apple Pay as an option?",
    answer:
      "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
  },
];

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title?: string;
  details: string[];
}> = ({ icon, title, details }) => (
  <div className="flex flex-col items-center space-y-2 text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
    <div className="text-2xl text-gray-700">{icon}</div>
    {title && <p className="font-semibold">{title}</p>}
    {details.map((detail, index) => (
      <p key={index} className="text-sm text-gray-600">
        {detail}
      </p>
    ))}
  </div>
);

const HelpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <h2 className="uppercase text-2xl font-bold mt-8 mb-6">Get Help</h2>

      <div className="relative w-full max-w-xl px-4 mb-8">
        <div className="flex items-center px-4 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
          <input
            className="flex-1 focus:outline-none bg-transparent"
            type="text"
            placeholder="What can we help you with?"
            aria-label="Search help topics"
          />
          <CgSearch className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl px-4 md:px-8 py-8 bg-white rounded-lg shadow-sm">
        <div className="md:col-span-9 md:border-r border-gray-200 pr-8">
          <h2 className="text-2xl font-bold mb-6">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>

          <p className="mb-6 text-gray-700">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
            <li>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li>
              If you enter your PAN information at checkout, you'll be able to
              pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>

          <p className="mb-8 text-gray-700">
            <Link
              href="#"
              className="text-black underline font-semibold hover:text-gray-700"
            >
              Nike Members
            </Link>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member,{" "}
            <Link
              href="#"
              className="text-black underline font-semibold hover:text-gray-700"
            >
              join us
            </Link>{" "}
            today.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button text="Join Us" classNames="rounded-full py-2" />
            <Button text="Shop Nike" classNames="rounded-full py-2" />
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-6">FAQs</h3>

            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
                {faq.additionalInfo && (
                  <p className="mt-2 text-sm text-gray-600">
                    {faq.additionalInfo}
                  </p>
                )}
              </div>
            ))}

            <div className="mb-8">
              <p className="mb-3">Was this answer helpful?</p>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 hover:text-green-600 transition-colors">
                  <FaRegThumbsUp className="text-xl" />
                  <span>Yes</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-red-600 transition-colors">
                  <FaRegThumbsDown className="text-xl" />
                  <span>No</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-600">RELATED</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-black underline font-bold hover:text-gray-700"
                  >
                    WHAT ARE NIKE'S DELIVERY OPTIONS?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black underline font-bold hover:text-gray-700"
                  >
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h2 className="uppercase font-bold text-xl text-center mb-6">
            Contact Us
          </h2>

          <ContactItem
            icon={<IoIosPhonePortrait />}
            title="000 800 919 0566"
            details={[
              "Products & Orders: 24 hours a day, 7 days a week",
              "Company Info & Enquiries: 07:30 - 16:30 Monday - Friday",
            ]}
          />

          <ContactItem
            icon={<MdOutlineMessage />}
            details={["24 hours a day", "7 days a week"]}
          />

          <ContactItem
            icon={<HiOutlineMail />}
            details={["We'll reply within", "five business days"]}
          />

          <ContactItem
            icon={<IoLocationSharp />}
            title="STORE LOCATOR"
            details={["Find Nike retail stores near you"]}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
