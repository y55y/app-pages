const t=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Invoice Template</title>
	</head>
	<style type="text/css">
		*{ margin:0; padding:0;line-height:1.6}
		body{direction:rtl;background:#ffffff; font:12px "Tahoma", Arial, Helvetica, sans-serif; text-align:right; }
		.invoice-wrap{ width:660px; margin:0 auto; background:#FFF; color:#000}
		.invoice-inner{ margin:0 30px; padding:20px 0}
		.listing-table th{text-align:right; padding:6px 4px}
		.listing-table td{border-bottom:none;border-right: none !important;border-left:none !important; text-align:right; padding:5px 6px; vertical-align:top}
		#listing_table th{font-weight:normal;border:none !important;}
                 #listing_table tr th:last-child, #listing_table tr td:last-child{text-align:left}
#listing_table tr td{border-bottom:1px solid #F8F8F8}
                  .listing-table:nth-child(2){margin: 20px 0}
.listing-table:nth-child(2) tr td{border:none !important}
                   .listing-table:nth-child(2) tr td:nth-child(2){width:35%}

               #invoice_title{font-size:20px;font-weight:normal}
		.row-items{ margin:5px 0; display:block}
bold_title {font-weight:bold;}
		 strong_tag {font-weight:bold;}
		 big_title{ font-size:18px; font-weight:100}
		.notes-block{ margin:30px 0 0 0}
	
tr, td, th {
    page-break-inside: avoid !important;
}                                           
.qr-code img {margin-top:10px}
/*.labels{color:#7D9EB5}*/
.biz__info td{padding: 0 0 15px;width:33%; border-bottom: 1px solid #c0c0c0}
.inv__info{margin:20px 0}
.frame{padding: 2px;width:150px}
.listing-table:nth-child(2) tr:first-child td:nth-child(2){color:#7D9EB5}
.listing-table:nth-child(2) tr:nth-child(n+1) td:nth-child(1){color:#7D9EB5}
.total-row{font-weight:bold}
.listing-table:nth-child(2) strong{font-weight:normal}
#listing_table tr *:first-child{padding-right:10px}
#listing_table tr *:last-child {padding-left: 10px}
.invoice-date {font-size:14px}
#custom_fields td {border-bottom:none; text-align:right;padding:0}
#items-list>table:nth-child(2) tr td:last-child {
white-space: nowrap;
}

  /* To fix content ovrlaping the thead try remove the comment from the below style */
  /* thead, tfoot {
  display: table-row-group;
}
#listing_table tr, #listing_table td {
page-break-inside: auto !important
} */
</style>
	<body>
		<div class="invoice-wrap">
{%html_sticky_header%}


<div class="invoice-inner">
<div class="qr-code"  style="display:none">
{%sa_qr_code_image%}
</div>

<table class="biz__info" width="100%" border="0" cellspacing="0" cellpadding="0">

<tr>

<td align="right" valign="top">
<h1><p id="invoice_title" class="editable-area invoice-name">{%invoice_title%}</p></h1>
<br>
<div style="font-size:15px;line-height:30px"><strong>{%label_invoice_no%}</strong><span> #{%invoice_no%}</span></div>
<br>
<div class="labels editable-area" id="label_date">{%label_date%}</div>
<div align="right" class="invoice-date">{%invoice_date%}</div>
 <custom_field id="custom_fields" style="clear:both" class='editable-area'   border="0" cellspacing="0" cellpadding="0" align="right">
        {%custom_fields%}
        </custom_field>
</td>


<td align="right" valign="top">
</td>

<td align="right" valign="top">
<img style="vertical-align:top;margin-bottom:10px;"  id="logo" class='editable-area'  src="{%logo%}"  width="{%logo-width%}" height="{%logo-height%}"/><br>
<p class="labels">{%business_info%}</p>
</td>
</tr>

</table>




<table class="inv__info" width="100%" border="0" cellspacing="0" cellpadding="0">

<tr>

<td align="right" valign="top" rowspan="3" width="30%">
 <div id="field1" class="labels editable-area">{%field1%}</div>
<div id="client_info" class='editable-area'>
<p>{%client_info%}</p>
</td>
<td width="15%">
</td>


<td align="right" valign="top">
<span class="labels">الإجمالي</span><br>{%invoice_subtotal%}<br>
</td>
<td width="15%">
</td>

<td align="right" valign="top">
<span class="labels">الرصيد المستحق</span><br><span style="font-weight:bold;font-size:16px;">{%unpaid%}</span>
</td>
</tr>

<tr>
<td coplsan="3" height="20px">
</td>
</tr>

<tr>
<td width="15%">
</td>
<td align="right" valign="top">
<span class="labels">المدفوع</span><br><span>{%paid%}</span>
</td>
<td width="15%">
</td>

<td align="right" valign="top">
<div class="labels frame">{%label_due_date%} &nbsp;&nbsp; {%due_date%}</div>
</td>
</tr>

</table>


				

				<div id="items-list">
						{%items_list%}
				</div>
				<div class="notes-block">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td>
                                                          <div style="font-style:italic" class="editable-area" id="footer">{%footer%}</div>
                                                        </td>
						</tr>
					</table>

				</div>
				
				<br />

			</div>
{%html_sticky_footer%}
		</div>

<script>

function totTableAdj(){

var totTableLen = document.querySelector(".listing-table:nth-child(2)").rows.length;
var fstTotCell = document.querySelector(".listing-table:nth-child(2) tr:first-child td:first-child")
var fstCol = document.querySelectorAll(".listing-table:nth-child(2) tr td:nth-child(1)")
var qr = document.querySelector(".qr-code").innerHTML;

for(var i=0; i<totTableLen-1; i++){fstCol[i+1].outerHTML = ""}


fstTotCell .rowSpan =  totTableLen;
fstTotCell .innerHTML = qr; 
fstTotCell .style.cssText = "text-align:right"
}
function select(selectors) {
var elements = document.querySelectorAll(selectors)
return elements
}
function addStyles(elements, addedClass) {
for(var i = 0; i< elements.length; i++){
elements[i].classList.add(addedClass)
}}

try{
var selectedForBack = select("#listing_table th,  .listing-table:nth-child(2) tr:nth-child(1) td:nth-child(n+2) , .frame")
var AllBorders= select("#listing_table th, #listing_table td")
var evenRows= select("#listing_table tr:nth-child(even) td")
var oddRows= select("#listing_table tr:nth-child(odd) td")

addStyles(selectedForBack, "dynamic_background")
addStyles(selectedForBack, "dynamic_header_color")
addStyles(evenRows, "dynamic_even")
addStyles(oddRows, "dynamic_odd")
addStyles(AllBorders, "dynamic_border_color")

totTableAdj()
}
catch(err){}
<\/script>
	</body>
</html>`;export{t as default};
