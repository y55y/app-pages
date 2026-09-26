const t=`<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<title>إقفال الفترة</title>
<style>
@page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0;background:#fff;color:#172033;font-family:"Segoe UI",Tahoma,Arial,sans-serif;font-size:10px;line-height:1.45}h1,h2,p{margin:0}.page{max-width:190mm;margin:auto}.header{display:grid;grid-template-columns:1fr auto 1fr;gap:8mm;align-items:center;border-bottom:3px solid #18294b;padding-bottom:5mm}.brand{text-align:center}.brand img{max-width:35mm;max-height:18mm;object-fit:contain}.brand h1{font-size:20px;color:#18294b;margin-top:2mm}.side{text-align:center;font-weight:700;color:#263757}.side small{display:block;color:#71809a;font-weight:500;font-size:9px;margin-top:1mm}.identity{display:grid;grid-template-columns:repeat(4,1fr);gap:2mm;margin:5mm 0}.identity div{border:1px solid #d9e1ec;border-radius:3mm;padding:3mm;background:#f7f9fc}.identity b{display:block;color:#66758e;font-size:9px;margin-bottom:1mm}.identity strong{display:block;color:#152746;font-size:12px;word-break:break-word}.summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2mm;margin:4mm 0}.summary-grid div{border-radius:3mm;background:#18294b;color:#fff;padding:3mm;text-align:center}.summary-grid b{display:block;color:#c8d4e8;font-size:9px}.summary-grid strong{display:block;font-size:15px;margin-top:1mm}.section{margin-top:5mm;break-inside:avoid}h2{font-size:13px;color:#18294b;border-right:4px solid #d29b28;padding:1.5mm 2mm;margin-bottom:2mm;background:#f5f7fb}table{width:100%;border-collapse:collapse;table-layout:fixed}th{background:#eaf0f7;color:#1d3155;font-weight:800;text-align:center}th,td{border:1px solid #ccd7e5;padding:2.2mm 1.8mm;text-align:right;vertical-align:middle;word-wrap:break-word}tbody tr:nth-child(even){background:#fafbfd}.num{text-align:start;direction:ltr;font-variant-numeric:tabular-nums}.strong{font-weight:900;color:#0b6b45}.empty{text-align:center;color:#8390a5;padding:6mm}.footer{margin-top:8mm;border-top:1px solid #ccd7e5;padding-top:3mm;color:#71809a;display:flex;justify-content:space-between;font-size:9px}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}.page{max-width:none}.section{break-inside:auto}thead{display:table-header-group}tr{break-inside:avoid}}
@page{size:A4;margin:10mm}
.page{padding:5mm;max-width:none}
.page table th{text-align:center}
.page table td.num{text-align:right!important;direction:rtl;font-variant-numeric:tabular-nums}
.page .debit-value::before{content:'مدين: ';color:#64748b;font-size:8px}
.page .credit-value::before{content:'دائن: ';color:#64748b;font-size:8px}
@media print{.page{padding:5mm}}
</style>
</head>
<body><main class="page">
<header class="header"><div class="side" dir="rtl"><strong>{%company_name%}</strong><small>{%company_address%}</small></div><div class="brand"><img src="{%logo%}" alt="Logo"></div><div class="side" dir="ltr"><strong>{%company_nameE%}</strong><small>{%company_addressE%}</small></div></header>
<section class="identity"><div><b>رقم الإقفال</b><strong>{%Number%}</strong></div><div><b>من</b><strong>{%CloseDate%}</strong></div><div><b>إلى</b><strong>{%CloseDateEnd%}</strong></div><div><b>الفرع / الحالة</b><strong>{%BranchName%} / {%status_label%}</strong></div></section>
<p>{%Note%}</p>
{%report_content%}
<footer class="footer"><span>تم إنشاء التقرير: {%created_at%}</span><span>إقفال الفترة — {%Number%}</span></footer>
</main></body></html>
`;export{t as default};
