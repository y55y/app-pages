const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<style><!--
.main-table {direction:rtl; text-align:right; padding:5px; font-family:tahoma !important; border:0 !Important}
.main-table td {border:0 !important; text-align: right}
.logo img {max-width:150px}
--></style>
<div class="logo" style="text-align: center;"></div>
<table class="main-table" border="0" cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
<td colspan="2">
<h2 style="text-align: center;">إيصال استلام</h2>
<div style="text-align: center; padding-bottom: 10px; border-bottom: 3px double #555555;"><strong>{%site_business_name%}</strong><br /> <span>{%site_state%}</span><br /> <span>{%site_address1%}</span><br /> <span>{%site_postal_code%}</span></div>
</td>
</tr>
<tr>
<td colspan="2" style="line-height: 1.5;"><span><strong>رقم:&nbsp;</strong><span class="mceNonEditable">{%invoice_payment_No%}</span></span><br /> <span><strong>تاريخ:&nbsp;</strong><span class="mceNonEditable">{%date%}</span></span></td>
</tr>
<tr>
<td colspan="2"><strong>من: </strong><span class="mceNonEditable">{%client_business_name%}</span></td>
</tr>
<tr>
<td colspan="2"><strong>المبلغ: </strong><span class="mceNonEditable"><span>{%amount%} </span><span>{%currency_code%}</span></span></td>
</tr>
<tr>
<td colspan="2"><strong>المستلم: </strong><span class="mceNonEditable">{%added_by%}</span></td>
</tr>
<tr>
<td colspan="2"><strong>الخزينة: </strong><span class="mceNonEditable">{%treasury_name%}</span></td>
</tr>
</tbody>
</table>
<div style="width: 80%; text-align: center; margin: auto; margin-top: 20px;">
<p>..............................................</p>
<strong>التوقيع</strong></div>
</div>`;export{n as default};
