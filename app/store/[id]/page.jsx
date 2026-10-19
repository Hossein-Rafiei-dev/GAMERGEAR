import axios from 'axios'
import Link from 'next/link'
import { useContext } from 'react'
import CartButton from './CartButton'


const page = async ({ params }) => {
    const { id } = await params

    const { data } = await axios(
        `http://localhost:8000/posts/${id}`
    )



    return (
        <main className="min-h-screen bg-black text-white px-6 py-16">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-10">

                    <p className="
                        text-red-500
                        text-xs
                        tracking-[0.4em]
                        uppercase
                        mb-3
                    ">
                        SYSTEM // PRODUCT {id}
                    </p>

                    <div className="h-[2px] w-20 bg-red-500 shadow-[0_0_12px_#ef4444]" />

               <Link
    href="/store"
    className="
        group
        relative
        inline-flex
        items-center
        gap-3
        mt-6
        px-5
        py-3

        border
        border-zinc-800

        text-xs
        text-zinc-400
        uppercase
        tracking-[0.25em]

        bg-black

        transition-all
        duration-300

        hover:border-red-500
        hover:text-red-500
        hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]
    "
>
    {/* Arrow */}
    <span
        className="
            text-red-500
            transition-transform
            duration-300
            group-hover:-translate-x-1
        "
    >
        ←
    </span>

    <span>
        Back To Shop
    </span>

    {/* Bottom line */}
    <span
        className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-red-500
            shadow-[0_0_10px_#ef4444]

            transition-all
            duration-300

            group-hover:w-full
        "
    />
</Link>

                </div>


                {/* Product */}
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-12
                    bg-zinc-950
                    border
                    border-zinc-800
                    p-6
                    md:p-10
                    shadow-[0_0_40px_rgba(0,0,0,0.7)]
                ">

                    {/* Image */}
                    <div className="
                        relative
                        h-[450px]
                        overflow-hidden
                        bg-zinc-900
                        border
                        border-zinc-800
                        group
                    ">

                        <img
                            src={data.img}
                            alt={data.title}
                            className="
                                w-full
                                h-full
                                object-cover
                                grayscale
                                group-hover:grayscale-0
                                group-hover:scale-105
                                transition-all
                                duration-700
                            "
                        />

                        {/* Red Overlay */}
                        <div className="
                            absolute
                            inset-0
                            bg-red-600/10
                            group-hover:bg-transparent
                            transition-all
                            duration-500
                        " />

                        {/* Corner */}
                        <div className="
                            absolute
                            top-4
                            left-4
                            w-8
                            h-8
                            border-l-2
                            border-t-2
                            border-red-500
                        " />

                        <div className="
                            absolute
                            bottom-4
                            right-4
                            w-8
                            h-8
                            border-r-2
                            border-b-2
                            border-red-500
                        " />

                    </div>


                    {/* Information */}
                    <div className="flex flex-col justify-center">

                        <p className="
                            text-red-500
                            text-xs
                            tracking-[0.3em]
                            uppercase
                            mb-4
                        ">
                            CLASSIFIED PRODUCT
                        </p>


                        <h1 className="
                            text-4xl
                            md:text-5xl
                            font-bold
                            uppercase
                            tracking-tight
                            mb-6
                        ">
                            {data.title}
                        </h1>


                        <div className="
                            w-16
                            h-[2px]
                            bg-red-500
                            shadow-[0_0_10px_#ef4444]
                            mb-6
                        " />


                        <p className="
                            text-zinc-400
                            leading-8
                            text-base
                            mb-8
                        ">
                            {data.descrption}
                        </p>


                        {/* Price */}
                        <div className="
                            border-t
                            border-b
                            border-zinc-800
                            py-6
                            mb-8
                        ">

                            <span className="
                                block
                                text-xs
                                text-zinc-500
                                tracking-[0.3em]
                                uppercase
                                mb-2
                            ">
                                Current Price
                            </span>

                            <span className="
                                text-4xl
                                font-bold
                                text-red-500
                                drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]
                            ">
                                ${data.price}
                            </span>

                        </div>


                        {/* Button */}
                        <CartButton  id={data.id} />

                    </div>

                </div>

            </div>

        </main>
    )
}

export default page
