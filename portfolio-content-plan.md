# Portfolio Content Plan

## Positioning

RidBar is positioned as an Industrial Software Engineer who builds internal software systems for manufacturing operations, production monitoring, maintenance workflows, QC/lab dispatch, daily reporting, traceability, and enterprise process digitalization.

Primary positioning statement:

> I build internal manufacturing software for production execution, OEE monitoring, maintenance workflows, QC dispatch, and operational dashboards.

## Visual Direction

- Industrial tech
- Modern SaaS
- Executive dashboard aesthetic
- Clean spacing
- Sharp cards
- Dark ink, cloud background, signal green accents, amber highlights
- Business-first case study pages, not generic CRUD descriptions

## Page Structure

- `/` homepage
- `/projects` project inventory
- `/projects/[slug]` project case studies
- `/resume` resume section
- `/contact` contact page

## Featured Projects

### 1. CMB Manufacturing Execution And Traceability System

Source folder: `kasakata-cmb`

Positioning:

MES-like production workflow system for CMB work orders, production steps, QC visibility, traceability, urgent deliveries, machine monitoring, and production schedule sync.

Evidence:

- Laravel 12, PHP 8.2, Tailwind 4, Vite, Sanctum, Excel, Yajra DataTables, Google API.
- Controllers include `WorkOrderController_cmb`, `TraceabilityController`, `QcDashboardController`, `MachineMonitoringController`, `MixerMonitoringController`, `PlanAktualController`, and `UrgentDeliveryController`.
- Views include traceability, QC dashboard, machine monitoring, mixer monitoring, work orders, tracking, and urgent deliveries.

Portfolio angle:

- MES-like internal system
- Production execution
- Traceability
- QC workflow
- Google Sheet sync
- Excel exports

### 2. OEE Production Monitoring System

Source folder: `kasakata-oee`

Positioning:

Production performance system for OEE reporting, machine targets, approval workflow, downtime analysis, KPI exports, and recalculation commands.

Evidence:

- Laravel 12, PHP 8.2, Tailwind 4, Vite, Sanctum, Excel, Yajra DataTables, Google API.
- Controllers include `LaporanOeeController`, `AnalisaOeeController`, `DashboardController`, `MachineMonitoringController`, and `MachineTargetController`.
- Commands include OEE recalculation, data cleanup, sync products, and sync schedule.
- Views include OEE monitoring board, pending/rejected reports, availability, performance-quality, and top downtime analysis.

Portfolio angle:

- OEE analytics
- Production KPI visibility
- Approval and revision workflow
- Downtime analysis
- Exportable reporting

### 3. K-Maint Maintenance Workflow System

Source folder: `K-Maint`

Positioning:

Maintenance management platform for tickets, preventive maintenance, assets, machine parts, technician activity, attendance, notifications, reports, and exports.

Evidence:

- Laravel 10, PHP 8.1, Vite, Sanctum, Excel, Yajra DataTables.
- Controllers include `TicketController`, `PmCheckController`, `PmScheduleController`, `ChecklistTemplateController`, `MonitoringController`, `SchedulingController`, `AssetController`, and `ExportController`.
- Models include tickets, PM schedules, PM checks, checklist items, assets, machine parts, technician activity, attendance, notifications, vendors, and PICs.

Portfolio angle:

- Maintenance ticket lifecycle
- Preventive maintenance workflow
- Technician monitoring
- Supervisor review
- Photo evidence
- Excel exports

### 4. Lab Dispatch And QC Queue System

Source folder: `lab-dispatch-system`

Positioning:

QC laboratory dispatch system for sample queues, operator assignment, PPIC priorities, verifier approval, raw material sample workflows, monitoring, and exports.

Evidence:

- Laravel 12, PHP 8.2, Tailwind, Alpine.js, Breeze, Sanctum, Excel.
- Controllers include board, queue management, QC dashboard, QC monitoring, raw material samples, PPIC dashboard, verifier dashboard, and new raw material approval.
- Service `NewRawMaterialService` handles checklist completion, approval/rejection, and QC sample creation.

Portfolio angle:

- QC sample queue
- Operator assignment
- PPIC/verifier workflow
- Raw material approval
- Lab monitoring
- Role-based dashboards

### 5. Production Daily Reporting System

Source folder: `kasakata-pdr`

Positioning:

Daily production reporting platform for mixing, extrusion, lab, packing, powder, shift schedules, NOC input/reporting, verification, and weekly/monthly reporting.

Evidence:

- Laravel 10, PHP 8.1, AdminLTE, Chart.js, Vite, Sanctum.
- Controllers include daily report, daily mixing, daily extrusion, daily lab, daily packing, daily powder, NOC input/report, verification, and report controllers.
- Views include daily reports, department forms, NOC input/report, weekly report, monthly report, and master reports.

Portfolio angle:

- Standardized daily reporting
- Multi-department production visibility
- Shift-level reporting
- NOC verification
- Weekly/monthly reporting

## Additional Systems

### Autonomous Maintenance And Daily Check System

Source folder: `kasakata_am`

Use as additional project for daily machine checks, maintenance tickets, inspections, preparation templates, approvals, photo evidence, PDF reports, and Excel exports.

### Color Change Cleaning Workflow System

Source folder: `kasakata-gw`

Use as additional project for machine color-change cleaning orders, operator form execution, photo evidence, manager verification, and quantity usage reports.

### Mixing Method And Production Input System

Source folder: `mixing`

Use as additional project for mixing methods, operator views, SPK and lot input history, resin classification, PDF method files, and Excel exports.

## Skill Mapping

- Laravel / PHP
- MySQL data modeling
- Tailwind CSS
- Bootstrap / AdminLTE
- Dashboard analytics
- Production monitoring
- OEE systems
- Maintenance workflow
- Preventive maintenance
- Lab / QC workflow
- Traceability and lot tracking
- Reporting systems
- Excel export
- PDF generation
- Google Sheet integration
- Role-based operations
- Console commands and automation

## Impact Themes

Use qualitative impact statements unless exact operational data is provided:

- Centralized production execution and QC visibility.
- Improved OEE, downtime, and KPI review.
- Standardized maintenance ticket and PM follow-up.
- Faster lab sample queue coordination.
- Reduced manual daily reporting consolidation.
- Improved traceability across work orders, SPK, lots, samples, and process steps.
- Better evidence capture through photos, approvals, exports, and history logs.
- Stronger decision support for supervisors, QC, PPIC, maintenance, and production teams.

## Screenshot Plan

Capture real application screenshots from:

- CMB: traceability, QC dashboard, machine monitoring, work order detail, urgent delivery tracking.
- OEE: monitoring board, availability analysis, performance-quality analysis, top downtime.
- K-Maint: ticket monitoring, PM execution, team monitoring, technician dashboard.
- Lab Dispatch: board, QC dashboard, queue management, verifier dashboard, raw material approval.
- PDR: daily report dashboard, NOC report, weekly/monthly report.
- AM: daily checks, inspection approval, maintenance tickets, preparation workflow.
- GW: form bongkar, template cleaning, manager verification, quantity usage report.
- Mixing: method search, input history, all history, PDF method view.

Current implementation note:

- The portfolio now includes generated UI preview panels on project cards and case-study pages.
- These panels are explicitly labeled as portfolio UI previews, not real production screenshots.
- Replace the preview panels with real screenshots only after the local applications can be opened with safe credentials and representative data.

## Implementation Notes

- Website content is now evidence-based from the audit.
- Do not add fake metrics.
- Do not claim real-time behavior unless source code proves it.
- Use "centralized", "standardized", "improved visibility", and "reduced manual dependency" language instead of unsupported percentage claims.
