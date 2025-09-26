const t=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div>
<style><!--
        img {max-height: 0.6cm !important; width: 100%;}#barcode_template{margin: 0 auto !important; margin-bottom: 0 !important;}.barcode_img_container{width: 95%; margin: auto;}
      
--></style>
<div>
<div class="num_contain" style="font-size: 11px; width: 95%; margin: auto;">
<div style="text-align: center;"><span class="product_unit_price">{%product_name%}</span></div>
<div style="text-align: center; margin-bottom: 2px;"><span class="product_unit_price">{%product_unit_price_with_tax%}</span></div>
</div>
<div class="barcode_img_container" style="text-align: center;"><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
<div class="barcode_img_container" style="text-align: center; font-size: 11px;">{%product_barcode_number%}</div>
</div>
</div>
</div>`;export{t as default};
