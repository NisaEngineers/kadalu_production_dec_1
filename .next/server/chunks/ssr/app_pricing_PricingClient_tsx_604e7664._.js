module.exports = [
"[project]/app/pricing/PricingClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const stripePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadStripe"])("YOUR_STRIPE_PUBLIC_KEY");
function PaymentForm({ selectedPlan }) {
    const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStripe"])();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElements"])();
    const [cardholderName, setCardholderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!stripe || !elements) return;
        const card = elements.getElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardNumberElement"]);
        if (!card) return;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
            billing_details: {
                name: cardholderName
            }
        });
        if (error) {
            alert(error.message);
        } else {
            alert(`Payment method created for ${selectedPlan}: ${paymentMethod.id}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "mt-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1 text-white",
                        children: "Cardholder Name"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: cardholderName,
                        onChange: (e)=>setCardholderName(e.target.value),
                        className: "w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1 text-white",
                        children: "Card Number"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardNumberElement"], {
                            className: "w-full"
                        }, void 0, false, {
                            fileName: "[project]/app/pricing/PricingClient.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1 text-white",
                                children: "Expiry Date"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardExpiryElement"], {
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1 text-white",
                                children: "CVC"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardCvcElement"], {
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300",
                children: "Pay with Card"
            }, void 0, false, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pricing/PricingClient.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function PricingClient() {
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("international");
    const [selectedBilling, setSelectedBilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("yearly");
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const pricingData = {
        international: {
            free: {
                name: "Free",
                pricing: "Free",
                features: {
                    "Vocal Remover": 3,
                    "Basic Splitter": 2,
                    "Advanced Splitter": "No",
                    "Mixing & Mastering": "1 track",
                    "Chord Extractor": 3,
                    "Track Duration": "Up to 3 min",
                    "Stem Downloads": "8 minutes",
                    "Track Retention": "24 hours",
                    "Overages Allowed": "No"
                }
            },
            beginner: {
                name: "Beginner",
                pricing: "$4.99 per day",
                features: {
                    "Vocal Remover": "30 (15 tracks×2)",
                    "Basic Splitter": "40 (10 tracks×4)",
                    "Advanced Splitter": "30 (5 tracks×6)",
                    "Mixing & Mastering": "5 tracks",
                    "Chord Extractor": 30,
                    "Track Duration": "Up to 6 min",
                    "Stem Downloads": "100 minutes",
                    "Track Retention": "7 days",
                    "Overages Allowed": "Yes"
                }
            },
            creator: {
                name: "Creator",
                pricing: {
                    yearly: "$9.99/month",
                    monthly: "$19.99/month"
                },
                features: {
                    "Vocal Remover": "120 (60 tracks×2)",
                    "Basic Splitter": "160 (40 tracks×4)",
                    "Advanced Splitter": "60 (10 tracks×6)",
                    "Mixing & Mastering": "25 tracks",
                    "Chord Extractor": 75,
                    "Track Duration": "Up to 5 min",
                    "Stem Downloads": "380 minutes",
                    "Track Retention": "45 days",
                    "Overages Allowed": "Yes"
                }
            },
            producer: {
                name: "Producer",
                pricing: {
                    yearly: "$19.99/month",
                    monthly: "$29.99/month"
                },
                bestValue: true,
                features: {
                    "Vocal Remover": "300 (150 tracks×2)",
                    "Basic Splitter": "400 (100 tracks×4)",
                    "Advanced Splitter": "300 (50 tracks×6)",
                    "Mixing & Mastering": "70 tracks",
                    "Chord Extractor": 200,
                    "Track Duration": "Up to 10 min",
                    "Stem Downloads": "880 minutes",
                    "Track Retention": "60 days",
                    "Overages Allowed": "Yes"
                }
            }
        },
        india: {
            free: {
                name: "Free",
                pricing: "Free",
                features: {
                    "Vocal Remover": 3,
                    "Basic Splitter": 2,
                    "Advanced Splitter": "No",
                    "Mixing & Mastering": "1 track",
                    "Chord Extractor": 3,
                    "Track Duration": "Up to 3 min",
                    "Stem Downloads": "8 minutes",
                    "Track Retention": "24 hours",
                    "Overages Allowed": "No"
                }
            },
            beginner: {
                name: "Beginner",
                pricing: "₹415 per day",
                features: {
                    "Vocal Remover": "30 (15 tracks×2)",
                    "Basic Splitter": "40 (10 tracks×4)",
                    "Advanced Splitter": "30 (5 tracks×6)",
                    "Mixing & Mastering": "5 tracks",
                    "Chord Extractor": 30,
                    "Track Duration": "Up to 6 min",
                    "Stem Downloads": "100 minutes",
                    "Track Retention": "7 days",
                    "Overages Allowed": "Yes"
                }
            },
            creator: {
                name: "Creator",
                pricing: {
                    yearly: "₹830/month",
                    monthly: "₹1,660/month"
                },
                features: {
                    "Vocal Remover": "120 (60 tracks×2)",
                    "Basic Splitter": "160 (40 tracks×4)",
                    "Advanced Splitter": "60 (10 tracks×6)",
                    "Mixing & Mastering": "25 tracks",
                    "Chord Extractor": 75,
                    "Track Duration": "Up to 5 min",
                    "Stem Downloads": "380 minutes",
                    "Track Retention": "45 days",
                    "Overages Allowed": "Yes"
                }
            },
            producer: {
                name: "Producer",
                pricing: {
                    yearly: "₹1,660/month",
                    monthly: "₹2,490/month"
                },
                bestValue: true,
                features: {
                    "Vocal Remover": "300 (150 tracks×2)",
                    "Basic Splitter": "400 (100 tracks×4)",
                    "Advanced Splitter": "300 (50 tracks×6)",
                    "Mixing & Mastering": "70 tracks",
                    "Chord Extractor": 200,
                    "Track Duration": "Up to 10 min",
                    "Stem Downloads": "880 minutes",
                    "Track Retention": "60 days",
                    "Overages Allowed": "Yes"
                }
            }
        }
    };
    const plans = [
        pricingData[selectedRegion].free,
        pricingData[selectedRegion].beginner,
        pricingData[selectedRegion].creator,
        pricingData[selectedRegion].producer
    ];
    const handlePayPal = (planName)=>{
        alert(`Redirecting to PayPal for plan: ${planName}`);
    };
    const handleStripeClick = (planName)=>{
        setSelectedPlan(planName);
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
        setSelectedPlan(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Elements"], {
        stripe: stripePromise,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "jsx-bf7ab68c14a8a4b0" + " " + "relative min-h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: "./videos/pricing_background.mp4",
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute top-0 left-0 w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/40 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "relative z-10 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bf7ab68c14a8a4b0" + " " + "container mx-auto px-4 sm:px-6 py-12 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "text-center pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-4xl font-bold md:text-5xl bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent animate-gradient-shift",
                                        children: "Pricing Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-8 flex justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedBilling("monthly"),
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + `px-6 py-2 rounded-full ${selectedBilling === "monthly" ? "bg-gradient-to-r from-green-400 to-blue-500 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"}`,
                                                children: "Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedBilling("yearly"),
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + `px-6 py-2 rounded-full ${selectedBilling === "yearly" ? "bg-gradient-to-r from-green-400 to-blue-500 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"}`,
                                                children: "Yearly"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
                                children: plans.map((plan, index)=>{
                                    let pricingDisplay;
                                    if (typeof plan.pricing === "string") {
                                        pricingDisplay = plan.pricing;
                                    } else {
                                        pricingDisplay = selectedBilling === "yearly" ? plan.pricing.yearly : plan.pricing.monthly;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + `relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border p-8 shadow-2xl transition-all duration-300 ${plan.bestValue ? "border-green-500 hover:shadow-green-500/30 scale-[1.03]" : "border-gray-700/50 hover:shadow-green-500/20"}`,
                                        children: [
                                            plan.bestValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full",
                                                children: "BEST VALUE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 354,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 358,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-4 text-3xl font-bold",
                                                children: pricingDisplay
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 361,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "my-6 space-y-4 text-sm",
                                                children: Object.entries(plan.features).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "flex text-gray-300 hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "w-5 h-5 mr-3 text-green-400 mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z",
                                                                    clipRule: "evenodd",
                                                                    className: "jsx-bf7ab68c14a8a4b0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bf7ab68c14a8a4b0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-bf7ab68c14a8a4b0",
                                                                        children: [
                                                                            key,
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " ",
                                                                    value
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 363,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleStripeClick(plan.name),
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600",
                                                        children: "Pay with Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePayPal(plan.name),
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-700",
                                                        children: "Pay with PayPal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 384,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 345,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-16 bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                                        children: "Add-On Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "grid grid-cols-1 md:grid-cols-3 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "bg-gray-800/50 p-6 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-xl font-semibold mb-3",
                                                        children: "Vocal Remover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-2xl font-bold text-green-400 mb-4",
                                                        children: "$4.99 / ₹415"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-gray-300",
                                                        children: "50 extra vocal removals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-sm text-gray-400 mt-2",
                                                        children: "(20×2=50 stems)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "bg-gray-800/50 p-6 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-xl font-semibold mb-3",
                                                        children: "Basic Splitter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-2xl font-bold text-green-400 mb-4",
                                                        children: "$2.99 / ₹250"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-gray-300",
                                                        children: "48 basic splits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-sm text-gray-400 mt-2",
                                                        children: "(12×4=48 stems)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "bg-gray-800/50 p-6 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-xl font-semibold mb-3",
                                                        children: "Advanced Splitter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-2xl font-bold text-green-400 mb-4",
                                                        children: "$3.99 / ₹330"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-gray-300",
                                                        children: "30 advanced splits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-sm text-gray-400 mt-2",
                                                        children: "(5×6=30 stems)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-6 text-sm text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-bf7ab68c14a8a4b0",
                                                children: "* Dynamic pricing based on overuse trends"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-bf7ab68c14a8a4b0",
                                                children: "* Overages are only available for paid plans"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-bf7ab68c14a8a4b0" + " " + "bg-gray-900 p-6 rounded-2xl max-w-md w-full border border-gray-700 relative shadow-2xl scale-95 opacity-0 animate-fadeIn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            "aria-label": "Close",
                                            className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute top-3 right-3 text-gray-400 hover:text-white",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-bf7ab68c14a8a4b0" + " " + "text-xl font-semibold mb-4 text-white",
                                            children: [
                                                "Enter card details for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bf7ab68c14a8a4b0" + " " + "text-green-400",
                                                    children: selectedPlan
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 444,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentForm, {
                                            selectedPlan: selectedPlan
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 436,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "bf7ab68c14a8a4b0",
                    children: "@keyframes gradient-shift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.animate-gradient-shift.jsx-bf7ab68c14a8a4b0{background-size:200%;animation:6s linear infinite gradient-shift}@keyframes fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-fadeIn.jsx-bf7ab68c14a8a4b0{animation:.3s ease-out forwards fadeIn}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/PricingClient.tsx",
            lineNumber: 293,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/pricing/PricingClient.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_pricing_PricingClient_tsx_604e7664._.js.map