import { ProductWithTotalPrice } from "@/app/product";
import Image from "next/image"
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="flex flex-col max-w-[156px] gap-4">
            <div className=" relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{
                        objectFit: "contain"
                    } }
                    alt={product.name}
                 />

                {product.discountPercentage > 0 &&(
                    <Badge className="absolute left-3 top-3 px-2 py-[2px]"> 
                        <ArrowDownIcon size={14} /> {product.discountPercentage}%
                    </Badge>
                )} 
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-sm truncate">{product.name}</p>

                <div className="flex items-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="font-semibold"> R$ {product.totalPrice.toFixed(2)}</p>

                            <p className="opacity-75 line-through text-xs"> R$ {Number(product.basePrice).toFixed(2)}</p>
                        </>

                    ) : (
                        <p className="font-semibold"> R$ {product.basePrice.toFixed(2)}</p>
                    )}


                </div>    

            </div>
        </div>

     );
}
 
export default ProductItem