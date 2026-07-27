const t=`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>عرض سعر</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #ffffff; color: #000000; font-family: Tahoma, Arial, "Segoe UI", sans-serif; font-size: 13px; line-height: 1.55; direction: rtl; text-align: right; }
    body { width: 210mm; min-height: 297mm; margin: 0 auto; }
    .page { width: 210mm; min-height: 297mm; padding: 16mm 13mm 13mm; background: #ffffff; }
    .top-row { width: 100%; border-collapse: collapse; margin-bottom: 16mm; }
    .top-row td { vertical-align: top; padding: 0; }
    .logo-cell { width: 55%; text-align: right; }
    .title-cell { width: 45%; text-align: left; padding-top: 7mm; }
    .logo { max-width: 58mm; max-height: 24mm; object-fit: contain; display: block; margin-right: 0; margin-left: auto; }
    .quotation-title { font-family: "Times New Roman", Tahoma, Arial, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: 0; margin-top: 4mm; }
    .supplier-block { margin-top: 4mm; margin-bottom: 3mm; font-size: 15px; line-height: 1.45; font-weight: 700; }
    .supplier-block .light { font-weight: 400; }
    .divider { border: 0; border-top: 2px solid #000000; margin: 0 0 10mm; }
    .meta-table { width: 70%; border-collapse: collapse; margin-bottom: 9mm; font-size: 15px; }
    .meta-table td { padding: 1.25mm 0; vertical-align: top; }
    .meta-table .label { width: 38%; font-weight: 700; white-space: nowrap; }
    .meta-table .colon { width: 7%; text-align: center; font-weight: 700; }
    .meta-table .value { width: 55%; font-weight: 400; }
    .intro { margin: 0 0 10mm; font-size: 15px; }
    .quotation-table { width: 100%; border-collapse: collapse; border: 1px solid #000000; margin-bottom: 9mm; font-size: 13px; }
    .quotation-table th, .quotation-table td { border: 1px solid #000000; padding: 3mm 2mm; vertical-align: middle; }
    .quotation-table th { text-align: center; font-weight: 700; background: #f5f5f5; }
    .quotation-table .no { width: 5.5%; text-align: center; }
    .quotation-table .description { width: 25%; font-size: 14px; font-weight: 700; }
    .quotation-table .details { width: 31%; line-height: 1.45; white-space: pre-line; }
    .quotation-table .qty { width: 7%; text-align: center; }
    .quotation-table .money { width: 15.75%; text-align: left; direction: ltr; white-space: nowrap; }
    .summary-row td { padding: 3mm 2mm; font-size: 14px; font-weight: 700; }
    .summary-label { text-align: left; }
    .summary-value { text-align: left; direction: ltr; white-space: nowrap; }
    .notes { margin-top: 5mm; margin-bottom: 6mm; font-size: 14px; }
    .notes-title { font-weight: 700; margin-bottom: 2mm; }
    .notes ul { margin: 0; padding-right: 5mm; padding-left: 0; }
    .notes li { margin-bottom: 1mm; }
    .closing { margin-top: 3mm; margin-bottom: 6mm; font-size: 14px; }
    .signature { margin-top: 5mm; margin-bottom: 9mm; font-size: 14px; }
    .signature-line { width: 70mm; border-top: 1px solid #000000; height: 6mm; margin-bottom: 2mm; }
    .signature .name { font-weight: 400; line-height: 1.45; }
    .bank-table { width: 100%; border-collapse: collapse; border: 1px solid #000000; font-size: 14px; margin-top: 2mm; }
    .bank-table th, .bank-table td { border: 1px solid #000000; padding: 3mm 2mm; }
    .bank-table th { font-size: 16px; font-weight: 700; text-align: center; background: #ffffff; }
    .bank-table .bank-label { width: 50%; font-weight: 400; }
    .bank-table .bank-value { width: 50%; direction: ltr; text-align: left; }
    .ltr { direction: ltr; unicode-bidi: embed; display: inline-block; }
    @media print { html, body { width: 210mm; min-height: 297mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .page { margin: 0; page-break-after: always; } }
  </style>
</head>
<body>
  <main class="page">
    <table class="top-row" role="presentation"><tr><td class="logo-cell"><img class="logo" src="{%logo%}" alt="Middar" /></td><td class="title-cell"><div class="quotation-title">{%quotation_title%}</div></td></tr></table>
    <section class="supplier-block"><div>{%supplier_name%}</div><div>{%supplier_branch%}</div><div class="light">السجل التجاري: <span class="ltr">{%supplier_cr%}</span></div><div class="light">الجوال: <span class="ltr">{%supplier_mobile%}</span></div></section>
    <hr class="divider" />
    <table class="meta-table" role="presentation">
      <tr><td class="label">رقم عرض السعر</td><td class="colon">:</td><td class="value ltr">{%quotation_number%}</td></tr>
      <tr><td class="label">التاريخ</td><td class="colon">:</td><td class="value">{%quotation_date%}</td></tr>
      <tr><td class="label">مقدم إلى</td><td class="colon">:</td><td class="value">{%prepared_for%}</td></tr>
      <tr><td class="label">السجل التجاري</td><td class="colon">:</td><td class="value ltr">{%client_cr%}</td></tr>
    </table>
    <p class="intro">يسرّنا تقديم عرض السعر الخاص بـ {%system_name%} حسب التفاصيل الموضحة أدناه:</p>
    <table class="quotation-table"><thead><tr><th class="no">م</th><th class="description">الوصف</th><th class="details">التفاصيل</th><th class="qty">الكمية</th><th class="money">سعر الوحدة (ريال)</th><th class="money">الإجمالي (ريال)</th></tr></thead><tbody>
      {% for item in items %}<tr><td class="no">{% item.serial %}</td><td class="description">{% item.description %}</td><td class="details">{% item.details %}</td><td class="qty">{% item.quantity %}</td><td class="money">{% item.unit_price %}</td><td class="money">{% item.total_price %}</td></tr>{% endfor %}
    </tbody></table>
    <section class="notes"><div class="notes-title">ملاحظات:</div><div>{%note%}</div></section>
    <p class="closing">نشكر لكم إتاحة الفرصة لخدمتكم، ونتطلع إلى شراكة ناجحة.</p>
    <section class="signature"><p>وتفضلوا بقبول فائق الاحترام،</p><div class="signature-line"></div><div class="name">{%supplier_name%}<br />{%supplier_branch%}<br />الجوال: <span class="ltr">{%supplier_mobile%}</span></div></section>
    <table class="bank-table"><thead><tr><th colspan="2">بيانات التحويل البنكي</th></tr></thead><tbody><tr><td class="bank-label">اسم البنك</td><td class="bank-value">{%bank_name%}</td></tr><tr><td class="bank-label">رقم الآيبان</td><td class="bank-value">{%bank_iban%}</td></tr></tbody></table>
  </main>
</body>
</html>
`;export{t as default};
