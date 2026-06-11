const n=`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <title>Tax Invoice - فاتورة ضريبية</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #fff;
      color: #111;
      font-family: Arial, Tahoma, sans-serif;
      font-size: 11px;
      line-height: 1.35;
      direction: rtl;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 10mm 12mm 9mm;
      background: #fff;
      position: relative;
    }
    .ltr { direction: ltr; text-align: left; }
    .muted { color: #555; }
    .strong { font-weight: 700; }

    /* image-like: plain white, compact, black/gray rules */
    .header {
      display: table;
      width: 100%;
      table-layout: fixed;
      min-height: 38mm;
      border-bottom: 2px solid #222;
      padding-bottom: 8mm;
    }
    .header > div { display: table-cell; vertical-align: top; }
    .header-ar { width: 38%; text-align: right; }
    .header-logo { width: 24%; text-align: center; padding-top: 3mm; }
    .header-en { width: 38%; }
    .logo { max-width: 34mm; max-height: 22mm; object-fit: contain; }
    .company-name { font-size: 15px; font-weight: 700; margin-bottom: 2mm; }
    .company-lines { font-size: 10px; color: #333; }

    .invoice-band {
      display: table;
      width: 100%;
      table-layout: fixed;
      padding: 7mm 0 5mm;
      border-bottom: 1px solid #d0d0d0;
    }
    .invoice-band > div { display: table-cell; vertical-align: middle; }
    .inv-side { width: 30%; font-size: 10px; color: #333; }
    .inv-side .value { display: block; margin-top: 2mm; font-size: 14px; font-weight: 700; color: #111; }
    .inv-title { width: 40%; text-align: center; font-size: 21px; font-weight: 700; }
    .inv-title small { display:block; font-size: 12px; font-weight: 400; margin-top: 1mm; color:#444; }

    .block-title {
      margin-top: 5mm;
      padding: 2mm 0;
      border-bottom: 2px solid #222;
      font-size: 12px;
      font-weight: 700;
    }
    .client-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      margin-top: 2mm;
      margin-bottom: 7mm;
    }
    .client-table td {
      padding: 2.2mm 1.5mm;
      vertical-align: top;
      border-bottom: 1px solid #e1e1e1;
      height: 11mm;
    }
    .label { display:block; color:#5c5c5c; font-size: 9px; margin-bottom: .8mm; }
    .value { display:block; color:#111; font-size: 11px; font-weight: 700; }

    .items {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      font-size: 10px;
      margin-top: 2mm;
    }
    .items th {
      background: #eeeeee;
      color: #111;
      border-top: 2px solid #222;
      border-bottom: 2px solid #222;
      padding: 3mm 1.2mm;
      text-align: center;
      font-weight: 700;
    }
    .items td {
      border-bottom: 1px solid #d5d5d5;
      padding: 2.6mm 1.2mm;
      min-height: 8mm;
      text-align: center;
      vertical-align: middle;
      page-break-inside: avoid;
    }
    .items tbody tr:nth-child(even) td { background: #fafafa; }
    .items .no { width: 7%; }
    .items .desc { width: 38%; text-align: right; }
    .items .qty { width: 10%; }
    .items .unit { width: 10%; }
    .items .price { width: 15%; direction: ltr; }
    .items .total { width: 20%; direction: ltr; font-weight: 700; }

    .after-items {
      display: table;
      width: 100%;
      table-layout: fixed;
      margin-top: 7mm;
      page-break-inside: avoid;
    }
    .qr-cell { display: table-cell; width: 34mm; vertical-align: top; }
    .qr-box {
      width: 31mm;
      min-height: 31mm;
      border: 1px solid #222;
      padding: 2mm;
      text-align: center;
    }
    .qr-box img { width: 24mm; height: 24mm; object-fit: contain; }
    .qr-box div { font-size: 8px; color:#555; margin-top:1mm; }
    .totals-cell { display: table-cell; vertical-align: top; }
    .totals {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      font-size: 11px;
    }
    .totals td {
      border-bottom: 1px solid #d5d5d5;
      padding: 2.4mm 2mm;
    }
    .totals .t-label { font-weight: 700; background: #f4f4f4; }
    .totals .t-label span { color:#666; font-size:9px; font-weight:400; margin-right:2mm; }
    .totals .t-value { width: 36%; text-align: center; direction: ltr; font-weight:700; }
    .totals .grand td {
      border-top: 2px solid #222;
      border-bottom: 2px solid #222;
      background: #222;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
    }
    .discount-row.hidden { display: none; }

    .words {
      margin-top: 5mm;
      border-top: 1px solid #222;
      border-bottom: 1px solid #222;
      padding: 3mm 2mm;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      page-break-inside: avoid;
    }

    .signatures {
      display: table;
      width: 100%;
      table-layout: fixed;
      margin-top: 16mm;
      font-size: 10px;
      page-break-inside: avoid;
    }
    .signatures > div { display: table-cell; width: 33.33%; padding: 0 4mm; text-align: center; }
    .sign-line { border-top: 1px solid #222; padding-top: 2mm; color:#444; }

    .footer {
      position: absolute;
      left: 12mm;
      right: 12mm;
      bottom: 8mm;
      border-top: 2px solid #222;
      padding-top: 3mm;
      display: table;
      width: calc(100% - 24mm);
      table-layout: fixed;
      font-size: 9px;
      color: #333;
    }
    .footer > div { display: table-cell; width: 50%; vertical-align: top; }

    thead { display: table-header-group; }
    tr, td, th { page-break-inside: avoid; }
    @media print { .page { margin: 0; } }
  </style>
</head>
<body>
  <main class="page">
    <section class="header">
      <div class="header-ar">
        <div class="company-name">{%company_name%}</div>
        <div class="company-lines">{%company_activity%}<br/>س.ت: {%CRN%}<br/>الرقم الضريبي: {%vat_number%}</div>
      </div>
      <div class="header-logo"><img class="logo" src="{%logo%}" alt="Logo" /></div>
      <div class="header-en ltr">
        <div class="company-name">{%company_nameE%}</div>
        <div class="company-lines">{%company_activityE%}<br/>C.R: {%CRN%}<br/>VAT: {%vat_number%}</div>
      </div>
    </section>

    <section class="invoice-band">
      <div class="inv-side">
        <span class="strong">رقم الفاتورة</span><br/>Invoice No
        <span class="value">{%invoice_number%}</span>
      </div>
      <div class="inv-title">{%invoice_title%}<small>Tax Invoice</small></div>
      <div class="inv-side ltr">
        <span class="strong">Date</span><br/>التاريخ
        <span class="value">{%invoice_date%}</span>
      </div>
    </section>

    <div class="block-title">بيانات العميل / Customer Information</div>
    <table class="client-table">
      <tr>
        <td><span class="label">اسم العميل / Customer Name</span><span class="value">{%client_name%}</span></td>
        <td><span class="label">الرقم الضريبي / VAT Number</span><span class="value">{%client_vat%}</span></td>
        <td><span class="label">السجل التجاري / CR</span><span class="value">{%client_cr%}</span></td>
      </tr>
      <tr>
        <td><span class="label">رقم المبنى / Building No.</span><span class="value">{%client_building_number%}</span></td>
        <td><span class="label">الشارع / Street</span><span class="value">{%client_street_name%}</span></td>
        <td><span class="label">المدينة / City</span><span class="value">{%client_city%}</span></td>
      </tr>
      <tr>
        <td><span class="label">البلد / Country</span><span class="value">{%client_country%}</span></td>
        <td><span class="label">الرمز البريدي / Postal Code</span><span class="value">{%client_postal_code%}</span></td>
        <td><span class="label">&nbsp;</span><span class="value">&nbsp;</span></td>
      </tr>
    </table>

    <table class="items">
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="desc">الوصف / Description</th>
          <th class="qty">الكمية<br/>Qty</th>
          <th class="unit">الوحدة<br/>Unit</th>
          <th class="price">السعر<br/>Price</th>
          <th class="total">الإجمالي<br/>Total</th>
        </tr>
      </thead>
      <tbody>
        {% for item in items %}
        <tr>
          <td>{% item.serial %}</td>
          <td class="desc">{% item.description %}</td>
          <td>{% item.quantity %}</td>
          <td>{% item.unit %}</td>
          <td class="price">{% item.rate %}</td>
          <td class="total">{% item.total %}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>

    <section class="after-items">
      <div class="qr-cell">
        <div class="qr-box"><img src="{%sa_qr_code_image%}" alt="QR" /><div>QR Code<br/>رمز الاستجابة</div></div>
      </div>
      <div class="totals-cell">
        <table class="totals">
          <tr><td class="t-label">إجمالي قيمة الفاتورة <span>Subtotal</span></td><td class="t-value">{%subtotal%}</td></tr>
          <tr class="discount-row {%discount_row_class%}"><td class="t-label">إجمالي الخصومات <span>Discount</span></td><td class="t-value">{%total_discount%}</td></tr>
          <tr><td class="t-label">الإجمالي غير شامل الضريبة <span>Excl. VAT</span></td><td class="t-value">{%total_without_vat%}</td></tr>
          <tr><td class="t-label">ضريبة القيمة المضافة {%vat_rate%}% <span>VAT</span></td><td class="t-value">{%total_tax%}</td></tr>
          <tr class="grand"><td>الإجمالي المستحق <span style="color:#ddd;font-size:9px;margin-right:2mm">Grand Total</span></td><td class="t-value">{%total_amount%}</td></tr>
        </table>
      </div>
    </section>

    <div class="words"><span class="muted">الإجمالي كتابة / Total in Words: </span>{%total_in_words%}</div>

    <section class="signatures">
      <div><div class="sign-line">المحاسب / Accountant</div></div>
      <div><div class="sign-line">المستلم / Receiver</div></div>
      <div><div class="sign-line">الختم / Stamp</div></div>
    </section>

    <footer class="footer">
      <div>{%company_address%}<br/>هاتف: {%company_phone%} | بريد: {%company_email%} | موقع: {%company_website%}</div>
      <div class="ltr">{%company_addressE%}<br/>Tel: {%company_phone%} | Email: {%company_email%} | Website: {%company_website%}</div>
    </footer>
  </main>
</body>
</html>
`;export{n as default};
