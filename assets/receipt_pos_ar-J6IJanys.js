const t=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Invoice Template</title>
	</head>
	<style type="text/css">
@media print
{ body {max-width: 90%  !important; width: 90% !important; margin: 0 auto !important; background:#fff;    padding: 0 !important; }
body > div > div.invoice-inner {
  margin: 20px !important;
}
.invoice-wrap { margin: auto !important; width: 100% !important }
}
		*{ margin:0; padding:0;}
		body{ background:#ffffff; font:12px "Tahoma", Arial, Helvetica, sans-serif; direction:rtl; text-align:right; }
		.invoice-wrap{margin:0 auto; background:#FFF; color:#000}
		.invoice-inner{ margin:0 30px; padding:20px 0}
		.listing-table th{background-color: #e5e5e5;border-bottom: 1px solid #555555;border-top: 1px solid #555555;font-weight: bold; text-align:right; padding:6px 4px}
		.listing-table td{border-bottom: 1px solid #555555; text-align:right; padding:5px 6px; vertical-align:top}
		.total-table td{ border-right: 1px solid #555555;}
		.total-row{ background-color: #e5e5e5;border-bottom: 1px solid #555555;border-top: 1px solid #555555;font-weight: bold;}
		.row-items{ margin:5px 0; display:block}
bold_title {font-weight:bold;}
		 strong_tag {font-weight:bold;}
		 big_title{ font-size:18px; font-weight:100}
		.notes-block{ margin:50px 0 0 0}
	
tr, td, th {
    page-break-inside: avoid !important;
}                                           
.qr-code {margin-top:10px; text-align: center; padding:10px 0}
#label_unit_price, #label_quantity {width:30px}


.created-time-lable {padding-right:20px; font-weight:700}
.created-time {    padding-right: 20px;}
#listing_table, #listing_table th, #listing_table td {border:0 !important; }

#listing_table th {border-top: 1px solid #555555 !important; border-bottom: 1px solid #555555 !important}
#listing_table tr:last-child td {border-bottom: 1px solid}
.listing-table th, .total-row {background: #fff}
.total-table {margin-top:10px}
.total-table td {border: 0 !important}
#listing_table tr.total-qty-row td { border-top:1px solid !important; border-bottom: 1px solid !important}
.total-qty-row td:first-child {font-weight:bold;}
#listing_table tr td, #listing_table tr th {text-align:center}
#listing_table tr td:first-child, #listing_table tr th:first-child {text-align:right}
</style>
	<body>
		<div class="invoice-wrap">
{%html_sticky_header%}
			<div class="invoice-inner">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="right" valign="top">
							<h1><p id="invoice_title" class="editable-area invoice-name">{%invoice_title%}</p></h1>
							
						</td>
						<td align="left" valign="top" >
							
<img style="vertical-align:top;margin-bottom:10px;"  id="logo" class='editable-area'  src="{%logo%}"  width="{%logo-width%}" height="{%logo-height%}"/>

							<div id="business_info" class='editable-area'>
				                                    <p>{%business_info%}</p>
							</div>

						</td>
					</tr>
				</table>
				<br />


				<div class="invoice-address">
					<table  border="0" cellspacing="0" cellpadding="0" width="100%">
						<tr>
							<td align="right" valign="top">
								<div style="vertical-align:top" align="right" id="client_info" class='editable-area'>
                                                                    <strong id="field1" class="editable-area">{%field1%}</strong><br>
							{%client_info%}
								</div>
							</td>
			<td id="shipping_options" style="display:none;" align="right" valign="top">
								<div style="vertical-align:top" align="right" id="ship_info" class='editable-area'>
                                                                    <strong id="label_ship" class='editable-area'>{%label_ship%}</strong><br>
							{%ship_info%}
								</div>
							</td>				<td  valign="top" align="left">
								<table id="invoice_basics"  border="0" cellspacing="0" cellpadding="0" >
									<tr>
										<td align="left"><strong class="editable-area" id="label_invoice_no">{%label_invoice_no%}</strong></td>
										<td  style="padding-right:20px;" align="right" >{%invoice_number%}</td>

									</tr>
<tr {%refund_invoice_number_condition%}>
                                <td  align="right"><strong class="editable-area" id="refund_label_invoice_no">{%refund_invoice_no_title%}</strong></td>
                                <td  style="padding-left:20px;" align="left" >{%refund_invoice_number%}</td>
                            </tr>									<tr>
										<td  align="left"><strong class="editable-area" id="label_date">{%label_date%}</strong></td>
										<td  style="padding-right:20px;" align="right">{%invoice_date%}</td>
									</tr>
<tr>

<td align="left" class="created-time-lable">وقت</td>
<td align="right" class="created-time" style="padding-right:20px;">{%created_time%}</td>
</tr>
								</table>
								<custom_field id="custom_fields" class='editable-area' style="clear:both;" border="0" cellspacing="0" cellpadding="0" >
									{%custom_fields%}
								</custom_field>
							</td>
						</tr>
					</table>
				</div>

				<br />


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
				<div class="qr-code">{%sa_qr_code_image%}</div>
			</div>
{%html_sticky_footer%}
		</div>
<style>
body > div > div > table > tbody > tr > td:nth-child(1){
    display: block;
    text-align: center;
    margin-bottom: 10px;
}

body > div > div > table > tbody > tr > td:nth-child(2){
    display: block;
    text-align: center;
}

body > div > div > div.invoice-address{
    margin-top: 5px;
}

body > div > div > div.invoice-address > table > tbody > tr > td:nth-child(1){
    display: block;
}

body > div > div > div.invoice-address > table > tbody > tr > td:nth-child(3){
    display: block;
    text-align: right;
    margin-top: 10px;
}

#items-list > table:nth-child(2) > tbody > tr > td:nth-child(1){
    display: none;
}

   body > div > div.invoice-inner {
  margin: 20px !important;
}
   #listing_table
{

font-size:10px;
}
#label_quantity
{
width:20px;
}
#label_subtotal
{
width:20px;
}

tr, td, th {
    page-break-inside: avoid !important;
}                                           
#invoice_basics td {padding:1px }

</style>

<script>

function addQtyRow(){

    var listingTable = document.querySelector('#listing_table')
        var qtyCell = document.getElementById('label_quantity')
        var qtyRow = listingTable.insertRow(listingTable.rows.length)
        qtyRow.classList.add('total-qty-row')
        for (var i = 0; i < listingTable.rows[0].cells.length; i++) {
            var newCell = qtyRow.insertCell(i)
            newCell.classList.add('new-cell')
            if (i == qtyCell.cellIndex) {
                newCell.innerHTML = '{%invoice_item_qty%}'
            }
            document.querySelector('.total-qty-row td:first-child').innerHTML = 'إجمالي الكمية'
        }
}

try{addQtyRow()}catch(e){}

<\/script>
<script>
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
}catch(x){
}
<\/script>
	</body>
</html>
`;export{t as default};
