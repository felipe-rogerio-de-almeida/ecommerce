import { PercentIcon } from "lucide-react";
import ProductItem from "../_components/ui/product-item";
import { db } from "../_lib/prisma";
import { computeProductTotalPrice } from "../helpers/product";
import { Badge } from "../_components/ui/badge";

const DealsPage = async () => {
    const deals = await db.product.findMany({
        where:{
          discountPercentage:{
            gt: 0
          },
        },
      }) 

    return ( 
        <div className="p-5 flex flex-col gap-8">
             <Badge className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2" variant="outline">
                <PercentIcon size={16}/>
                Ofertas
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {deals.map(product => (
                    <ProductItem 
                        key={product.id} 
                        product={computeProductTotalPrice(product)}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default DealsPage;