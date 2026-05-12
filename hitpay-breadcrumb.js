(function () {
  if (window.__hpBreadcrumbInit) return;
  window.__hpBreadcrumbInit = true;

  var SITE = "https://hitpayapp.com";
  var LOCALES = { "sg": "Singapore", "my": "Malaysia", "ph": "Philippines" };
  var SKIP = /^\/(404|privacy-policy|terms-of-service|acceptable-use-policy|merchant-service-agreement|act-on-specified-commercial-transactions|license-registrations|resources\/trust-compliance|cal\.com)$/;

  var R = {
    "/":                          { name: "HitPay",                       parent: null },

    // Online Payments cluster
    "/payment-gateway":           { name: "Online Payments",              parent: "/" },
    "/payment-links":             { name: "Payment Links",                parent: "/payment-gateway" },
    "/recurring-billing":         { name: "Recurring Billing",            parent: "/payment-gateway" },
    "/invoicing":                 { name: "Invoicing",                    parent: "/payment-gateway" },
    "/free-invoice-generator":    { name: "Free Invoice Generator",       parent: "/invoicing" },
    "/paymentapis":               { name: "Payment APIs",                 parent: "/payment-gateway" },
    "/pricecal-hitpay-payment-api": { name: "API Pricing Calculator",     parent: "/paymentapis" },
    "/cross-border-payments":     { name: "Cross-Border Payments",        parent: "/payment-gateway" },
    "/remittance-api-cross-border-payouts": { name: "Remittance API",     parent: "/cross-border-payments" },
    "/multi-currency-ecommerce-pricing":    { name: "Multi-Currency Pricing", parent: "/cross-border-payments" },
    "/bangladesh-payout-api":     { name: "Bangladesh Payout API",        parent: "/cross-border-payments" },
    "/philippines-payout-api":    { name: "Philippines Payout API",       parent: "/cross-border-payments" },
    "/ewallets-recurring-payments-subscriptions": { name: "E-Wallet Subscriptions", parent: "/recurring-billing" },

    // In-Person Payments cluster
    "/card-terminal":             { name: "In-Person Payments",           parent: "/" },
    "/terminals":                 { name: "Card Terminals",               parent: "/card-terminal" },
    "/tap-to-pay-singapore":      { name: "Tap to Pay (Singapore)",       parent: "/card-terminal" },
    "/tap-to-pay-malaysia":       { name: "Tap to Pay (Malaysia)",        parent: "/card-terminal" },
    "/tap-to-pay-android-singapore": { name: "Tap to Pay Android (SG)",   parent: "/card-terminal" },
    "/tap-to-pay-android-malaysia":  { name: "Tap to Pay Android (MY)",   parent: "/card-terminal" },
    "/payment-soundbox":          { name: "Soundbox",                     parent: "/card-terminal" },
    "/payment-soundbox-philippines": { name: "Soundbox (Philippines)",    parent: "/payment-soundbox" },
    "/paynow-alerts-soundbox-singapore": { name: "PayNow Soundbox (SG)",  parent: "/payment-soundbox" },
    "/static-qr":                 { name: "Static QR",                    parent: "/card-terminal" },
    "/donation-kiosk":            { name: "Donation Kiosk",               parent: "/card-terminal" },
    "/donation-link":             { name: "Donation Link",                parent: "/payment-links" },

    // Software
    "/pos-software":              { name: "POS Software",                 parent: "/" },
    "/online-store":              { name: "Online Store",                 parent: "/" },
    "/ecommerce-website-builder": { name: "Ecommerce Website Builder",    parent: "/online-store" },
    "/free-ecommerce-website-templates": { name: "Free Ecommerce Templates", parent: "/online-store" },

    // Templates
    "/beauty-salon-website-design":      { name: "Beauty Salon Template",      parent: "/free-ecommerce-website-templates" },
    "/digital-product-website-template": { name: "Digital Product Template",   parent: "/free-ecommerce-website-templates" },
    "/donation-website-template":        { name: "Donation Template",          parent: "/free-ecommerce-website-templates" },
    "/event-booking-website-template":   { name: "Event Booking Template",     parent: "/free-ecommerce-website-templates" },
    "/fashion-website-template":         { name: "Fashion Template",           parent: "/free-ecommerce-website-templates" },
    "/fitness-website-design-template":  { name: "Fitness Template",           parent: "/free-ecommerce-website-templates" },
    "/food-ecommerce-website-template":  { name: "Food Ecommerce Template",    parent: "/free-ecommerce-website-templates" },
    "/merch-store-design-template":      { name: "Merch Store Template",       parent: "/free-ecommerce-website-templates" },
    "/travel-website-design":            { name: "Travel Template",            parent: "/free-ecommerce-website-templates" },

    // Solutions
    "/solutions/b2b-invoicing-and-payment-solutions":         { name: "B2B Invoicing",          parent: "/" },
    "/solutions/ecommerce":                                    { name: "Ecommerce",             parent: "/" },
    "/solutions/education-payment-solutions":                  { name: "Education",             parent: "/" },
    "/solutions/electronics-store-payment-solutions":          { name: "Electronics Store",     parent: "/" },
    "/solutions/event-and-wedding-payment-solutions":          { name: "Events & Weddings",     parent: "/" },
    "/solutions/fitness-and-gym-payment-solutions":            { name: "Fitness & Gym",         parent: "/" },
    "/solutions/furniture-and-home-living-payment-solutions":  { name: "Furniture & Home Living", parent: "/" },
    "/solutions/nonprofit-donation-platform":                  { name: "Nonprofit",             parent: "/" },
    "/solutions/restaurant-payment-solutions":                 { name: "Restaurant",            parent: "/" },
    "/solutions/retail":                                       { name: "Retail",                parent: "/" },
    "/solutions/travel-payment-solutions":                     { name: "Travel",                parent: "/" },
    "/solutions/wellness-payment-solutions":                   { name: "Wellness",              parent: "/" },

    // Integrations
    "/integrations":              { name: "Integrations",                 parent: "/" },
    "/shopify":                   { name: "Shopify",                      parent: "/integrations" },
    "/woocommerce":               { name: "WooCommerce",                  parent: "/integrations" },
    "/magento":                   { name: "Magento",                      parent: "/integrations" },
    "/opencart":                  { name: "OpenCart",                     parent: "/integrations" },
    "/wix":                       { name: "Wix",                          parent: "/integrations" },
    "/wix-ecommerce-integration-singapore": { name: "Wix (Singapore)",    parent: "/wix" },
    "/wix-payment-gateway-malaysia":        { name: "Wix (Malaysia)",     parent: "/wix" },
    "/wix-payments-philippines":            { name: "Wix (Philippines)",  parent: "/wix" },
    "/ecwid":                     { name: "Ecwid",                        parent: "/integrations" },
    "/shoplazza":                 { name: "Shoplazza",                    parent: "/integrations" },
    "/shoplazza-cn":              { name: "Shoplazza (CN)",               parent: "/shoplazza" },
    "/shopcada":                  { name: "Shopcada",                     parent: "/integrations" },
    "/sitegiant":                 { name: "SiteGiant",                    parent: "/integrations" },
    "/simplybookme":              { name: "SimplyBook.me",                parent: "/integrations" },
    "/google-forms-plugins":      { name: "Google Forms",                 parent: "/integrations" },
    "/zapier":                    { name: "Zapier",                       parent: "/integrations" },
    "/xero":                      { name: "Xero",                         parent: "/integrations" },
    "/hitpay-eber-integration":   { name: "Eber",                         parent: "/integrations" },
    "/shopping-mall-gto-integration":                       { name: "Shopping Mall GTO",        parent: "/integrations" },
    "/payment-gateway-reseller-malaysia-pos-integration":   { name: "POS Reseller (Malaysia)",  parent: "/integrations" },
    "/payid-integration":         { name: "PayID Integration",            parent: "/integrations" },

    // Payment methods
    "/paynow":                    { name: "PayNow",                       parent: "/payment-gateway" },
    "/gcash":                     { name: "GCash",                        parent: "/payment-gateway" },
    "/grabpay":                   { name: "GrabPay",                      parent: "/payment-gateway" },
    "/shopeepay":                 { name: "ShopeePay",                    parent: "/payment-gateway" },
    "/wechatpay":                 { name: "WeChat Pay",                   parent: "/payment-gateway" },
    "/alipay-plus":               { name: "Alipay+",                      parent: "/payment-gateway" },
    "/duitnow":                   { name: "DuitNow",                      parent: "/payment-gateway" },
    "/accept-duitnow-qr-payments":{ name: "DuitNow QR",                   parent: "/duitnow" },
    "/qr-ph":                     { name: "QR Ph",                        parent: "/payment-gateway" },
    "/qris":                      { name: "QRIS",                         parent: "/payment-gateway" },
    "/upi":                       { name: "UPI",                          parent: "/payment-gateway" },
    "/hitpay-upi-singapore":      { name: "UPI (Singapore)",              parent: "/upi" },
    "/paylah":                    { name: "PayLah",                       parent: "/payment-gateway" },
    "/giro":                      { name: "GIRO",                         parent: "/payment-gateway" },
    "/touch-n-go":                { name: "Touch 'n Go",                  parent: "/payment-gateway" },
    "/atome-sg":                  { name: "Atome (Singapore)",            parent: "/bnpl-singapore" },
    "/atome-my":                  { name: "Atome (Malaysia)",             parent: "/bnpl-malaysia" },
    "/atome-qr-code-in-person-payments": { name: "Atome QR (In-Person)",  parent: "/card-terminal" },
    "/spaylater":                 { name: "SPayLater",                    parent: "/bnpl-singapore" },
    "/spaylater-philippines":     { name: "SPayLater (PH)",               parent: "/bnpl-philippines" },
    "/paylater-grab":             { name: "PayLater by Grab",             parent: "/payment-gateway" },
    "/shopback":                  { name: "ShopBack",                     parent: "/payment-gateway" },
    "/billease":                  { name: "BillEase",                     parent: "/bnpl-philippines" },
    "/bnpl-singapore":            { name: "BNPL Singapore",               parent: "/payment-gateway" },
    "/bnpl-malaysia":             { name: "BNPL Malaysia",                parent: "/payment-gateway" },
    "/bnpl-philippines":          { name: "BNPL Philippines",             parent: "/payment-gateway" },
    "/japan-payment-gateway-singapore": { name: "Japan Payments (SG)",    parent: "/cross-border-payments" },
    "/korean-ewallet-payment-gateway":  { name: "Korean E-Wallets",       parent: "/cross-border-payments" },
    "/accept-zalopay-vietqr-vietnam":   { name: "ZaloPay / VietQR",       parent: "/cross-border-payments" },
    "/hitpay-borderless-qr-payments":   { name: "Borderless QR",          parent: "/cross-border-payments" },

    // Pricing
    "/pricing":                   { name: "Pricing",                      parent: "/" },
    "/pricing/global":            { name: "Global Pricing",               parent: "/pricing" },
    "/stripe-alternative":        { name: "Stripe Alternative",           parent: "/pricing" },

    // Resources
    "/blog":                      { name: "Blog",                         parent: "/" },
    "/reviews":                   { name: "Reviews",                      parent: "/" },
    "/customers/durian-bakery":   { name: "Durian Bakery",                parent: "/reviews" },
    "/hitpay-review-malaysia-events-payments": { name: "Review: MY Events",         parent: "/reviews" },
    "/hitpay-review-malaysia-gym":             { name: "Review: MY Gym",            parent: "/reviews" },
    "/hitpay-review-philippines-travel":       { name: "Review: PH Travel",         parent: "/reviews" },
    "/hitpay-terminal-outpost-climbing":       { name: "Review: Outpost Climbing",  parent: "/reviews" },
    "/woocommerce-payment-plugin-four-seasons-catering": { name: "Four Seasons Catering", parent: "/reviews" },
    "/support":                   { name: "Support",                      parent: "/" },
    "/contact-us":                { name: "Contact Us",                   parent: "/support" },
    "/careers":                   { name: "Careers",                      parent: "/" },
    "/brand":                     { name: "Brand",                        parent: "/" },
    "/affiliate":                 { name: "Affiliate",                    parent: "/" },
    "/for-startups":              { name: "For Startups",                 parent: "/" }
  };

  function currentPath() {
    return window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  }

  function titleCase(slug) {
    return slug
      .replace(/-/g, " ")
      .replace(/%20/g, " ")
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function lookup(path) {
    if (R[path]) return R[path];
    if (/^\/blog\/.+/.test(path)) {
      var slug = path.replace("/blog/", "");
      try { slug = decodeURIComponent(slug); } catch (e) {}
      return { name: titleCase(slug).slice(0, 80), parent: "/blog" };
    }
    if (/^\/solutions\/.+/.test(path)) {
      return { name: titleCase(path.split("/").pop()), parent: "/" };
    }
    if (/^\/customers\/.+/.test(path)) {
      return { name: titleCase(path.split("/").pop()), parent: "/reviews" };
    }
    var name = (document.title || "").split(/[|·\-—]/)[0].trim();
    if (!name) name = titleCase(path.replace(/^\//, ""));
    return { name: name, parent: "/" };
  }

  function buildBreadcrumb() {
    var raw = currentPath();
    var seg = raw.split("/").filter(Boolean);
    var localeCode = null;
    if (seg.length && LOCALES[seg[0]]) {
      localeCode = seg[0];
      seg.shift();
    }
    var canonical = "/" + seg.join("/");
    if (canonical === "/") canonical = "/";

    var prev = document.getElementById("hp-breadcrumb-jsonld");
    if (prev) prev.parentNode.removeChild(prev);

    if (SKIP.test(canonical)) return;

    var trail = [];
    var cursor = canonical;
    var guard = 0;
    while (cursor && guard++ < 20) {
      var node = lookup(cursor);
      trail.unshift({ path: cursor, name: node.name });
      cursor = node.parent;
    }

    if (localeCode) {
      // Strip duplicate root before prepending global + locale roots
      if (trail.length && trail[0].path === "/") trail.shift();
      trail.unshift({ path: "/" + localeCode, name: LOCALES[localeCode] });
      trail.unshift({ path: "/", name: "HitPay" });
      if (canonical === "/") {
        trail = [
          { path: "/",              name: "HitPay" },
          { path: "/" + localeCode, name: LOCALES[localeCode] }
        ];
      }
    }

    var itemListElement = trail.map(function (n, i) {
      var pathForLocale = n.path;
      if (localeCode && n.path !== "/" && n.path !== "/" + localeCode) {
        pathForLocale = "/" + localeCode + n.path;
      }
      var url = SITE + (pathForLocale === "/" ? "/" : pathForLocale);
      return { "@type": "ListItem", "position": i + 1, "name": n.name, "item": url };
    });

    var data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": SITE + raw + "#breadcrumb",
      "itemListElement": itemListElement
    };

    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "hp-breadcrumb-jsonld";
    s.text = JSON.stringify(data);
    document.head.appendChild(s);
  }

  function runBuild() {
    try {
      buildBreadcrumb();
    } catch (e) {
      if (window.console) console.warn("Breadcrumb build failed:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runBuild);
  } else {
    runBuild();
  }

  var lastPath = currentPath();
  function maybeRebuild() {
    var now = currentPath();
    if (now !== lastPath) {
      lastPath = now;
      setTimeout(runBuild, 50);
    }
  }
  window.addEventListener("popstate", maybeRebuild);
  ["pushState", "replaceState"].forEach(function (fn) {
    var orig = history[fn];
    history[fn] = function () {
      var ret = orig.apply(this, arguments);
      maybeRebuild();
      return ret;
    };
  });
})();
