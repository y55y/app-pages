const n=`{
  "printableTypes": [
    {
      "docType": "sell_inv",
      "name": "فواتير المبيعات",
      "nameE": "Sell Invoices",
      "default_html": "defulat_print_temp/sell_tax_invoice_ar_en.txt",
      "params_path": "defaults/sell_invoices.params.json",
      "templates": [
        { "tempType": "zacta_ar", "name": "فاتورة زكاة عربي", "default_html": "sell_invoices/Zacta_ar.txt", "displaySize": "A4" },
        { "tempType": "sell_invoice_default_ar_en", "name": "فاتورة افتراضية عربي-إنجليزي", "default_html": "defulat_print_temp/sell_tax_invoice_ar_en.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "sell_order_draft",
      "name": "مسودة طلب بيع",
      "nameE": "Sell Order Draft",
      "default_html": "defulat_print_temp/order_invoice_ar_en.txt",
      "params_path": "defaults/sell_invoices.params.json",
      "templates": [
        { "tempType": "sell_invoice_default_ar_en", "name": "فاتورة افتراضية عربي-إنجليزي", "default_html": "defulat_print_temp/order_invoice_ar_en.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "sell_quote_draft",
      "name": "مسودة عرض سعر",
      "nameE": "Quote Draft",
      "default_html": "defulat_print_temp/Quote_invoice_ar_en.txt",
      "params_path": "defaults/sell_invoices.params.json",
      "templates": [
        { "tempType": "sell_invoice_default_ar_en", "name": "فاتورة افتراضية عربي-إنجليزي", "default_html": "defulat_print_temp/Quote_invoice_ar_en.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "buy_invoices",
      "name": "فواتير المشتريات",
      "nameE": "Buy Invoices",
      "default_html": "buy_invoices/tax_invoice_ar_en.txt",
      "params_path": "defaults/buy_invoices.params.json"
    },
    {
      "docType": "income_receipt",
      "name": "سند قبض",
      "nameE": "Income Receipt",
      "default_html": null,
      "params_path": "defaults/income_receipt.params.json",
      "templates": [
        { "tempType": "income_template_2_ar", "name": "القالب الاول", "default_html": "income_receipt/income_template_2_ar.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "exepnse_receipt",
      "name": "سند صرف",
      "nameE": "Expense Receipt",
      "default_html": "exepnse_receipt/exepnse_template_2_ar.txt",
      "params_path": "defaults/exepnse_receipt.params.json",
      "templates": [
        { "tempType": "exepnse_template_2_ar", "name": "القالب الاول", "default_html": "exepnse_receipt/exepnse_template_2_ar.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "bank_payment",
      "name": "دفعة بنكية",
      "nameE": "Bank Payment",
      "default_html": "exepnse_receipt/Template_expense_121.txt",
      "params_path": "defaults/exepnse_receipt.params.json",
      "templates": [
        { "tempType": "Template_expense_121", "name": "دفعة بنكية", "default_html": "exepnse_receipt/Template_expense_121.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "bank_deposit",
      "name": "ايداع بنكي",
      "nameE": "Bank Deposit",
      "default_html": "income_receipt/Template_income_123.txt",
      "params_path": "defaults/income_receipt.params.json",
      "templates": [
        { "tempType": "Template_income_123", "name": "ايداع بنكي", "default_html": "income_receipt/Template_income_123.txt", "displaySize": "A4" }
      ]
    },
    {
      "docType": "client_payment",
      "name": "سند مدفوعات عميل",
      "nameE": "Client Payment",
      "default_html": null,
      "params_path": "defaults/client_payment.params.json"
    },
    {
      "docType": "supplier_payment",
      "name": "سند مدفوعات مورد",
      "nameE": "Supplier Payment",
      "default_html": null,
      "params_path": "defaults/supplier_payment.params.json"
    },
    {
      "docType": "barcode",
      "name": "ملصق باركود",
      "nameE": "Barcode",
      "default_html": null,
      "params_path": "defaults/barcode.params.json"
    },
    {
      "docType": "الاذون المخزنية",
      "name": "اذن مخزني",
      "nameE": "Warehouse Voucher",
      "default_html": null,
      "params_path": "defaults/warehouse_voucher.params.json"
    },
    {
      "docType": "القيود اليومية",
      "name": "قيد يومية",
      "nameE": "Daily Entries",
      "default_html": null,
      "params_path": "defaults/daily_entries.params.json"
    }
    ,
    {
      "docType": "sell_inv",
      "name": "فاتورة بيع",
      "nameE": "Sell Invoice",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "sell_draft_normal",
      "name": "مسودة بيع",
      "nameE": "Sell Draft (Normal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "sell_return",
      "name": "فاتورة مرتجع",
      "nameE": "Sell Return",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "sell_return_draft_normal",
      "name": "مسودة مرتجع",
      "nameE": "Sell Return Draft (Normal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "thermal_sell",
      "name": "فاتورة بيع (حراري)",
      "nameE": "Thermal Sell Invoice",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "sell_draft_thermal",
      "name": "مسودة بيع (حراري)",
      "nameE": "Sell Draft (Thermal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "thermal_return",
      "name": "فاتورة مرتجع (حراري)",
      "nameE": "Thermal Return",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "sell_return_draft_thermal",
      "name": "مسودة مرتجع (حراري)",
      "nameE": "Sell Return Draft (Thermal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "client_payment_normal",
      "name": "سند مدفوعات عميل",
      "nameE": "Client Payment (A4)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "client_payment_thermal",
      "name": "سند مدفوعات عميل (حراري)",
      "nameE": "Client Payment (Thermal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "buy_inv",
      "name": "فاتورة مشتريات",
      "nameE": "Buy Invoice",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "buy_draft_normal",
      "name": "مسودة مشتريات",
      "nameE": "Buy Draft (Normal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "buy_return",
      "name": "فاتورة مرتجع مشتريات",
      "nameE": "Buy Return",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "buy_return_draft",
      "name": "مسودة مرتجع مشتريات",
      "nameE": "Buy Return Draft",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "supplier_payment_normal",
      "name": "سند مدفوعات مورد",
      "nameE": "Supplier Payment (A4)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "supplier_payment_thermal",
      "name": "سند مدفوعات مورد (حراري)",
      "nameE": "Supplier Payment (Thermal)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "warehouse_voucher",
      "name": "اذن مخزني",
      "nameE": "Warehouse Voucher",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "warehouse_voucher_no_price",
      "name": "اذن مخزني بدون سعر",
      "nameE": "Warehouse Voucher (No Price)",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "barcode_50x25",
      "name": "ملصق باركود 50x25",
      "nameE": "Barcode 50x25",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "barcode_40x20",
      "name": "ملصق باركود 40x20",
      "nameE": "Barcode 40x20",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "barcode_30x10",
      "name": "ملصق باركود 30x10",
      "nameE": "Barcode 30x10",
      "default_html": null,
      "params_path": null
    },
    {
      "docType": "daily_entry",
      "name": "قيد يومية",
      "nameE": "Daily Entry",
      "default_html": null,
      "params_path": null
    }
  ]
}`;export{n as default};
