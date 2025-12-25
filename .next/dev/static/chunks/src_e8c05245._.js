(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/Projekte.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projekte",
    ()=>Projekte
]);
const Projekte = [
    {
        id: 1,
        slug: "school-project",
        title: "School Project Website",
        description: "A website for a school project about French history, designed to present historical information and educational content.",
        longDescription: "This comprehensive school project website was created to showcase French history in an engaging and educational format. The site features interactive timelines, historical documents, and multimedia content that brings history to life for students and educators alike.",
        status: "in-progress",
        projectUrl: "/",
        techStack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript"
        ],
        features: [
            "Interactive timeline of French history",
            "Multimedia content integration",
            "Responsive design for all devices",
            "Educational quiz sections"
        ]
    },
    {
        id: 2,
        slug: "invoice-app",
        title: "Invoice Web App",
        description: "A web application for managing invoices and billing processes, helping users track and organize their financial documents.",
        longDescription: "A full-featured invoice management system that streamlines billing processes for small businesses and freelancers. The application provides tools for creating, sending, and tracking invoices with automated reminders and payment status updates.",
        status: "in-progress",
        projectUrl: "/",
        techStack: [
            "Next.js",
            "Supabase",
            "Tailwind CSS",
            "TypeScript"
        ],
        features: [
            "Create and manage invoices",
            "Automated payment reminders",
            "PDF export functionality",
            "Client management system",
            "Financial reporting dashboard"
        ]
    },
    {
        id: 3,
        slug: "cropclear",
        title: "Cropclear App",
        description: "A web application designed to improve communication and transparency for companies in Africa, facilitating better business operations. The project is now in closed beta test.",
        longDescription: "Cropclear is an innovative platform built to enhance transparency and communication within agricultural supply chains in Africa. The application connects farmers, distributors, and retailers, providing real-time tracking and verification of agricultural products from farm to market.",
        status: "beta-test",
        projectUrl: "https://savalion-app-6vzc.vercel.app",
        techStack: [
            "Next.js",
            "Supabase",
            "Clerk Auth",
            "Tailwind CSS",
            "TypeScript"
        ],
        features: [
            "Supply chain tracking",
            "Real-time communication tools",
            "Verification system for products",
            "Multi-language support",
            "Mobile-first responsive design"
        ],
        screenshots: [
            "/screenshots/cropclear-1.png",
            "/screenshots/cropclear-2.png",
            "/screenshots/cropclear-3.png",
            "/screenshots/cropclear-4.png",
            "/screenshots/cropclear-5.png",
            "/screenshots/cropclear-6.png",
            "/screenshots/cropclear-7.png",
            "/screenshots/cropclear-8.png"
        ]
    },
    {
        id: 4,
        slug: "ai-app",
        title: "AI App",
        description: "A context-aware AI application that focuses on understanding the user through natural language processing and personalized interactions.",
        longDescription: "An advanced AI-powered application that learns from user interactions to provide increasingly personalized and context-aware responses. The system utilizes cutting-edge natural language processing to understand user intent and deliver meaningful, helpful interactions.",
        status: "planned",
        projectUrl: "/",
        techStack: [
            "Next.js",
            "OpenAI API",
            "Supabase",
            "TypeScript"
        ],
        features: [
            "Context-aware conversations",
            "Personalized user experience",
            "Natural language understanding",
            "Memory and learning capabilities"
        ]
    },
    {
        id: 5,
        slug: "scrimba-scoreboard",
        title: "Scrimba Scoreboard",
        description: "A minimalist scoreboard app built to strengthen fundamental web development skills and demonstrate proficiency without AI assistance.",
        longDescription: "A lightweight and interactive scoreboard project inspired by a Scrimba course, developed entirely without AI assistance to deepen core front-end understanding. This project focuses on mastering JavaScript logic, DOM manipulation, and layout structure using only HTML, CSS, and JavaScript. It serves as a practical demonstration of solid technical fundamentals and independent coding ability beyond AI-driven development.",
        status: "completed",
        projectUrl: "/",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        features: [
            "Real-time score tracking",
            "Reset and increment functions"
        ],
        screenshots: [
            "/screenshots/scrimbaScoreboard.png"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Sidebar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "7da3da8f4cf27b2b05dae20ceab3ba89323fe24663903d9f2473307db04c52e9") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7da3da8f4cf27b2b05dae20ceab3ba89323fe24663903d9f2473307db04c52e9";
    }
    const { activeView, onViewChange, onLogoClick } = t0;
    let t1;
    if ($[1] !== onLogoClick || $[2] !== onViewChange) {
        t1 = ({
            "Sidebar[handleLogoClick]": ()=>{
                if (onLogoClick) {
                    onLogoClick();
                } else {
                    onViewChange("about");
                }
            }
        })["Sidebar[handleLogoClick]"];
        $[1] = onLogoClick;
        $[2] = onViewChange;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleLogoClick = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl md:text-4xl font-light tracking-tight mb-2",
            children: "Black Knight"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm",
            children: "Developer & Designer"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleLogoClick) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogoClick,
            className: "text-left hover:opacity-70 transition-opacity",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = handleLogoClick;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onViewChange) {
        t5 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("about")
        })["Sidebar[<button>.onClick]"];
        $[8] = onViewChange;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = `block text-left w-full py-2 transition-colors ${activeView === "about" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t7;
    if ($[10] !== activeView) {
        t7 = activeView === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 72,
            columnNumber: 36
        }, this);
        $[10] = activeView;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t5 || $[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: t6,
            children: [
                t7,
                "About"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== onViewChange) {
        t9 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("projects")
        })["Sidebar[<button>.onClick]"];
        $[16] = onViewChange;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = `block text-left w-full py-2 transition-colors ${activeView === "projects" || activeView === "details" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t11;
    if ($[18] !== activeView) {
        t11 = (activeView === "projects" || activeView === "details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 101,
            columnNumber: 70
        }, this);
        $[18] = activeView;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t10 || $[21] !== t11 || $[22] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            children: [
                t11,
                "Projects"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
        $[22] = t9;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== onViewChange) {
        t13 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("contact")
        })["Sidebar[<button>.onClick]"];
        $[24] = onViewChange;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = `block text-left w-full py-2 transition-colors ${activeView === "contact" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t15;
    if ($[26] !== activeView) {
        t15 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 130,
            columnNumber: 39
        }, this);
        $[26] = activeView;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t13 || $[29] !== t14 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            children: [
                t15,
                "Contact"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t12 || $[33] !== t16 || $[34] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mt-12 space-y-1",
            children: [
                t8,
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t16;
        $[34] = t8;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t17 || $[37] !== t4) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t4;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "© 2025 Black Knight"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-600 text-xs space-y-2",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Design inspired by",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://p5aholic.me",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-gray-500 hover:text-white transition-colors",
                            children: "Keita Yamada"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 174,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 174,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-64 md:w-80 shrink-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    return t21;
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function ContactView() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "681938a309d6510c58f392acc78d3caf5eb66dbf8ab37adc3e34b23e31ec9572") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "681938a309d6510c58f392acc78d3caf5eb66dbf8ab37adc3e34b23e31ec9572";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl md:text-5xl lg:text-6xl font-light mb-8",
            children: "Get in Touch"
        }, void 0, false, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-8",
            children: "If you want to get in touch, feel free to reach out via email."
        }, void 0, false, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:einar@black-knight.dev",
            className: "text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline underline-offset-4 mb-8",
            children: "einar@black-knight.dev"
        }, void 0, false, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col justify-center max-w-2xl animate-fadeIn",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6 mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/endgegnerbert-tech",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-500 hover:text-white transition-colors",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactView.tsx",
                        lineNumber: 29,
                        columnNumber: 133
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactView.tsx",
                    lineNumber: 29,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm mt-8",
                    children: "I typically respond within 24-48 hours."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactView.tsx",
                    lineNumber: 29,
                    columnNumber: 300
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = ContactView;
var _c;
__turbopack_context__.k.register(_c, "ContactView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsListView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function ProjectsListView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9e529f63fbac9a7ba0f5883f81d00fb44e1aba642f49e418d63e5d27346843ed") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e529f63fbac9a7ba0f5883f81d00fb44e1aba642f49e418d63e5d27346843ed";
    }
    const { projects, onProjectClick, activeSlug } = t0;
    const getStatusLabel = _ProjectsListViewGetStatusLabel;
    let t1;
    if ($[1] !== activeSlug || $[2] !== onProjectClick || $[3] !== projects) {
        let t2;
        if ($[5] !== activeSlug || $[6] !== onProjectClick) {
            t2 = ({
                "ProjectsListView[projects.map()]": (project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "ProjectsListView[projects.map() > <div>.onClick]": ()=>onProjectClick(project.slug)
                        }["ProjectsListView[projects.map() > <div>.onClick]"],
                        className: "group cursor-pointer py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all",
                        style: {
                            animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl md:text-4xl lg:text-5xl font-light transition-colors duration-300 tracking-tight ${activeSlug === project.slug ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                    lineNumber: 33,
                                    columnNumber: 107
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getStatusLabel(project.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsListView.tsx",
                                            lineNumber: 33,
                                            columnNumber: 458
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsListView.tsx",
                                            lineNumber: 33,
                                            columnNumber: 503
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: project.techStack?.slice(0, 2).join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsListView.tsx",
                                            lineNumber: 33,
                                            columnNumber: 517
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                    lineNumber: 33,
                                    columnNumber: 322
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsListView.tsx",
                            lineNumber: 33,
                            columnNumber: 12
                        }, this)
                    }, project.id, false, {
                        fileName: "[project]/src/components/ProjectsListView.tsx",
                        lineNumber: 29,
                        columnNumber: 65
                    }, this)
            })["ProjectsListView[projects.map()]"];
            $[5] = activeSlug;
            $[6] = onProjectClick;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = projects.map(t2);
        $[1] = activeSlug;
        $[2] = onProjectClick;
        $[3] = projects;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col justify-center animate-fadeIn",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsListView.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
}
_c = ProjectsListView;
function _ProjectsListViewGetStatusLabel(status) {
    switch(status){
        case "beta-test":
            {
                return "Beta";
            }
        case "in-progress":
            {
                return "In Progress";
            }
        case "completed":
            {
                return "Live";
            }
        case "planned":
            {
                return "Planned";
            }
        default:
            {
                return status;
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectDetailView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function ProjectDetailView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "82b43684d13c2838880a8afeb63040c2087768f9c07f36e88fadfcc2c45cdf50") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82b43684d13c2838880a8afeb63040c2087768f9c07f36e88fadfcc2c45cdf50";
    }
    const { project, onBackClick } = t0;
    const getStatusLabel = _ProjectDetailViewGetStatusLabel;
    const getStatusStyles = _ProjectDetailViewGetStatusStyles;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M15 19l-7-7 7-7"
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDetailView.tsx",
                lineNumber: 26,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onBackClick) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBackClick,
            className: "text-gray-500 hover:text-white transition-colors text-sm mb-8 flex items-center gap-2 self-start",
            children: [
                t1,
                "All Projects"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[2] = onBackClick;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `text-sm mb-4 ${getStatusStyles(project.status)}`;
    let t4;
    if ($[4] !== project.status) {
        t4 = getStatusLabel(project.status);
        $[4] = project.status;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== project.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight",
            children: project.title
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = project.title;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = project.longDescription || project.description;
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-lg leading-relaxed mb-8",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== project.techStack) {
        t9 = project.techStack && project.techStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                    children: "Tech Stack"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 76,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3",
                    children: project.techStack.map({
                        "ProjectDetailView[project.techStack.map()]": (tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-sm",
                                children: [
                                    tech,
                                    index < project.techStack.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600 ml-3",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailView.tsx",
                                        lineNumber: 77,
                                        columnNumber: 173
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/ProjectDetailView.tsx",
                                lineNumber: 77,
                                columnNumber: 74
                            }, this)
                    }["ProjectDetailView[project.techStack.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 76,
                    columnNumber: 169
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 76,
            columnNumber: 63
        }, this);
        $[13] = project.techStack;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== project.features) {
        t10 = project.features && project.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                    children: "Features"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 86,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: project.features.map(_ProjectDetailViewProjectFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 86,
                    columnNumber: 166
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 86,
            columnNumber: 62
        }, this);
        $[15] = project.features;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== project.screenshots || $[18] !== project.title) {
        t11 = project.screenshots && project.screenshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                    children: "Screenshots"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 94,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: project.screenshots.map({
                        "ProjectDetailView[project.screenshots.map()]": (screenshot, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: screenshot,
                                    alt: `${project.title} screenshot ${index_1 + 1}`,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                                    lineNumber: 95,
                                    columnNumber: 227
                                }, this)
                            }, index_1, false, {
                                fileName: "[project]/src/components/ProjectDetailView.tsx",
                                lineNumber: 95,
                                columnNumber: 84
                            }, this)
                    }["ProjectDetailView[project.screenshots.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 94,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 94,
            columnNumber: 68
        }, this);
        $[17] = project.screenshots;
        $[18] = project.title;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== project.projectUrl) {
        t12 = project.projectUrl && project.projectUrl !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: project.projectUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mt-4",
            children: [
                "Visit Project",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetailView.tsx",
                        lineNumber: 105,
                        columnNumber: 323
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 105,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 105,
            columnNumber: 63
        }, this);
        $[20] = project.projectUrl;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t12 || $[25] !== t2 || $[26] !== t5 || $[27] !== t6 || $[28] !== t8 || $[29] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-full flex flex-col justify-start py-8 max-w-3xl animate-fadeIn",
            children: [
                t2,
                t5,
                t6,
                t8,
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t2;
        $[26] = t5;
        $[27] = t6;
        $[28] = t8;
        $[29] = t9;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    return t13;
}
_c = ProjectDetailView;
function _ProjectDetailViewProjectFeaturesMap(feature, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-gray-400 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDetailView.tsx",
                lineNumber: 129,
                columnNumber: 77
            }, this),
            feature
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/ProjectDetailView.tsx",
        lineNumber: 129,
        columnNumber: 10
    }, this);
}
function _ProjectDetailViewGetStatusStyles(status_0) {
    switch(status_0){
        case "completed":
            {
                return "text-green-400";
            }
        case "in-progress":
            {
                return "text-yellow-400";
            }
        case "planned":
            {
                return "text-blue-400";
            }
        case "beta-test":
            {
                return "text-purple-400";
            }
        default:
            {
                return "text-gray-400";
            }
    }
}
function _ProjectDetailViewGetStatusLabel(status) {
    switch(status){
        case "beta-test":
            {
                return "Beta";
            }
        case "in-progress":
            {
                return "In Progress";
            }
        case "completed":
            {
                return "Live";
            }
        case "planned":
            {
                return "Planned";
            }
        default:
            {
                return status;
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Projekte.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsListView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectDetailView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProjectDetailPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "0c47346e208fd0f339db86ca3c9bd15c0fb75b8757e940179a4059378bf872db") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c47346e208fd0f339db86ca3c9bd15c0fb75b8757e940179a4059378bf872db";
    }
    const { params } = t0;
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    let t1;
    if ($[1] !== slug) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"].find({
            "ProjectDetailPage[Projekte.find()]": (p)=>p.slug === slug
        }["ProjectDetailPage[Projekte.find()]"]);
        $[1] = slug;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const project = t1;
    if (!project) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen flex items-center justify-center text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Project not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 90
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] !== router) {
        t2 = ({
            "ProjectDetailPage[handleViewChange]": (view)=>{
                if (view === "about") {
                    router.push("/");
                } else {
                    if (view === "projects") {
                        setActiveView("projects");
                    } else {
                        setActiveView("contact");
                    }
                }
            }
        })["ProjectDetailPage[handleViewChange]"];
        $[4] = router;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleViewChange = t2;
    let t3;
    if ($[6] !== router || $[7] !== slug) {
        t3 = ({
            "ProjectDetailPage[handleProjectClick]": (projectSlug)=>{
                if (projectSlug === slug) {
                    setActiveView("details");
                } else {
                    router.push(`/projects/${projectSlug}`);
                }
            }
        })["ProjectDetailPage[handleProjectClick]"];
        $[6] = router;
        $[7] = slug;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleProjectClick = t3;
    let t4;
    if ($[9] !== router) {
        t4 = ({
            "ProjectDetailPage[handleLogoClick]": ()=>{
                router.push("/");
            }
        })["ProjectDetailPage[handleLogoClick]"];
        $[9] = router;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const handleLogoClick = t4;
    const t5 = activeView === "details" ? "projects" : activeView;
    let t6;
    if ($[11] !== handleLogoClick || $[12] !== handleViewChange || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeView: t5,
            onViewChange: handleViewChange,
            onLogoClick: handleLogoClick
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[11] = handleLogoClick;
        $[12] = handleViewChange;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== activeView || $[16] !== project) {
        t7 = activeView === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            project: project,
            onBackClick: {
                "ProjectDetailPage[<ProjectDetailView>.onBackClick]": ()=>setActiveView("projects")
            }["ProjectDetailPage[<ProjectDetailView>.onBackClick]"]
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 119,
            columnNumber: 38
        }, this);
        $[15] = activeView;
        $[16] = project;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== activeView || $[19] !== handleProjectClick || $[20] !== slug) {
        t8 = activeView === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"],
            onProjectClick: handleProjectClick,
            activeSlug: slug
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 130,
            columnNumber: 39
        }, this);
        $[18] = activeView;
        $[19] = handleProjectClick;
        $[20] = slug;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== activeView) {
        t9 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 140,
            columnNumber: 38
        }, this);
        $[22] = activeView;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== t7 || $[25] !== t8 || $[26] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-8 md:p-12 overflow-y-auto",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== t10 || $[29] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex text-white relative z-10",
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t6;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    return t11;
}
_s(ProjectDetailPage, "SM6JRNa9Xo6O5AScHdOcVVQJGZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e8c05245._.js.map