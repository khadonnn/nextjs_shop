"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
    description: string;
    quantity: number;
    currency: string;
};

type OrderDetails = {
    id: string;
    email: string;
    name: string;
    amount_total: number;
    currency: string;
    mappedLineItems: any[];
    products: Product[];
};
function OrderPage() {
    const { id: session_id } = useParams<{ id: string }>();
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
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

    const handleFinishReview = async () => {
        router.push("/");
    };
    console.log("metadata :", orderDetails.mappedLineItems);
    return (
        <div className='gap-4 p-8'>
            <h1 className='text-2xl font-bold mb-4'>Order Details</h1>
            <p>
                <strong>Order ID:</strong> {orderDetails.id}
            </p>
            <p>
                <strong>Customer Name: </strong> {orderDetails.name}
            </p>
            <p>
                <strong>Email:</strong> {orderDetails.email}
            </p>
            <p>
                <strong>Total Amount:</strong> {orderDetails.currency}{" "}
                {(orderDetails.amount_total / 100).toFixed(2)}
            </p>

            {orderDetails.mappedLineItems &&
            orderDetails.mappedLineItems.length > 0 ? (
                <div className='flex-col justify-items-center'>
                    <h2 className='text-xl font-semibold mt-6 mb-4'>
                        Product Details
                    </h2>
                    <div className='space-y-4'>
                        {orderDetails.mappedLineItems.map(
                            (product: any, index: number) => (
                                <div
                                    key={index}
                                    className='flex items-center border border-gray-300 rounded-lg p-4 shadow-sm'
                                >
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.description}
                                        className=' object-cover rounded-lg'
                                        width={100}
                                        height={100}
                                    />
                                    <div className='ml-4'>
                                        <p className='font-medium text-gray-800'>
                                            <strong>Description:</strong>{" "}
                                            {product.description}
                                        </p>
                                        <p className='text-gray-600'>
                                            <strong>Quantity:</strong>{" "}
                                            {product.quantity}
                                        </p>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            ) : (
                <p>No products found.</p>
            )}
            <button
                onClick={handleFinishReview}
                className='mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex justify-self-center'
            >
                Finish review
            </button>
        </div>
    );
}

export default OrderPage;
