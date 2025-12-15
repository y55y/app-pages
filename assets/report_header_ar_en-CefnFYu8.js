const n=`<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{%report_title%}</title>
  <style type="text/css">
    :root {
      --primary-color: #fdb70070;
      --primary-dark: #23315f;
      --primary-light: #fdb70070;
      --accent-color: #f7e9b5;
      --text-dark: #0d1b4d;
      --text-muted: #2a345f;
      --text-light: #4a5477;
      --bg-light: #fdb7000d;
      --bg-card: #fdb70012;
      --border-color: #23315f;
      --border-light: #cfd4e8;
      --white: #ffffff;
      --header-text: #0d1b4d;
      --footer-text: #0d1b4d;
      --shadow-color: rgba(0, 0, 0, 0.05);
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

    @page {
      size: A4;
      margin: 0;
    }

    .print-container {
      width: 100%;
      max-width: 210mm;
      min-height: 297mm;
      height: 297mm;
      margin: 0 auto;
      background: var(--white);
      display: table;
      position: relative;
      z-index: 0;
    }

    .page-watermark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 0;
      pointer-events: none;
    }

    .page-watermark img {
      max-width: 70%;
      height: auto;
      opacity: 0.03;
      display: block;
    }

    .report-main {
      display: table-row-group;
    }

    .report-footer-wrapper {
      display: table-footer-group;
      width: 100%;
      page-break-inside: avoid;
    }

    .header {
      background: var(--bg-light);
      border-bottom: 1px solid var(--border-color);
      padding: 16px 24px;
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
      color: var(--header-text);
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
      max-width: 150px;
      max-height: 100px;
      object-fit: contain;
    }

    .title-bar {
      background: var(--white);
      padding: 10px 24px;
      border-bottom: 1px solid var(--border-color);
    }

    .title-bar-table {
      width: 100%;
      border-collapse: collapse;
    }

    .title-bar-table td {
      vertical-align: middle;
      padding: 0;
    }

    .report-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary-dark);
      text-align: center;
      margin: 0;
    }

    .report-subtitle {
      font-size: 11px;
      color: var(--text-muted);
      text-align: center;
      margin-top: 2px;
    }

    .report-meta {
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .report-meta strong {
      color: var(--text-dark);
    }

    .content {
      padding: 10px 20px;
    }

    .compact-section {
      border: 1px solid var(--border-light, #cfd4e8);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 8px;
      page-break-inside: avoid;
    }

    .compact-section-header {
      padding: 6px 8px;
      background: var(--bg-light, #fdb7000d);
      border-bottom: 1px solid var(--border-light, #cfd4e8);
      font-weight: 700;
      color: var(--primary-dark, #23315f);
      font-size: 11px;
    }

    .compact-section-content {
      padding: 6px 8px;
    }

    .flex-row {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
    }

    .flex-column {
      flex: 1;
    }

    .footer {
      background: var(--bg-light);
      border-top: 1px solid var(--border-color);
      color: var(--footer-text);
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
      direction: rtl;
    }

    .footer-contact-en {
      text-align: left;
      direction: ltr;
    }

    .footer-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.25);
      flex-shrink: 0;
    }

    @media print {
      html, body {
        width: 210mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        background: var(--white);
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .print-container {
        width: 100%;
        max-width: 210mm;
        min-height: 297mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        display: table;
        position: relative;
        z-index: 1;
      }

      .report-main {
        display: table-row-group;
      }

      .report-footer-wrapper {
        display: table-footer-group;
        width: 100%;
      }

      .summary-table,
      .amount-words,
      .footer {
        page-break-inside: avoid;
      }

      .summary-table {
        page-break-before: avoid;
      }

      .content {
        page-break-inside: auto;
      }

      table {
        page-break-inside: auto;
      }

      tr {
        page-break-inside: avoid;
        page-break-after: auto;
      }

      thead {
        display: table-header-group;
      }

      tfoot {
        display: table-footer-group;
      }

      .footer {
        page-break-inside: avoid;
      }

      /* Ensure flexbox works in print */
      .flex-row {
        display: flex !important;
        gap: 8px !important;
        margin-bottom: 8px !important;
        page-break-inside: avoid;
      }

      .flex-column {
        flex: 1 !important;
        page-break-inside: avoid;
      }

      .compact-section {
        page-break-inside: avoid !important;
      }
    }
  </style>
</head>

<body>
  <div class="print-container">
    <div class="page-watermark">
      <img src="{%logo%}" alt="Logo Watermark" />
    </div>

    <div class="report-main">
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

      <div class="title-bar">
        <table class="title-bar-table">
          <tr>
            <td style="width: 25%;">
              <div class="report-meta" style="text-align: right;">
                <strong>التاريخ</strong><br/>
                <span>{%report_date%}</span>
              </div>
            </td>
            <td style="width: 50%; text-align: center;">
              <div class="report-title">{%report_title%}</div>
              <div class="report-subtitle">{%report_title_en%}</div>
            </td>
            <td style="width: 25%;">
              <div class="report-meta" style="text-align: left; direction: ltr;">
                <strong>Printed</strong><br/>
                <span>{%printed_at%}</span>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="content">
        {%report_content%}
      </div>
    </div>

    <div class="report-footer-wrapper">
      <div class="footer">
        <div class="footer-content">
          <div class="footer-contact footer-contact-ar">
            {%footer_ar%}
          </div>
          <div class="footer-divider"></div>
          <div class="footer-contact footer-contact-en">
            {%footer_en%}
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
`;export{n as default};
