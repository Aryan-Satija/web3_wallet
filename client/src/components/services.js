import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
const Card = ({color, icon, title, subtitle}) => {
    return(
        <div className='flex flex-row gap-4 justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
            <div className={`w-10 h-10 bg-[${color}] rounded-full flex justify-center items-center`}>
                {icon}
            </div>
            <div>
                <h3 className='mt-2 text-lg text-white'>{title}</h3>
                <p className='mt-1 text-white text-sm'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}
export const Services = () => {
  return (
    <div className='py-[4rem] w-[500px] flex flex-col mx-auto justify-center'>
        <div>
            <h1 className='text-5xl font-special'>
                Services that we
                <br/>
                continue to improve
            </h1>
            <p className='text-left font-special text-gradient my-6 text-base'>
                The best choice for buying and selling your crypto assets, with the
                various super friendly services we offer.
            </p>
        </div>
        <div>
            <Card
                color={"#2952E3"}
                title="Security guarantee"
                icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <Card
                color={"#8945F8"}
                title="Best exchange rates"
                icon={<BiSearchAlt fontSize={21} className="text-white" />}
                subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <Card
                color={"#F84550"}
                title="Fastest transactions"
                icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
        </div>
    </div>
  )
}
