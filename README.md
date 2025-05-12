# 🧪 Playwright Saucedemo E2E

This repository contains end-to-end (E2E) UI tests for [SauceDemo](https://www.saucedemo.com) built using [Playwright](https://playwright.dev/).

## 🚀 Features

- Login flow test
- Add product to cart
- View and verify cart contents
- Logout functionality

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/SaifKhalifa/playwright-saucedemo-e2e.git
cd playwright-saucedemo-e2e
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run in headed mode (UI visible):

```bash
npx playwright test --headed
```

## 📊 Test Report

To open the latest HTML report:

```bash
npx playwright show-report
```

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/)
- Node.js
- TypeScript

## ✍️ Author

Saif Khalifa – [@SaifKhalifa](https://github.com/SaifKhalifa)

---

**Note:** Default credentials used for the test:
- **Username:** `user_saif`
- **Password:** `saifsaifsaif`