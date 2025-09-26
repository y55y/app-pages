const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div style="font-family: tahoma; direction: rtl;">
<div style="background: #fff; width: 700px; margin: auto; padding: 1px; border: 1px solid #bbb;">
<div style="padding: 20px; border: 2px solid #bbb; position: relative;">
<table style="width: 100%; margin-bottom: 10px;">
<tbody>
<tr>
<td style="width: 50%;">
<h3 style="margin-top: 0px; margin-bottom: 0px;"><span class="mceNonEditable">{%business_name%}<br /><span style="font-size: 10pt;">&nbsp; {%site_bn1_label%}: {%site_bn1%} &nbsp;&nbsp; </span></span></h3>
</td>
<td style="width: 50%; text-align: left;">
<h3 style="text-decoration: underline; margin-top: 0px; margin-bottom: 0px;">سند صرف</h3>
<p style="direction: rtl; margin-top: 5px;"><strong>رقم:</strong>&nbsp;<span class="mceNonEditable">{%expense_id%}&nbsp; </span></p>
</td>
</tr>
</tbody>
</table>
<div style="overflow: hidden;">
<p style="margin: 0px;"><strong>اصرفوا الي السيد:</strong>&nbsp;{%client_business_name%}</p>
<p style="margin: 0px;"><strong>مبلغ وقدره:</strong>&nbsp;<span class="mceNonEditable">{%amount%} &nbsp; &nbsp; &nbsp; &nbsp;<strong>فقط:</strong>&nbsp;<span class="mceNonEditable">{%spelled_amount%} </span></span></p>
<p style="margin: 0px;"><strong>بتاريخ:</strong>&nbsp;<span class="mceNonEditable">{%date%}&nbsp; </span></p>
<p style="margin: 0px;"><strong style="vertical-align: top;">وذلك مقابل:</strong>&nbsp;<span style="display: inline-block; white-space: pre-line;" class="mceNonEditable">{%note%}&nbsp; </span></p>
<table style="width: 100%; text-align: center; margin: 0px; margin-top: 20px;">
<tbody>
<tr>
<td style="width: 50%;"><span style="text-decoration: underline;">توقيع المستلم </span></td>
<td style="width: 50%;"><span style="text-decoration: underline;">أمين الصندوق </span></td>
</tr>
<tr>
<td style="width: 50%;"><span style="color: #bbb;">..................... </span></td>
<td style="width: 50%;"><span style="color: #bbb;">..................... </span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>`;export{n as default};
