const n=`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>POS Session Report</title>
<style>
  :root {
    /* Restrained print palette: navy + neutrals; semantic color only for reconciliation. */
    --navy-950:#111827;
    --navy-900:#1f2937;
    --navy-800:#374151;
    --navy-700:#4b5563;
    --green:#15803d;
    --green-soft:#f0fdf4;
    --amber:#b45309;
    --amber-border:#f3c761;
    --amber-soft:#fff8df;
    --red:#b91c1c;
    --red-border:#f3a6a6;
    --red-soft:#fff1f1;
    --ink:#162033;
    --muted:#64748b;
    --muted-2:#94a3b8;
    --line:#dbe3ed;
    --line-strong:#c8d3e1;
    --surface:#f8fafc;
    --surface-2:#f1f5f9;
    --paper:#fff;
    --screen:#eef0f3;
  }

  *{box-sizing:border-box}
  html,body{margin:0;padding:0}
  body{
    background:var(--screen);
    color:var(--ink);
    direction:rtl;
    text-align:right;
    font-family:"Segoe UI",Tahoma,Arial,sans-serif;
    font-size:10px;
    line-height:1.3;
    -webkit-font-smoothing:antialiased;
  }

  .report{
    width:210mm;
    min-height:297mm;
    margin:14px auto;
    padding:8mm 10mm 16mm;
    background:var(--paper);
    border:1px solid #dfe6ef;
    border-radius:2.5mm;
    box-shadow:0 12px 36px rgba(15,23,42,.14);
  }

  .page-shell{width:100%;border-collapse:collapse;table-layout:fixed}
  .page-shell>thead>tr>td,
  .page-shell>tbody>tr>td,
  .page-shell>tfoot>tr>td{border:0;padding:0;vertical-align:top}

  /* ===== Document header ===== */
  .doc-header{
    position:relative;
    display:grid;
    grid-template-columns:1fr 52mm 1fr;
    grid-template-areas:"en brand ar";
    direction:ltr;
    align-items:center;
    gap:5mm;
    min-height:28mm;
    padding:0 0 4mm;
    border-bottom:1px solid var(--line-strong);
  }
  .doc-header::after{
    content:"";
    position:absolute;
    left:0;right:0;bottom:-1px;
    height:1mm;
    border-radius:999px;
    background:var(--navy-900);
  }
  .company-block{display:flex;flex-direction:column;gap:.6mm;min-width:0}
  .company-block.en{grid-area:en;direction:ltr;text-align:center;align-items:center;justify-self:stretch}
  .company-block.ar{grid-area:ar;direction:rtl;text-align:center;align-items:center;justify-self:stretch}
  .company-name{
    width:100%;
    max-width:65mm;
    text-align:center;
    unicode-bidi:plaintext;
    font-size:13.5px;
    line-height:1.12;
    font-weight:850;
    color:var(--navy-950);
    overflow-wrap:anywhere;
  }
  .company-line{width:100%;font-size:8px;font-weight:650;color:var(--muted);unicode-bidi:plaintext;text-align:center}
  .brand{grid-area:brand;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;direction:rtl}
  .brand img{display:block;width:33mm;max-width:100%;max-height:15mm;object-fit:contain;margin:0 auto 1mm}
  .doc-title-ar{direction:rtl;font-size:15.5px;line-height:1.1;font-weight:900;color:var(--navy-950)}
  .doc-title-en{direction:ltr;margin-top:.45mm;font-size:8.2px;letter-spacing:.16em;text-transform:uppercase;font-weight:850;color:var(--navy-800)}

  /* ===== Session identity ===== */
  .session-overview{
    margin-top:4mm;
    border:1px solid var(--line-strong);
    border-radius:2.2mm;
    overflow:hidden;
    background:#fff;
    break-inside:avoid-page;
    page-break-inside:avoid;
  }
  .session-top{
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1.35fr;
    grid-template-areas:"branch user cashier session";
    direction:ltr;
  }
  .session-top .session-box:nth-child(1){grid-area:session}
  .session-top .session-box:nth-child(2){grid-area:cashier}
  .session-top .session-box:nth-child(3){grid-area:user}
  .session-top .session-box:nth-child(4){grid-area:branch}
  .session-box{
    min-width:0;
    min-height:15mm;
    padding:2.1mm 2.5mm;
    border-left:1px solid var(--line);
    background:#fff;
  }
  .session-top .session-box:nth-child(4){border-left:0}
  .session-box.primary{
    color:#fff;
    background:var(--navy-900);
  }
  .meta-label{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-areas:"en ar";
    direction:ltr;
    align-items:center;
    gap:2mm;
    font-size:7.4px;
    font-weight:750;
    color:var(--muted);
  }
  .primary .meta-label{color:rgba(255,255,255,.72)}
  .meta-label .ar{grid-area:ar;direction:rtl;text-align:right;unicode-bidi:isolate}.meta-label .en{grid-area:en;direction:ltr;text-align:left;unicode-bidi:isolate}
  .meta-value{
    margin-top:1.1mm;
    direction:ltr;
    unicode-bidi:isolate;
    text-align:right;
    font-size:11px;
    line-height:1.05;
    font-weight:900;
    color:var(--navy-950);
    overflow-wrap:anywhere;
  }
  .primary .meta-value{color:#fff;font-size:13px}

  .session-bottom{
    display:grid;
    grid-template-columns:.75fr .75fr 1.25fr 1.25fr;
    grid-template-areas:"returns sales end start";
    direction:ltr;
    border-top:1px solid var(--line);
    background:var(--surface);
  }
  .mini-box{
    min-width:0;
    min-height:13mm;
    padding:1.8mm 2.5mm;
    border-left:1px solid var(--line);
  }
  .session-bottom .mini-box:nth-child(1){grid-area:start}
  .session-bottom .mini-box:nth-child(2){grid-area:end}
  .session-bottom .mini-box:nth-child(3){grid-area:sales}
  .session-bottom .mini-box:nth-child(4){grid-area:returns;border-left:0}
  .mini-box .meta-value{font-size:9px;margin-top:.8mm}
  .mini-box.count{display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-areas:"value label";direction:ltr;align-items:center;gap:2mm}
  .mini-box.count .count-label{grid-area:label;text-align:right}
  .mini-box.count .count-label .ar{direction:rtl;font-size:8px;font-weight:850;text-align:right}
  .mini-box.count .count-label .en{direction:ltr;margin-top:.25mm;font-size:6.9px;font-weight:650;color:var(--muted);text-align:right}
  .count-value{grid-area:value;direction:ltr;unicode-bidi:isolate;text-align:left;font-size:14px;font-weight:950;color:var(--navy-900);font-variant-numeric:tabular-nums}

  /* ===== Section title ===== */
  .group-title{
    display:grid;
    grid-template-columns:auto minmax(0,1fr);
    grid-template-areas:"hint title";
    direction:ltr;
    align-items:end;
    gap:4mm;
    margin:4mm 0 2mm;
    padding-bottom:1.3mm;
    border-bottom:1px solid var(--line-strong);
  }
  .group-title>div:first-child{grid-area:title;text-align:right}
  .group-title .title-ar{direction:rtl;text-align:right;font-size:11px;font-weight:900;color:var(--navy-950)}
  .group-title .title-en{direction:ltr;text-align:right;margin-top:.25mm;font-size:7.5px;font-weight:750;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
  .group-title .hint{grid-area:hint;direction:ltr;text-align:left;font-size:7px;color:var(--muted-2);font-weight:650;white-space:nowrap}

  .group-title{display:none}

  /* ===== Financial summary — compact RTL reference style ===== */
  .finance-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    grid-template-areas:"payments cash sales";
    direction:ltr;
    gap:2.3mm;
    align-items:stretch;
    margin-top:4mm;
    padding:2.7mm 2.7mm 3mm;
    border:1px solid var(--line-strong);
    border-radius:2.3mm;
    background:#f7f9fc;
    break-inside:avoid-page;
    page-break-inside:avoid;
  }
  .finance-card{
    min-width:0;
    display:flex;
    flex-direction:column;
    overflow:visible;
    border:0;
    border-radius:0;
    background:transparent;
  }
  .finance-card.sales{grid-area:sales}
  .finance-card.cash{grid-area:cash}
  .finance-card.payments{grid-area:payments}
  .finance-head{
    display:block;
    min-height:0;
    padding:0 1mm 2.2mm;
    color:var(--navy-950);
    background:transparent;
    text-align:center;
  }
  .finance-title{display:block;min-width:0;text-align:center}
  .finance-title .ar{
    display:block;
    direction:rtl;
    text-align:center;
    font-size:13.5px;
    line-height:1.05;
    font-weight:950;
    color:#061a35;
  }
  .finance-title .en{display:none}
  .currency-pill{display:none}
  .finance-body{
    flex:1 1 auto;
    display:flex;
    flex-direction:column;
    gap:2mm;
  }
  .money-row{
    display:grid;
    grid-template-columns:auto minmax(0,1fr);
    grid-template-areas:"value label";
    direction:ltr;
    align-items:center;
    gap:2mm;
    min-height:10.8mm;
    padding:2.15mm 2.8mm;
    border:1px solid #d6e0eb;
    border-radius:2mm;
    background:#fff;
    box-shadow:0 .45mm 1.35mm rgba(15,23,42,.08);
  }
  .money-row:last-child{border-bottom:1px solid #d6e0eb}
  .money-label{grid-area:label;min-width:0;text-align:right}
  .money-label .ar{
    display:block;
    direction:rtl;
    unicode-bidi:isolate;
    text-align:right;
    font-size:9.7px;
    font-weight:850;
    line-height:1.15;
    color:#66758a;
  }
  .money-label .en{display:none}
  .money-value{
    grid-area:value;
    min-width:18mm;
    direction:ltr;
    unicode-bidi:isolate;
    text-align:left;
    white-space:nowrap;
    font-size:10.5px;
    line-height:1;
    font-weight:950;
    font-variant-numeric:tabular-nums;
    color:#061a35;
  }
  .money-row.strong{background:#fff;border-top:1px solid #d6e0eb}
  .money-row.strong .money-label .ar,.money-row.strong .money-value{font-weight:950}
  .money-row.strong .money-value{color:#061a35}
  .money-value.is-positive{color:#00852b}
  .money-value.is-negative{color:var(--red)}
  .money-value.is-zero{color:#061a35}

  /* ===== Payment methods reconciliation table ===== */
  .methods-section{
    margin-top:3.3mm;
    break-inside:avoid-page;
    page-break-inside:avoid;
  }
  .methods-wrap{
    border:1px solid var(--line-strong);
    border-radius:2.3mm;
    overflow:hidden;
    background:#fff;
  }
  .methods-head{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-areas:"en ar";
    direction:ltr;
    align-items:center;
    gap:3mm;
    min-height:8mm;
    padding:1.6mm 2.8mm;
    background:var(--navy-900);
    color:#fff;
  }
  .methods-head .en{grid-area:en;direction:ltr;text-align:left;font-size:8px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
  .methods-head .ar{grid-area:ar;direction:rtl;text-align:right;font-size:10px;font-weight:900}
  .methods-table{
    width:100%;
    border-collapse:collapse;
    table-layout:fixed;
    direction:rtl;
  }
  .methods-table col.name{width:34%}
  .methods-table col.sales{width:22%}
  .methods-table col.actual{width:22%}
  .methods-table col.diff{width:22%}
  .methods-table th,.methods-table td{
    padding:1.8mm 2.4mm;
    border-bottom:1px solid var(--line);
    vertical-align:middle;
  }
  .methods-table thead th{
    background:var(--surface);
    color:var(--navy-900);
    text-align:center;
    font-size:8px;
    font-weight:850;
  }
  .methods-table thead th .ar{display:block;direction:rtl;text-align:center;font-size:8.1px;font-weight:900;color:var(--navy-950)}
  .methods-table thead th .en{display:block;direction:ltr;text-align:center;font-size:6.7px;font-weight:700;color:var(--muted);margin-top:.35mm}
  .methods-table tbody tr:nth-child(even) td{background:#fbfdff}
  .methods-table tbody tr:last-child td{border-bottom:0}
  .methods-table td.method-name{
    direction:rtl;
    text-align:right;
    font-size:8.9px;
    font-weight:800;
    color:var(--navy-950);
  }
  .methods-table td.method-name .en{display:block;direction:ltr;text-align:right;font-size:6.8px;font-weight:650;color:var(--muted);margin-top:.25mm}
  .methods-table td.num{
    direction:ltr;
    unicode-bidi:isolate;
    text-align:center;
    font-size:9.1px;
    font-weight:900;
    color:var(--navy-950);
    font-variant-numeric:tabular-nums;
    white-space:nowrap;
  }
  .methods-table td.num.is-positive{color:#00852b}
  .methods-table td.num.is-negative{color:var(--red)}
  .methods-table td.num.is-zero{color:#061a35}
  .methods-table tr.static-row td.method-name{background:#fcfdff}
  .methods-table tr.static-row td{font-weight:850}
  .methods-note{
    padding:1.3mm 2.6mm 1.5mm;
    border-top:1px solid var(--line);
    background:#fff;
    color:var(--muted);
    font-size:6.8px;
    font-weight:650;
    direction:rtl;
    text-align:right;
  }


  /* ===== Category sales table ===== */
  .category-section{
    margin-top:3.3mm;
    break-inside:avoid-page;
    page-break-inside:avoid;
  }
  .category-wrap{
    border:1px solid var(--line-strong);
    border-radius:2.3mm;
    overflow:hidden;
    background:#fff;
  }
  .category-head{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-areas:"en ar";
    direction:ltr;
    align-items:center;
    gap:3mm;
    min-height:8mm;
    padding:1.6mm 2.8mm;
    background:var(--navy-900);
    color:#fff;
  }
  .category-head .en{grid-area:en;direction:ltr;text-align:left;font-size:8px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
  .category-head .ar{grid-area:ar;direction:rtl;text-align:right;font-size:10px;font-weight:900}
  .category-table{
    width:100%;
    border-collapse:collapse;
    table-layout:fixed;
    direction:rtl;
  }
  .category-table col.name{width:50%}
  .category-table col.amount{width:25%}
  .category-table col.percentage{width:25%}
  .category-table th,.category-table td{
    padding:1.8mm 2.4mm;
    border-bottom:1px solid var(--line);
    vertical-align:middle;
  }
  .category-table thead th{
    background:var(--surface);
    color:var(--navy-900);
    text-align:center;
    font-size:8px;
    font-weight:850;
  }
  .category-table thead th .ar{display:block;direction:rtl;text-align:center;font-size:8.1px;font-weight:900;color:var(--navy-950)}
  .category-table thead th .en{display:block;direction:ltr;text-align:center;font-size:6.7px;font-weight:700;color:var(--muted);margin-top:.35mm}
  .category-table tbody tr:nth-child(even) td{background:#fbfdff}
  .category-table tbody tr:last-child td{border-bottom:0}
  .category-table td.category-name{
    direction:rtl;
    unicode-bidi:plaintext;
    text-align:right;
    font-size:8.9px;
    font-weight:800;
    color:var(--navy-950);
    overflow-wrap:anywhere;
  }
  .category-table td.num{
    direction:ltr;
    unicode-bidi:isolate;
    text-align:center;
    font-size:9.1px;
    font-weight:900;
    color:var(--navy-950);
    font-variant-numeric:tabular-nums;
    white-space:nowrap;
  }
  .category-table td.percentage{color:var(--navy-700)}

  /* ===== Reconciliation ===== */
  .reconcile{
    margin-top:3.6mm;
    padding:2.7mm;
    border:1px solid var(--line-strong);
    border-radius:2.4mm;
    background:#fff;
    break-inside:avoid-page;
    page-break-inside:avoid;
  }
  .reconcile-head{display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-areas:"note title";direction:ltr;align-items:end;gap:4mm;margin-bottom:2.2mm}
  .reconcile-head>div:first-child{grid-area:title;text-align:right}
  .reconcile-head .ar{direction:rtl;text-align:right;font-size:10.7px;font-weight:900;color:var(--navy-950)}
  .reconcile-head .en{direction:ltr;text-align:right;margin-top:.25mm;font-size:7.4px;color:var(--muted);font-weight:750;letter-spacing:.06em;text-transform:uppercase}
  .reconcile-note{grid-area:note;font-size:6.7px;font-weight:650;color:var(--muted-2);text-align:left}
  .reconcile-note .ar{display:block;direction:rtl;text-align:left;font-size:6.9px;font-weight:750;color:var(--muted)}
  .reconcile-note .en{display:block;direction:ltr;text-align:left;margin-top:.2mm;font-size:6.2px;letter-spacing:0;text-transform:none;color:var(--muted-2)}

  .reconcile-grid{
    display:grid;
    grid-template-columns:1fr 1fr 1.28fr;
    grid-template-areas:"card cash result";
    direction:ltr;
    gap:2.4mm;
    align-items:stretch;
  }
  .diff-card,.result-card{
    position:relative;
    overflow:hidden;
    border:1px solid var(--line);
    border-radius:2.2mm;
    background:#fff;
  }
  .diff-card{min-height:24mm;padding:2.4mm 2.8mm 2.5mm;direction:rtl;text-align:right}
  .reconcile-grid .diff-card:nth-child(1){grid-area:cash}
  .reconcile-grid .diff-card:nth-child(2){grid-area:card}
  .reconcile-grid .result-card{grid-area:result}
  .diff-card::before,.result-card::before{content:"";position:absolute;right:0;top:0;bottom:0;width:1.2mm;background:var(--navy-800)}
  .diff-title{padding-right:1.2mm;text-align:right}
  .diff-title .ar{direction:rtl;text-align:right;font-size:8.6px;font-weight:850}
  .diff-title .en{direction:ltr;text-align:right;margin-top:.3mm;font-size:6.9px;font-weight:700;color:var(--muted)}
  .diff-value{padding-right:1.2mm;margin-top:1.7mm;direction:ltr;unicode-bidi:isolate;text-align:right;font-size:15px;line-height:1;font-weight:950;color:var(--navy-950);font-variant-numeric:tabular-nums}
  .status-pill{display:inline-block;margin:1.4mm 1.2mm 0 0;padding:.5mm 1.35mm;border-radius:999px;background:#fff;color:var(--muted);border:1px solid var(--line);font-size:6.5px;font-weight:850;direction:auto;unicode-bidi:plaintext}

  .result-card{
    min-height:24mm;
    padding:2.4mm 3.4mm 2.5mm 3mm;
    display:grid;
    grid-template-columns:auto minmax(0,1fr);
    grid-template-areas:"amount copy";
    direction:ltr;
    align-items:center;
    gap:3mm;
    background:#fff;
  }
  .result-copy{grid-area:copy;padding-right:1.1mm;min-width:0;text-align:right}
  .result-kicker{direction:ltr;text-align:right;font-size:6.5px;font-weight:850;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
  .result-title-ar{direction:rtl;text-align:right;margin-top:.55mm;font-size:10px;font-weight:950;color:var(--navy-950)}
  .result-title-en{direction:ltr;text-align:right;margin-top:.25mm;font-size:7px;font-weight:700;color:var(--muted)}
  .result-status{margin-top:1.15mm;font-size:7px;font-weight:900;color:var(--muted);direction:auto;unicode-bidi:plaintext;text-align:right}
  .result-amount{grid-area:amount;direction:ltr;unicode-bidi:isolate;text-align:left;white-space:nowrap;font-size:20px;line-height:1;font-weight:950;color:var(--navy-950);font-variant-numeric:tabular-nums}

  /* Balanced */
  .is-balanced{background:#fff;border-color:#a7d8b3}
  .is-balanced::before{background:var(--green)}
  .is-balanced .diff-value,.result-card.is-balanced .result-amount{color:var(--green)}
  .is-balanced .status-pill{background:#fff;color:var(--green);border:1px solid #a7d8b3}
  .result-card.is-balanced .result-status{color:var(--green)}

  /* Extra / surplus = YELLOW */
  .is-extra{background:#fff;border-color:var(--amber-border)}
  .is-extra::before{background:#d99a08}
  .is-extra .diff-value,.result-card.is-extra .result-amount{color:var(--amber)}
  .is-extra .status-pill{background:#fff;color:var(--amber);border:1px solid var(--amber-border)}
  .result-card.is-extra .result-status{color:var(--amber)}

  /* Shortage = RED */
  .is-short{background:#fff;border-color:var(--red-border)}
  .is-short::before{background:#dc2626}
  .is-short .diff-value,.result-card.is-short .result-amount{color:var(--red)}
  .is-short .status-pill{background:#fff;color:var(--red);border:1px solid var(--red-border)}
  .result-card.is-short .result-status{color:var(--red)}

  /* ===== Footer ===== */
  .footer-spacer{height:12mm;visibility:hidden;border:0!important;padding:0!important}
  .doc-footer{
    display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"en ar";direction:ltr;gap:8mm;
    margin-top:4mm;padding-top:1.5mm;border-top:1px solid var(--line-strong);
    color:var(--muted);font-size:7px;font-weight:650
  }
  .doc-footer .en{grid-area:en;direction:ltr;text-align:left;unicode-bidi:plaintext}.doc-footer .ar{grid-area:ar;direction:rtl;text-align:right;unicode-bidi:plaintext}

  @media print{
    @page{size:A4 portrait;margin:7mm 9mm 9mm}
    html,body{margin:0!important;padding:0!important;background:#fff!important}
    body{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}
    .report{width:100%!important;min-height:0!important;margin:0!important;padding:0 5mm!important;border:0!important;border-radius:0!important;box-shadow:none!important;background:transparent!important}
    .page-shell>thead{display:table-header-group!important}
    .page-shell>tbody{display:table-row-group!important}
    .page-shell>tfoot{display:table-footer-group!important}
    .doc-header,.session-overview,.finance-card,.methods-section,.methods-wrap,.category-section,.category-wrap,.reconcile,.reconcile-grid{break-inside:avoid-page!important;page-break-inside:avoid!important}
    .doc-footer{position:fixed!important;left:14mm!important;right:14mm!important;bottom:3mm!important;width:auto!important;margin:0!important;padding-top:1.4mm!important;background:#fff!important;z-index:20!important}
  }
</style>
</head>
<body>
<main class="report">
  <table class="page-shell" aria-label="POS session report">
    <thead>
      <tr><td>
        <header class="doc-header">
          <section class="company-block en">
            <div class="company-name">{%company_nameE%}</div>
            <div class="company-line">Mobile: {%company_phone%}</div>
            <div class="company-line">C.R: {%CRN%}</div>
          </section>

          <section class="brand">
            <img alt="Logo" src="{%logo%}"/>
            <div class="doc-title-ar">تقرير جلسة نقطة البيع</div>
            <div class="doc-title-en">POS Session Report</div>
          </section>

          <section class="company-block ar">
            <div class="company-name">{%company_name%}</div>
            <div class="company-line">جوال: {%company_phone%}</div>
            <div class="company-line">س.ت: {%CRN%}</div>
          </section>
        </header>
      </td></tr>
    </thead>

    <tbody><tr><td>
      <section class="session-overview">
        <div class="session-top">
          <div class="session-box primary">
            <div class="meta-label"><span class="ar">رقم الجلسة</span><span class="en">Session No.</span></div>
            <div class="meta-value" dir="ltr">{%CashairSID%}</div>
          </div>
          <div class="session-box">
            <div class="meta-label"><span class="ar">الكاشير</span><span class="en">Cashier</span></div>
            <div class="meta-value" dir="ltr">{%CashairScID%}</div>
          </div>
          <div class="session-box">
            <div class="meta-label"><span class="ar">المستخدم</span><span class="en">User</span></div>
            <div class="meta-value" dir="ltr">{%CashairSU%}</div>
          </div>
          <div class="session-box">
            <div class="meta-label"><span class="ar">الفرع</span><span class="en">Branch</span></div>
            <div class="meta-value" dir="ltr">{%CashairSstore%}</div>
          </div>
        </div>
        <div class="session-bottom">
          <div class="mini-box">
            <div class="meta-label"><span class="ar">من</span><span class="en">Start</span></div>
            <div class="meta-value" dir="ltr">{%CashairSstart%}</div>
          </div>
          <div class="mini-box">
            <div class="meta-label"><span class="ar">إلى</span><span class="en">End</span></div>
            <div class="meta-value" dir="ltr">{%CashairSend%}</div>
          </div>
          <div class="mini-box count">
            <div class="count-label"><div class="ar">فواتير المبيعات</div><div class="en">Sales Invoices</div></div>
            <div class="count-value" dir="ltr">{%CashairSunit%}</div>
          </div>
          <div class="mini-box count">
            <div class="count-label"><div class="ar">فواتير المردودات</div><div class="en">Return Invoices</div></div>
            <div class="count-value" dir="ltr">{%CashairSunitR%}</div>
          </div>
        </div>
      </section>

      <div class="group-title">
        <div><div class="title-ar">الملخص المالي</div><div class="title-en">Financial Summary</div></div>
        <div class="hint">All amounts in {%currency_code%}</div>
      </div>

      <section class="finance-grid" aria-label="الملخص المالي">
        <article class="finance-card sales">
          <header class="finance-head">
            <div class="finance-title"><span class="ar">الفواتير</span><span class="en">Invoices</span></div>
            <span class="currency-pill" dir="ltr">{%currency_code%}</span>
          </header>
          <div class="finance-body">
            <div class="money-row"><span class="money-label"><span class="ar">المبيعات</span><span class="en">Sales</span></span><span class="money-value" dir="ltr">{%CashairStotal%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">الخصم</span><span class="en">Discount</span></span><span class="money-value" dir="ltr">{%CashairDIS%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">المردودات</span><span class="en">Returns</span></span><span class="money-value" dir="ltr">{%CashairRChange%}</span></div>
            <div class="money-row strong"><span class="money-label"><span class="ar">صافي المبيعات</span><span class="en">Net Sales</span></span><span class="money-value" dir="ltr">{%CashairSubTotal%}</span></div>
          </div>
        </article>

        <article class="finance-card cash">
          <header class="finance-head">
            <div class="finance-title"><span class="ar">الصندوق</span><span class="en">Cash Drawer</span></div>
            <span class="currency-pill" dir="ltr">{%currency_code%}</span>
          </header>
          <div class="finance-body">
            <div class="money-row"><span class="money-label"><span class="ar">عهدة البداية</span><span class="en">Starting Float</span></span><span class="money-value" dir="ltr">{%CashairSopen%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">المقبوضات</span><span class="en">Receipts</span></span><span class="money-value" dir="ltr">{%CashairPAID%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">المصروفات</span><span class="en">Expenses</span></span><span class="money-value" dir="ltr">{%CashairRTN%}</span></div>
            <div class="money-row strong"><span class="money-label"><span class="ar">رصيد الدرج</span><span class="en">Drawer Balance</span></span><span class="money-value" dir="ltr">{%CashairNet%}</span></div>
          </div>
        </article>

        <article class="finance-card payments">
          <header class="finance-head">
            <div class="finance-title"><span class="ar">المدفوعات</span><span class="en">Payments</span></div>
            <span class="currency-pill" dir="ltr">{%currency_code%}</span>
          </header>
          <div class="finance-body">
            <div class="money-row"><span class="money-label"><span class="ar">النقد الفعلي</span><span class="en">Actual Cash</span></span><span class="money-value" dir="ltr">{%CashairSclose%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">موازنة البطاقة</span><span class="en">Card Balance</span></span><span class="money-value" dir="ltr">{%CashairCARDt%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">مدفوعات البطاقة</span><span class="en">Card Payments</span></span><span class="money-value" dir="ltr">{%CashairCARD%}</span></div>
            <div class="money-row"><span class="money-label"><span class="ar">مدفوعات أخرى</span><span class="en">Other Payments</span></span><span class="money-value" dir="ltr">{%OtherPayment%}</span></div>
          </div>
        </article>

      </section>

      <section class="methods-section">
        <div class="methods-wrap">
          <div class="methods-head">
            <div class="en">Payment Methods Reconciliation</div>
            <div class="ar">جدول مطابقة وسائل الدفع</div>
          </div>
          <table class="methods-table" aria-label="جدول مطابقة وسائل الدفع">
            <colgroup>
              <col class="name"/>
              <col class="sales"/>
              <col class="actual"/>
              <col class="diff"/>
            </colgroup>
            <thead>
              <tr>
                <th><span class="ar">وسيلة الدفع</span><span class="en">Method</span></th>
                <th><span class="ar">مبلغ المبيعات</span><span class="en">Sales Amount</span></th>
                <th><span class="ar">المبلغ الفعلي</span><span class="en">Actual Amount</span></th>
                <th><span class="ar">الفرق</span><span class="en">Difference</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="static-row">
                <td class="method-name">النقد<div class="en">Cash</div></td>
                <td class="num" dir="ltr">{%CashairNet%}</td>
                <td class="num" dir="ltr">{%CashairSclose%}</td>
                <td class="num" dir="ltr">{%cashDifference%}</td>
              </tr>
              <tr class="static-row">
                <td class="method-name">البطاقة<div class="en">Card</div></td>
                <td class="num" dir="ltr">{%CashairCARD%}</td>
                <td class="num" dir="ltr">{%CashairCARDt%}</td>
                <td class="num" dir="ltr">{%CashairCARDdiff%}</td>
              </tr>
              {%payment_methods_html%}
            </tbody>
          </table>
        </div>
      </section>


      <section class="reconcile">
        <div class="reconcile-head">
          <div><div class="ar">مطابقة وإقفال الجلسة</div><div class="en">Session Reconciliation</div></div>
          <div class="reconcile-note"><span class="ar">متطابق: أخضر · زيادة: أصفر · عجز: أحمر</span><span class="en">Balanced: green · Extra: yellow · Shortage: red</span></div>
        </div>

        <div class="reconcile-grid">
          <div class="diff-card" data-difference>
            <div class="diff-title"><div class="ar">فرق النقد</div><div class="en">Cash Difference</div></div>
            <div class="diff-value" dir="ltr">{%cashDifference%}</div>
            <span class="status-pill">Difference</span>
          </div>

          <div class="diff-card" data-difference>
            <div class="diff-title"><div class="ar">فرق البطاقة</div><div class="en">Card Difference</div></div>
            <div class="diff-value" dir="ltr">{%CashairCARDdiff%}</div>
            <span class="status-pill">Difference</span>
          </div>

          <div class="result-card" data-session-result>
            <div class="result-copy">
              <div class="result-kicker">Final Session Result</div>
              <div class="result-title-ar">العجز / الزيادة</div>
              <div class="result-title-en">Shortage / Extra</div>
              <div class="result-status">Session result</div>
            </div>
            <div class="result-amount" dir="ltr">{%CashairSHORT%}</div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <div class="category-wrap">
          <div class="category-head">
            <div class="en">Category Sales</div>
            <div class="ar">المبيعات حسب التصنيف</div>
          </div>
          <table class="category-table" aria-label="المبيعات حسب التصنيف">
            <colgroup>
              <col class="name"/>
              <col class="amount"/>
              <col class="percentage"/>
            </colgroup>
            <thead>
              <tr>
                <th><span class="ar">التصنيف</span><span class="en">Category</span></th>
                <th><span class="ar">المبلغ</span><span class="en">Amount</span></th>
                <th><span class="ar">النسبة</span><span class="en">Percentage</span></th>
              </tr>
            </thead>
            <tbody>
              {%category_sales_html%}
            </tbody>
          </table>
        </div>
      </section>
    </td></tr></tbody>

    <tfoot><tr><td class="footer-spacer"></td></tr></tfoot>
  </table>

  <footer class="doc-footer">
    <div class="en">Address: {%company_addressE%} — {%company_phone%}</div>
    <div class="ar">العنوان: {%company_address%} — {%company_phone%}</div>
  </footer>
</main>

<script>
(function(){
  function numberFromText(value){
    var normalized=String(value==null?'':value)
      .replace(/,/g,'')
      .replace(/[^0-9+\\-.]/g,'');
    var parsed=Number(normalized);
    return Number.isFinite(parsed)?parsed:null;
  }

  function setState(card,value,statusEl,labels){
    if(value===null)return;
    card.classList.remove('is-balanced','is-extra','is-short');

    if(Math.abs(value)<0.01){
      card.classList.add('is-balanced');
      if(statusEl)statusEl.textContent=labels.balanced;
    }else if(value>0){
      card.classList.add('is-extra');
      if(statusEl)statusEl.textContent=labels.extra;
    }else{
      card.classList.add('is-short');
      if(statusEl)statusEl.textContent=labels.short;
    }
  }

  document.querySelectorAll('.money-value, .methods-table td.num').forEach(function(el){
    var value=numberFromText(el.textContent);
    if(value===null)return;
    el.classList.remove('is-positive','is-negative','is-zero');
    if(Math.abs(value)<0.000001)el.classList.add('is-zero');
    else if(value>0)el.classList.add('is-positive');
    else el.classList.add('is-negative');
  });

  document.querySelectorAll('[data-difference]').forEach(function(card){
    var valueEl=card.querySelector('.diff-value');
    var statusEl=card.querySelector('.status-pill');
    if(!valueEl)return;
    setState(card,numberFromText(valueEl.textContent),statusEl,{
      balanced:'متطابق / Balanced',
      extra:'زيادة / Extra',
      short:'عجز / Shortage'
    });
  });

  var resultCard=document.querySelector('[data-session-result]');
  if(resultCard){
    var amountEl=resultCard.querySelector('.result-amount');
    var statusEl=resultCard.querySelector('.result-status');
    if(amountEl){
      setState(resultCard,numberFromText(amountEl.textContent),statusEl,{
        balanced:'متطابق / Balanced',
        extra:'زيادة / Extra',
        short:'عجز / Shortage'
      });
    }
  }
}());
<\/script>
</body>
</html>`;export{n as default};
