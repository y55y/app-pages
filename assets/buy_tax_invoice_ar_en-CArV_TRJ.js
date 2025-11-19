const n=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Purchase Invoice</title>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #ffffff;
      font: 12px "Tahoma", Arial, Helvetica, sans-serif;
      direction: rtl;
      text-align: right;
      margin: 0;
      padding: 0;
      counter-reset: page;
    }

    /* === PAGE STRUCTURE === */
    .page {
      width: 210mm;
      height: 297mm;
      margin: 0 auto 10mm auto;
      background: white;
      border: 1px solid #ddd;
      padding: 10mm;
      position: relative;
      page-break-after: always;
      overflow: hidden;
    }

    .page:last-child {
      page-break-after: auto;
    }

    .invoice-wrap {
      width: 100%;
      max-width: 180mm;
      margin: 0 auto;
      background: #ffffff;
      color: #555555;
      padding: 15px;
    }

    .invoice-inner {
      margin: 0;
      padding: 10px 0;
      page-break-inside: auto;
    }

    .invoice-section {
      page-break-inside: avoid;
      margin-bottom: 10px;
    }

    .invoice-header {
      page-break-after: avoid;
    }

    .invoice-footer {
      page-break-before: avoid;
    }

    /* === TABLE STYLES === */
    .listing-table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      font-size: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .listing-table thead {
      display: table-header-group;
    }

    .listing-table th {
      background: linear-gradient(135deg, #e5e5e5 0%, #d0d0d0 100%);
      border: 2px solid #555555;
      font-weight: bold;
      text-align: center;
      padding: 10px 6px;
      font-size: 11px;
      color: #333;
    }

    .listing-table tbody {
      display: table-row-group;
    }

    .listing-table tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }

    .listing-table td {
      border: 1px solid #ccc;
      text-align: center;
      padding: 8px 5px;
      vertical-align: middle;
      line-height: 1.4;
    }

    .listing-table tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    /* === TOTALS TABLE === */
    .total-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    .total-table td {
      border: 2px solid #555555;
      padding: 10px 8px;
      font-weight: bold;
      text-align: center;
    }

    .total-row {
      background: linear-gradient(135deg, #e0e0e0 0%, #cccccc 100%);
      color: #333;
      border: 3px solid #999;
      font-weight: bold;
      font-size: 15px;
      text-transform: uppercase;
    }

    /* === INFO SECTIONS === */
    .info-box {
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 6px;
      padding: 12px;
      margin: 8px 0;
      line-height: 1.6;
    }

    .info-title {
      font-weight: bold;
      color: #495057;
      margin-bottom: 6px;
      font-size: 13px;
      border-bottom: 1px solid #dee2e6;
      padding-bottom: 4px;
    }

    /* === FOOTER === */
    .footer-section {
      margin-top: 25px;
      padding-top: 12px;
      border-top: 2px solid #dee2e6;
      text-align: center;
      font-size: 11px;
      color: #6c757d;
    }

    /* === PAGE NUMBERING === */
    .page-number {
      position: absolute;
      bottom: 8mm;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
      color: #666;
    }

    .page-number::after {
      counter-increment: page;
      content: "Page " counter(page);
    }

    /* === PRINT RULES === */
    @media print {
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        height: auto !important;
        overflow: visible !important;
        -webkit-print-color-adjust: exact;
      }

      .page {
        width: 100%;
        height: auto;
        margin: auto;
        box-shadow: none;
        border: none;
        page-break-after: always;
      }

      .page:last-child {
        page-break-after: auto;
      }

      .listing-table {
        page-break-inside: auto;
      }

      .listing-table thead {
        display: table-header-group;
      }

      .listing-table tbody {
        display: table-row-group;
      }

      .listing-table tr {
        page-break-inside: avoid;
        page-break-after: auto;
      }

      .invoice-section {
        page-break-inside: avoid;
      }

      .total-table {
        page-break-before: avoid;
      }

      .page-number {
        position: fixed;
        bottom: 10mm;
      }
    }

    @media screen {
      .page {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      }
    }
  </style>
</head>

<body>
  <!-- === PAGE 1 === -->
  <div class="page">
    <div class="invoice-wrap">
      <div class="invoice-inner">

        <!-- HEADER -->
        <div class="invoice-section" style="border-bottom: 3px solid #555555; padding-bottom: 10px;">
          <table width="100%">
            <tr>
              <td style="width: 40%; text-align: center;">
                <div style="margin-top: 8px; font-size: 22px; font-weight: bold; color: #333;">
                  {%invoice_title%}
                </div>
                <div style="font-size: 18px; font-weight: bold; color: #555;">
                  Purchase Invoice
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- INVOICE INFO -->
        <div class="invoice-section">
          <table width="100%">
            <tr>
              <td style="width: 50%; vertical-align: top;">
                <div class="info-box">
                  <div class="info-title">بيانات الفاتورة / Invoice Details</div>
                  <div><strong>رقم الفاتورة / Invoice No:</strong> {%invoice_number%}</div>
                  <div><strong>رقم فاتورة المورد / Supplier Invoice No:</strong> {%supplier_invoice_number%}</div>
                  <div><strong>التاريخ / Date:</strong> {%invoice_date%}</div>
                  <div><strong>الوقت / Time:</strong> {%created_time%}</div>
                </div>
              </td>
              <td style="width: 50%; vertical-align: top;">
                <div class="info-box">
                  <div class="info-title">بيانات الشركة / Company Details</div>
                  <div style="font-weight: bold;">{%company_name%}</div>
                  <div>{%company_address%}</div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- ITEMS TABLE -->
        <table class="listing-table">
          <thead>
            <tr>
              <th style="width: 35%;">الوصف<br/><span style="font-size: 9px; font-weight: normal;">Description</span></th>
              <th style="width: 8%;">الكمية<br/><span style="font-size: 9px; font-weight: normal;">Qty</span></th>
              <th style="width: 12%;">السعر<br/><span style="font-size: 9px; font-weight: normal;">Rate</span></th>
              <th style="width: 10%;">خصم<br/><span style="font-size: 9px; font-weight: normal;">Discount</span></th>
              <th style="width: 10%;">ضريبة<br/><span style="font-size: 9px; font-weight: normal;">Tax %</span></th>
              <th style="width: 12%;">قيمة الضريبة<br/><span style="font-size: 9px; font-weight: normal;">Tax Value</span></th>
              <th style="width: 13%;">الإجمالي<br/><span style="font-size: 9px; font-weight: normal;">Amount</span></th>
            </tr>
          </thead>
          <tbody>
            {% for item in items %}
            <tr>
              <td style="text-align: right;">
                <div style="font-weight: bold;">{%item.description%}</div>
                <div style="font-size: 9px; color: #6c757d; margin-top: 2px;">{%item.descriptionE%}</div>
              </td>
              <td>{%item.quantity%}</td>
              <td>{%item.rate%}</td>
              <td>{%item.discount%}</td>
              <td>{%item.tax_rate%}%</td>
              <td>{%item.tax_value%}</td>
              <td style="font-weight: bold;">{%item.amount%}</td>
            </tr>
            {% endfor %}
          </tbody>
        </table>

        <!-- TOTALS -->
        <div class="invoice-section">
          <table class="total-table">
            <tr>
              <td style="text-align: right;">المجموع الفرعي / Subtotal</td>
              <td>{%subtotal%}</td>
            </tr>
            <tr>
              <td style="text-align: right;">إجمالي الخصم / Total Discount</td>
              <td>{%total_discount%}</td>
            </tr>
            <tr>
              <td style="text-align: right;">إجمالي الضريبة / Total Tax (15%)</td>
              <td>{%total_tax%}</td>
            </tr>
            <tr class="total-row">
              <td style="text-align: right;">الإجمالي الكلي / Grand Total</td>
              <td>{%total_amount%}</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  </div>

</body>
</html>
`;export{n as default};
