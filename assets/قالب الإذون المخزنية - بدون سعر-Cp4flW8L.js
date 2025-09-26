const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div>
<style><!--
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: tahoma, Arial, Helvetica, sans-serif;
        direction: rtl;
    }

    .invoice-wrap {
        width: 700px;
        margin: 0 auto;
        background: #FFF;
        color: #000;
    }

    .invoice-inner {
        margin: 0 30px;
        padding: 20px 0
    }

    .bold {
        font-weight: bold !important;
    }

    .f_table {
        margin-top: 20px;
        width: 100%;
        font-size: 15px;
        margin-bottom: 5px;
    }

    .s_table {
        margin-top: 5px;
        width: 100%;
        font-size: 15px;
    }

    .t_table {
        margin-top: 20px;
        width: 100%;
    }

    .t_table tr:first-child {
        background: #e5e5e5;
    }

    .t_table,
    .t_table th,
    .t_table td {
        border: 1px solid #555555;
        border-collapse: collapse;
        padding: 3px 5px 3px 5px;
        text-align: right
    }

    .total_table td {
        border: 1px solid #555555;
        border-collapse: collapse;
        padding: 3px 5px 3px 5px;
    }

    .total_table {
        width: 100%;
        font-size: 12px;
        font-weight: bold;
        border-collapse: collapse;
        background: #e5e5e5;
    }

    h2 {
        text-align: center;
    }
table tr, table td {page-break-inside: avoid !important}
@page{

margin-top:10px
}
    .class-5, .class-6{display:none}
--></style>
</div>
<div class="invoice-wrap">
<div class="invoice-inner"><span class="mceNonEditable">{%requisition_type%}</span>
<table class="f_table" id="first-table">
<tbody>
<tr>
<td>التاريخ:<span class="mceNonEditable">{%requisition_date%}</span></td>
<td>رقم الاذن:<span class="mceNonEditable">{%requisition_number%}</span></td>
</tr>
<tr>
<td>رقم المصدر:<span class="mceNonEditable">{%requisition_order_number%}</span></td>
<td>المصدر:<span class="mceNonEditable">{%requisition_order_type%}</span></td>
</tr>
<tr>
<td>حاله الاذن:<span class="mceNonEditable">{%requisition_status%}</span></td>
<td>المستودع:<span class="mceNonEditable">{%requisition_store%}</span></td>
</tr>
<tr>
<td colspan="2">ملاحظات:<span class="mceNonEditable">{%requisition_notes%}</span></td>
</tr>
</tbody>
</table>
<p></p>
<p><span class="mceNonEditable">{%requisition_product_list%}</span></p>
<table class="f_table">
<tbody>
<tr>
<td>أمين المخزن: <span class="mceNonEditable">{%requisition_staff%}</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>`;export{n as default};
