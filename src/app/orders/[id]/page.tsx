"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type OrderDetails = {
    id: string;
    email: string;
    name: string;
    description: string;
    amount_total: number;
    currency: string;
    quantity: number;
};

function OrderPage() {
    const { id: session_id } = useParams<{ id: string }>();
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (!session_id) {
                setError("Session ID is missing.");
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(
                    `/api/create-checkout-session?session_id=${session_id}`,
                );

                if (!res.ok) {
                    throw new Error(
                        `Failed to fetch order details: ${res.status}`,
                    );
                }

                const data = await res.json();
                setOrderDetails(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [session_id]);

    if (loading) {
        return <p>Loading order details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!orderDetails) {
        return <p>No order details found.</p>;
    }

    return (
        <div>
            <h1>Order Details</h1>
            <p>
                <strong>Order ID:</strong> {orderDetails.id}
            </p>
            <p>
                <strong>Customer Name:</strong> {orderDetails.name}
            </p>
            <p>
                <strong>Email:</strong> {orderDetails.email}
            </p>
            <p>
                <strong>Description:</strong> {orderDetails.description}
            </p>
            <p>
                <strong>Total Amount:</strong>{" "}
                {orderDetails.currency.toUpperCase()}{" "}
                {(orderDetails.amount_total / 100).toFixed(2)}
            </p>
            <p>
                <strong>Quantity:</strong> {orderDetails.quantity}
            </p>
        </div>
    );
}

export default OrderPage;
