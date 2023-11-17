/*
 * This script corresponds to the 'orders' page route
 * */

"use client";

import OrderCard from "@/components/orders/OrderCard";
import OrderList from "@/components/orders/OrderList";
import { Order } from "@/services/orders";
import { getUserOrders } from "@/services/users";
import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";

import EmptyStreet from "./empty-street.svg";
import EmptyStreetIcon from "./emptyStreetIcon";
import { AuthContext } from "@/contexts/auth.context";

export default function Page() {
  const [orders, setOrders] = useState<Order[]>([]);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authContext?.state.loading) {
      if (!authContext?.state.authenticated) {
        window.location.href = "/login";
      }
    }
  }, [authContext?.state.loading, authContext?.state.authenticated]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const user = localStorage.getItem("user") || "";
        const userData = JSON.parse(user);
        const response = await getUserOrders(userData.id, token);
        setOrders(response.orders);
      } catch (error) {
        const e = error as AxiosError;
        if (e.response?.status === 401) {
          authContext.LogOut();
        }
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      {orders.length > 0 ? (
        <OrderList orders={orders} />
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="flex flex-col items-center">
            <EmptyStreetIcon />
            <p className="text-2xl font-bold text-gray-700 mt-8">
              Você ainda não fez nenhum pedido
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
