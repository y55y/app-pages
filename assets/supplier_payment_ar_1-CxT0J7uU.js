const n=`<div id="barcode_template" class="mceEditable" readonly="readonly" style="padding: 0px 0px 0px 0px; margin: 20px auto 0px; background-color: #ffffff; margin-bottom: 20px;">
<style><!--
  * {
    padding: 0;
    margin: 0
  }

  body {
    font-family: arial
  }

  .Pcontainer {
    margin: 10px auto;
    max-width: 600px;
    border: 1px solid #777;
    padding: 15px
  }

  .Ptitle {
    display: block;
    clear: both;
    margin: 0 auto 10px auto;
    padding-bottom: 5px
  }

  .Ptitle h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px
  }

  .Ptitle p {
    font-size: 12px;
    color: #444;
    margin-bottom: 0
  }

  .Pcontents {
    padding: 0 10px;
    direction: rtl
  }

  .Prow {
    overflow: hidden
  }

  .Prow span {
    font-weight: 700;
    font-size: 12px;
    color: #333
  }

  .Prow p {
    font-size: 12px;
    color: #444;
    line-height: 20px
  }

  .Right {
    float: left
  }

  .Left {
    float: right
  }

  .clearfix {
    clear: both
  }

  .text-center {
    text-align: center
  }

  .segnatures {
    overflow: hidden;
    margin-top: 40px
  }

  .segnatures h4 {
    font-size: 12px;
    color: #555;
    border-top: 1px solid #ccc;
    padding: 20px 80px 0;
    font-weight: 400
  }

  .box_rtl {
    direction: rtl;
    text-align: right;
    font-family: tahoma
  }

  .box_rtl .Right {
    float: left
  }

  .box_rtl .Left {
    float: right
  }

  .logo {
    text-align: left
  }

  .logo img {
    max-width: 150px
  }
--></style>
<div class="Pcontainer">
<div>
<div style="display: block; width: 100%;">
<div class="Prow Left"><span style="font-size: 22px; font-weight: bold;">إيصال سداد</span></div>
<div class="Prow Right">
<p style="direction: rtl;">رقم: <span>{%purchase_order_payment_No%}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;التاريخ: <span>{%date%}</span></p>
</div>
<div stlye="clear:both;">&nbsp;</div>
</div>
<br />
<table cellpadding="0" cellspcing="0" style="border: 0; direction: rtl;" width="100%">
<tbody>
<tr>
<td style="width: 70%; border: 0; vertical-align: top; border-bottom: 1px solid #bbb;">
<div class="Ptitle">
<h3>{%site_business_name%}</h3>
<p>{%site_address1%}</p>
<p>{%site_address2%}</p>
<p>{%site_city%} {%site_state%} {%site_postal_code%}</p>
</div>
</td>
<td style="border: 0; vertical-align: top; border-bottom: 1px solid #bbb;" class="logo"></td>
</tr>
</tbody>
</table>
</div>
<div class="Pcontents">
<div class="clearfix"></div>
<div class="Prow">
<p><span>من: </span>{%added_by%}</p>
</div>
<div class="Prow">
<p><span>المبلغ: </span>{%amount%}&nbsp;{%currency_code%} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>بواسطة: </span>{%payment_method%}</p>
</div>
<div class="Prow">
<p><span>فاتورة: </span>#{%purchase_order_no%}</p>
</div>
<div class="Prow">
<p><span>المستلم: </span>{%supplier_business_name%}</p>
</div>
<div class="Prow">
<p><span>الخزينة: </span>{%treasury_name%}</p>
</div>
<div class="Left segnatures">
<h4>التــوقــيع</h4>
</div>
<div class="clearfix"></div>
</div>
</div>
</div>`;export{n as default};
