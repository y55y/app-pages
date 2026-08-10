const t=`<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<title>Expense Voucher A4</title>
<style>
@page { size: A4 portrait; margin: 0; }
html, body { width: 210mm; min-height: 297mm; margin: 0; background: #fff; color: #000; }
body { font-family: Georgia, "Times New Roman", serif; }
.page { box-sizing: border-box; width: 210mm; min-height: 297mm; padding: 8mm 12mm 10mm; background: #fff; }
.header { min-height: 61mm; padding-top: 3mm; border-bottom: 1px solid #e5e5e5; direction: rtl; }
.header-table, .details, .signatures { width: 100%; border-collapse: collapse; }
.header-table td { border: 0; vertical-align: top; }
.logo-cell { width: 28%; padding-top: 17mm; text-align: right; }
.logo { width: 42mm; height: 25mm; object-fit: contain; }
.company-cell { width: 72%; padding-right: 10mm; text-align: right; color: #000; font-size: 11pt; line-height: 1.8; font-family: Tahoma, Arial, sans-serif; }
.company-name { display: block; margin-bottom: 4mm; color: #000; font-size: 19pt; font-weight: bold; }
.company-en { margin-top: 3mm; direction: ltr; text-align: right; color: #000; font-family: Arial, sans-serif; font-size: 9pt; line-height: 1.7; }
.title { margin: 8mm auto 11mm; width: max-content; color: #000; text-align: center; font-size: 15pt; font-weight: normal; border-bottom: 1px solid #555; padding-bottom: 2mm; }
.main-grid { width: 100%; direction: rtl; }
.amount-box { width: 30mm; height: 27mm; padding: 6mm 4mm; box-sizing: border-box; background: #fff; color: #000; border: 1px solid #e5e5e5; text-align: center; vertical-align: top; }
.amount-label { display: block; margin-bottom: 2mm; color: #000; font-size: 11pt; }
.amount { display: block; direction: ltr; unicode-bidi: isolate-override; font-size: 17pt; }
.currency { display: block; margin-top: 1mm; color: #000; font-size: 11pt; }
.details-cell { width: 78%; padding-left: 8mm; vertical-align: top; }
.details { direction: rtl; }
.details td { border-bottom: 1px solid #e5e5e5; height: 12mm; padding: 2mm 0; font-size: 11pt; }
.details .label { width: 30%; color: #000; text-align: right; white-space: nowrap; }
.details .value { width: 70%; color: #000; font-weight: bold; text-align: right; direction: rtl; }
.details .value-ar { direction: rtl; text-align: right; }
.section { margin-top: 10mm; padding-top: 4mm; border-top: 1px solid #e5e5e5; direction: rtl; }
.section-title { margin: 0 0 3mm; color: #000; font-size: 12pt; font-weight: bold; text-align: right; }
.section-value { margin: 0; color: #000; font-size: 12pt; line-height: 1.7; min-height: 7mm; }
.signatures { margin-top: 26mm; direction: rtl; }
.signatures td { width: 33%; padding: 0 6mm; border: 0; color: #000; text-align: center; font-size: 11pt; }
.signature-line { display: block; margin-top: 13mm; border-top: 1px solid #aaa; }
@media print { html, body { width: 210mm; height: 297mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .page { page-break-after: always; } }
</style>
</head>
<body>
<main class="page">
<header class="header">
<table class="header-table"><tbody><tr>
<td class="logo-cell"><img src="{%logo%}" class="logo" /></td>
<td class="company-cell"><strong class="company-name">{%company_name%}</strong>{%company_address%}<br />{%branch_name%}<br />{%branch_email%}<div class="company-en"><strong>{%company_nameE%}</strong><br />{%company_addressE%}<br />{%branch_nameE%}<br />{%branch_email_en%}</div></td>
</tr></tbody></table>
</header>
<h1 class="title">سند صرف</h1>
<table class="main-grid"><tbody><tr>
<td class="details-cell">
<table class="details"><tbody>
<tr><td class="label">رقم السند</td><td class="value">{%expense_id%}</td></tr>
<tr><td class="label">التاريخ</td><td class="value">{%date%}</td></tr>
<tr><td class="label">الرقم المرجعي</td><td class="value"></td></tr>
<tr><td class="label">دفعنا إلى</td><td class="value value-ar">{%account_names%}</td></tr>
<tr><td class="label">طريقة الدفع</td><td class="value">{%payment_method%}</td></tr>
<tr><td class="label">من خزينة / بنك</td><td class="value">{%treasury%}</td></tr>
</tbody></table>
</td>
<td class="amount-box"><span class="amount-label">المبلغ المدفوع</span><span class="amount" dir="ltr">&#x200E;#&#x200E;{%amount%}&#x200E;#&#x200E;</span><span class="currency" dir="rtl">ر.س</span></td>
</tr></tbody></table>
<section class="section"><h2 class="section-title">دفعنا إلى</h2><p class="section-value" dir="rtl">{%account_names%}</p></section>
<section class="section"><h2 class="section-title">وذلك مقابل</h2><p class="section-value" dir="rtl" style="white-space: pre-line;">{%note%}</p></section>
<table class="signatures"><tbody><tr>
<td>توقيع المستلم<span class="signature-line"></span></td>
<td>أمين الصندوق<span class="signature-line"></span></td>
<td>توقيع المدير<span class="signature-line"></span></td>
</tr></tbody></table>
</main>
</body>
</html>
`;export{t as default};
