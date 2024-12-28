"use client";

import { useEffect, useState } from "react";
type Order = {
    id: number;
    orderId: string;
};
const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        // Lấy danh sách order từ localStorage
        const storedOrders = JSON.parse(
            localStorage.getItem("orderList") || "[]",
        );
        setOrders(storedOrders);
    }, []);

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>Danh sách đơn hàng</h1>
            {orders.length === 0 ? (
                <p>Chưa có đơn hàng nào.</p>
            ) : (
                <ul className='space-y-4'>
                    {orders.map((order) => (
                        <li
                            key={order.id}
                            className='border rounded-lg p-4 shadow-md'
                        >
                            <p>
                                <strong>Don hang:</strong> {order.id}
                            </p>
                            <p>
                                <strong>Order ID:</strong> {order.orderId}
                            </p>
                            <a
                                href={`/orders/${order.orderId}`}
                                className='text-blue-500 underline'
                            >
                                Xem chi tiết
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersPage;
