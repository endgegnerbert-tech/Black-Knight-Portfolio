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
        description: "A clean and interactive scoreboard application built to track player scores in real time with modern web technologies.",
        longDescription: "A responsive and minimalistic scoreboard app inspired by a Scrimba course project. Built to manage and display player scores dynamically, it demonstrates real-time updates, component-based architecture, and clean UI design. The project focuses on DOM manipulation, modular code structure, and an intuitive user experience for learning front-end fundamentals.",
        status: "completed",
        projectUrl: "/",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        features: [
            "Real-time score tracking",
            "Player name customization",
            "Reset and increment functions",
            "Responsive, minimal UI"
        ]
    }
];
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProjectDetailPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "2d790bc7ed4ff1e3ae5c924a225f5c218403bf0119757dfad50de5440ade907a") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d790bc7ed4ff1e3ae5c924a225f5c218403bf0119757dfad50de5440ade907a";
    }
    const { params } = t0;
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    let getStatusLabel;
    let handleProjectClick;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== activeView || $[2] !== router || $[3] !== slug) {
        t5 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t6;
            if ($[11] !== slug) {
                t6 = ({
                    "ProjectDetailPage[Projekte.find()]": (p)=>p.slug === slug
                })["ProjectDetailPage[Projekte.find()]"];
                $[11] = slug;
                $[12] = t6;
            } else {
                t6 = $[12];
            }
            const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"].find(t6);
            if (!project) {
                let t7;
                if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
                    t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "min-h-screen flex items-center justify-center text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Project not found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 53,
                            columnNumber: 94
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 16
                    }, this);
                    $[13] = t7;
                } else {
                    t7 = $[13];
                }
                t5 = t7;
                break bb0;
            }
            let t7;
            if ($[14] !== router || $[15] !== slug) {
                t7 = ({
                    "ProjectDetailPage[handleProjectClick]": (projectSlug)=>{
                        if (projectSlug === slug) {
                            setActiveView("details");
                        } else {
                            router.push(`/projects/${projectSlug}`);
                        }
                    }
                })["ProjectDetailPage[handleProjectClick]"];
                $[14] = router;
                $[15] = slug;
                $[16] = t7;
            } else {
                t7 = $[16];
            }
            handleProjectClick = t7;
            getStatusLabel = _ProjectDetailPageGetStatusLabel;
            const getStatusStyles = _ProjectDetailPageGetStatusStyles;
            t3 = "min-h-screen flex text-white relative z-10";
            let t8;
            if ($[17] !== router) {
                t8 = ({
                    "ProjectDetailPage[<button>.onClick]": ()=>router.push("/")
                })["ProjectDetailPage[<button>.onClick]"];
                $[17] = router;
                $[18] = t8;
            } else {
                t8 = $[18];
            }
            let t10;
            let t9;
            if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-4xl font-light tracking-tight mb-2",
                    children: "Black Knight"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 14
                }, this);
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm",
                    children: "Developer & Designer"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 15
                }, this);
                $[19] = t10;
                $[20] = t9;
            } else {
                t10 = $[19];
                t9 = $[20];
            }
            let t11;
            if ($[21] !== t8) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t8,
                    className: "text-left hover:opacity-70 transition-opacity",
                    children: [
                        t9,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 105,
                    columnNumber: 15
                }, this);
                $[21] = t8;
                $[22] = t11;
            } else {
                t11 = $[22];
            }
            let t12;
            if ($[23] !== router) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectDetailPage[<button>.onClick]": ()=>router.push("/")
                    }["ProjectDetailPage[<button>.onClick]"],
                    className: "block text-left w-full py-2 text-gray-500 hover:text-gray-300 transition-colors",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                }, this);
                $[23] = router;
                $[24] = t12;
            } else {
                t12 = $[24];
            }
            let t13;
            if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                t13 = ({
                    "ProjectDetailPage[<button>.onClick]": ()=>setActiveView("projects")
                })["ProjectDetailPage[<button>.onClick]"];
                $[25] = t13;
            } else {
                t13 = $[25];
            }
            const t14 = `block text-left w-full py-2 transition-colors ${activeView === "projects" || activeView === "details" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
            let t15;
            if ($[26] !== activeView) {
                t15 = (activeView === "projects" || activeView === "details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 133,
                    columnNumber: 74
                }, this);
                $[26] = activeView;
                $[27] = t15;
            } else {
                t15 = $[27];
            }
            let t16;
            if ($[28] !== t14 || $[29] !== t15) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t13,
                    className: t14,
                    children: [
                        t15,
                        "Projects"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 141,
                    columnNumber: 15
                }, this);
                $[28] = t14;
                $[29] = t15;
                $[30] = t16;
            } else {
                t16 = $[30];
            }
            let t17;
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = ({
                    "ProjectDetailPage[<button>.onClick]": ()=>setActiveView("contact")
                })["ProjectDetailPage[<button>.onClick]"];
                $[31] = t17;
            } else {
                t17 = $[31];
            }
            const t18 = `block text-left w-full py-2 transition-colors ${activeView === "contact" ? "text-white" : "text-gray-500 hover:text-gray-300"}`;
            let t19;
            if ($[32] !== activeView) {
                t19 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block w-2 h-2 bg-white rounded-full mr-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 160,
                    columnNumber: 43
                }, this);
                $[32] = activeView;
                $[33] = t19;
            } else {
                t19 = $[33];
            }
            let t20;
            if ($[34] !== t18 || $[35] !== t19) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t17,
                    className: t18,
                    children: [
                        t19,
                        "Contact"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 168,
                    columnNumber: 15
                }, this);
                $[34] = t18;
                $[35] = t19;
                $[36] = t20;
            } else {
                t20 = $[36];
            }
            let t21;
            if ($[37] !== t12 || $[38] !== t16 || $[39] !== t20) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mt-12 space-y-1",
                    children: [
                        t12,
                        t16,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                }, this);
                $[37] = t12;
                $[38] = t16;
                $[39] = t20;
                $[40] = t21;
            } else {
                t21 = $[40];
            }
            let t22;
            if ($[41] !== t11 || $[42] !== t21) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t11,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 187,
                    columnNumber: 15
                }, this);
                $[41] = t11;
                $[42] = t21;
                $[43] = t22;
            } else {
                t22 = $[43];
            }
            let t23;
            if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "© 2025 Black Knight"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 196,
                    columnNumber: 15
                }, this);
                $[44] = t23;
            } else {
                t23 = $[44];
            }
            let t24;
            if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-600 text-xs space-y-2",
                    children: [
                        t23,
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
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 95
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 203,
                            columnNumber: 69
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 203,
                    columnNumber: 15
                }, this);
                $[45] = t24;
            } else {
                t24 = $[45];
            }
            if ($[46] !== t22) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 md:w-80 shrink-0 p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50",
                    children: [
                        t22,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 209,
                    columnNumber: 14
                }, this);
                $[46] = t22;
                $[47] = t4;
            } else {
                t4 = $[47];
            }
            t1 = "flex-1 p-8 md:p-12 overflow-y-auto";
            t2 = activeView === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-full flex flex-col justify-start py-8 max-w-3xl animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ProjectDetailPage[<button>.onClick]": ()=>setActiveView("projects")
                        }["ProjectDetailPage[<button>.onClick]"],
                        className: "text-gray-500 hover:text-white transition-colors text-sm mb-8 flex items-center gap-2 self-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 239
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 160
                            }, this),
                            "All Projects"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 216,
                        columnNumber: 126
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm mb-4 ${getStatusStyles(project.status)}`,
                        children: getStatusLabel(project.status)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 357
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 464
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg leading-relaxed mb-8",
                        children: project.longDescription || project.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 563
                    }, this),
                    project.techStack && project.techStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                                children: "Tech Stack"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 749
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: project.techStack.map({
                                    "ProjectDetailPage[project.techStack.map()]": (tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: [
                                                tech,
                                                index < project.techStack.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600 ml-3",
                                                    children: "/"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 177
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 78
                                        }, this)
                                }["ProjectDetailPage[project.techStack.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 833
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 727
                    }, this),
                    project.features && project.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                                children: "Features"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: project.features.map(_ProjectDetailPageProjectFeaturesMap)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 231
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 220,
                        columnNumber: 127
                    }, this),
                    project.screenshots && project.screenshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-gray-500 text-sm uppercase tracking-widest mb-4",
                                children: "Screenshots"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 409
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: project.screenshots.map({
                                    "ProjectDetailPage[project.screenshots.map()]": (screenshot, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: screenshot,
                                                alt: `${project.title} screenshot ${index_1 + 1}`,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 231
                                            }, this)
                                        }, index_1, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 88
                                        }, this)
                                }["ProjectDetailPage[project.screenshots.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 494
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 220,
                        columnNumber: 387
                    }, this),
                    project.projectUrl && project.projectUrl !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 390
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 222,
                                columnNumber: 311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 130
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 216,
                columnNumber: 40
            }, this);
        }
        $[1] = activeView;
        $[2] = router;
        $[3] = slug;
        $[4] = getStatusLabel;
        $[5] = handleProjectClick;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        getStatusLabel = $[4];
        handleProjectClick = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    if (t5 !== Symbol.for("react.early_return_sentinel")) {
        return t5;
    }
    let t6;
    if ($[48] !== activeView || $[49] !== getStatusLabel || $[50] !== handleProjectClick || $[51] !== slug) {
        t6 = activeView === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col justify-center animate-fadeIn",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Projekte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projekte"].map({
                "ProjectDetailPage[Projekte.map()]": (p_0, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "ProjectDetailPage[Projekte.map() > <div>.onClick]": ()=>handleProjectClick(p_0.slug)
                        }["ProjectDetailPage[Projekte.map() > <div>.onClick]"],
                        className: `group cursor-pointer py-4 md:py-6 border-b border-gray-800/50 last:border-b-0 transition-all ${p_0.slug === slug ? "opacity-100" : ""}`,
                        style: {
                            animation: `fadeSlideIn 0.4s ease-out ${index_2 * 0.08}s both`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl md:text-4xl lg:text-5xl font-light transition-colors duration-300 tracking-tight ${p_0.slug === slug ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                    children: p_0.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 107
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-xs md:text-sm text-gray-600 group-hover:text-gray-400 transition-colors whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getStatusLabel(p_0.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 444
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 485
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: p_0.techStack?.slice(0, 2).join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 499
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 308
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 253,
                            columnNumber: 12
                        }, this)
                    }, p_0.id, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 249,
                        columnNumber: 64
                    }, this)
            }["ProjectDetailPage[Projekte.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 248,
            columnNumber: 39
        }, this);
        $[48] = activeView;
        $[49] = getStatusLabel;
        $[50] = handleProjectClick;
        $[51] = slug;
        $[52] = t6;
    } else {
        t6 = $[52];
    }
    let t7;
    if ($[53] !== activeView) {
        t7 = activeView === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col justify-center max-w-2xl animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-light mb-8",
                    children: "Get in Touch"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 265,
                    columnNumber: 116
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-8",
                    children: "If you want to get in touch, feel free to reach out via email."
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 265,
                    columnNumber: 198
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "mailto:einar@black-knight.dev",
                    className: "text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline underline-offset-4 mb-8",
                    children: "einar@black-knight.dev"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 265,
                    columnNumber: 298
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6 mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/endgegnerbert-tech",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-500 hover:text-white transition-colors",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 265,
                        columnNumber: 512
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 265,
                    columnNumber: 479
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm mt-8",
                    children: "I typically respond within 24-48 hours."
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 265,
                    columnNumber: 679
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 265,
            columnNumber: 38
        }, this);
        $[53] = activeView;
        $[54] = t7;
    } else {
        t7 = $[54];
    }
    let t8;
    if ($[55] !== t1 || $[56] !== t2 || $[57] !== t6 || $[58] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 273,
            columnNumber: 10
        }, this);
        $[55] = t1;
        $[56] = t2;
        $[57] = t6;
        $[58] = t7;
        $[59] = t8;
    } else {
        t8 = $[59];
    }
    let t9;
    if ($[60] !== t3 || $[61] !== t4 || $[62] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t3,
            children: [
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 284,
            columnNumber: 10
        }, this);
        $[60] = t3;
        $[61] = t4;
        $[62] = t8;
        $[63] = t9;
    } else {
        t9 = $[63];
    }
    return t9;
}
_s(ProjectDetailPage, "SM6JRNa9Xo6O5AScHdOcVVQJGZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectDetailPage;
function _ProjectDetailPageProjectFeaturesMap(feature, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-gray-400 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-600",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 295,
                columnNumber: 77
            }, this),
            feature
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 295,
        columnNumber: 10
    }, this);
}
function _ProjectDetailPageGetStatusStyles(status_0) {
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
function _ProjectDetailPageGetStatusLabel(status) {
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
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_5b0a6a5d._.js.map