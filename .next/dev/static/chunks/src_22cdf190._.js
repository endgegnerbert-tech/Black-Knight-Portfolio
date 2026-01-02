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
    if ($[0] !== "706e398c65caf9d889ae33e6ed56e042cb5248fbc48580fb3964b5bcc56fc8e1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "706e398c65caf9d889ae33e6ed56e042cb5248fbc48580fb3964b5bcc56fc8e1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-full flex flex-col justify-start md:justify-center max-w-3xl animate-fadeIn pt-4 pb-8 md:py-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight",
                    children: [
                        "Junior Developer",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/AboutView.tsx",
                            lineNumber: 14,
                            columnNumber: 242
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "17 Years Old"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutView.tsx",
                            lineNumber: 14,
                            columnNumber: 248
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6",
                    children: "Passionate Junior Developer from Munich, Germany, blending AI tools like Claude with hands-on coding to build innovative web apps that solve real problems."
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 304
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm md:text-base leading-relaxed",
                    children: "I dive deep into projects every day—from sleek user interfaces to secure backends—while balancing my love for various sports like Tennis, Sailing,. As a high school student juggling classes and part-time work, I turn ideas into live products through curiosity and relentless practice, always aiming for clean, scalable results that just work."
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutView.tsx",
                    lineNumber: 14,
                    columnNumber: 542
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "4c9804b12927198dce68e4272ca8f80a4e06379f687eb64be44aa25f9448e76f") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c9804b12927198dce68e4272ca8f80a4e06379f687eb64be44aa25f9448e76f";
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
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 md:hidden"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== activeView) {
        t3 = activeView === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 52,
            columnNumber: 36
        }, this);
        $[6] = activeView;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== activeView || $[9] !== handleProjectClick) {
        t4 = activeView === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"],
            onProjectClick: handleProjectClick
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 60,
            columnNumber: 39
        }, this);
        $[8] = activeView;
        $[9] = handleProjectClick;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== activeView) {
        t5 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 69,
            columnNumber: 38
        }, this);
        $[11] = activeView;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== t1 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex flex-col md:flex-row text-white relative z-10",
            children: [
                t1,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[17] = t1;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
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