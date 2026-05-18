export type ProjectStatus = "featured" | "additional";

export type Project = {
  slug: string;
  sourceFolder: string;
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
  evidence: string[];
  score: number;
};

export const projects: Project[] = [
  {
    slug: "cmb-manufacturing-execution",
    sourceFolder: "kasakata-cmb",
    title: "CMB Manufacturing Execution And Traceability System",
    status: "featured",
    category: "MES-like production workflow",
    summary:
      "A Laravel-based internal manufacturing system for CMB work orders, production steps, QC visibility, traceability, urgent deliveries, machine monitoring, and production schedule sync.",
    preview: {
      label: "Workflow board preview",
      note: "Portfolio UI preview based on audited routes, controllers, views, and exports, not a captured production screenshot.",
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
      "Domain controllers include WorkOrderController_cmb, TraceabilityController, QcDashboardController, MachineMonitoringController, MixerMonitoringController, PlanAktualController, and UrgentDeliveryController",
      "Core models include WorkOrder, WoStep, WoStepPause, ProcessStep, ProcessLog, ProductionSchedule, PlanAktual, SampleCheck, MachineStatusLog, and MetalDetectorInspection",
      "Integrations include GoogleSheetService plus SendLotToSheet and SyncProductionSchedule console commands",
      "Operational exports are separated into dedicated export classes for monitoring, QC, stage detail, timbangan, and work orders"
    ],
    evidence: [
      "routes/web.php includes work order step play/close, sample result updates, WIP extrusion, monitoring board data, urgent delivery tracking, imports, templates, and Excel export routes",
      "resources/views contains traceability, tracking, QC dashboard, machine monitoring, mixer monitoring, work order, schedule, and urgent delivery pages",
      "composer.json confirms Laravel 12, Google API, Sanctum, Excel, and Yajra DataTables"
    ],
    score: 96
  },
  {
    slug: "oee-production-monitoring",
    sourceFolder: "kasakata-oee",
    title: "OEE Production Monitoring System",
    status: "featured",
    category: "Production monitoring",
    summary:
      "A production performance system for OEE reporting, machine target management, approval workflow, downtime analysis, KPI exports, and recalculation commands.",
    preview: {
      label: "OEE analytics preview",
      note: "Portfolio UI preview based on OEE monitoring, approval, analysis, export, and recalculation evidence.",
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
      "Core controllers include LaporanOeeController, AnalisaOeeController, DashboardController, MachineMonitoringController, and MachineTargetController",
      "Models include LaporanOee, MachineTarget, MasterMesin, Operator, Produk, and WorkOrderCMB",
      "Migrations show OEE calculation fields, approval workflow, planned downtime, weighing, reject/loss material, revision tracking, and maintenance notes",
      "Export classes cover dashboard machine OEE, machine detail, top downtime detail, top downtime summary, and monitoring data"
    ],
    evidence: [
      "resources/views includes laporan/oee/monitoring-board, pending, rejected, show, create, edit, and analisa/oee pages",
      "app/Console/Commands includes RecalculateAllOEE, RecalculateOeeData, FixInconsistentOEE, BackfillOeeTrackingFields, SyncProductsFromCMB, and SyncProductionSchedule",
      "routes/web.php includes OEE monitoring, approval, revision, analysis, import, and export routes"
    ],
    score: 95
  },
  {
    slug: "k-maint-maintenance-workflow",
    sourceFolder: "K-Maint",
    title: "K-Maint Maintenance Workflow System",
    status: "featured",
    category: "Maintenance operations",
    summary:
      "A maintenance management platform for tickets, preventive maintenance, assets, machine parts, technician activity, attendance, notifications, reports, and exports.",
    preview: {
      label: "Maintenance command center preview",
      note: "Portfolio UI preview based on ticket, PM, monitoring, technician, notification, and export evidence.",
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
      "Controllers include TicketController, PmCheckController, PmScheduleController, ChecklistTemplateController, MonitoringController, SchedulingController, AssetController, and ExportController",
      "Models include Ticket, TicketNote, TicketStatusHistory, Asset, MachinePart, PmSchedule, PmCheck, PmCheckItem, TechnicianActivity, TechnicianAttendance, Notification, Vendor, and Pic",
      "Migrations show PM schedules, PM checks, checklist items, technician activities, ticket notes, pending fields, status enums, PR number, pause tracking, and supervisor action fields",
      "Routes separate ticket execution, PM execution, reports, monitoring, scheduling, and admin master data"
    ],
    evidence: [
      "routes/web.php includes ticket monitoring, start/finish/close, after-photo upload, pending/resume, supervisor review, PM verify/approve, scheduling generation, and monitoring exports",
      "resources/views includes tickets/monitoring, pm-checks, pm-schedules, monitoring/team, teknisi/dashboard, reports/pm, and scheduling pages",
      "composer.json confirms Laravel 10, Sanctum, Excel, and Yajra DataTables"
    ],
    score: 93
  },
  {
    slug: "lab-dispatch-qc-queue",
    sourceFolder: "lab-dispatch-system",
    title: "Lab Dispatch And QC Queue System",
    status: "featured",
    category: "QC lab workflow",
    summary:
      "A QC laboratory dispatch system for sample queues, operator assignment, PPIC priorities, verifier approval, raw material sample workflows, monitoring, and exports.",
    preview: {
      label: "Lab queue preview",
      note: "Portfolio UI preview based on board, queue management, QC dashboard, PPIC, verifier, and raw material workflow evidence.",
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
      "Controllers include BoardController, QueueManagementController, QCDashboardController, QCMonitoringController, QCSampleController, RawMaterialSampleController, PpicDashboardController, VerifierDashboardController, and NewRawMaterialApprovalController",
      "API controllers include Api/AntrianController and Api/LabResultController",
      "Models include Sample, QCSample, QCOperator, QCWorkLog, QCSampleTimeSession, DailyPriority, NewRawMaterial, NewRawMaterialChecklist, and NewRawMaterialImportHistory",
      "NewRawMaterialService enforces checklist completion, approval/rejection, and QC sample creation"
    ],
    evidence: [
      "routes/web.php includes board, operator task completion, queue management, QC dashboard actions, PPIC priorities, verifier approval, QC operators, samples, raw material samples, and new raw materials",
      "app/Console/Commands includes DispatchPendingSamples and CleanUpStaleTasks",
      "resources/views includes board, operator/kiosk, qc/dashboard, qc/monitoring, queue/manage, ppic/dashboard, verifier/dashboard, and qc/new-raw-materials pages"
    ],
    score: 92
  },
  {
    slug: "production-daily-reporting",
    sourceFolder: "kasakata-pdr",
    title: "Production Daily Reporting System",
    status: "featured",
    category: "Production reporting",
    summary:
      "A daily production reporting system covering mixing, extrusion, lab, packing, powder, shift schedules, NOC input/reporting, verification, and weekly/monthly reports.",
    preview: {
      label: "Daily reporting preview",
      note: "Portfolio UI preview based on daily report, NOC, verification, Chart.js reporting, and department workflow evidence.",
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
      "Controllers include DailyReportController, DailyMixingController, DailyExtrusionController, DailyLabController, DailyPackingController, DailyPowderController, NocInputController, NocReportController, NocVerificationController, and ReportController",
      "Models include DailyReport, DailyMixingDetail, DailyExtrusionDetail, DailyLabDetail, DailyPackingDetail, DailyPowderDetail, ShiftSchedule, MasterTarget, MixingHistory, LabSample, WorkOrder, and WorkOrderStep",
      "Migrations cover department-level daily detail tables, shift schedules, master targets, NOC columns, lot/product fields, reject/loss material, and powder details",
      "Chart.js dependency supports dashboard/report visualization"
    ],
    evidence: [
      "resources/views includes daily-reports, daily-mixing, daily-extrusion, daily-lab, daily-packing, daily-powder, noc-input, noc-report, noc-verification, weekly reports, and monthly reports",
      "routes/web.php includes daily report verification, daily extrusion OEE data, NOC summary/export, and work order step detail panel",
      "composer.json and package.json confirm Laravel 10, AdminLTE, Sanctum, Vite, and Chart.js"
    ],
    score: 91
  },
  {
    slug: "autonomous-maintenance-daily-check",
    sourceFolder: "kasakata_am",
    title: "Autonomous Maintenance And Daily Check System",
    status: "additional",
    category: "Autonomous maintenance",
    summary:
      "A Laravel 12 system for daily machine checks, maintenance tickets, inspections, preparation templates, approvals, photo evidence, PDF reports, and Excel exports.",
    preview: {
      label: "Daily check preview",
      note: "Portfolio UI preview based on daily checks, inspection approval, ticket, preparation, photo, PDF, and export evidence.",
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
      "Daily machine checks and AM activities need consistent evidence, approval flow, maintenance handoff, and reporting so issues do not stay hidden in paper records.",
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
      "Improved machine check evidence and approval discipline",
      "Better visibility for autonomous maintenance follow-up",
      "Reduced paper-based inspection and preparation tracking"
    ],
    architecture: [
      "Models include Machine, DailyCheck, DailyCheckItem, MaintenanceTicket, Inspection, Preparation, PreparationDetail, PreparationTemplate, ActivityLog, and Notification",
      "Migrations include manager approval, checklist images, maintenance monitoring columns, verification photos, preparation system tables, product/lot fields, and manager rating"
    ],
    evidence: [
      "resources/views includes daily_checks, inspections, maintenance_tickets, preparations, preparation_templates, reports, and report/pdf",
      "public/uploads/checklist_images contains uploaded checklist evidence images",
      "composer.json confirms Laravel 12, DomPDF, Excel, and Yajra DataTables"
    ],
    score: 88
  },
  {
    slug: "color-change-cleaning-workflow",
    sourceFolder: "kasakata-gw",
    title: "Color Change Cleaning Workflow System",
    status: "additional",
    category: "Shop-floor cleaning workflow",
    summary:
      "A Laravel 10 workflow system for machine color-change cleaning orders, operator form execution, photo evidence, manager verification, and quantity usage reports.",
    preview: {
      label: "Cleaning workflow preview",
      note: "Portfolio UI preview based on color-change orders, operator forms, photo evidence, verification, and quantity report evidence.",
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
      "Color-change cleaning needs standardized templates, operator execution evidence, material quantity tracking, and manager verification to prevent inconsistent handoffs.",
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
      "Improved evidence quality through photo-based operator submissions",
      "Better verification control for cleaning completion"
    ],
    architecture: [
      "Controllers include PerintahGantiWarnaController, TemplateCleaningController, FormBongkarController, FormBongkarReviewController, and QtyUsageReportController",
      "Models include PerintahGantiWarna, TemplateCleaning, FormBongkar, ListCleaning, Mesin, CmbProduk, and CmbOperator"
    ],
    evidence: [
      "resources/views includes operator/form-bongkar, manager/form-verifikasi, admin/template-cleaning, admin/perintah, and admin/reports/qty-usage",
      "migrations include cleaning templates, form bongkar, list cleaning, material quantity rules, required photos, and verification status",
      "public/img/foto-cleaning contains uploaded cleaning photo evidence"
    ],
    score: 84
  },
  {
    slug: "mixing-method-production-input",
    sourceFolder: "mixing",
    title: "Mixing Method And Production Input System",
    status: "additional",
    category: "Mixing process control",
    summary:
      "A Laravel 12 system for mixing methods, operator mixing views, SPK and lot input history, resin classification, PDF method files, and Excel history exports.",
    preview: {
      label: "Mixing method preview",
      note: "Portfolio UI preview based on method search, operator pages, SPK/lot history, PDF views, and Excel export evidence.",
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
      "Controllers include MixingController, MixingMethodController, op_mixingController, BahanController, GranulController, and MetodeController",
      "Models include MixingInput, MixingMethod, MixingMethod_khusus, MixingParameter, SearchHistory, Granul, bahan, powder, Produk, and User",
      "AllHistoryMethodeService combines mixing input and search history data for reporting"
    ],
    evidence: [
      "resources/views includes mixing/search, mixing/input-history, mixing/all-history, mixing-methods, operator_mixing, bahan/pdf-view, and granul/pdf-view pages",
      "migrations include mixing_inputs, signed_by, method signatures, remarks, and production_schedules",
      "composer.json confirms Laravel 12, Excel, and Yajra DataTables"
    ],
    score: 82
  }
];

export const featuredProjects = projects.filter((project) => project.status === "featured");
export const additionalProjects = projects.filter((project) => project.status === "additional");

export const skills = [
  {
    name: "Laravel / PHP",
    context: "Verified across all eight audited systems, spanning Laravel 10 and Laravel 12 applications."
  },
  {
    name: "Manufacturing Systems",
    context: "Implemented in CMB production execution, OEE monitoring, PDR daily reporting, color-change workflow, and mixing method control."
  },
  {
    name: "MySQL Data Modeling",
    context: "Migrations model work orders, OEE reports, PM checks, tickets, samples, daily reports, inspections, preparations, SPK, lots, and production schedules."
  },
  {
    name: "Dashboard Analytics",
    context: "Evidence appears in OEE analysis, PDR reports, CMB QC/machine monitoring, K-Maint monitoring, and Lab QC monitoring."
  },
  {
    name: "Workflow Digitalization",
    context: "Built approval, verification, dispatch, ticket, PM, daily reporting, cleaning, preparation, and production execution workflows."
  },
  {
    name: "Traceability And Lot Tracking",
    context: "Validated in CMB traceability/lead time/output tracking, OEE SPK lookup, Mixing SPK/lot history, and PDR lot/product reporting."
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
  "Better evidence capture through photos, approvals, exports, and history logs",
  "Stronger decision support for supervisors, QC, PPIC, maintenance, and production teams"
];

export const timeline = [
  {
    phase: "Discovery",
    title: "Audited real Laravel systems",
    detail: "Scanned eight manufacturing and operations applications across routes, controllers, models, migrations, views, services, exports, commands, and public assets."
  },
  {
    phase: "Positioning",
    title: "Selected strongest portfolio evidence",
    detail: "Promoted CMB, OEE, K-Maint, Lab Dispatch, and PDR as featured case studies, with AM, GW, and Mixing supporting the wider internal-systems story."
  },
  {
    phase: "Content",
    title: "Converted code evidence into business case studies",
    detail: "Mapped each system to operational problems, workflow value, architecture highlights, qualitative impact, and evidence notes without unsupported percentage claims."
  },
  {
    phase: "Visuals",
    title: "Added honest UI preview galleries",
    detail: "Added real local application screenshots across CMB, OEE, K-Maint, Lab Dispatch, PDR, AM, Color Change, and Mixing case studies."
  }
];
