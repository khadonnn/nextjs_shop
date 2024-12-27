"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type SessionDetails = {
    id: string;
    customer_email: string;
    amount_total: number;
    currency: string;
    payment_status: string;
    [key: string]: any;
};

function SuccessPage() {
    const { id: session_id } = useParams<{ id: string }>(); // Lấy session_id từ URL động
    const [sessionDetails, setSessionDetails] = useState<SessionDetails | null>(
        null,
    );
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSessionDetails = async () => {
            try {
                const res = await fetch(
                    `/api/create-checkout-session/${session_id}`,
                );
                if (!res.ok) {
                    throw new Error(`Failed to fetch session: ${res.status}`);
                }
                const data = await res.json();
                setSessionDetails(data.session);
            } catch (err: any) {
                setError(err.message);
            }
        };

        if (session_id) {
            fetchSessionDetails();
        }
    }, [session_id]);

    if (error) {
        return (
            <div>
                <p>Error loading session: {error}</p>
            </div>
        );
    }

    if (!sessionDetails) {
        return <p>Loading session details...</p>;
    }

    return (
        <div>
            <h1>Thank you for your purchase!</h1>
            <p>Order ID: {sessionDetails.id}</p>
            <p>Customer Email: {sessionDetails.customer_email}</p>
            <p>
                Amount Paid: {sessionDetails.currency.toUpperCase()}{" "}
                {(sessionDetails.amount_total / 100).toFixed(2)}
            </p>
            <p>Payment Status: {sessionDetails.payment_status}</p>
            {/* Render thêm thông tin session nếu cần */}
        </div>
    );
}

export default SuccessPage;
