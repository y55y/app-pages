const t=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div>
<style><!--
        * {
          font-family: sans-serif;
          font-size: 9px;
        }
    
        .temp-body td {
          padding: 1px;
          border: none !important;
        }
    
        .temp-body td:nth-child(1),
        .temp-body td:nth-child(3) {
          width: 2cm;
          height: 1.1cm;
        }
    
        table {
          width: 100%;
          border: none !important;
          direction: rtl;
        }
    
        #barcode_image,
        img {
          width: 93% !important;
          height: 0.8cm !important;
        }
    
        table td {
          font-size: 7px !important;
        }
        #barcode_template{margin: 0 auto !important; margin-bottom: 0 !important;}
    
--></style>
<div style="padding-left: 5px;">
<table class="temp-body" width="100%">
<tbody>
<tr>
<td style="text-align: center;">
<div><span style="font-size: 7px;"> {%product_code%}<br /><span style="font-size: 7px; font-weight: bold;">{%product_unit_price%} </span> </span></div>
</td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<div style="text-align: center; width: 2cm;"><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
</td>
<td></td>
<td>
<div style="text-align: right; width: 2cm;"><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td style="text-align: center;">
<div><span style="font-size: 7px;"> {%product_code%}<br /><span style="font-size: 7px; font-weight: bold;">{%product_unit_price%} </span> </span></div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>`;export{t as default};
