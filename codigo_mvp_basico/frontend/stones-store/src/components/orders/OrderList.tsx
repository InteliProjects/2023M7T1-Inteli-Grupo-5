import OrderCard from "@/components/orders/OrderCard";
import { Order } from "@/services/orders";

interface OrderListProps {
  orders: Order[];
}

export default function OrderList(props: OrderListProps) {
  return (
    <div className={"p-5 flex flex-col gap-y-5"}>
      {props.orders.map((order) => (
        <OrderCard
          key={order.id}
          status={order.status}
          deliveryDate={order.deliveryDate}
          productId={order.productId}
          orderId={order.id}
          product={{
            name: order.product.name,
            price: String(order.product.price),
            image: order.product.image,
            category: order.product.category,
            description: order.product.description,
          }}
        />
      ))}
    </div>
  );
}
