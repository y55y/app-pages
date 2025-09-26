const d=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div>
<style><!--
        img {
                height: 0.6cm !important;
                width: 100%
            }
            #barcode_template{margin: 0 auto !important; margin-bottom: 0 !important;}
        
--></style>
<div>
<table width="100%" cellpadding="0" cellspacing="0" style="border: 0;">
<tbody>
<tr>
<td border="0" style="font-size: 9px; border: 0px; padding: 0; width: 2.0cm; padding-top: 5px; text-align: center;">
<div style="padding-right: 3px;"><span class="mceNonEditable">{%product_name%}</span></div>
<div style="padding-right: 3px;"><span class="mceNonEditable">{%product_code%}</span></div>
<div style="padding-right: 3px;"><span class="mceNonEditable">{%product_unit_price%}</span></div>
</td>
<td border="0" style="font-size: 8px; border: 0px; padding-right: 5px; width: 2.3cm; text-align: center; padding: 0;">
<div style="padding-top: 8px; padding-right: 15px;"><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
<div>{%product_barcode%}</div>
</td>
<td border="0" style="border: 0px; padding: 0; width: 3.2cm;"></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>`;export{d as default};
