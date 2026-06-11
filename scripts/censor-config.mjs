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
    filename: "cmb-spk-wo-monitoring.png",
    regions: [
      // Table data rows – Nama Produk column
      { x: 0.315, y: 0.617, w: 0.060, h: 0.200, type: "blur" },
      // Table data rows – Lot Number column
      { x: 0.365, y: 0.617, w: 0.053, h: 0.200, type: "blur" },
      // Table data rows – Qty column
      { x: 0.411, y: 0.617, w: 0.025, h: 0.200, type: "blur" },
      // Table data rows – Operator column (IHSAN)
      { x: 0.485, y: 0.617, w: 0.060, h: 0.200, type: "blur" },
    ]
  },
  {
    filename: "cmb-spk-detail.png",
    regions: [
      // Produk column (KASATHYLEN VIOLET FC4351...)
      { x: 0.229, y: 0.280, w: 0.125, h: 0.510, type: "blur" },
      // Mesin column (HENSCHELL, MIXER, CC 40 B, TIMBANGAN)
      { x: 0.352, y: 0.280, w: 0.115, h: 0.510, type: "blur" },
      // Lot Number column
      { x: 0.460, y: 0.280, w: 0.065, h: 0.510, type: "blur" },
      // Qty column
      { x: 0.525, y: 0.280, w: 0.032, h: 0.510, type: "blur" },
      // Operator column (IHSAN, DEDI KURNIA, WAWAN SETIAWAN, YUDI HERMAWAN, DIKA MAULANA)
      { x: 0.610, y: 0.280, w: 0.100, h: 0.510, type: "blur" },
    ]
  },
  {
    filename: "cmb-schedule.png",
    regions: [
      // Product names in complain banner at top
      { x: 0.145, y: 0.078, w: 0.630, h: 0.085, type: "blur" },
      // Product names in schedule cards (row 1)
      { x: 0.228, y: 0.462, w: 0.580, h: 0.175, type: "blur" },
      // Product names in schedule cards (row 2)
      { x: 0.228, y: 0.741, w: 0.580, h: 0.060, type: "blur" },
    ]
  },
  {
    filename: "cmb-output-tracking.png",
    regions: [
      // Total qty metrics at top (4 stat boxes)
      { x: 0.443, y: 0.085, w: 0.560, h: 0.085, type: "blur" },
      // Data table – Produk column
      { x: 0.242, y: 0.470, w: 0.065, h: 0.350, type: "blur" },
      // Data table – Lot Number column
      { x: 0.303, y: 0.470, w: 0.060, h: 0.350, type: "blur" },
      // Data table – Mesin column
      { x: 0.359, y: 0.470, w: 0.050, h: 0.350, type: "blur" },
      // Data table – Qty (kg) column
      { x: 0.452, y: 0.470, w: 0.035, h: 0.350, type: "blur" },
      // Data table – PIC Granule column (farid)
      { x: 0.698, y: 0.470, w: 0.055, h: 0.350, type: "blur" },
    ]
  },
  {
    filename: "cmb-machine-monitoring-real.png",
    regions: [
      // Row 2 running machines – product names, lot numbers, qty, operator
      // HES 90 card
      { x: 0.006, y: 0.360, w: 0.188, h: 0.180, type: "blur" },
      // LSM card
      { x: 0.200, y: 0.360, w: 0.188, h: 0.180, type: "blur" },
      // STS 50 B card
      { x: 0.590, y: 0.360, w: 0.188, h: 0.180, type: "blur" },
      // CC 40 A card
      { x: 0.785, y: 0.415, w: 0.210, h: 0.130, type: "blur" },
      // Row 3 – cards with product info
      // CC 40 B card
      { x: 0.006, y: 0.620, w: 0.188, h: 0.150, type: "blur" },
      // CC 40 C card
      { x: 0.200, y: 0.620, w: 0.188, h: 0.150, type: "blur" },
      // KTE 36 B1 card
      { x: 0.395, y: 0.620, w: 0.188, h: 0.150, type: "blur" },
      // KTE 36 B2 card
      { x: 0.590, y: 0.580, w: 0.188, h: 0.200, type: "blur" },
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
    filename: "kmaint-ticket-monitoring-real.png",
    regions: [
      // Open column – ticket content with person names
      { x: 0.155, y: 0.190, w: 0.125, h: 0.620, type: "blur" },
      // Assigned column
      { x: 0.290, y: 0.190, w: 0.125, h: 0.620, type: "blur" },
      // Pending column
      { x: 0.420, y: 0.190, w: 0.125, h: 0.620, type: "blur" },
      // Request to Close column
      { x: 0.555, y: 0.190, w: 0.125, h: 0.620, type: "blur" },
      // Closed column – machine names + person names (Gunawan, Joko Sarwono etc)
      { x: 0.685, y: 0.190, w: 0.315, h: 0.620, type: "blur" },
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
    filename: "kmaint-preventive-maintenance.png",
    regions: [
      // Machine name in header (LODIGE MIXER 3000 L)
      { x: 0.146, y: 0.160, w: 0.145, h: 0.028, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Lab Dispatch QC
  // ─────────────────────────────────────────────
  {
    filename: "lab-dispatch-qc-dashboard-real.png",
    regions: [
      // In Progress Incoming column – sample names, lot numbers, operator names
      { x: 0.306, y: 0.190, w: 0.143, h: 0.620, type: "blur" },
      // In Progress Pss Alternatif column
      { x: 0.477, y: 0.190, w: 0.143, h: 0.620, type: "blur" },
      // In Progress Complain column – product name, lot
      { x: 0.636, y: 0.190, w: 0.160, h: 0.620, type: "blur" },
    ]
  },
  {
    filename: "lab-dispatch-sample-report.png",
    regions: [
      // Left sidebar product names list (KASATHYLEN VIOLET, KASALEN GREEN, KASALEN YELLOW, etc.)
      { x: 0.128, y: 0.270, w: 0.150, h: 0.560, type: "blur" },
      // Modal – Nama Mesin value (LSM)
      { x: 0.400, y: 0.165, w: 0.115, h: 0.025, type: "blur" },
      // Bottom table row with product name, lot, operator name (Ilham M)
      { x: 0.197, y: 0.785, w: 0.340, h: 0.030, type: "blur" },
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
    filename: "lab-dispatch-qc-sample.png",
    regions: [
      // Sample data row – product name (KASALEN YELLOW) + lot number + batch
      { x: 0.290, y: 0.686, w: 0.400, h: 0.085, type: "blur" },
    ]
  },

  // ─────────────────────────────────────────────
  // Production Daily Reporting
  // ─────────────────────────────────────────────
  {
    filename: "pdr-extrusion-report.png",
    regions: [
      // Leaderboard names section on right (Sukimin, Zein, Lutfi)
      { x: 0.524, y: 0.072, w: 0.270, h: 0.175, type: "blur" },
      // Leaderboard bar chart with operator names
      { x: 0.524, y: 0.345, w: 0.270, h: 0.370, type: "blur" },
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
    filename: "am-form-history.png",
    regions: [
      // Produk & Lot column (KASALEN VIOLET FC4207, KASALEN FL PINK, KASALEN BLUE etc.)
      { x: 0.302, y: 0.350, w: 0.115, h: 0.455, type: "blur" },
      // Operator column (Dedi Kurnia, Muhamad Rinaldi, Yuliawan, Feri, Suharto)
      { x: 0.475, y: 0.350, w: 0.070, h: 0.455, type: "blur" },
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
    filename: "gw-execution.png",
    regions: [
      // Produk Awal – product name + lot (KASALEN BLUE FC5688² | NT17613K14W)
      { x: 0.123, y: 0.262, w: 0.230, h: 0.032, type: "blur" },
      // Produk Akhir – product name + lot (KASALEN BLUE FC5151² | NT17401G00)
      { x: 0.350, y: 0.262, w: 0.205, h: 0.032, type: "blur" },
      // Operator name (ABDUL RAHMAN)
      { x: 0.460, y: 0.358, w: 0.150, h: 0.028, type: "blur" },
      // Nama Operator in table at bottom (ABDUL RAHMAN)
      { x: 0.615, y: 0.775, w: 0.075, h: 0.030, type: "blur" },
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
    filename: "mixing-method-report.png",
    regions: [
      // No SPK column
      { x: 0.223, y: 0.445, w: 0.065, h: 0.370, type: "blur" },
      // Nama Produk column (KASATHYLEN YELLOW, KASALEN YELLOW)
      { x: 0.284, y: 0.445, w: 0.095, h: 0.370, type: "blur" },
      // Lot Number column
      { x: 0.380, y: 0.445, w: 0.062, h: 0.370, type: "blur" },
      // Remark column (contains material composition info)
      { x: 0.460, y: 0.445, w: 0.310, h: 0.370, type: "blur" },
    ]
  },
];
