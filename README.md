# Playwright Automation Test Project

## 1. Overview

This project is an **End-to-End (E2E) automation testing framework** built with **Playwright + TypeScript**.  
It is designed to verify core business flows of the **Automation Exercise** website, ensuring system stability and preventing regressions.

The framework focuses on:
- Clear structure
- High maintainability
- Scalability for future test cases
- Seamless CI/CD integration

---

## 2. Test Objectives

- ✅ Validate critical user journeys
- 🔁 Prevent regression issues
- 🚀 Automate repetitive manual test cases
- 📊 Provide clear and reliable test reports
- 🧹 Maintain clean, reusable, and readable test code

---

## 3. Test Scope

### Covered Functionalities

#### Authentication
- Register new user
- Login with valid credentials
- Login with invalid credentials
- Logout user
- Register with existing email

#### Product & Cart
- View all products
- View product details
- Search product
- Add products to cart
- Verify product quantity
- Remove products from cart
- View category products
- View brand products
- Add product review
- Add to cart from recommended items

#### Checkout & Order
- Place order (Register during checkout)
- Place order (Register before checkout)
- Place order (Login before checkout)
- Verify address details on checkout page
- Download invoice after purchase

#### UI / UX & Others
- Verify subscription on Home page
- Verify subscription on Cart page
- Contact Us form
- Verify scroll up/down functionality

---

## 4. Test Approach

- **End-to-End testing** simulating real user behavior
- **Page Object Model (POM)** to separate:
  - Page actions
  - Test logic
- **Feature-based folder structure**
- Reusable fixtures, helpers, and base classes
- Stable locators (`role`, `data-qa`, text)

---

## 5. Project Structure

```text
.
├─ src/
│  ├─ shared/
│  │  ├─ base/          # BasePage, BaseTest
│  │  ├─ fixtures/      # User / Guest fixtures
│  │  ├─ helpers/       # Common helpers (scroll, network, data)
│  │  └─ types/         # Global TypeScript types
│  ├─ features/
│  │  ├─ auth/
│  │  ├─ home/
│  │  ├─ product/
│  │  ├─ cart/
│  │  ├─ checkout/
│  │  └─ contact/
│
├─ tests/
│  ├─ smoke.spec.ts
│  └─ regression.spec.ts
│
├─ config/
│  ├─ env.ts
│  ├─ projects.ts
│  └─ reporter.ts
│
├─ ci/
│  └─ github-actions.yml
│
├─ .env
├─ playwright.config.ts
└─ README.md
````

---

## 6. Technologies Used

### Automation Framework

* **Playwright**

### Language

* **TypeScript**

### Runtime & Package Manager

* **Node.js v18 (LTS)**
* **npm**

### CI / CD

* **GitHub Actions**

### Reporting

* **Playwright HTML Report**

---

## 7. Test Environment

* **Base URL**: [https://automationexercise.com](https://automationexercise.com)
* **Browsers**:

  * Chromium (default)
  * Firefox / WebKit (optional)
* Environment variables managed via `.env`

---

## 8. Setup & Installation

### Step 1: Initialize Playwright Project

```bash
npm init playwright@latest
```

> Recommended environment:

* Node.js v18 (LTS)
* TypeScript
* Playwright Test Runner

### Step 2: Create Source Structure

#### Create root folders

```bash
mkdir -p config src ci
```

#### Shared modules

```bash
mkdir -p src/shared/{base,fixtures,helpers,types}
touch src/shared/base/{BasePage.ts,BaseTest.ts}
touch src/shared/fixtures/{user.fixture.ts,guest.fixture.ts}
touch src/shared/helpers/{selectors.ts,network.ts,scroll.ts,data.ts}
touch src/shared/types/user.d.ts
```

#### Feature folders

```bash
mkdir -p src/features/{auth,home,product,cart,checkout,contact}
```

---

#### Auth feature

```bash
mkdir -p src/features/auth/{pages,data,tests}
touch src/features/auth/pages/AuthPage.ts
touch src/features/auth/data/user.factory.ts
touch src/features/auth/tests/{register.spec.ts,login.spec.ts}
```

#### Home feature

```bash
mkdir -p src/features/home/{pages,tests}
touch src/features/home/pages/HomePage.ts
touch src/features/home/tests/{subscription.spec.ts,scroll.spec.ts}
```

#### Product feature

```bash
mkdir -p src/features/product/{pages,tests}
touch src/features/product/pages/{ProductListPage.ts,ProductDetailPage.ts}
touch src/features/product/tests/{product-list.spec.ts,search.spec.ts,review.spec.ts}
```

#### Cart feature

```bash
mkdir -p src/features/cart/{pages,tests}
touch src/features/cart/pages/CartPage.ts
touch src/features/cart/tests/{add-to-cart.spec.ts,quantity.spec.ts,remove.spec.ts}
```

#### Checkout feature

```bash
mkdir -p src/features/checkout/{pages,tests}
touch src/features/checkout/pages/CheckoutPage.ts
touch src/features/checkout/tests/{checkout-register.spec.ts,checkout-login.spec.ts,address.spec.ts,invoice.spec.ts}
```

#### Contact feature

```bash
mkdir -p src/features/contact/{pages,tests}
touch src/features/contact/pages/ContactPage.ts
touch src/features/contact/tests/contact-us.spec.ts
```

---

#### Test suites

```bash
touch tests/{smoke.spec.ts,regression.spec.ts}
```

#### Configuration & CI

```bash
touch config/{env.ts,projects.ts,reporter.ts}
touch ci/github-actions.yml
touch .env
```

### 🔧 Step 3: Configure TypeScript Path Alias (`tsconfig.json`)

To enable clean imports using path alias such as `@/shared/...`, we need to configure **TypeScript path mapping**.

#### Create `tsconfig.json` at project root

```bash
touch tsconfig.json
```

#### Add the following configuration

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "strict": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    "types": ["node", "playwright"]
  },
  "include": [
    "src",
    "tests",
    "playwright.config.ts"
  ]
}
```

#### Purpose of this configuration

* `baseUrl` + `paths`
  → Allow using absolute imports like:

  ```ts
  import { BasePage } from '@/shared/base/BasePage';
  ```

* Avoid long relative paths such as:

  ```ts
  ../../../shared/base/BasePage
  ```

* Improve:

  * Code readability
  * Refactor safety
  * Scalability for large projects

> ⚠️ After creating or updating `tsconfig.json`, restart TypeScript Server in VSCode:
>
> `Cmd + Shift + P` → **TypeScript: Restart TS Server**
