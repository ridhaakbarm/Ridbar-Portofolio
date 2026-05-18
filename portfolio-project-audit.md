# Portfolio Project Audit

Audit ini dibuat dari scan folder nyata di `C:\laragon\www` untuk menentukan project mana yang paling kuat masuk portfolio RidBar sebagai Industrial Software Engineer.

## Executive Summary

Semua folder target adalah aplikasi Laravel / PHP dengan database MySQL-style, Blade views, Vite assets, dan workflow internal manufacturing/operations. Project paling kuat untuk portfolio utama adalah:

1. `kasakata-cmb` - MES-like CMB production workflow, traceability, work order, QC, monitoring, Google Sheet sync.
2. `kasakata-oee` - OEE production monitoring, KPI analysis, approval workflow, machine target, Excel export.
3. `K-Maint` - maintenance ticketing, preventive maintenance, asset management, technician activity tracking.
4. `lab-dispatch-system` - QC/lab dispatch queue, sample assignment, raw material approval, role dashboards.
5. `kasakata-pdr` - production daily reporting across mixing, extrusion, lab, packing, powder, NOC verification.

Secondary but still useful:

- `kasakata_am` - autonomous maintenance / daily machine check / inspection / preparation system.
- `kasakata-gw` - color-change and cleaning workflow with photo evidence and manager verification.
- `mixing` - mixing method, SPK, lot, resin, PDF method, and input history system.

## Target Project Folders

| Project Folder | Framework / Stack | Main Domain | Portfolio Status | Score |
| --- | --- | --- | --- | --- |
| `kasakata-cmb` | Laravel 12, PHP 8.2, Tailwind 4, Vite 7, Sanctum, Excel, Yajra DataTables, Google API | CMB production workflow / traceability | Featured | 96 |
| `kasakata-oee` | Laravel 12, PHP 8.2, Tailwind 4, Vite 7, Sanctum, Excel, Yajra DataTables, Google API | OEE monitoring and production performance | Featured | 95 |
| `K-Maint` | Laravel 10, PHP 8.1, Vite 5, Sanctum, Excel, Yajra DataTables | Maintenance ticketing and preventive maintenance | Featured | 93 |
| `lab-dispatch-system` | Laravel 12, PHP 8.2, Tailwind, Alpine, Breeze, Sanctum, Excel | QC lab dispatch and sample queue | Featured | 92 |
| `kasakata-pdr` | Laravel 10, PHP 8.1, AdminLTE, Chart.js, Sanctum | Production daily reporting | Featured / Strong candidate | 91 |
| `kasakata_am` | Laravel 12, PHP 8.2, Tailwind 4, DomPDF, Excel, Yajra DataTables | Autonomous maintenance and daily checks | Secondary | 88 |
| `kasakata-gw` | Laravel 10, PHP 8.1, Bootstrap 5, Sass, Intervention Image, Sanctum | Color-change / cleaning workflow | Secondary | 84 |
| `mixing` | Laravel 12, PHP 8.2, Tailwind 4, Excel, Yajra DataTables | Mixing method and production input workflow | Secondary | 82 |

## Featured Project Recommendation

Use 5 featured case studies:

1. **CMB Manufacturing Execution And Traceability System** from `kasakata-cmb`
2. **OEE Production Monitoring System** from `kasakata-oee`
3. **K-Maint Maintenance Workflow System** from `K-Maint`
4. **Lab Dispatch And QC Queue System** from `lab-dispatch-system`
5. **Production Daily Reporting System** from `kasakata-pdr`

Use `kasakata_am`, `kasakata-gw`, and `mixing` as "Additional Systems" or merge their skills into skill mapping.

## Project Details

### 1. `kasakata-cmb`

**Recommended title:** CMB Manufacturing Execution And Traceability System

**Business use case:** Internal manufacturing workflow system for CMB production execution, work order tracking, QC stages, traceability, monitoring, urgent deliveries, product standards, and production schedule sync.

**Stack evidence:**

- `composer.json`: Laravel 12, PHP 8.2, Laravel Sanctum, `maatwebsite/excel`, `yajra/laravel-datatables-oracle`, `google/apiclient`.
- `package.json`: Vite, Tailwind CSS 4, Axios, Laravel Vite plugin.
- `app/Services/GoogleSheetService.php`
- `app/Console/Commands/SendLotToSheet.php`
- `app/Console/Commands/SyncProductionSchedule.php`

**Feature evidence:**

- Controllers: `WorkOrderController_cmb`, `TraceabilityController`, `QcDashboardController`, `QcVerificationController`, `MachineMonitoringController`, `MixerMonitoringController`, `PlanAktualController`, `UrgentDeliveryController`, `OutputTrackingController`.
- Models: `WorkOrder`, `WoStep`, `WoStepPause`, `ProcessStep`, `ProcessLog`, `ProductionSchedule`, `PlanAktual`, `SampleCheck`, `UrgentDelivery`, `MachineStatusLog`, `MetalDetectorInspection`.
- Views: `traceability/index.blade.php`, `traceability/lead_time.blade.php`, `qc/dashboard.blade.php`, `qc/verification.blade.php`, `machine_monitoring/index.blade.php`, `mixer_monitoring/index.blade.php`, `work_orders/index.blade.php`, `work_orders/wip_extrusion.blade.php`, `tracking/output_tracking.blade.php`.
- Routes include work order step play/close, sample result updates, WIP extrusion detail, monitoring board data, urgent delivery tracking, product item import/template, and Excel export.

**Portfolio angle:**

- MES-like shop-floor execution.
- Traceability from work order, step, sample, machine, QC, and output movement.
- Operational dashboard for production and QC teams.
- Google Sheet integration and Excel exports.

**Impact statements:**

- Centralized production execution and QC visibility.
- Improved traceability across work orders, lots, process steps, and sample checks.
- Reduced dependency on scattered manual tracking through dashboard and export workflows.

**Screenshot / asset candidates:**

- `public/images/avian-logo-normal.png`
- `public/storage/struk_packing/*.png`
- Best screenshots should be captured directly from `qc/dashboard`, `traceability`, `machine_monitoring`, `work_orders`, and `tracking` pages.

### 2. `kasakata-oee`

**Recommended title:** OEE Production Monitoring System

**Business use case:** OEE reporting and analytics system for production teams to record, approve, analyze, and export machine effectiveness data.

**Stack evidence:**

- `composer.json`: Laravel 12, PHP 8.2, Sanctum, Excel, Yajra DataTables, Google API.
- `package.json`: Vite 7, Tailwind CSS 4, Axios.
- `app/Services/GoogleSheetService.php`

**Feature evidence:**

- Controllers: `LaporanOeeController`, `AnalisaOeeController`, `DashboardController`, `MachineMonitoringController`, `MachineTargetController`, `MasterMesinController`.
- Console commands: `RecalculateAllOEE`, `RecalculateOeeData`, `FixInconsistentOEE`, `BackfillOeeTrackingFields`, `SyncProductsFromCMB`, `SyncProductionSchedule`.
- Exports: `DashboardMachineOeeExport`, `DashboardMachineDetailSheet`, `TopDowntimeDetailsExport`, `TopDowntimeSummarySheet`, `MonitoringExport`.
- Models: `LaporanOee`, `MachineTarget`, `MasterMesin`, `Operator`, `Produk`, `WorkOrderCMB`.
- Migrations include OEE calculation fields, approval workflow, status, revision tracking, planned downtime, maintenance notes, weighing, reject/loss material, machine targets.
- Views: `laporan/oee/monitoring-board.blade.php`, `laporan/oee/pending.blade.php`, `laporan/oee/rejected.blade.php`, `analisa/oee/availability.blade.php`, `analisa/oee/performance-quality.blade.php`, `analisa/oee/top-downtime.blade.php`.

**Portfolio angle:**

- Strongest pure production analytics system.
- Shows dashboard, approval workflow, recalculation jobs, data exports, OEE analysis, downtime analysis.
- Excellent anchor project for manufacturing digitalization.

**Impact statements:**

- Better operational visibility into availability, performance, quality, and downtime.
- Faster approval and revision workflow for production reports.
- More reliable KPI calculation through recalculation and data cleanup commands.

**Screenshot / asset candidates:**

- `public/images/avian-logo-normal.png`
- Capture real UI from monitoring board and OEE analysis pages.

### 3. `K-Maint`

**Recommended title:** K-Maint Maintenance Workflow System

**Business use case:** Maintenance management system for tickets, assets, preventive maintenance schedules, checklist execution, technician activity, attendance, notifications, and reports.

**Stack evidence:**

- `composer.json`: Laravel 10, PHP 8.1, Sanctum, Excel, Yajra DataTables.
- `package.json`: Vite 5, Axios, Laravel Vite plugin.

**Feature evidence:**

- Controllers: `TicketController`, `PmCheckController`, `PmScheduleController`, `ChecklistTemplateController`, `MonitoringController`, `SchedulingController`, `AssetController`, `MachinePartController`, `ReportController`, `ExportController`, `NotificationController`.
- Models: `Ticket`, `TicketNote`, `TicketStatusHistory`, `Asset`, `MachinePart`, `PmSchedule`, `PmCheck`, `PmCheckItem`, `ChecklistTemplate`, `TechnicianActivity`, `TechnicianAttendance`, `Notification`, `Vendor`, `Pic`.
- Routes include ticket start/finish/close/pending/resume/reject, after-photo upload, supervisor review, PM check start/complete/verify/approve, scheduling generation, monitoring start/stop, team export, Excel export.
- Views: `tickets/monitoring.blade.php`, `tickets/show.blade.php`, `pm-checks/index.blade.php`, `pm-checks/show.blade.php`, `pm-schedules/index.blade.php`, `monitoring/team.blade.php`, `teknisi/dashboard.blade.php`.

**Portfolio angle:**

- Very strong enterprise workflow project.
- Good evidence of lifecycle design: ticket states, PM execution, supervisor review, photo evidence, technician tracking.
- Valuable for maintenance and reliability engineering positioning.

**Impact statements:**

- Centralized maintenance tickets and PM execution.
- Improved technician accountability and activity tracking.
- Better follow-up visibility with notes, history, status, and reports.

**Screenshot / asset candidates:**

- `public/attachments/*` includes uploaded evidence/images.
- Capture UI from dashboard, ticket monitoring, PM checks, technician dashboard.

### 4. `lab-dispatch-system`

**Recommended title:** Lab Dispatch And QC Queue System

**Business use case:** QC laboratory workflow system for sample queue, operator assignment, raw material sample handling, PPIC priorities, verifier approval, QC monitoring, and reporting.

**Stack evidence:**

- `composer.json`: Laravel 12, PHP 8.2, Sanctum, Breeze, Pest, Excel.
- `package.json`: Tailwind CSS, Alpine.js, Vite, Axios, Laravel Vite plugin.

**Feature evidence:**

- Controllers: `BoardController`, `DashboardController`, `OperatorDashboardController`, `QueueManagementController`, `QCDashboardController`, `QCMonitoringController`, `QCSampleController`, `RawMaterialSampleController`, `PpicDashboardController`, `VerifierDashboardController`, `NewRawMaterialApprovalController`, `NewRawMaterialImportController`.
- API controllers: `Api/AntrianController`, `Api/LabResultController`.
- Console commands: `DispatchPendingSamples`, `CleanUpStaleTasks`.
- Exports: `MonitoringLabExport`, `QCSampleSourceExport`, `NewRawMaterialTemplateExport`.
- Models: `Sample`, `QCSample`, `QCOperator`, `QCWorkLog`, `QCSampleTimeSession`, `DailyPriority`, `NewRawMaterial`, `NewRawMaterialChecklist`, `NewRawMaterialImportHistory`.
- Service: `NewRawMaterialService` handles checklist completion, approval/rejection, and QC sample creation.
- Views: `board.blade.php`, `operator/kiosk.blade.php`, `qc/dashboard.blade.php`, `qc/monitoring.blade.php`, `queue/manage.blade.php`, `ppic/dashboard.blade.php`, `verifier/dashboard.blade.php`, `qc/new-raw-materials/*`.

**Portfolio angle:**

- Strong workflow and role-based operations system.
- Clear queue/dispatch concept with QC operator assignment, PPIC, verifier, raw material approval.
- Good story for operational throughput and lab visibility.

**Impact statements:**

- Centralized QC sample queue and operator workload visibility.
- Faster dispatch coordination across PPIC, QC, verifier, and operators.
- Improved raw material approval traceability with checklist and sample generation.

**Screenshot / asset candidates:**

- `public/images/default-lab-icon.png`
- Capture board, QC monitoring, queue management, and verifier dashboard.

### 5. `kasakata-pdr`

**Recommended title:** Production Daily Reporting System

**Business use case:** Daily manufacturing reporting system for mixing, extrusion, lab, packing, powder, shift-based reporting, NOC input/reporting, verification, and production summaries.

**Stack evidence:**

- `composer.json`: Laravel 10, PHP 8.1, AdminLTE, Sanctum.
- `package.json`: Vite, Axios, Chart.js.

**Feature evidence:**

- Controllers: `DailyReportController`, `DailyMixingController`, `DailyExtrusionController`, `DailyLabController`, `DailyPackingController`, `DailyPowderController`, `NocInputController`, `NocReportController`, `NocVerificationController`, `MixingQcMonitoringController`, `ShiftScheduleController`, `ReportController`.
- Models: `DailyReport`, `DailyMixingDetail`, `DailyExtrusionDetail`, `DailyLabDetail`, `DailyPackingDetail`, `DailyPowderDetail`, `ShiftSchedule`, `ProductionSchedule`, `MasterTarget`, `MixingHistory`, `LabSample`, `WorkOrder`, `WorkOrderStep`.
- Migrations include daily report master, daily detail tables for multiple departments, shift schedules, master targets, NOC columns, lot number/product, reject/loss material, powder details.
- Views: `daily-reports/*`, `daily-mixing/create.blade.php`, `daily-extrusion/create.blade.php`, `daily-lab/create.blade.php`, `daily-packing/create.blade.php`, `daily-powder/create.blade.php`, `noc-input/*`, `noc-report/*`, `reports/weekly.blade.php`, `reports/monthly.blade.php`.
- Routes include daily reports verification, daily extrusion OEE data endpoint, NOC summary/export, and work order step detail panel.

**Portfolio angle:**

- Strong reporting and cross-department production visibility.
- Complements OEE by showing broader daily reporting across production areas.
- Good case study for standardized reporting.

**Impact statements:**

- Standardized daily production data capture.
- Faster weekly/monthly reporting and verification.
- Better shift-level visibility across production departments.

**Screenshot / asset candidates:**

- `public/images/kasakata-logo.png`
- Capture dashboard, daily reports, NOC reports, weekly/monthly reports.

### 6. `kasakata_am`

**Recommended title:** Autonomous Maintenance And Daily Check System

**Business use case:** Machine daily check, inspection, maintenance ticket, preparation template, approval, photo evidence, and reporting system.

**Stack evidence:**

- `composer.json`: Laravel 12, PHP 8.2, DomPDF, Excel, Yajra DataTables.
- `package.json`: Tailwind CSS 4, Vite 6, Axios.

**Feature evidence:**

- Models: `Machine`, `DailyCheck`, `DailyCheckItem`, `MaintenanceTicket`, `Inspection`, `Preparation`, `PreparationDetail`, `PreparationTemplate`, `ActivityLog`, `Notification`.
- Migrations include daily checks, checklist images, manager approval, maintenance ticket monitoring columns, verification photos, inspections, preparation templates/details, product and lot on preparations, manager rating.
- Views: `daily_checks/*`, `inspections/*`, `admin/maintenance_tickets/*`, `preparations/*`, `reports/*`, `report/pdf.blade.php`.
- Assets include `public/uploads/checklist_images/*`.

**Portfolio angle:**

- Strong additional project for maintenance/AM capability.
- Keep as additional system unless portfolio needs more maintenance depth than `K-Maint`.

### 7. `kasakata-gw`

**Recommended title:** Color Change Cleaning Workflow System

**Business use case:** Ganti warna / cleaning workflow for machine cleaning templates, operator form execution, photo upload evidence, manager verification, and quantity usage reporting.

**Stack evidence:**

- `composer.json`: Laravel 10, PHP 8.1, Bootstrap, Laravel UI, Intervention Image.
- `package.json`: Bootstrap 5, Sass, Vite, Axios.

**Feature evidence:**

- Controllers: `PerintahGantiWarnaController`, `TemplateCleaningController`, `FormBongkarController`, `FormBongkarReviewController`, `QtyUsageReportController`.
- Models: `PerintahGantiWarna`, `TemplateCleaning`, `FormBongkar`, `ListCleaning`, `Mesin`, `CmbProduk`, `CmbOperator`.
- Migrations include color change orders, cleaning templates, cleaning lists, material quantity rules, required photos, verification status, operator assignment.
- Views: `operator/form-bongkar/*`, `manager/form-verifikasi/*`, `admin/template-cleaning/*`, `admin/reports/qty-usage.blade.php`.
- Assets include `public/img/foto-cleaning/*`.

**Portfolio angle:**

- Good supporting case for shop-floor workflow and photo evidence.
- Could be shown in "Additional Systems" rather than featured.

### 8. `mixing`

**Recommended title:** Mixing Method And Production Input System

**Business use case:** Mixing method management, PDF method documents, SPK/lot input history, resin/material classification, operator mixing pages, and Excel exports.

**Stack evidence:**

- `composer.json`: Laravel 12, PHP 8.2, Excel, Yajra DataTables.
- `package.json`: Tailwind CSS 4, Vite 7, Axios.

**Feature evidence:**

- Controllers: `MixingController`, `MixingMethodController`, `op_mixingController`, `BahanController`, `GranulController`, `MetodeController`.
- Service: `AllHistoryMethodeService`.
- Models: `MixingInput`, `MixingMethod`, `MixingMethod_khusus`, `MixingParameter`, `SearchHistory`, `Granul`, `bahan`, `powder`, `Produk`.
- Migrations include `mixing_inputs`, signed by, method signatures, remarks, production schedules.
- Views: `mixing/search.blade.php`, `mixing/input-history.blade.php`, `mixing/all-history.blade.php`, `mixing-methods/*`, `operator_mixing/*`, `bahan/pdf-view.blade.php`, `granul/pdf-view.blade.php`.

**Portfolio angle:**

- Good supporting project for process standardization, method control, SPK/lot history, and PDF document handling.
- Could be merged into production workflow skills or shown as additional system.

## Skill Mapping From Evidence

- **Laravel / PHP:** all eight target projects.
- **MySQL data modeling:** migration-heavy Laravel apps across production, maintenance, lab, and workflow domains.
- **Tailwind CSS:** `kasakata-cmb`, `kasakata-oee`, `kasakata_am`, `lab-dispatch-system`, `mixing`.
- **Bootstrap / AdminLTE:** `kasakata-gw`, `kasakata-pdr`.
- **Dashboard analytics:** OEE analysis views, PDR dashboard/reports, CMB QC/machine monitoring, K-Maint monitoring, Lab QC monitoring.
- **Excel export:** CMB, OEE, K-Maint, Lab Dispatch, Mixing, AM.
- **PDF generation / document handling:** `kasakata_am` via DomPDF, `mixing` PDF method files/views.
- **Google API / Google Sheet integration:** `kasakata-cmb`, `kasakata-oee`.
- **Role-based workflow:** admin/operator/leader/manager/QC/verifier/PPIC patterns across projects.
- **Manufacturing workflow:** CMB, OEE, PDR, GW, Mixing.
- **Maintenance workflow:** K-Maint and kasakata_am.
- **Lab workflow:** Lab Dispatch, CMB lab/QC, PDR lab details.
- **Traceability / lot / SPK:** CMB traceability/lead time/output tracking, OEE SPK search, Mixing SPK/lot, PDR lot/product.
- **Photo evidence:** GW cleaning photos, AM checklist images, K-Maint attachments/after photos.

## Impact Themes To Use In Portfolio

Use qualitative metrics unless real operational before-after numbers are provided.

- Reduced manual tracking dependency.
- Improved production and QC traceability.
- Faster daily, weekly, and monthly reporting.
- Centralized operational monitoring.
- Better approval and verification discipline.
- Improved maintenance follow-up visibility.
- Standardized shop-floor execution workflows.
- Better decision support for supervisors, QC, PPIC, and maintenance teams.

## Asset And Screenshot Plan

Existing assets are mostly logos, uploaded evidence images, attachments, and operational photos. For portfolio screenshots, the best result is to run each app locally and capture UI pages directly:

- `kasakata-cmb`: traceability, QC dashboard, machine monitoring, work order detail, urgent delivery tracking.
- `kasakata-oee`: OEE monitoring board, availability analysis, performance-quality analysis, top downtime.
- `K-Maint`: ticket monitoring, PM check execution, team monitoring, technician dashboard.
- `lab-dispatch-system`: board, QC dashboard, queue management, verifier dashboard, raw material approval.
- `kasakata-pdr`: daily report dashboard, NOC report, weekly/monthly report.
- `kasakata_am`: daily checks, inspection approval, maintenance tickets, preparation workflow.
- `kasakata-gw`: form bongkar, template cleaning, manager verification, qty usage report.
- `mixing`: method search, input history, all history, PDF method view.

Current portfolio implementation:

- Generated dashboard-style preview panels have been added to the portfolio UI so case studies have a visual layer while real screenshots are pending.
- These previews are not represented as real application screenshots.
- Real screenshots should replace or supplement the previews after each source application can be opened locally with safe credentials, database access, and non-sensitive sample data.

## Next Portfolio Implementation Tasks

1. Update `data/projects.ts` with verified titles, stacks, features, and evidence from this audit.
2. Promote featured projects to CMB, OEE, K-Maint, Lab Dispatch, PDR.
3. Move AM, GW, and Mixing into an "Additional Systems" section.
4. Update `portfolio-content-plan.md` using this evidence.
5. Capture screenshots from local apps if credentials and database access are available.
6. Add real operational metrics only if before/after measurements are available.
7. Keep `data/projects.ts`, `portfolio-content-plan.md`, and `public/ridbar-resume.md` synchronized when project evidence changes.
