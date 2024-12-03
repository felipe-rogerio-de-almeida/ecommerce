import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { PackageSearchIcon } from "lucide-react";
import { Badge } from "../_components/ui/badge";
import { db } from "../_lib/prisma";
import OrderItem from "./components/order-item";

export const dynamic = "force-dynamic"

async function OrderPage() {
    
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user) {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
                <h2 className="font-bold">Acesso Negado</h2>
                <p className="text-sm opacity-60">Faça o login para ver seus pedidos</p>
            </div>
            
        )
    }
    const orders = await db.order.findMany({
        where:{
            userId: session.user.id,
        },
        include:{
            orderProducts:{
                include:{
                    product:true
                }
            }
        }
    })

    return (   
        <div className="p-5 lg:container lg:mx-auto lg:py-10">
            <Badge variant="heading">
                <PackageSearchIcon size={16}/>
                Meus Pedidos
            </Badge>
        
            <div className="flex flex-col gap-5 mt-5">
                {orders.map(order => (
                    <OrderItem key={order.id} order={order}/>
                ))}
            </div>
        
        </div>
    );
}
 
export default OrderPage; 
