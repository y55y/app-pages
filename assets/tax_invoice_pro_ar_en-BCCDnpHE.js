const n=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Tax Invoice - فاتورة ضريبية</title>
  <style type="text/css">
    /* === COLOR VARIABLES - Light Professional Blue Theme === */
    :root {
      --primary-color: #3b82f6;
      --primary-dark: #2563eb;
      --primary-light: #60a5fa;
      --accent-color: #06b6d4;
      --success-color: #10b981;
      --text-dark: #1f2937;
      --text-muted: #4b5563;
      --text-light: #6b7280;
      --bg-light: #f8fafc;
      --bg-card: #f1f5f9;
      --border-color: #cbd5e1;
      --border-light: #e2e8f0;
      --white: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--white);
      font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
      font-size: 12px;
      direction: rtl;
      text-align: right;
      color: var(--text-dark);
      line-height: 1.5;
      margin: 0;
      padding: 0;
    }

    /* === A4 PAGE STRUCTURE === */
    @page {
      size: A4;
      margin: 0;
    }

    .invoice-container {
      width: 100%;
      max-width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      background: var(--white);
      display: table;
    }

    .invoice-main {
      display: table-row-group;
    }

    .invoice-footer-wrapper {
      display: table-footer-group;
    }

    /* === HEADER === */
    .header {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 50%, var(--primary-light) 100%);
      padding: 18px 24px;
      width: 100%;
    }

    .header-table {
      width: 100%;
      border-collapse: collapse;
    }

    .header-table td {
      vertical-align: middle;
      padding: 0;
    }

    .company-info {
      color: var(--white);
    }

    .company-info.left {
      text-align: left;
      direction: ltr;
    }

    .company-name {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .company-details {
      font-size: 10px;
      opacity: 0.95;
      line-height: 1.5;
    }

    .logo-container {
      text-align: center;
      padding: 0 12px;
    }

    .logo-container img {
      max-width: 80px;
      max-height: 60px;
      object-fit: contain;
    }

    /* === TITLE BAR === */
    .title-bar {
      background: linear-gradient(180deg, var(--white) 0%, var(--bg-light) 100%);
      padding: 12px 24px;
      border-bottom: 3px solid var(--primary-color);
    }

    .title-bar-table {
      width: 100%;
      border-collapse: collapse;
    }

    .title-bar-table td {
      vertical-align: middle;
      padding: 0;
    }

    .invoice-meta {
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .invoice-meta strong {
      color: var(--text-dark);
    }

    .invoice-title {
      font-size: 22px;
      font-weight: 700;
      color: var(--primary-dark);
      text-align: center;
      margin: 0;
    }

    .invoice-subtitle {
      font-size: 12px;
      color: var(--text-muted);
      text-align: center;
      margin-top: 2px;
    }

    /* === CONTENT === */
    .content {
      padding: 14px 24px;
    }

    /* === INFO CARDS === */
    .info-cards-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 8px 0;
      margin-bottom: 14px;
    }

    .info-cards-table > tbody > tr > td {
      vertical-align: top;
      padding: 0;
    }

    .info-cards-table > tbody > tr > td.client-cell {
      width: 75%;
    }

    .info-cards-table > tbody > tr > td.notes-cell {
      width: 25%;
    }

    .info-card {
      background: linear-gradient(180deg, var(--white) 0%, var(--bg-card) 100%);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 12px 14px;
      height: 115px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .info-card-title {
      font-size: 11px;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--primary-light);
    }

    .info-grid-table {
      width: 100%;
      border-collapse: collapse;
    }

    .info-grid-table td {
      padding: 3px 0;
      vertical-align: top;
    }

    .info-label {
      font-size: 9px;
      color: var(--text-light);
      display: block;
    }

    .info-value {
      font-size: 10px;
      color: var(--text-dark);
      font-weight: 600;
      display: block;
    }

    .notes-text {
      font-size: 10px;
      color: var(--text-dark);
      line-height: 1.5;
    }

    /* === ITEMS TABLE === */
    .items-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 14px;
      font-size: 10px;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .items-table thead {
      display: table-header-group;
    }

    .items-table th {
      background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-card) 100%);
      color: var(--text-dark);
      font-weight: 700;
      text-align: center;
      padding: 10px 6px;
      font-size: 10px;
      border-bottom: 2px solid var(--primary-color);
    }

    .items-table td {
      padding: 7px 5px;
      text-align: center;
      border-bottom: 1px solid var(--border-light);
      background: var(--white);
      vertical-align: middle;
      page-break-inside: avoid;
    }

    .items-table tbody tr {
      page-break-inside: avoid;
    }

    .items-table tbody tr:nth-child(even) td {
      background: var(--bg-light);
    }

    .items-table tbody tr:last-child td {
      border-bottom: none;
    }

    .items-table .col-serial { width: 5%; font-weight: 600; }
    .items-table .col-desc { width: 35%; text-align: right; padding-right: 8px; }
    .items-table .col-qty { width: 10%; }
    .items-table .col-unit { width: 10%; }
    .items-table .col-price { width: 13%; }
    .items-table .col-total { width: 13%; font-weight: 600; }

    /* === SUMMARY SECTION === */
    .summary-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      page-break-inside: avoid;
    }

    .summary-table > tbody > tr > td {
      vertical-align: top;
      padding: 0;
    }

    .qr-cell {
      width: 120px;
      padding-left: 10px;
    }

    .qr-container {
      background: linear-gradient(180deg, var(--white) 0%, var(--bg-card) 100%);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .qr-container img {
      width: 90px;
      height: 90px;
      border-radius: 4px;
    }

    .qr-label {
      font-size: 8px;
      color: var(--text-muted);
      margin-top: 8px;
      line-height: 1.3;
      font-weight: 500;
    }

    .totals-cell {
      padding-right: 0;
    }

    .totals-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .totals-table td {
      padding: 9px 14px;
      border-bottom: 1px solid var(--border-light);
    }

    .totals-table tr:last-child td {
      border-bottom: none;
    }

    .totals-table .label-cell {
      text-align: right;
      font-size: 11px;
      color: var(--text-dark);
      width: 60%;
      background: linear-gradient(90deg, var(--bg-light) 0%, var(--white) 100%);
    }

    .totals-table .label-cell .en {
      font-size: 9px;
      color: var(--text-light);
      margin-right: 6px;
    }

    .totals-table .value-cell {
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-dark);
      width: 40%;
      direction: ltr;
      background: var(--white);
    }

    .totals-table tr.grand-total {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%) !important;
    }

    .totals-table tr.grand-total td {
      background: transparent !important;
      padding: 12px 14px;
      border-bottom: none;
    }

    .totals-table tr.grand-total .label-cell {
      color: var(--white) !important;
      font-weight: 700;
      font-size: 13px;
    }

    .totals-table tr.grand-total .label-cell .en {
      color: rgba(255, 255, 255, 0.85) !important;
    }

    .totals-table tr.grand-total .value-cell {
      color: var(--white) !important;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
    }

    /* === AMOUNT IN WORDS === */
    .amount-words {
      background: linear-gradient(90deg, var(--bg-light) 0%, var(--white) 50%, var(--bg-light) 100%);
      border: 1px dashed var(--primary-light);
      border-radius: 6px;
      padding: 10px 16px;
      text-align: center;
      margin-bottom: 10px;
      page-break-inside: avoid;
    }

    .amount-words-label {
      font-size: 9px;
      color: var(--text-muted);
      margin-bottom: 4px;
    }

    .amount-words-value {
      font-size: 13px;
      font-weight: 700;
      color: var(--primary-dark);
    }

    /* === FOOTER === */
    .invoice-footer-wrapper {
      width: 100%;
      page-break-inside: avoid;
    }

    .footer {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-color) 100%);
      color: var(--white);
      padding: 12px 24px;
      page-break-inside: avoid;
    }

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .footer-contact {
      flex: 1;
      font-size: 9px;
      line-height: 1.5;
      opacity: 0.95;
    }

    .footer-contact-ar {
      text-align: right;
    }

    .footer-contact-en {
      text-align: left;
      direction: ltr;
    }

    .footer-email {
      text-align: center;
      flex: 0 0 auto;
    }

    .footer-email a {
      color: #b8d4e8;
      text-decoration: none;
      font-weight: 600;
      font-size: 10px;
    }

    .footer-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.25);
      flex-shrink: 0;
    }

    /* === PRINT STYLES === */
    @media print {
      html, body {
        width: 210mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        background: #fff;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      .invoice-container {
        width: 100%;
        max-width: 210mm;
        min-height: 297mm;
        margin: 0;
        padding: 0;
      }

      /* Multi-page support */
      .items-table {
        page-break-inside: auto;
      }

      .items-table thead {
        display: table-header-group;
      }

      .items-table tbody tr {
        page-break-inside: avoid;
        page-break-after: auto;
      }

      .summary-table,
      .amount-words,
      .footer {
        page-break-inside: avoid;
      }

      .summary-table {
        page-break-before: avoid;
      }
    }

    @media screen {
      body {
        background: var(--white);
        padding: 0;
        margin: 0;
      }

      .invoice-container {
        margin: 0;
      }
    }
  </style>
</head>

<body>
  <div class="invoice-container">
    <div class="invoice-main">
      <!-- === HEADER === -->
      <div class="header">
        <table class="header-table">
          <tr>
            <td style="width: 38%;">
              <div class="company-info">
                <div class="company-name">{%company_name%}</div>
                <div class="company-details">
                  {%company_activity%}<br/>
                  س.ت: {%CRN%} | الرقم الضريبي: {%vat_number%}
                </div>
              </div>
            </td>
            <td style="width: 24%;">
              <div class="logo-container">
                <img src="{%logo%}" alt="Logo" />
              </div>
            </td>
            <td style="width: 38%;">
              <div class="company-info left">
                <div class="company-name">{%company_nameE%}</div>
                <div class="company-details">
                  {%company_activityE%}<br/>
                  C.R: {%CRN%} | VAT: {%vat_number%}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- === TITLE BAR === -->
      <div class="title-bar">
        <table class="title-bar-table">
          <tr>
            <td style="width: 25%; vertical-align: middle;">
              <div class="invoice-meta" style="text-align: right;">
                <strong>رقم الفاتورة</strong><br/>
                <strong>Invoice No</strong>
              </div>
              <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-top: 4px; text-align: right;">{%invoice_number%}</div>
            </td>
            <td style="width: 50%; text-align: center; vertical-align: middle;">
              <div class="invoice-title">{%invoice_title%}</div>
              <div class="invoice-subtitle">Tax Invoice</div>
            </td>
            <td style="width: 25%; vertical-align: middle;">
              <div class="invoice-meta" style="text-align: left;">
                <strong>التاريخ</strong><br/>
                <strong>Date</strong>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: var(--text-dark); text-align: left; margin-top: 4px;">{%invoice_date%}</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- === CONTENT === -->
      <div class="content">
        <!-- Info Cards -->
        <table class="info-cards-table">
          <tr>
            <td class="client-cell" style="width: 75%;">
              <div class="info-card">
                <div class="info-card-title">بيانات العميل / Customer Info</div>
                <table class="info-grid-table">
                  <tr>
                    <td style="width: 50%;">
                      <span class="info-label">اسم العميل / Name</span>
                      <span class="info-value">{%client_name%}</span>
                    </td>
                    <td style="width: 50%;">
                      <span class="info-label">العنوان / Address</span>
                      <span class="info-value">{%client_address%}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 50%;">
                      <span class="info-label">الرقم الضريبي / VAT</span>
                      <span class="info-value">{%client_vat%}</span>
                    </td>
                    <td style="width: 50%;">
                      <span class="info-label">السجل التجاري / CR</span>
                      <span class="info-value">{%client_cr%}</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <td class="notes-cell" style="width: 25%;">
              <div class="info-card">
                <div class="info-card-title">ملاحظات / Notes</div>
                <div class="notes-text">{%Comment%}</div>
              </div>
            </td>
          </tr>
        </table>

        <!-- Items Table -->
        <table class="items-table">
          <thead>
            <tr>
              <th class="col-serial">#</th>
              <th class="col-desc">الوصف / Description</th>
              <th class="col-qty">الكمية</th>
              <th class="col-unit">الوحدة</th>
              <th class="col-price">السعر</th>
              <th class="col-total">الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {% for item in items %}
            <tr>
              <td class="col-serial">{% item.serial %}</td>
              <td class="col-desc">{% item.description %}</td>
              <td>{% item.quantity %}</td>
              <td>{% item.unit %}</td>
              <td>{% item.rate %}</td>
              <td class="col-total">{% item.total %}</td>
            </tr>
            {% endfor %}
          </tbody>
        </table>

        <!-- Summary Section -->
        <table class="summary-table">
          <tr>
            <td class="totals-cell">
              <table class="totals-table">
                <tr>
                  <td class="label-cell">إجمالي قيمة الفاتورة <span class="en">Subtotal</span></td>
                  <td class="value-cell">{%subtotal%}</td>
                </tr>
                <tr class="discount-row {%discount_row_class%}">
                  <td class="label-cell">إجمالي الخصومات <span class="en">Discount</span></td>
                  <td class="value-cell">{%total_discount%}</td>
                </tr>
                <tr>
                  <td class="label-cell">الإجمالي بدون الضريبة <span class="en">Excl. VAT</span></td>
                  <td class="value-cell">{%total_without_vat%}</td>
                </tr>
                <tr>
                  <td class="label-cell">ضريبة القيمة المضافة {%vat_rate%}% <span class="en">VAT</span></td>
                  <td class="value-cell">{%total_tax%}</td>
                </tr>
                <tr class="grand-total">
                  <td class="label-cell">إجمالي المبلغ المستحق <span class="en">Grand Total</span></td>
                  <td class="value-cell">{%total_amount%}</td>
                </tr>
              </table>
            </td>
            <td class="qr-cell">
              <div class="qr-container">
                <img src="{%sa_qr_code_image%}" alt="QR" />
                <div class="qr-label">رمز الاستجابة السريعة<br/>QR Code</div>
              </div>
            </td>
          </tr>
        </table>

        <!-- Amount in Words -->
        <div class="amount-words">
          <div class="amount-words-label">الإجمالي النهائي كتابة / Total in Words</div>
          <div class="amount-words-value">{%total_in_words%}</div>
        </div>
      </div>
    </div>

    <!-- === FOOTER === -->
    <div class="invoice-footer-wrapper">
      <div class="footer">
        <div class="footer-content">
          <div class="footer-contact footer-contact-ar">
            ص.ب {%po_box%} {%site_city%} {%site_postal_code%} | {%site_district%} | شارع {%site_street%}<br/>
            هاتف: {%site_phone%} | فاكس: {%site_fax%} | جوال: {%site_mobile%}
          </div>
          
          <div class="footer-divider"></div>
          
          <div class="footer-email">
            <a href="mailto:{%branch_email%}">{%branch_email%}</a>
          </div>
          
          <div class="footer-divider"></div>
          
          <div class="footer-contact footer-contact-en">
            P.O.Box {%po_box%} {%site_cityE%} {%site_postal_code%} | {%site_districtE%} | {%site_streetE%}<br/>
            Tel: {%site_phone%} | Fax: {%site_fax%} | Mobile: {%site_mobile%}
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;export{n as default};
