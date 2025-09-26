const d=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<div>
<style><!--
        img {
                height: 0.6cm !important;
                width: 100%
            }
            <style>
    img {
            height: 0.6cm !Important;
            width: 100%
        }
   
--></style>
<div style="font-size: 7px; text-align: center; padding: 2px;">
<div><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
<div>{%product_barcode%}</div>
</div>
<div style="font-size: 7px; text-align: center; padding: 2px;">
<div><img id="barcode_image" src="https://mrqw.daftra.com/img/dummy_barcode.jpg" /></div>
<div>{%product_barcode%}</div>
</div>
</div>
</div>`;export{d as default};
