import { chromium } from "playwright-core";
import fs from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "public", "screenshots");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const apps = [
  {
    key: "cmb",
    base: "http://127.0.0.1:8011",
    login: { path: "/login", userField: "iduser", passField: "password", user: "admin", pass: "kasakata" },
    shots: [
      ["dashboard", "/layouts"],
      ["work-orders", "/work-orders-cmb"],
      ["qc-dashboard", "/qc-dashboard"],
      ["machine-monitoring", "/machine-monitoring"],
      ["traceability", "/traceability"]
    ]
  },
  {
    key: "oee",
    base: "http://127.0.0.1:8012",
    login: { path: "/login", userField: "iduser", passField: "password", user: "admin", pass: "kasakata" },
    shots: [
      ["dashboard", "/layouts"],
      ["monitoring-board", "/laporan/oee/monitoring-board"],
      ["availability", "/analisa/oee/availability"],
      ["top-downtime", "/analisa/oee/top-downtime"]
    ]
  },
  {
    key: "lab-dispatch",
    base: "http://127.0.0.1:8013",
    shots: [
      ["board", "/"],
      ["sample-create", "/sample/create"]
    ]
  },
  {
    key: "k-maint",
    base: "http://127.0.0.1:8018",
    login: { path: "/login", userField: "username", passField: "password", user: "portfolio_capture", pass: "password" },
    shots: [
      ["dashboard", "/dashboard"],
      ["ticket-monitoring", "/tickets/monitoring-tiket"],
      ["team-monitoring", "/monitoring/team"],
      ["pm-checks", "/pm-checks/list/weekly"]
    ]
  },
  {
    key: "pdr",
    base: "http://127.0.0.1:8014",
    login: { path: "/login", userField: "username", passField: "password", user: "manager", pass: "password" },
    shots: [
      ["dashboard", "/dashboard"],
      ["daily-reports", "/daily-reports"],
      ["weekly-report", "/reports/weekly"],
      ["noc-summary", "/noc-report/summary"]
    ]
  },
  {
    key: "am",
    base: "http://127.0.0.1:8015",
    shots: [
      ["home", "/"],
      ["daily-checks", "/daily-checks"],
      ["maintenance-tickets", "/maintenance-tickets"]
    ]
  },
  {
    key: "gw",
    base: "http://127.0.0.1:8016",
    shots: [
      ["home", "/"],
      ["template-cleaning", "/admin/template-cleaning"],
      ["form-bongkar", "/operator/form-bongkar"]
    ]
  },
  {
    key: "mixing",
    base: "http://127.0.0.1:8017",
    shots: [
      ["home", "/"],
      ["search", "/mixing/search"],
      ["input-history", "/mixing/input-history"]
    ]
  }
];

async function fillFirst(page, selectors, value) {
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.count()) {
      await locator.fill(value);
      return true;
    }
  }
  return false;
}

async function loginIfNeeded(page, app) {
  if (!app.login) return;
  await page.goto(app.base + app.login.path, { waitUntil: "networkidle", timeout: 45000 });
  await fillFirst(page, [`input[name="${app.login.userField}"]`, "input[type='text']", "input[type='email']"], app.login.user);
  await fillFirst(page, [`input[name="${app.login.passField}"]`, "input[type='password']"], app.login.pass);
  const submit = page.locator("button[type='submit'], input[type='submit'], button").first();
  if (await submit.count()) {
    await Promise.allSettled([
      page.waitForLoadState("networkidle", { timeout: 15000 }),
      submit.click()
    ]);
  }
}

async function capture(page, app, name, route) {
  const url = app.base + route;
  const filename = `${app.key}-${name}.png`;
  const filePath = path.join(outputDir, filename);
  let status = "ok";
  try {
    const response = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    const code = response?.status();
    if (code && code >= 400) status = `http-${code}`;
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: filePath, fullPage: false });
  } catch (error) {
    status = `error: ${error.message}`;
  }
  return { app: app.key, name, route, filename, finalUrl: page.url(), status };
}

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

const results = [];
for (const app of apps) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);

  try {
    await loginIfNeeded(page, app);
  } catch (error) {
    results.push({ app: app.key, name: "login", route: app.login?.path ?? "", filename: "", finalUrl: page.url(), status: `login-error: ${error.message}` });
  }

  for (const [name, route] of app.shots) {
    results.push(await capture(page, app, name, route));
  }
  await context.close();
}

await browser.close();
await fs.writeFile(path.join(outputDir, "capture-results.json"), JSON.stringify(results, null, 2));
console.table(results);
