"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Confetti from "react-confetti";

const SuccessPageContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get("session_id");

    useEffect(() => {
        if (!orderId) return;
        const timer = setTimeout(() => {
            router.push("/orders/" + orderId);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [orderId, router]);

    return (
        <div className='flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]'>
            <Confetti width={2000} height={1080} />
            <h1 className='text-6xl text-green-700'>Successful</h1>
            <h2 className='text-xl font-medium'>
                We sent the invoice to your e-mail
            </h2>
            <h3>You are being redirected to the order page...</h3>
        </div>
    );
};
const SuccessPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessPageContent />
        </Suspense>
    );
};
export default SuccessPage;

// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// function SuccessPage() {
//     const { id: session_id } = useParams<{ id: string }>(); // Lấy session_id từ URL động
//     const [sessionDetails, setSessionDetails] = useState<any | null>(null);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchSessionDetails = async () => {
//             try {
//                 const res = await fetch(
//                     `/api/create-checkout-session?session_id=${session_id}`,
//                 );
//                 if (!res.ok) {
//                     throw new Error(`Failed to fetch session: ${res.status}`);
//                 }
//                 const data = await res.json();
//                 setSessionDetails(data);
//             } catch (err: any) {
//                 setError(err.message);
//             }
//         };

//         if (session_id) {
//             fetchSessionDetails();
//         }
//     }, [session_id]);

//     if (error) {
//         return (
//             <div>
//                 <p>Error loading session: {error}</p>
//             </div>
//         );
//     }

//     if (!sessionDetails) {
//         return <p>Loading session details...</p>;
//     }

//     return (
//         <div>
//             <h1>Thank you for your purchase!</h1>
//             <p>Order ID: {sessionDetails.id}</p>
//             <p>Customer Email: {sessionDetails.customer_email}</p>
//             <p>
//                 Amount Paid: {sessionDetails.currency.toUpperCase()}{" "}
//                 {(sessionDetails.amount_total / 100).toFixed(2)}
//             </p>
//             <p>Payment Status: {sessionDetails.payment_status}</p>
//             {/* Render thêm thông tin session nếu cần */}
//         </div>
//     );
// }

// export default SuccessPage;
