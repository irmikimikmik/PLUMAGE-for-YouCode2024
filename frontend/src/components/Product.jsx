import Image from "next/image"
import placeholder from "../../public/backgroundImage.png"
import Star from "../../public/star.svg"
import Tag from "@/components/Tag"

export default function Product() {
    return (
        <div className="px-9 pt-9 pb-4">
            <div className="relative">
            <Image width="{245}" height="{327}" src={placeholder}/>
            <div className="absolute bottom-0 pb-2 pl-2"><Tag /></div>
            </div>
            <div>
            <div className="space-y-2 mt-6">
                <p className="uppercase font-bold">Product name</p>
                <p>Key product future</p>
            </div>
            <div className="space-y-2 mt-6">
                <p className="font-bold">$000.00</p>
                <div className="flex">
                    <Image width="15px" src={Star}/>
                    <Image width="15px" src={Star}/>
                    <Image width="15px" src={Star}/>
                    <Image width="15px" src={Star}/>
                    <Image width="15px" src={Star}/>
                </div>
            </div>
            </div>
        </div>
    )
}