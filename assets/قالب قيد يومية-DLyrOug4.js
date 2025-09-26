const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<style><!--
*{ margin:0; padding:0;font-family: tahoma,sans-serif;}
  .logo-space {width:40%; text-align:left;}
  .logo-space img {width:50%}
  #PrintableContent {height:auto;}
  .t_table {font-size:13px;direction:rtl;text-align:right}
--></style>
<div style="padding: 20px 30px;" class="journal_invoice-inner">
<table class="journal-head" style="border: none; text-align: right; direction: rtl;" width="547" height="107">
<tbody>
<tr>
<td style="border: none; width: 209px;">
<h2 style="text-align: right; font-weight: 100;" class="journal_h2">قيد#<span class="mceNonEditable">{%journal_id%}</span></h2>
</td>
<td style="border: none;" class="logo-space"></td>
</tr>
<tr>
<td style="border: none; width: 209px;"></td>
</tr>
<tr>
<td style="border: none; width: 209px;">
<div style="text-align: right; direction: rtl;">التاريخ:&nbsp;&nbsp;<span class="mceNonEditable">{%journal_date%}</span></div>
</td>
</tr>
<tr>
<td style="border: none; width: 209px;">
<div>الوصف:&nbsp;&nbsp;<span class="mceNonEditable">{%journal_description%}</span></div>
</td>
</tr>
<tr>
<td style="border: none; width: 209px;"></td>
</tr>
</tbody>
</table>
<table id="listing_table" class="t_table">
<tbody>
<tr class="bold" bgcolor="#e5e5e5">
<th colspan="2">حساب</th>
<th>الوصف&nbsp;</th>
<th>مدين</th>
<th>دائن</th>
</tr>
<!-- {{#journal_transactions_table}}--><!-- {{#JournalTransaction}}-->
<tr>
<td><!-- {{#JournalAccount}}--> {{code}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <!-- {{/JournalAccount}}--></td>
<td><!-- {{#JournalAccount}}--> {{name}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <!-- {{/JournalAccount}}--></td>
<td>{{description}}</td>
<td>{{currency_debit}}</td>
<td>{{currency_credit}}</td>
</tr>
<!-- {{/JournalTransaction}}--><!-- {{/journal_transactions_table}}--><!-- {{#journal_transactions_table}}-->
<tr class="bold" bgcolor="#e5e5e5">
<th colspan="3">الاجمالي</th>
<th style="word-wrap: break-word;">{{total_debit}}</th>
<th style="word-wrap: break-word;" colspan="1">{{total_credit}}</th>
</tr>
<!-- {{/journal_transactions_table}}--></tbody>
</table>
<p></p>
<p><span class="mceNonEditable">{%cost_center_table%}</span></p>
</div>
<div style="padding: 20px 30px;" class="journal_invoice-inner"></div>
</div>`;export{n as default};
