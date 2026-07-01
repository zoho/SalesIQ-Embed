[![Platform](https://img.shields.io/badge/platform-Web-orange.svg)](https://www.zoho.com/salesiq/)
[![JavaScript API](https://img.shields.io/badge/docs-JavaScript%20API-blue.svg)](https://www.zoho.com/salesiq/help/developer-section/js-api.html)

# Zoho SalesIQ Web Embed

Add Zoho SalesIQ live chat to your web application by including the `ZohoSalesIQInstaller` file in your framework and initializing it with your SalesIQ widget code and domain.

This project includes framework integration examples and a reusable SalesIQ installer script.

## Installation

Copy or include `SalesIQInstaller/ZohoSalesIQInstaller.js` inside your framework project.

The installer creates the SalesIQ script tag dynamically and loads your SalesIQ widget using the values passed to `ZohoSalesIQ.init()`.

## Usage

Import `ZohoSalesIQInstaller` in your framework entry file and call `ZohoSalesIQ.init()` with the required props.

```javascript
import ZohoSalesIQ from "./SalesIQInstaller/ZohoSalesIQInstaller";

// Using SalesIQ Installer
ZohoSalesIQ.init({
    widgetcode: "your widget code",
    domain: "https://salesiq.zohopublic.com"
});
```

## Initialization Props

| Prop | Required | Description |
| --- | --- | --- |
| `widgetcode` | Yes | Your Zoho SalesIQ widget code. |
| `domain` | Yes | Your Zoho SalesIQ widget domain, for example `https://salesiq.zohopublic.com`. |

The installer validates these props and throws an error if the widget code or domain is missing.

## Using SalesIQ JavaScript APIs

You can configure visitor details and SalesIQ behavior inside `$zoho.salesiq.ready` after the widget is loaded.

```javascript
window.$zoho = window.$zoho || {};
$zoho.salesiq = $zoho.salesiq || { ready: function() {} };

$zoho.salesiq.ready = function() {
    $zoho.salesiq.visitor.email("visitor@example.com");
    $zoho.salesiq.visitor.firstname("John");
    $zoho.salesiq.visitor.lastname("Doe");
    $zoho.salesiq.visitor.contactnumber("+1234567890");
    $zoho.salesiq.visitor.info("Plan Type", "Premium");
};
```

## API Documentation

You can find the complete Zoho SalesIQ JavaScript API documentation here: [JS API Documentation](https://www.zoho.com/salesiq/help/developer-section/js-api.html).
