export type ProjectStatus = "featured" | "additional";

export type Project = {
  slug: string;
  systemKey: string;
  title: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  preview: {
    label: string;
    note: string;
    metrics: string[];
    flow: string[];
  };
  screenshots?: {
    src: string;
    label: string;
    alt: string;
  }[];
  businessProblem: string;
  solution: string;
  features: string[];
  techStack: string[];
  impact: string[];
  architecture: string[];
  deliveryHighlights: string[];
  score: number;
};

export const projects: Project[] = [
  {
    slug: "cmb-manufacturing-execution",
    systemKey: "cmb",
    title: "CMB Manufacturing Execution And Traceability System",
    status: "featured",
    category: "MES-like production workflow",
    summary:
      "A Laravel-based internal manufacturing system for CMB work orders, production steps, QC visibility, traceability, urgent deliveries, machine monitoring, and production schedule sync.",
    preview: {
      label: "Workflow board preview",
      note: "Dashboard-style preview showing the production workflow, quality checkpoints, traceability, and schedule coordination layer.",
      metrics: ["Work orders", "QC checks", "Traceability", "Schedule sync"],
      flow: ["Plan", "Execute", "QC verify", "Trace"]
    },
    screenshots: [
      {
        src: "/screenshots/cmb-spk-wo-monitoring.png",
        label: "SPK WO Monitoring",
        alt: "CMB SPK work order monitoring page with production order status and filters"
      },
      {
        src: "/screenshots/cmb-spk-detail.png",
        label: "SPK Detail",
        alt: "CMB SPK detail page with work order and production step information"
      },
      {
        src: "/screenshots/cmb-schedule.png",
        label: "Production Schedule",
        alt: "CMB production schedule page with planned work order rows"
      },
      {
        src: "/screenshots/cmb-output-tracking.png",
        label: "Output Tracking",
        alt: "CMB output tracking page for production quantity and process follow-up"
      },
      {
        src: "/screenshots/cmb-machine-monitoring-real.png",
        label: "Machine Monitoring",
        alt: "CMB machine monitoring board showing crystallizer and extruder machine status cards"
      }
    ],
    businessProblem:
      "CMB production needs reliable visibility across work orders, process steps, lot movement, QC checks, and urgent delivery activity. Without a centralized system, teams depend on scattered updates and manual follow-up.",
    solution:
      "Built a MES-like internal application that connects work order execution, QC verification, traceability pages, monitoring dashboards, Excel exports, and Google Sheet synchronization into one operational workflow.",
    features: [
      "Work order lifecycle with step play, close, correction, cancellation, and output quantity updates",
      "Traceability views for lot, lead time, monthly detail, output tracking, and WIP extrusion",
      "QC dashboard, QC history, sample result updates, and verification workflow",
      "Machine and mixer monitoring pages with production-oriented views",
      "Production schedule and plan-actual synchronization through console commands",
      "Urgent delivery tracking and operational follow-up",
      "Excel exports for monitoring, work orders, QC dashboard details, timbangan, and closed data"
    ],
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "Tailwind CSS 4",
      "Vite 7",
      "Laravel Sanctum",
      "Maatwebsite Excel",
      "Yajra DataTables",
      "Google API"
    ],
    impact: [
      "Centralized CMB production execution and QC visibility",
      "Improved traceability across work orders, lots, process steps, and sample checks",
      "Reduced manual tracking through dashboards, exports, and sync commands",
      "Supported faster operational follow-up for urgent delivery and WIP conditions"
    ],
    architecture: [
      "MES-like domain structure covering work orders, process steps, pauses, production schedules, QC samples, machine status, and delivery follow-up",
      "Traceability layer connects SPK, lots, process logs, output tracking, WIP extrusion, lead time, and monthly production detail",
      "Google Sheet synchronization supports production schedule and lot data coordination",
      "Export modules separate monitoring, QC detail, stage detail, weighing, and work order reporting"
    ],
    deliveryHighlights: [
      "Work order execution flow supports step start, close, correction, cancellation, output updates, and QC result updates",
      "Operational dashboards cover traceability, tracking, QC status, machine monitoring, mixer monitoring, schedules, and urgent deliveries",
      "Built with Laravel 12, Google API integration, Sanctum, Excel exports, and DataTables for operational data handling"
    ],
    score: 96
  },
  {
    slug: "oee-production-monitoring",
    systemKey: "oee",
    title: "OEE Production Monitoring System",
    status: "featured",
    category: "Production monitoring",
    summary:
      "A production performance system for OEE reporting, machine target management, approval workflow, downtime analysis, KPI exports, and recalculation commands.",
    preview: {
      label: "OEE analytics preview",
      note: "Analytics preview showing availability, performance, quality, downtime, approvals, and exportable production review workflows.",
      metrics: ["Availability", "Performance", "Quality", "Downtime"],
      flow: ["Input", "Review", "Approve", "Analyze"]
    },
    screenshots: [
      {
        src: "/screenshots/oee-dashboard-real.png",
        label: "OEE Dashboard",
        alt: "OEE dashboard with production monitoring cards, filters, and OEE summary"
      },
      {
        src: "/screenshots/oee-dashboard-grafik.png",
        label: "OEE Dashboard Graph",
        alt: "OEE dashboard graph page showing performance trend and machine data visualization"
      },
      {
        src: "/screenshots/oee-performance-analysis.png",
        label: "Performance Analysis",
        alt: "OEE performance analysis page with production KPI charts and filters"
      }
    ],
    businessProblem:
      "Production leaders need trustworthy OEE visibility, downtime insight, and approval discipline without manually reconciling spreadsheets and inconsistent report data.",
    solution:
      "Built an OEE reporting platform with operator input, leader review, monitoring board, availability analysis, performance-quality analysis, top downtime views, machine targets, and recalculation utilities.",
    features: [
      "OEE report creation, draft continuation, pending approval, rejected revision, and approval status tracking",
      "Monitoring board and machine-level report export",
      "Availability, performance-quality, and top downtime analysis pages",
      "Machine target import and master data management for machines, products, and operators",
      "SPK search, process-step lookup, lab status check, premix downtime check, and target lookup endpoints",
      "Console commands for OEE recalculation, data cleanup, rejected report updates, and product/schedule sync"
    ],
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "Tailwind CSS 4",
      "Vite 7",
      "Laravel Sanctum",
      "Maatwebsite Excel",
      "Yajra DataTables",
      "Google API"
    ],
    impact: [
      "Improved visibility into availability, performance, quality, and downtime",
      "Reduced reporting inconsistency through recalculation and cleanup commands",
      "Supported faster review cycles with approval, rejection, revision, and pending-count workflows",
      "Created exportable production analytics for machine and downtime reviews"
    ],
    architecture: [
      "OEE domain model connects machine targets, production reports, products, operators, work orders, downtime, weighing, reject/loss material, and maintenance notes",
      "Approval and revision workflow supports draft continuation, pending review, rejection handling, and status tracking",
      "Recalculation utilities keep KPI values consistent across changing production data",
      "Export layer supports machine OEE summaries, machine detail, top downtime analysis, and monitoring board data"
    ],
    deliveryHighlights: [
      "OEE workflow covers report creation, monitoring board review, pending approvals, rejected revisions, and analysis pages",
      "Automation supports OEE recalculation, data cleanup, production schedule sync, and product synchronization",
      "Reporting flow includes monitoring, approval, revision, analysis, import, and export operations"
    ],
    score: 95
  },
  {
    slug: "k-maint-maintenance-workflow",
    systemKey: "k-maint",
    title: "K-Maint Maintenance Workflow System",
    status: "featured",
    category: "Maintenance operations",
    summary:
      "A maintenance management platform for tickets, preventive maintenance, assets, machine parts, technician activity, attendance, notifications, reports, and exports.",
    preview: {
      label: "Maintenance command center preview",
      note: "Command-center preview for ticket follow-up, preventive maintenance, technician activity, notifications, and reporting.",
      metrics: ["Tickets", "PM checks", "Technicians", "Assets"],
      flow: ["Report", "Assign", "Execute", "Close"]
    },
    screenshots: [
      {
        src: "/screenshots/kmaint-ticket-monitoring-real.png",
        label: "Ticket Monitoring",
        alt: "K-Maint ticket monitoring dashboard with maintenance ticket list and status columns"
      },
      {
        src: "/screenshots/kmaint-technician-utility-monitoring.png",
        label: "Technician Monitoring",
        alt: "K-Maint technician utility monitoring page showing team activity and workload"
      },
      {
        src: "/screenshots/kmaint-create-ticket.png",
        label: "Create Ticket",
        alt: "K-Maint create ticket form for reporting maintenance issues"
      },
      {
        src: "/screenshots/kmaint-preventive-maintenance.png",
        label: "Preventive Maintenance",
        alt: "K-Maint preventive maintenance page with checklist and schedule controls"
      }
    ],
    businessProblem:
      "Maintenance work needs structured ticket follow-up, PM execution discipline, asset visibility, technician accountability, and reliable reporting for supervisors.",
    solution:
      "Built a maintenance workflow system that manages ticket states, preventive maintenance schedules, checklist execution, technician activity, attachments, supervisor review, notifications, and Excel reporting.",
    features: [
      "Maintenance ticket lifecycle with start, finish, close, pending, resume, reject, notes, and status history",
      "After-photo upload and supervisor review workflow",
      "Preventive maintenance schedules, checklist templates, PM execution, verification, and approval",
      "Asset, machine part, PIC, vendor, category, and area management",
      "Technician dashboard, team monitoring, activity start/stop, attendance, and export",
      "Notification center and unread-count endpoint",
      "Excel exports for tickets, PM, and technician activity"
    ],
    techStack: [
      "Laravel 10",
      "PHP 8.1",
      "Vite 5",
      "Laravel Sanctum",
      "Maatwebsite Excel",
      "Yajra DataTables",
      "Blade"
    ],
    impact: [
      "Centralized maintenance requests and PM execution",
      "Improved technician accountability through activity and attendance tracking",
      "Better maintenance follow-up with notes, status history, photos, and supervisor action",
      "Reduced informal maintenance tracking through dashboards and reports"
    ],
    architecture: [
      "Maintenance domain model connects tickets, ticket notes, status history, assets, machine parts, PM schedules, PM checks, checklist items, technicians, attendance, vendors, and PIC ownership",
      "Ticket lifecycle separates reporting, execution, pending/resume handling, supervisor review, and closure",
      "Preventive maintenance workflow supports schedule generation, checklist execution, verification, and approval",
      "Monitoring and export layer supports ticket reports, PM reports, technician activity, and scheduling"
    ],
    deliveryHighlights: [
      "Ticket workflow supports monitoring, start, finish, close, after-photo upload, pending, resume, and supervisor review",
      "PM workflow supports verification, approval, schedule generation, checklist execution, and monitoring exports",
      "Built with Laravel 10, Sanctum, Excel exports, DataTables, and role-based maintenance screens"
    ],
    score: 93
  },
  {
    slug: "lab-dispatch-qc-queue",
    systemKey: "lab-dispatch",
    title: "Lab Dispatch And QC Queue System",
    status: "featured",
    category: "QC lab workflow",
    summary:
      "A QC laboratory dispatch system for sample queues, operator assignment, PPIC priorities, verifier approval, raw material sample workflows, monitoring, and exports.",
    preview: {
      label: "Lab queue preview",
      note: "Queue preview showing sample dispatch, operator workload, QC dashboard actions, PPIC priorities, verifier approval, and raw material workflow.",
      metrics: ["Samples", "Operators", "Priority", "Verifier"],
      flow: ["Create", "Assign", "Test", "Verify"]
    },
    screenshots: [
      {
        src: "/screenshots/lab-dispatch-qc-dashboard-real.png",
        label: "QC Dashboard",
        alt: "Lab Dispatch QC dashboard with queue metrics and sample status tracking"
      },
      {
        src: "/screenshots/lab-dispatch-sample-report.png",
        label: "Sample Report",
        alt: "Lab Dispatch sample report page with QC sample records and filters"
      },
      {
        src: "/screenshots/lab-dispatch-create-sample-qc.png",
        label: "Create QC Sample",
        alt: "Lab Dispatch create QC sample form for registering sample requests"
      },
      {
        src: "/screenshots/lab-dispatch-input-sample-qc.png",
        label: "Input QC Sample",
        alt: "Lab Dispatch input QC sample page for recording test data"
      },
      {
        src: "/screenshots/lab-dispatch-qc-sample.png",
        label: "QC Sample",
        alt: "Lab Dispatch QC sample page showing sample details and lab workflow"
      }
    ],
    businessProblem:
      "Lab and QC teams need a shared queue to coordinate samples, assign work, manage priorities, approve results, and track raw material evaluation without fragmented communication.",
    solution:
      "Built a role-based dispatch application with board view, operator kiosk, QC dashboard, queue management, PPIC dashboard, verifier workflow, raw material approval checklist, and sample reporting.",
    features: [
      "Public board and sample creation workflow",
      "Operator kiosk and task completion flow",
      "Queue management with sample updates and deletion",
      "QC dashboard with assign, complete, reassign, pause, resume, downtime, and time history actions",
      "PPIC priority dashboard and verifier approval/rejection workflow",
      "Raw material sample management with new raw material checklist, approval, import, and QC sample generation",
      "Exports for lab monitoring, QC sample source, and new raw material templates"
    ],
    techStack: [
      "Laravel 12",
      "PHP 8.2",
      "Tailwind CSS",
      "Alpine.js",
      "Laravel Breeze",
      "Laravel Sanctum",
      "Maatwebsite Excel"
    ],
    impact: [
      "Centralized QC sample queue and operator workload visibility",
      "Improved handoff between PPIC, QC, verifier, and operators",
      "Better raw material approval traceability with checklist and sample generation",
      "Faster operational coordination through board, dashboards, and role-based flows"
    ],
    architecture: [
      "Lab dispatch domain connects samples, QC samples, operators, work logs, time sessions, daily priorities, raw material requests, approval checklists, and import history",
      "Role-based workflow separates public board, operator kiosk, QC dashboard, PPIC priority view, verifier review, and raw material approval",
      "Service layer enforces raw material checklist completion, approval/rejection rules, and QC sample generation",
      "API endpoints support queue updates and lab result handoff for responsive monitoring screens"
    ],
    deliveryHighlights: [
      "Queue workflow covers sample creation, operator task completion, QC assignment, reassignment, pause/resume, downtime, and time history",
      "Coordination screens support board monitoring, operator kiosk, QC dashboard, PPIC priorities, verifier approval, and raw material sample review",
      "Automation handles pending sample dispatch and cleanup of stale work sessions"
    ],
    score: 92
  },
  {
    slug: "production-daily-reporting",
    systemKey: "pdr",
    title: "Production Daily Reporting System",
    status: "featured",
    category: "Production reporting",
    summary:
      "A daily production reporting system covering mixing, extrusion, lab, packing, powder, shift schedules, NOC input/reporting, verification, and weekly/monthly reports.",
    preview: {
      label: "Daily reporting preview",
      note: "Reporting preview showing daily forms, shift data, NOC workflow, verification, dashboards, and weekly/monthly summaries.",
      metrics: ["Daily forms", "Shift data", "NOC", "Reports"],
      flow: ["Capture", "Verify", "Summarize", "Export"]
    },
    screenshots: [
      {
        src: "/screenshots/pdr-extrusion-report.png",
        label: "Extrusion Report",
        alt: "Production Daily Reporting extrusion report page with daily production records"
      },
      {
        src: "/screenshots/pdr-mixing-report.png",
        label: "Mixing Report",
        alt: "Production Daily Reporting mixing report page with shift and output data"
      }
    ],
    businessProblem:
      "Manufacturing teams need consistent daily reporting across production departments so output, lab checks, NOC data, shift work, and operational summaries can be reviewed without manual consolidation.",
    solution:
      "Built a structured reporting platform with department-specific daily forms, shift selection, master targets, verification flows, NOC reports, dashboards, and Chart.js-based reporting views.",
    features: [
      "Daily report master workflow across mixing, extrusion, lab, packing, and powder",
      "Shift selection and shift schedule management",
      "Daily extrusion OEE data endpoint and production detail capture",
      "NOC input, verified records, date-based reports, summary reports, and export",
      "Daily report verification and verify-all flow",
      "Weekly, monthly, master, and powder reporting views",
      "Work order step detail panel and production schedule models"
    ],
    techStack: [
      "Laravel 10",
      "PHP 8.1",
      "AdminLTE",
      "Chart.js",
      "Vite 5",
      "Laravel Sanctum",
      "Blade"
    ],
    impact: [
      "Standardized daily production reporting across multiple departments",
      "Improved shift-level visibility and verification discipline",
      "Reduced manual consolidation for weekly and monthly operational reviews",
      "Improved visibility into NOC and production detail records"
    ],
    architecture: [
      "Reporting domain connects daily report masters, department-level details, shift schedules, master targets, lab samples, work orders, process steps, NOC records, and production history",
      "Department workflows support mixing, extrusion, lab, packing, powder, shift selection, verification, and summary reporting",
      "NOC workflow separates input, verified records, date-based reports, summary views, and export",
      "Dashboard layer uses Chart.js-style visual reporting for production review"
    ],
    deliveryHighlights: [
      "Daily reporting workflow covers mixing, extrusion, lab, packing, powder, NOC input, NOC verification, weekly reports, and monthly reports",
      "Operational review flow includes daily report verification, extrusion OEE data, NOC summaries, export, and work order step details",
      "Built with Laravel 10, AdminLTE, Sanctum, Vite, and Chart.js for production reporting screens"
    ],
    score: 91
  },
  {
    slug: "autonomous-maintenance-daily-check",
    systemKey: "autonomous-maintenance",
    title: "Autonomous Maintenance And Daily Check System",
    status: "additional",
    category: "Autonomous maintenance",
    summary:
      "A Laravel 12 system for daily machine checks, maintenance tickets, inspections, preparation templates, approvals, photo documentation, PDF reports, and Excel exports.",
    preview: {
      label: "Daily check preview",
      note: "Daily-check preview showing machine inspections, maintenance handoff, approvals, photos, PDF reports, and Excel exports.",
      metrics: ["Checks", "Photos", "Approvals", "Reports"],
      flow: ["Inspect", "Document", "Approve", "Report"]
    },
    screenshots: [
      {
        src: "/screenshots/am-dashboard-real.png",
        label: "AM Dashboard",
        alt: "Autonomous Maintenance dashboard with daily check summary and activity status"
      },
      {
        src: "/screenshots/am-checklist.png",
        label: "Daily Checklist",
        alt: "Autonomous Maintenance daily checklist page with machine inspection items"
      },
      {
        src: "/screenshots/am-form-history.png",
        label: "Form History",
        alt: "Autonomous Maintenance form history page with completed inspection records"
      }
    ],
    businessProblem:
      "Daily machine checks and AM activities need consistent documentation, approval flow, maintenance handoff, and reporting so issues do not stay hidden in paper records.",
    solution:
      "Digitized daily checks, inspection flows, maintenance tickets, preparation workflow, manager approval, verification photos, and report generation.",
    features: [
      "Daily checks and daily check items with image and verification image fields",
      "Maintenance ticket monitoring with status and verification photos",
      "Inspection and leader approval views",
      "Preparation templates, preparation details, product, and lot tracking",
      "Activity logs, notifications, reports, PDF output, and Excel exports"
    ],
    techStack: ["Laravel 12", "PHP 8.2", "Tailwind CSS 4", "DomPDF", "Maatwebsite Excel", "Yajra DataTables"],
    impact: [
      "Improved machine check documentation and approval discipline",
      "Better visibility for autonomous maintenance follow-up",
      "Reduced paper-based inspection and preparation tracking"
    ],
    architecture: [
      "Machine-check domain connects machines, daily check items, maintenance tickets, inspections, preparation templates, activity logs, notifications, product lots, and manager approval",
      "Preparation workflow supports product and lot tracking, verification photos, manager rating, PDF output, and operational reports"
    ],
    deliveryHighlights: [
      "Daily check workflow covers inspection items, checklist images, verification images, approval steps, and maintenance ticket handoff",
      "Preparation workflow connects templates, preparation details, product and lot tracking, reports, and PDF output",
      "Built with Laravel 12, DomPDF, Excel exports, and DataTables for inspection and reporting workflows"
    ],
    score: 88
  },
  {
    slug: "color-change-cleaning-workflow",
    systemKey: "color-change",
    title: "Color Change Cleaning Workflow System",
    status: "additional",
    category: "Shop-floor cleaning workflow",
    summary:
      "A Laravel 10 workflow system for machine color-change cleaning orders, operator form execution, photo documentation, manager verification, and quantity usage reports.",
    preview: {
      label: "Cleaning workflow preview",
      note: "Cleaning workflow preview showing color-change orders, operator forms, required photos, verification, and quantity usage reporting.",
      metrics: ["Orders", "Photos", "Verification", "Usage"],
      flow: ["Order", "Clean", "Verify", "Report"]
    },
    screenshots: [
      {
        src: "/screenshots/gw-create-order.png",
        label: "Create Color Change Order",
        alt: "Color Change Cleaning Workflow create order page for machine color-change instructions"
      },
      {
        src: "/screenshots/gw-execution.png",
        label: "Color Change Execution",
        alt: "Color Change Cleaning Workflow execution page for operator cleaning activity"
      }
    ],
    businessProblem:
      "Color-change cleaning needs standardized templates, operator execution documentation, material quantity tracking, and manager verification to prevent inconsistent handoffs.",
    solution:
      "Built a role-based cleaning workflow with perintah ganti warna, cleaning templates, form bongkar, list cleaning, photo uploads, quantity rules, and verification status.",
    features: [
      "Admin color-change orders and cleaning template management",
      "Operator form bongkar by machine with photo upload and completion flow",
      "Manager verification for completed forms",
      "Material quantity usage rules and reporting",
      "Machine, product, and operator lookup endpoints"
    ],
    techStack: ["Laravel 10", "PHP 8.1", "Bootstrap 5", "Sass", "Vite 5", "Intervention Image", "Laravel UI"],
    impact: [
      "Standardized cleaning workflow for machine color changes",
      "Improved documentation quality through photo-based operator submissions",
      "Better verification control for cleaning completion"
    ],
    architecture: [
      "Cleaning workflow domain connects color-change orders, cleaning templates, form execution, cleaning item lists, machines, products, operators, and usage reporting",
      "Verification flow separates admin setup, operator execution, required photo documentation, manager review, and quantity usage review"
    ],
    deliveryHighlights: [
      "Operator workflow covers form bongkar execution, machine selection, required photos, completion flow, and manager verification",
      "Admin workflow covers color-change orders, cleaning templates, cleaning item lists, material quantity rules, and usage reports",
      "Built with Laravel 10, Bootstrap, image handling, and role-based screens for shop-floor cleaning control"
    ],
    score: 84
  },
  {
    slug: "mixing-method-production-input",
    systemKey: "mixing",
    title: "Mixing Method And Production Input System",
    status: "additional",
    category: "Mixing process control",
    summary:
      "A Laravel 12 system for mixing methods, operator mixing views, SPK and lot input history, resin classification, PDF method files, and Excel history exports.",
    preview: {
      label: "Mixing method preview",
      note: "Mixing method preview showing method search, operator input, SPK/lot history, PDF references, and Excel exports.",
      metrics: ["Methods", "SPK", "Lots", "PDF refs"],
      flow: ["Search", "Input", "Review", "Export"]
    },
    screenshots: [
      {
        src: "/screenshots/mixing-check-method.png",
        label: "Check Method",
        alt: "Mixing Method system check method page with SPK and method lookup fields"
      },
      {
        src: "/screenshots/mixing-method-report.png",
        label: "Method Report",
        alt: "Mixing Method system report page with method history records"
      }
    ],
    businessProblem:
      "Mixing operations need controlled method references, SPK/lot history, material/resin classification, and searchable input records to reduce inconsistent production documentation.",
    solution:
      "Built a mixing workflow system with method management, standard/correction/special method views, operator pages, input history, PDF method handling, and Excel exports.",
    features: [
      "Mixing method management with standard, correction, special, check-method, and result views",
      "Operator mixing pages for method access and input history",
      "SPK, product name, lot number, method number, resin, remark, signed-by, and PDF filename tracking",
      "Bahan, powder, granul, and method PDF views",
      "All history service and Excel exports for mixing data/history"
    ],
    techStack: ["Laravel 12", "PHP 8.2", "Tailwind CSS 4", "Vite 7", "Maatwebsite Excel", "Yajra DataTables"],
    impact: [
      "Improved consistency of mixing method access",
      "Better SPK and lot traceability for production inputs",
      "Reduced manual lookup through searchable history and PDF references"
    ],
    architecture: [
      "Mixing domain connects input records, method masters, special methods, mixing parameters, search history, materials, granules, powder, products, and users",
      "Operator workflow separates method access, SPK/lot input history, PDF references, and production input review",
      "Reporting service combines mixing input and search history data for exportable method history"
    ],
    deliveryHighlights: [
      "Mixing workflow covers method search, input history, all-history review, operator pages, material PDF views, and granule PDF views",
      "Production input records track SPK, product, lot, method number, resin, remarks, signatures, PDF files, and schedules",
      "Built with Laravel 12, Excel exports, and DataTables for searchable production method records"
    ],
    score: 82
  }
];

export const featuredProjects = projects.filter((project) => project.status === "featured");
export const additionalProjects = projects.filter((project) => project.status === "additional");

export const skills = [
  {
    name: "Laravel / PHP",
    context: "Built internal operations applications across Laravel 10 and Laravel 12, with role-based workflows, dashboards, exports, and integrations."
  },
  {
    name: "Manufacturing Systems",
    context: "Implemented in CMB production execution, OEE monitoring, PDR daily reporting, color-change workflow, and mixing method control."
  },
  {
    name: "MySQL Data Modeling",
    context: "Designed relational structures for work orders, OEE reports, PM checks, tickets, samples, daily reports, inspections, preparations, SPK, lots, and production schedules."
  },
  {
    name: "Dashboard Analytics",
    context: "Delivered monitoring and analysis views for OEE, daily production reports, CMB QC/machine monitoring, K-Maint monitoring, and Lab QC queues."
  },
  {
    name: "Workflow Digitalization",
    context: "Built approval, verification, dispatch, ticket, PM, daily reporting, cleaning, preparation, and production execution workflows."
  },
  {
    name: "Traceability And Lot Tracking",
    context: "Implemented traceability flows across CMB lead time/output tracking, OEE SPK lookup, Mixing SPK/lot history, and PDR lot/product reporting."
  },
  {
    name: "Reporting And Export",
    context: "Excel exports are present in CMB, OEE, K-Maint, Lab Dispatch, Mixing, and AM; PDR provides weekly/monthly reporting views."
  },
  {
    name: "Role-Based Operations",
    context: "Projects include admin, operator, leader, manager, QC, verifier, PPIC, technician, and supervisor workflow boundaries."
  },
  {
    name: "Integration And Automation",
    context: "Google Sheet sync in CMB/OEE, console recalculation in OEE, dispatch cleanup in Lab, and scheduling generation in K-Maint."
  }
];

export const impactMetrics = [
  "Centralized production execution and QC visibility",
  "Improved OEE, downtime, and production KPI review",
  "Standardized maintenance ticket and PM follow-up",
  "Faster lab sample queue coordination and assignment",
  "Reduced manual daily reporting consolidation",
  "Improved traceability across work orders, SPK, lots, samples, and process steps",
  "Better operational documentation through photos, approvals, exports, and history logs",
  "Stronger decision support for supervisors, QC, PPIC, maintenance, and production teams"
];

export const timeline = [
  {
    phase: "Systems",
    title: "Built internal manufacturing applications",
    detail: "Developed operational systems across production execution, OEE monitoring, maintenance workflows, lab dispatch, daily reporting, color-change cleaning, and mixing process control."
  },
  {
    phase: "Operations",
    title: "Focused on workflow visibility",
    detail: "Designed tools that help teams track work orders, samples, tickets, machine checks, lots, approvals, reports, and production follow-up from one shared operational view."
  },
  {
    phase: "Dashboards",
    title: "Created decision-support views",
    detail: "Built dashboards, monitoring boards, exportable reports, and analysis pages for supervisors, QC, PPIC, maintenance, technicians, operators, and production leaders."
  },
  {
    phase: "Impact",
    title: "Improved operational discipline",
    detail: "Standardized daily reporting, ticket follow-up, lab queues, PM execution, traceability, approval flows, and production documentation across internal teams."
  }
];
