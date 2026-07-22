const t=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<style><!--
div#PrintableContent strong, div#PrintableContent td, div#PrintableContent span, div#PrintableContent p {font-family: pnu !important; font-size: 16px;}
    .logo {display: flex; align-items: center; justify-content: center; width: 100%; height: 100px;}
    .logo-img {max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block;}
--></style>
<div style="padding-top: 10px;"></div>
<div style="margin: 0 10px; padding: 10px; color: #555555; border: 3px double #555555;">
<div style="padding-bottom: 1px; border-bottom: 3px solid #555555;">
<div style="direction: ltr; border-bottom: 1px solid #070767; padding-bottom: 5px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border: 0;">
<tbody>
<tr>
<td style="width: 33%; border: 0; vertical-align: top; direction: ltr;">
<div style="text-align: center; line-height: 1.35;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 20px !important;"><strong style="font-size: 20px !important; line-height: 1.15; padding: 0;">{%company_nameE%}</strong></span></div>
<div style="text-align: center; margin-top: 3px; font-size: 11px; direction: ltr;">
<div><span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px !important;">{%company_addressE%}</span></div>
<div><span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px !important;">{%branch_nameE%}</span></div>
<div><span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px !important;">{%branch_email_en%}</span></div>
</div>
</td>
<td style="text-align: center; width: 33%; border: 0;">
<div class="logo">
  <img src="{%logo%}" class="logo-img" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
</div>
</td>
<td style="width: 33%; border: 0; vertical-align: top;">
<div style="text-align: center; line-height: 1.35; direction: rtl;"><span style="font-family: Tahoma, Arial, sans-serif; font-size: 24px !important;"><strong style="font-size: 24px !important; line-height: 1.15; padding: 0;">{%company_name%}</strong></span></div>
<div style="direction: rtl; text-align: center; margin-top: 3px; font-size: 11px;">
<div><span style="font-family: Tahoma, Arial, sans-serif; font-size: 13px !important;">{%company_address%}</span></div>
<div><span style="font-family: Tahoma, Arial, sans-serif; font-size: 13px !important;">{%branch_name%}</span></div>
<div><span style="font-family: Tahoma, Arial, sans-serif; font-size: 13px !important;">{%branch_email%}</span></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div style="direction: rtl; margin-top: 10px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border: 0;">
<tbody>
<tr>
<td style="text-align: center; border: 0; width: 20%;">
<p style="margin: 5px 0; padding: 5px 6px; border: 2px solid #555555; border-radius: 8px; text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">{%amount%}</span></p>
</td>
<td style="text-align: center; border: 0; vertical-align: top;"><span style="font-family: arial, helvetica, sans-serif; font-size: 27px; line-height: 1.1;"><strong style="font-size: 27px; line-height: 1.1; font-family: pnu !important;">ســــنــد صــــــرف</strong></span>
<div dir="rtl" style="font-family: arial, helvetica, sans-serif; font-size: 16px; color: red; margin: 0; line-height: 1.1;">الرقم: <span dir="ltr" style="display: inline-block; unicode-bidi: isolate;">#{%expense_id%}#</span></div>
<p style="padding: 0; margin: 0;"><span style="font-family: arial, helvetica, sans-serif;"><strong style="display: inline-block; padding-bottom: 5px; border-bottom: 3px double #555555; font-size: 20px;">Expense Voucher</strong></span></p>
</td>
<td style="width: 20%; border: 0; font-family: pnu !important; text-align: left;">
<div style="font-family: arial, helvetica, sans-serif; font-weight: bold; font-size: 16px;">التاريخ: {%date%}</div>
</td>
</tr>
</tbody>
</table>
</div>
<div>
<table cellpadding="0" cellspacing="0" style="width: 100%; border: 0; direction: rtl; margin-top: -2px; line-height: 1.15;">
<tbody>
<tr>
<td style="width: 15%; border: 0; text-align: right; white-space: nowrap; height: 24px; font-family: pnu !important;"><span style="font-family: arial, helvetica, sans-serif; font-size: 17px; font-weight: bold;">دفعنا إلى</span></td>
<td style="width: 65%; border: 0; direction: rtl; text-align: right; padding-right: 2px; font-family: pnu !important;"><span style="font-family: arial, helvetica, sans-serif; font-size: 17px; font-weight: 700;">#{%account_names%}#</span></td>
<td style="text-align: left; border: 0; direction: ltr;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px; font-weight: bold;">Received From</span></td>
</tr>
<tr>
<td style="border: 0; text-align: right; direction: rtl; height: 24px; font-family: Tahoma, Arial, sans-serif !important;"><span dir="rtl" style="font-family: Tahoma, Arial, sans-serif; font-size: 17px; font-weight: bold; unicode-bidi: isolate;">مبلغاً وقدره</span></td>
<td style="width: 65%; direction: rtl; text-align: right; padding-right: 2px; font-family: pnu !important; border: 0;"><span style="display: inline-block; width: 100%; font-family: arial, helvetica, sans-serif; font-size: 17px;">#{%spelled_amount%} فقط لا غير#</span></td>
<td style="text-align: left; border: 0;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px; font-weight: bold;">The Sum Of</span></td>
</tr>
<tr>
<td style="width: 100%; border: 0; direction: rtl; height: 24px;" colspan="3"><span style="font-family: arial, helvetica, sans-serif; font-size: 14px;"><span style="margin-left: 2px; font-weight: bold;">من خزينة / بنك</span><span style="display: inline-block; min-width: 150px; text-align: right; border-bottom: 1px solid #555555;">#{%treasury%}#</span></span></td>
</tr>
<tr>
<td style="border: 0; text-align: right; height: 24px; font-family: pnu !important;"><span style="font-family: arial, helvetica, sans-serif; font-size: 17px; font-weight: bold;">وذلك مقابل</span></td>
<td style="width: 65%; border: 0; direction: rtl; text-align: right; padding-right: 2px;"><span style="display: inline-block; white-space: pre-line; width: 100%; font-family: arial, helvetica, sans-serif; font-size: 17px;">#{%note%}#</span></td>
<td style="text-align: left; border: 0;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px; font-weight: bold;">For</span></td>
</tr>
<tr>
<td colspan="3" style="width: 100%; border: 0; height: 30px; vertical-align: bottom;"><span style="display: inline-block; width: 100%; font-family: arial, helvetica, sans-serif;"></span></td>
</tr>
</tbody>
</table>
</div>
<div style="margin-top: 10px;">
<table cellpadding="0" cellspacing="0" style="width: 100%; border: 0; direction: rtl;">
<tbody>
<tr>
<td style="border: 0; width: 30%; text-align: center; height: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px;"><strong style="font-size: 15px; font-family: pnu !important;">توقيع المستلم</strong></span><br /><span style="direction: ltr; display: inline-block; font-family: arial, helvetica, sans-serif;">Received Sig.</span></td>
<td style="border: 0; width: 30%; ;text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px;"><strong style="font-size: 15px; font-family: pnu !important;">أمين الصندوق</strong></span><br /><span style="direction: ltr; display: inline-block; font-family: arial, helvetica, sans-serif;">Cashier Sig.</span></td>
<td style="border: 0; width: 30%; ;text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 15px;"><strong style="font-size: 15px; font-family: pnu !important;">توقيع المدير</strong></span><br /><span style="direction: ltr; display: inline-block; font-family: arial, helvetica, sans-serif;">Manager Sig.</span></td>
</tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" style="width: 100%; border: 0; direction: rtl; margin-bottom: 15px; margin-top: 5px;">
<tbody>
<tr>
<td style="border: 0; width: 30%; text-align: center; height: 25px; padding-top: 10px;"><span style="width: 115px; display: inline-block; border-bottom: 1px solid #555555; height: 20px; text-align: right;"></span></td>
<td style="border: 0; width: 30%; text-align: center; height: 25px; padding-top: 10px;"><span style="width: 115px; display: inline-block; border-bottom: 1px solid #555555; height: 20px; text-align: right;"></span></td>
<td style="border: 0; width: 30%; text-align: center; height: 25px; padding-top: 10px;"><span style="width: 115px; display: inline-block; border-bottom: 1px solid #555555; height: 20px; text-align: right;"></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
`;export{t as default};
