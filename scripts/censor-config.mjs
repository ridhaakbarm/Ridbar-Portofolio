/**
 * Censor configuration for portfolio screenshots.
 *
 * Each entry defines blur regions for a single screenshot file.
 * Coordinates use PROPORTIONAL values (0.0 to 1.0) relative to
 * image dimensions. The script converts these to actual pixel
 * coordinates at runtime using Sharp metadata.
 *
 * type:
 *   "blur"   – Gaussian blur (keeps shape/color hint)
 *   "redact" – Solid rectangle fill (fully opaque)
 */

export const censorConfig = [
  // ─────────────────────────────────────────────
  // CMB Manufacturing Execution
  // ─────────────────────────────────────────────
  {
    // Image: 1880x995 – SPK WO Monitoring Board
    // Sensitive columns: Produk Name, Lot Number, Qty, Operator
    filename: "cmb-spk-wo-monitoring.png",
    regions: [
      // Big blur over the data columns: from column headers to bottom
      // Covers: Tahapan, Produk, Lot, Qty, Mesin, Operator
      { x: 0.270, y: 0.590, w: 0.450, h: 0.260, type: "blur" },
    ]
  },
  {
    // Image: 1885x1002 – SPK Detail (Tahapan table, 7 rows)
    // Need to cover: Produk, Mesin, Lot Number, Qty, Operator for ALL 7 rows
    filename: "cmb-spk-detail.png",
    regions: [
      // One big region covering all sensitive columns from row 1 to row 7
      // From Produk column start to Operator column end
      { x: 0.190, y: 0.210, w: 0.700, h: 0.520, type: "blur" },
    ]
  },
  {
    // Image: 1884x1009 – Production Schedule
    filename: "cmb-schedule.png",
    regions: [
      // Product names in complain banner at top
      { x: 0.145, y: 0.060, w: 0.650, h: 0.100, type: "blur" },
      // Product names in schedule cards (both rows)
      { x: 0.220, y: 0.440, w: 0.600, h: 0.360, type: "blur" },
    ]
  },
  {
    // Image: 1870x1000 – Output Tracking
    // Sensitive: Produk, Lot, Mesin, Qty, PIC columns
    filename: "cmb-output-tracking.png",
    regions: [
      // Total qty metrics bar at top
      { x: 0.430, y: 0.060, w: 0.570, h: 0.110, type: "blur" },
      // Entire data table area covering sensitive columns
      { x: 0.230, y: 0.390, w: 0.650, h: 0.430, type: "blur" },
    ]
  },
  {
    // Image: 1904x1060 – Machine Monitoring (card layout)
    filename: "cmb-machine-monitoring-real.png",
    regions: [
      // Row 2 – all 4 machine cards data
      { x: 0.006, y: 0.340, w: 0.995, h: 0.220, type: "blur" },
      // Row 3 – all machine cards data
      { x: 0.006, y: 0.570, w: 0.995, h: 0.220, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // OEE Production Monitoring
  // ─────────────────────────────────────────────
  {
    filename: "oee-dashboard-real.png",
    regions: []
  },
  {
    filename: "oee-dashboard-grafik.png",
    regions: []
  },
  {
    filename: "oee-performance-analysis.png",
    regions: []
  },

  // ─────────────────────────────────────────────
  // K-Maint Maintenance
  // ─────────────────────────────────────────────
  {
    // Image: 1873x1002 – Ticket Monitoring (Kanban board)
    filename: "kmaint-ticket-monitoring-real.png",
    regions: [
      // All kanban columns content area (names, ticket details)
      { x: 0.140, y: 0.180, w: 0.860, h: 0.640, type: "blur" },
    ]
  },
  {
    filename: "kmaint-technician-utility-monitoring.png",
    regions: []
  },
  {
    filename: "kmaint-create-ticket.png",
    regions: []
  },
  {
    // Image: 1878x1000
    filename: "kmaint-preventive-maintenance.png",
    regions: [
      // Machine name in header
      { x: 0.130, y: 0.145, w: 0.170, h: 0.045, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Lab Dispatch QC
  // ─────────────────────────────────────────────
  {
    // Image: 1878x994 – QC Dashboard (Kanban board)
    filename: "lab-dispatch-qc-dashboard-real.png",
    regions: [
      // All kanban card content columns
      { x: 0.290, y: 0.135, w: 0.520, h: 0.680, type: "blur" },
    ]
  },
  {
    // Image: 1884x954
    filename: "lab-dispatch-sample-report.png",
    regions: [
      // Left sidebar product names list
      { x: 0.120, y: 0.250, w: 0.165, h: 0.580, type: "blur" },
      // Modal area – product info
      { x: 0.380, y: 0.140, w: 0.280, h: 0.055, type: "blur" },
      // Bottom table row with product, lot, operator
      { x: 0.190, y: 0.770, w: 0.360, h: 0.050, type: "blur" },
    ]
  },
  {
    filename: "lab-dispatch-create-sample-qc.png",
    regions: []
  },
  {
    filename: "lab-dispatch-input-sample-qc.png",
    regions: []
  },
  {
    // Image: 1910x1047
    filename: "lab-dispatch-qc-sample.png",
    regions: [
      // Sample data row
      { x: 0.270, y: 0.670, w: 0.430, h: 0.100, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Production Daily Reporting
  // ─────────────────────────────────────────────
  {
    // Image: 1880x996
    filename: "pdr-extrusion-report.png",
    regions: [
      // Entire right panel – leaderboard names + chart
      { x: 0.510, y: 0.050, w: 0.490, h: 0.690, type: "blur" },
    ]
  },
  {
    filename: "pdr-mixing-report.png",
    regions: []
  },

  // ─────────────────────────────────────────────
  // Autonomous Maintenance
  // ─────────────────────────────────────────────
  {
    filename: "am-dashboard-real.png",
    regions: []
  },
  {
    filename: "am-checklist.png",
    regions: []
  },
  {
    // Image: 1891x990 – Form History table
    // Sensitive: Produk & Lot, Operator columns
    filename: "am-form-history.png",
    regions: [
      // Produk & Lot + Tanggal + Operator columns combined
      { x: 0.300, y: 0.300, w: 0.450, h: 0.530, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Color Change / Ganti Warna
  // ─────────────────────────────────────────────
  {
    filename: "gw-create-order.png",
    regions: []
  },
  {
    // Image: 1896x989 – GW Execution form
    filename: "gw-execution.png",
    regions: [
      // Produk Awal + Produk Akhir fields area (both products in one region)
      { x: 0.115, y: 0.240, w: 0.550, h: 0.065, type: "blur" },
      // Operator field (ABDUL RAHMAN)
      { x: 0.450, y: 0.340, w: 0.250, h: 0.055, type: "blur" },
      // Bottom table NAMA OPERATOR cell
      { x: 0.600, y: 0.760, w: 0.250, h: 0.050, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Mixing Method
  // ─────────────────────────────────────────────
  {
    filename: "mixing-check-method.png",
    regions: []
  },
  {
    // Image: 1885x1007 – Method Report table
    filename: "mixing-method-report.png",
    regions: [
      // SPK + Produk + Lot + Remark columns (wide combined)
      { x: 0.215, y: 0.430, w: 0.560, h: 0.400, type: "blur" },
    ]
  },
];
