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
"[project]/src/components/AboutView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function AboutView() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "fe9431b1c0769ab258799713e468c723b21b8d186dc81e8152009345915bfc40") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fe9431b1c0769ab258799713e468c723b21b8d186dc81e8152009345915bfc40";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col justify-center max-w-3xl animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight",
                    children: [
                        "Creative Developer",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/AboutView.tsx",
                            lineNumber: 14,
                            columnNumber: 185
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "17 Years Old"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutView.tsx",
                            lineNumber: 14,
                            columnNumber: 191
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-lg leading-relaxed mb-6",
                    children: "Passionate Full-Stack Developer from Starnberg, Germany, blending AI tools like Claude with hands-on coding to build innovative web apps that solve real problems."
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 247
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 leading-relaxed",
                    children: "I dive deep into projects every day—from sleek user interfaces to secure backends—while balancing my love for various sports like Tennis, Sailing, Judo. As a high school student juggling classes and part-time work, I turn ideas into live products through curiosity and relentless practice, always aiming for clean, scalable results that just work."
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 471
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutView.tsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = AboutView;
var _c;
__turbopack_context__.k.register(_c, "AboutView");
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
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Projekte.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsListView.tsx [app-client] (ecmascript)");
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
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "a44432d9b72d99d033982f3bcc216361dc1e8da47596f61e2dfe7826559ca83a") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a44432d9b72d99d033982f3bcc216361dc1e8da47596f61e2dfe7826559ca83a";
    }
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("about");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "Hero[handleProjectClick]": (slug)=>{
                router.push(`/projects/${slug}`);
            }
        })["Hero[handleProjectClick]"];
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleProjectClick = t0;
    let t1;
    if ($[3] !== activeView) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeView: activeView,
            onViewChange: setActiveView
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = activeView;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== activeView) {
        t2 = activeView === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 45,
            columnNumber: 36
        }, this);
        $[5] = activeView;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== activeView || $[8] !== handleProjectClick) {
        t3 = activeView === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"],
            onProjectClick: handleProjectClick
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 53,
            columnNumber: 39
        }, this);
        $[7] = activeView;
        $[8] = handleProjectClick;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== activeView) {
        t4 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 62,
            columnNumber: 38
        }, this);
        $[10] = activeView;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-8 md:p-12 overflow-y-auto",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t1 || $[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex text-white relative z-10",
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    return t6;
}
_s(Hero, "S7NZqaRrr3pTgcOACuEA36V89EU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThreeDBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeDBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThreeDBackground() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3ae61d370e11e549c6cffc8c25ecb857000a17adf4e4e24196feccfd0994bf3b") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ae61d370e11e549c6cffc8c25ecb857000a17adf4e4e24196feccfd0994bf3b";
    }
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThreeDBackground[useEffect()]": ()=>{
                if (!containerRef.current) {
                    return;
                }
                const container = containerRef.current;
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    alpha: true,
                    antialias: true
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](2, 2, 2);
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: 6333946,
                    wireframe: true
                });
                const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                scene.add(cube);
                camera.position.z = 5;
                const animate = {
                    "ThreeDBackground[useEffect() > animate]": ()=>{
                        requestAnimationFrame(animate);
                        cube.rotation.x = cube.rotation.x + 0.01;
                        cube.rotation.y = cube.rotation.y + 0.01;
                        renderer.render(scene, camera);
                    }
                }["ThreeDBackground[useEffect() > animate]"];
                animate();
                const handleResize = {
                    "ThreeDBackground[useEffect() > handleResize]": ()=>{
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                    }
                }["ThreeDBackground[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>{
                    window.removeEventListener("resize", handleResize);
                    if (container && renderer.domElement.parentNode === container) {
                        container.removeChild(renderer.domElement);
                    }
                    renderer.dispose();
                };
            }
        })["ThreeDBackground[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "fixed top-0 left-0 z-0 w-full h-full pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/ThreeDBackground.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(ThreeDBackground, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ThreeDBackground;
var _c;
__turbopack_context__.k.register(_c, "ThreeDBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_22cdf190._.js.map