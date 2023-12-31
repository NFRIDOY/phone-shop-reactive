import { Link } from "react-router-dom";

export default function Phone({ phone }) {
    const { id, image, phone_name, brand_name, price, rating } = phone;

    return (
        <div>
            <div className="m-10">
                <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img
                            src={image}
                            alt="img-blur-shadow"
                            layout="fill"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {phone_name}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {brand_name}
                        </p>
                        <p className="block font-sans text-base leading-relaxed text-inherit antialiased font-bold">
                            Price: ${price}
                        </p>
                        <p className="block font-sans text-base leading-relaxed text-inherit antialiased font-bold">
                            Rating: {rating}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            {/* <Link to={id}> */}
                            {/* <Link to={`/phones/${id}`}> */}
                            <Link to={`/phonedetails`}>
                                Details
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {
                console.log(phone_name)
            }
        </div>
    )
}
