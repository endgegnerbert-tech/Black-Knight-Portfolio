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
        category: "non-ai",
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
        category: "ai",
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
        category: "ai",
        title: "Cropclear App",
        description: "A web application designed to improve communication and transparency for companies in Africa, facilitating better business operations. The project is now in closed beta test.",
        longDescription: "Cropclear is an innovative platform built to enhance transparency and communication within agricultural supply chains in Africa. The application connects farmers, distributors, and retailers, providing real-time tracking and verification of agricultural products from farm to market.",
        status: "beta-test",
        projectUrl: "https://cropclear.vercel.app",
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
            "/screenshots/cropclear1.png",
            "/screenshots/cropclear2.png",
            "/screenshots/cropclear3.png",
            "/screenshots/cropclear4.png",
            "/screenshots/cropclear5.png",
            "/screenshots/cropclear6.png",
            "/screenshots/cropclear7.png",
            "/screenshots/cropclear8.png"
        ]
    },
    {
        id: 4,
        slug: "kontext-ai",
        category: "ai",
        title: "kontext-ai",
        description: "A context-aware AI application that focuses on understanding the user through natural language processing and personalized interactions.",
        longDescription: "An advanced AI-powered application that learns from user interactions to provide increasingly personalized and context-aware responses. The system utilizes cutting-edge natural language processing to understand user intent and deliver meaningful, helpful interactions.",
        status: "in-progress",
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
        category: "non-ai",
        title: "Scrimba Scoreboard",
        description: "A minimalist scoreboard app built to strengthen fundamental web development skills and demonstrate proficiency without AI assistance.",
        longDescription: "A lightweight and interactive scoreboard project inspired by a Scrimba course, developed entirely without AI assistance to deepen core front-end understanding. This project focuses on mastering JavaScript logic, DOM manipulation, and layout structure using only HTML, CSS, and JavaScript. It serves as a practical demonstration of solid technical fundamentals and independent coding ability beyond AI-driven development.",
        status: "completed",
        projectUrl: "https://score-board-smoky.vercel.app",
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
    },
    {
        id: 6,
        category: "non-ai",
        slug: "password-generator",
        title: "Password Generator",
        description: "A minimalist password generator app ,another solo Project in this series to show my progress.",
        longDescription: "Built a fully vanilla HTML/CSS/JavaScript password generator that creates strong, customizable passwords with real-time feedback. Interactive length slider (4-20 chars) features a visual strength meter (Red <8, Orange 8-12, Green 13+) – drag and watch the password grow instantly!",
        status: "completed",
        projectUrl: "https://password-generator-c7f706dit-einars-projects-eecd382a.vercel.app",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        features: [
            "Interactive length slider (4-50 chars) with live preview",
            "Visual strength meter (Red <8, Orange 8-12, Green 13+)",
            "Dual password generation (Ps1/Ps2) with synchronized length",
            "Custom range slider styling with classList transitions",
            "Global state management with `let length`"
        ],
        screenshots: [
            "/screenshots/passwordGenerator.png"
        ]
    },
    {
        id: 7,
        category: "non-ai",
        slug: "unit-converter",
        title: "Unit Converter",
        description: "A minimalist unit converter app for length, volume & mass – another solo project in this series to show my vanilla JS progress.",
        longDescription: "Built a fully vanilla HTML/CSS/JavaScript unit converter with live bidirectional conversions across Length (m/ft/cm/in), Volume (l/gal/ml/oz), Mass (kg/lb/g/oz). Real-time updates on input change, robust form validation blocks empty/zero/negative values with alerts, localStorage persists entire session state. Clean responsive tabbed interface switches categories instantly – drag, type, convert anywhere!",
        status: "completed",
        projectUrl: "https://unit-converter-chi-pied.vercel.app",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        features: [
            "Live bidirectional conversions across Length (m/ft/cm/in), Volume (l/gal/ml/oz), Mass (kg/lb/g/oz)",
            "Real-time updates on input change",
            "Robust form validation blocks empty/zero/negative values with alerts",
            "LocalStorage persists entire session state",
            "Clean responsive tabbed interface switches categories instantly"
        ],
        screenshots: [
            "/screenshots/unitConverter.png"
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "50d30ccf448d6cbd0a0e37f016b71832e20515b3a6c2b1b503a86c96b37193be") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50d30ccf448d6cbd0a0e37f016b71832e20515b3a6c2b1b503a86c96b37193be";
    }
    const { activeView, onViewChange, onLogoClick } = t0;
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onLogoClick || $[2] !== onViewChange) {
        t1 = ({
            "Sidebar[handleLogoClick]": ()=>{
                if (onLogoClick) {
                    onLogoClick();
                } else {
                    onViewChange("about");
                }
                setMobileMenuOpen(false);
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
    if ($[4] !== onViewChange) {
        t2 = ({
            "Sidebar[handleNavClick]": (view)=>{
                onViewChange(view);
                setMobileMenuOpen(false);
            }
        })["Sidebar[handleNavClick]"];
        $[4] = onViewChange;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleNavClick = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-light tracking-tight",
            children: "Black Knight"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== handleLogoClick) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogoClick,
            className: "text-left hover:opacity-70 transition-opacity",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = handleLogoClick;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== mobileMenuOpen) {
        t5 = ({
            "Sidebar[<button>.onClick]": ()=>setMobileMenuOpen(!mobileMenuOpen)
        })["Sidebar[<button>.onClick]"];
        $[9] = mobileMenuOpen;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== mobileMenuOpen) {
        t6 = mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 84,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 84,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 84,
                columnNumber: 290
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 84,
            columnNumber: 211
        }, this);
        $[11] = mobileMenuOpen;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: "p-2 text-gray-400 hover:text-white transition-colors",
            "aria-label": "Toggle menu",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t4 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 px-4 py-4 flex items-center justify-between",
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== activeView || $[20] !== handleNavClick || $[21] !== mobileMenuOpen) {
        t9 = mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden fixed inset-0 z-30 bg-black/95 pt-20 px-6 animate-fadeIn",
            onClick: {
                "Sidebar[<div>.onClick]": ()=>setMobileMenuOpen(false)
            }["Sidebar[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "space-y-4",
                    onClick: _SidebarNavOnClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Sidebar[<button>.onClick]": ()=>handleNavClick("about")
                            }["Sidebar[<button>.onClick]"],
                            className: `block text-left w-full py-3 text-2xl transition-colors ${activeView === "about" ? "text-white" : "text-gray-500"}`,
                            children: [
                                activeView === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-2 h-2 bg-white rounded-full mr-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 196
                                }, this),
                                "About"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 112,
                            columnNumber: 90
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Sidebar[<button>.onClick]": ()=>handleNavClick("projects")
                            }["Sidebar[<button>.onClick]"],
                            className: `block text-left w-full py-3 text-2xl transition-colors ${activeView === "projects" || activeView === "details" ? "text-white" : "text-gray-500"}`,
                            children: [
                                (activeView === "projects" || activeView === "details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-2 h-2 bg-white rounded-full mr-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 260
                                }, this),
                                "Projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 114,
                            columnNumber: 279
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Sidebar[<button>.onClick]": ()=>handleNavClick("contact")
                            }["Sidebar[<button>.onClick]"],
                            className: `block text-left w-full py-3 text-2xl transition-colors ${activeView === "contact" ? "text-white" : "text-gray-500"}`,
                            children: [
                                activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-2 h-2 bg-white rounded-full mr-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 200
                                }, this),
                                "Contact"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 116,
                            columnNumber: 346
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 112,
                    columnNumber: 34
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-8 left-6 text-gray-600 text-xs space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2025 Black Knight"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 365
                        }, this),
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
                                    lineNumber: 118,
                                    columnNumber: 417
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 291
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 110,
            columnNumber: 28
        }, this);
        $[19] = activeView;
        $[20] = handleNavClick;
        $[21] = mobileMenuOpen;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl lg:text-4xl font-light tracking-tight mb-2",
            children: "Black Knight"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm",
            children: "Developer & Designer"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
    } else {
        t10 = $[23];
        t11 = $[24];
    }
    let t12;
    if ($[25] !== handleLogoClick) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogoClick,
            className: "text-left hover:opacity-70 transition-opacity",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[25] = handleLogoClick;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== onViewChange) {
        t13 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("about")
        })["Sidebar[<button>.onClick]"];
        $[27] = onViewChange;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const t14 = `block text-left w-full py-2 transition-colors ${activeView === "about" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t15;
    if ($[29] !== activeView) {
        t15 = activeView === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 158,
            columnNumber: 37
        }, this);
        $[29] = activeView;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t13 || $[32] !== t14 || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            children: [
                t15,
                "About"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t14;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== onViewChange) {
        t17 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("projects")
        })["Sidebar[<button>.onClick]"];
        $[35] = onViewChange;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    const t18 = `block text-left w-full py-2 transition-colors ${activeView === "projects" || activeView === "details" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t19;
    if ($[37] !== activeView) {
        t19 = (activeView === "projects" || activeView === "details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 187,
            columnNumber: 70
        }, this);
        $[37] = activeView;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t17 || $[40] !== t18 || $[41] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: t18,
            children: [
                t19,
                "Projects"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t18;
        $[41] = t19;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== onViewChange) {
        t21 = ({
            "Sidebar[<button>.onClick]": ()=>onViewChange("contact")
        })["Sidebar[<button>.onClick]"];
        $[43] = onViewChange;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    const t22 = `block text-left w-full py-2 transition-colors ${activeView === "contact" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
    let t23;
    if ($[45] !== activeView) {
        t23 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 216,
            columnNumber: 39
        }, this);
        $[45] = activeView;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== t21 || $[48] !== t22 || $[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t21,
            className: t22,
            children: [
                t23,
                "Contact"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[47] = t21;
        $[48] = t22;
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t16 || $[52] !== t20 || $[53] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mt-12 space-y-1",
            children: [
                t16,
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = t16;
        $[52] = t20;
        $[53] = t24;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t12 || $[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[55] = t12;
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "© 2025 Black Knight"
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-600 text-xs space-y-2",
            children: [
                t27,
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
                            lineNumber: 260,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 260,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== t26) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex w-64 lg:w-80 shrink-0 p-8 lg:p-12 flex-col justify-between border-r border-gray-800/50",
            children: [
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[60] = t26;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] !== t29 || $[63] !== t8 || $[64] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t9,
                t29
            ]
        }, void 0, true);
        $[62] = t29;
        $[63] = t8;
        $[64] = t9;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    return t30;
}
_s(Sidebar, "d7gXMF6mPDUhHBNUSEb8mLK4AII=");
_c = Sidebar;
function _SidebarNavOnClick(e) {
    return e.stopPropagation();
}
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
    if ($[0] !== "1a94eac734e1c0d5efd0c5811d8d957f674e067914c2d1d814e5e1b04695e8cc") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a94eac734e1c0d5efd0c5811d8d957f674e067914c2d1d814e5e1b04695e8cc";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8",
            children: "Get in Touch"
        }, void 0, false, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm md:text-base mb-6 md:mb-8",
            children: "If you want to get in touch, feel free to reach out via email."
        }, void 0, false, {
            fileName: "[project]/src/components/ContactView.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:einar@black-knight.dev",
            className: "text-lg sm:text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline underline-offset-4 mb-6 md:mb-8 break-all",
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
            className: "min-h-full flex flex-col justify-start md:justify-center max-w-2xl animate-fadeIn pt-4 pb-8 md:py-0",
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
                        columnNumber: 172
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactView.tsx",
                    lineNumber: 29,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-xs md:text-sm mt-6 md:mt-8",
                    children: "I typically respond within 24-48 hours."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactView.tsx",
                    lineNumber: 29,
                    columnNumber: 339
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "c41a716ff994b033bb7cf64dba9415014eb15162761bdb08ebf2cfa07ec9836c") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c41a716ff994b033bb7cf64dba9415014eb15162761bdb08ebf2cfa07ec9836c";
    }
    const { projects, onProjectClick, activeSlug } = t0;
    const getStatusLabel = _ProjectsListViewGetStatusLabel;
    let t1;
    let t2;
    let t3;
    if ($[1] !== activeSlug || $[2] !== onProjectClick || $[3] !== projects) {
        const aiProjects = projects.filter(_ProjectsListViewProjectsFilter);
        const nonAiProjects = projects.filter(_ProjectsListViewProjectsFilter2);
        let t4;
        if ($[7] !== activeSlug || $[8] !== onProjectClick) {
            t4 = ({
                "ProjectsListView[renderProjects]": (projectList)=>projectList.map({
                        "ProjectsListView[renderProjects > projectList.map()]": (project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: {
                                    "ProjectsListView[renderProjects > projectList.map() > <div>.onClick]": ()=>onProjectClick(project.slug)
                                }["ProjectsListView[renderProjects > projectList.map() > <div>.onClick]"],
                                className: "group cursor-pointer py-3 sm:py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all",
                                style: {
                                    animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light transition-colors duration-300 tracking-tight ${activeSlug === project.slug ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsListView.tsx",
                                            lineNumber: 38,
                                            columnNumber: 109
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: getStatusLabel(project.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 474
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "/"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 519
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate max-w-[150px] md:max-w-none",
                                                    children: project.techStack?.slice(0, 2).join(", ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 533
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectsListView.tsx",
                                            lineNumber: 38,
                                            columnNumber: 347
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsListView.tsx",
                                    lineNumber: 38,
                                    columnNumber: 14
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/src/components/ProjectsListView.tsx",
                                lineNumber: 34,
                                columnNumber: 87
                            }, this)
                    }["ProjectsListView[renderProjects > projectList.map()]"])
            })["ProjectsListView[renderProjects]"];
            $[7] = activeSlug;
            $[8] = onProjectClick;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        const renderProjects = t4;
        t1 = "min-h-full flex flex-col justify-start md:justify-center animate-fadeIn pt-4 pb-8 md:py-0";
        t2 = aiProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm md:text-base text-gray-500 uppercase tracking-widest font-light mb-4",
                    children: "AI Projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsListView.tsx",
                    lineNumber: 49,
                    columnNumber: 40
                }, this),
                renderProjects(aiProjects)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsListView.tsx",
            lineNumber: 49,
            columnNumber: 35
        }, this);
        t3 = nonAiProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                aiProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm md:text-base text-gray-500 uppercase tracking-widest font-light mb-4 mt-8",
                    children: "Other Projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsListView.tsx",
                    lineNumber: 50,
                    columnNumber: 69
                }, this),
                renderProjects(nonAiProjects)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsListView.tsx",
            lineNumber: 50,
            columnNumber: 38
        }, this);
        $[1] = activeSlug;
        $[2] = onProjectClick;
        $[3] = projects;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsListView.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c = ProjectsListView;
function _ProjectsListViewProjectsFilter2(p_0) {
    return p_0.category === "non-ai";
}
function _ProjectsListViewProjectsFilter(p) {
    return p.category === "ai";
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProjectDetailView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "77db01881f9df301d5358649713baccdd9ab19592e97c6649624ae99ce388269") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77db01881f9df301d5358649713baccdd9ab19592e97c6649624ae99ce388269";
    }
    const { project, onBackClick } = t0;
    const [lightboxImage, setLightboxImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                lineNumber: 27,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 27,
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
            className: "text-gray-500 hover:text-white transition-colors text-sm mb-6 md:mb-8 flex items-center gap-2 self-start",
            children: [
                t1,
                "All Projects"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = onBackClick;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = `text-sm mb-3 md:mb-4 ${getStatusStyles(project.status)}`;
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
            lineNumber: 51,
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
            className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 md:mb-6 leading-tight",
            children: project.title
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 60,
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
            className: "text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== project.projectUrl) {
        t9 = project.projectUrl && project.projectUrl !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: project.projectUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6 md:mb-8 py-3 px-5 bg-white/10 hover:bg-white/20 rounded-lg w-fit",
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
                        lineNumber: 77,
                        columnNumber: 387
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 77,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 77,
            columnNumber: 62
        }, this);
        $[13] = project.projectUrl;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== project.techStack) {
        t10 = project.techStack && project.techStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 md:mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4",
                    children: "Tech Stack"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 85,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 md:gap-3",
                    children: project.techStack.map(_ProjectDetailViewProjectTechStackMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 85,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 85,
            columnNumber: 64
        }, this);
        $[15] = project.techStack;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== project.features) {
        t11 = project.features && project.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 md:mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4",
                    children: "Features"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 93,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: project.features.map(_ProjectDetailViewProjectFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 93,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 93,
            columnNumber: 62
        }, this);
        $[17] = project.features;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== project.screenshots || $[20] !== project.title) {
        t12 = project.screenshots && project.screenshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 md:mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4",
                    children: [
                        "Screenshots",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-xs ml-2 normal-case",
                            children: "(click to enlarge)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDetailView.tsx",
                            lineNumber: 101,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 101,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                    children: project.screenshots.map({
                        "ProjectDetailView[project.screenshots.map()]": (screenshot, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProjectDetailView[project.screenshots.map() > <button>.onClick]": ()=>setLightboxImage(screenshot)
                                }["ProjectDetailView[project.screenshots.map() > <button>.onClick]"],
                                className: "relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-gray-500 transition-all hover:scale-[1.02] cursor-zoom-in group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: screenshot,
                                        alt: `${project.title} screenshot ${index_1 + 1}`,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailView.tsx",
                                        lineNumber: 104,
                                        columnNumber: 242
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDetailView.tsx",
                                                lineNumber: 104,
                                                columnNumber: 619
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectDetailView.tsx",
                                            lineNumber: 104,
                                            columnNumber: 476
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailView.tsx",
                                        lineNumber: 104,
                                        columnNumber: 356
                                    }, this)
                                ]
                            }, index_1, true, {
                                fileName: "[project]/src/components/ProjectDetailView.tsx",
                                lineNumber: 102,
                                columnNumber: 84
                            }, this)
                    }["ProjectDetailView[project.screenshots.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 101,
                    columnNumber: 284
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 101,
            columnNumber: 68
        }, this);
        $[19] = project.screenshots;
        $[20] = project.title;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t12 || $[25] !== t2 || $[26] !== t5 || $[27] !== t6 || $[28] !== t8 || $[29] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-full flex flex-col justify-start py-4 md:py-8 max-w-3xl animate-fadeIn",
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
            lineNumber: 114,
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
    let t14;
    if ($[31] !== lightboxImage) {
        t14 = lightboxImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-fadeIn cursor-zoom-out",
            onClick: {
                "ProjectDetailView[<div>.onClick]": ()=>setLightboxImage(null)
            }["ProjectDetailView[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectDetailView[<button>.onClick]": ()=>setLightboxImage(null)
                    }["ProjectDetailView[<button>.onClick]"],
                    className: "absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors p-2",
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDetailView.tsx",
                            lineNumber: 133,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetailView.tsx",
                        lineNumber: 133,
                        columnNumber: 176
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 131,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: lightboxImage,
                    alt: "Screenshot fullscreen",
                    className: "max-w-full max-h-full object-contain rounded-lg",
                    onClick: _ProjectDetailViewImgOnClick
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 133,
                    columnNumber: 366
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "absolute bottom-4 md:bottom-8 text-gray-500 text-sm",
                    children: "Click anywhere or press ESC to close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDetailView.tsx",
                    lineNumber: 133,
                    columnNumber: 520
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDetailView.tsx",
            lineNumber: 129,
            columnNumber: 28
        }, this);
        $[31] = lightboxImage;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t13 || $[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t13,
                t14
            ]
        }, void 0, true);
        $[33] = t13;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    return t15;
}
_s(ProjectDetailView, "mZ3Od2kyxf9GLt3b8j9m9aUOKYU=");
_c = ProjectDetailView;
function _ProjectDetailViewImgOnClick(e) {
    return e.stopPropagation();
}
function _ProjectDetailViewProjectFeaturesMap(feature, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-gray-400 text-sm md:text-base flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDetailView.tsx",
                lineNumber: 154,
                columnNumber: 98
            }, this),
            feature
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/ProjectDetailView.tsx",
        lineNumber: 154,
        columnNumber: 10
    }, this);
}
function _ProjectDetailViewProjectTechStackMap(tech, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-gray-400 text-sm px-3 py-1 bg-white/5 rounded-md",
        children: tech
    }, index, false, {
        fileName: "[project]/src/components/ProjectDetailView.tsx",
        lineNumber: 157,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "e372ecec6eb7d86a625cd209cd4eb1b8678a78183a7c464cedcd15aaf92a5eb6") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e372ecec6eb7d86a625cd209cd4eb1b8678a78183a7c464cedcd15aaf92a5eb6";
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
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 md:hidden"
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== activeView || $[17] !== project) {
        t8 = activeView === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            project: project,
            onBackClick: {
                "ProjectDetailPage[<ProjectDetailView>.onBackClick]": ()=>setActiveView("projects")
            }["ProjectDetailPage[<ProjectDetailView>.onBackClick]"]
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 126,
            columnNumber: 38
        }, this);
        $[16] = activeView;
        $[17] = project;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== activeView || $[20] !== handleProjectClick || $[21] !== slug) {
        t9 = activeView === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"],
            onProjectClick: handleProjectClick,
            activeSlug: slug
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 137,
            columnNumber: 39
        }, this);
        $[19] = activeView;
        $[20] = handleProjectClick;
        $[21] = slug;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== activeView) {
        t10 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 147,
            columnNumber: 39
        }, this);
        $[23] = activeView;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10 || $[26] !== t8 || $[27] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto",
            children: [
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t8;
        $[27] = t9;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11 || $[30] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex flex-col md:flex-row text-white relative z-10",
            children: [
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t6;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    return t12;
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_a6d90b78._.js.map