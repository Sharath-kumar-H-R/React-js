import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="">
            <nav className="p-2 shadow-lg bg-white sticky top-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="#"><img src="https://sharath-kumar-h-r.github.io/e-commerece-sk2.0/images/logo2.png" alt="Logo" className="p-4 py-5" />

                            </a>
                        </div>

                        {/* Desktop Navigation Links (large screens) */}
                        <div className="hidden lg:flex font-semibold mb-10 mt-8 p-2">
                            <a href="#" className="hover:text-teal-800 px-3 py-2 hover:underline ease-in duration-200">Home</a>
                            <a href="#" className="hover:text-teal-800 px-3 py-2 hover:underline ease-in duration-200">Shop</a>
                            <a href="#" className="hover:text-teal-800 px-3 py-2 hover:underline ease-in duration-200">Blog</a>
                            <a href="#" className="hover:text-teal-800 px-3 py-2 hover:underline ease-in duration-200">About</a>
                            <a href="#" className="hover:text-teal-800 px-3 py-2 hover:underline ease-in duration-200">Contact</a>
                            <a href="#">
                                <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" className="size-10 ml-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const HeadingHome = () => {
    return (
        <section className="p-6 gap-12">
            <h1 className="text-gray-700 text-xl font-semibold md:text-2xl" data-aos="fade-right" data-aos-duration="800">Biryani</h1>
            <p className=" text-lg text-gray-500" data-aos="fade-left" data-aos-duration="800">Taste these delectable classics, delectable biryanis to make your day.
            </p>
        </section>
    );
}

const FoodCard = ({name,cuisine}) => {
    return (
            <div className="border border-teal-400 rounded-2xl w-72 p-1 hover:shadow-2xl ease-in duration-200 shadow-gray-300 cursor-pointer relative bg-white">
                <div className="p-2">
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b7j08bd6hdjwjaavyeal"
                        alt="Delicious Biryani"
                        className="rounded-xl w-full h-44 object-cover"
                    />
                </div>
                <div className="pl-2 pb-4">
                <h6 className="text-sm text-gray-600">{name}</h6>
                <p className="font-semibold text-lg">{cuisine}</p>
                    <p>
                        Aromatic basmati rice layered with tender chicken, cooked with spices and herbs, served with raita.
                    </p>

                    <div className="flex pr-2 gap-1 relative text-yellow-400">
                        <div><h2 className="text-teal-900 font-semibold max-w-32 mt-2">₹ 180</h2></div>
                        <div className="flex justify-end w-[30%] absolute right-4 top-0">
                            <a
                                href="#"
                                className="size-10 p-2 border bg-teal-50 rounded-full text-center">
                                <FontAwesomeIcon icon={faCartPlus} className="text-teal-800" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
};
const AppLayout = () => {
    return (
        <div>
            <Header />
            <HeadingHome />

            <div>
                <section className="grid grid-cols-2 place-items-center p-5 md:grid-cols-3 md:p-6 lg:flex lg:flex-wrap lg:justify-evenly lg:gap-6 " data-aos="fade-up" data-aos-duration="3000">
                    <FoodCard name="Veg Hakka Noodles Bowl." cuisine="Serves 1 | Noodles tossed with cabbage, onion, carrot with a touch of dark soya & garnished with spring onion." />
                    <FoodCard name="Veg Chilli Garlic Noodles Bowl." cuisine="Serves 1 | Noodles tossed with carrot, cabbage & onion flavored with chilli flakes, garlic & soy, garnished with spring onion." />
                    <FoodCard name="Chicken Fried Rice Bowl." cuisine="Serves 1 | Rice tossed with diced chicken, egg & carrot, french beans & baby corn, garnished with spring onion."/>
                </section>
            </div>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
