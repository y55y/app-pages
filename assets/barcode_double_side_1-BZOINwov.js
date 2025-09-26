const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
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
    .temp-body td:nth-child(2) {
      width: 2.5cm !important;
      height: 1.3cm;
    }

    table {
      width: 100%;
      border: none !important;
      direction: rtl;
    }

    #barcode_image,
    img {
      width: 90% !important;
      margin: auto;
      height: 0.6cm !important;
    }

    table td {
      font-size: 7px !important;
    }
  
--></style>
<div style="padding-left: 0px;">
<table class="temp-body">
<tbody>
<tr>
<td>
<div style="text-align: center;"><span style="font-weight: bold; font-size: 12px !important;">{%product_unit_price_with_tax%}</span></div>
</td>
<td style="padding-top: 5px; width: 2cm !important;">
<div style="text-align: center; padding-left: 0px; vertical-align: middle;"><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
<div style="text-align: center; vertical-align: middle;"><span style="font-weight: bold;">{%product_barcode%}</span></div>
</td>
<td></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>`;export{n as default};
