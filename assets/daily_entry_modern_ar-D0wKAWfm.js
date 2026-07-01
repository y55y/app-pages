const t=`<div style="direction: rtl; font-family: Tahoma, Arial, sans-serif; color: #111827; padding: 24px; background: #fff;">
  <style>
    .je-header { display: flex; justify-content: space-between; gap: 24px; border-bottom: 2px solid #111827; padding-bottom: 14px; margin-bottom: 18px; }
    .je-title { font-size: 24px; font-weight: 700; margin: 0 0 8px; }
    .je-meta { font-size: 13px; line-height: 1.9; }
    .je-company { text-align: left; font-size: 13px; line-height: 1.7; }
    .je-company strong { display: block; font-size: 16px; }
    .je-logo { max-width: 120px; max-height: 70px; object-fit: contain; margin-bottom: 8px; }
    .je-table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 14px; }
    .je-table th { background: #f3f4f6; border: 1px solid #d1d5db; padding: 8px; text-align: right; }
    .je-table td { border: 1px solid #e5e7eb; padding: 7px; vertical-align: top; }
    .je-table tfoot th { background: #e5e7eb; }
    .num { text-align: left; direction: ltr; white-space: nowrap; }
    .je-note { margin-top: 14px; border: 1px solid #e5e7eb; padding: 10px; min-height: 42px; }
  </style>

  <div class="je-header">
    <div>
      <h1 class="je-title">قيد يومية # {%journal_id%}</h1>
      <div class="je-meta">
        <div><strong>التاريخ:</strong> {%journal_date%}</div>
        <div><strong>المرجع:</strong> {%journal_reference%}</div>
        <div><strong>العملة:</strong> {%journal_currency_code%}</div>
      </div>
    </div>
    <div class="je-company">
      <img class="je-logo" src="{%logo%}" alt="Logo" />
      <strong>{%business_name%}</strong>
      <div>{%site_bn1%}</div>
      <div>{%site_address1%}</div>
      <div>{%site_city%}</div>
    </div>
  </div>

  <div class="je-note"><strong>الوصف:</strong> {%journal_description%}</div>

  <table class="je-table">
    <thead>
      <tr>
        <th style="width: 16%;">كود الحساب</th>
        <th style="width: 28%;">الحساب</th>
        <th>الوصف</th>
        <th style="width: 13%;">مدين</th>
        <th style="width: 13%;">دائن</th>
      </tr>
    </thead>
    <tbody>
      {% for item in items %}
      <tr>
        <td>{% item.account_code %}</td>
        <td>{% item.account_name %}</td>
        <td>{% item.description %}</td>
        <td class="num">{% item.debit %}</td>
        <td class="num">{% item.credit %}</td>
      </tr>
      {% endfor %}
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3">الإجمالي</th>
        <th class="num">{%journal_total_debit%}</th>
        <th class="num">{%journal_total_credit%}</th>
      </tr>
    </tfoot>
  </table>
</div>
`;export{t as default};
