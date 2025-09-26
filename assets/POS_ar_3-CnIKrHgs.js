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
  margin: 10px auto !important;
}
.invoice-wrap { margin: auto !important; width: 100% !important }
}
		*{ margin:0; padding:0;font-size: 14px;}
		body{ background:#ffffff; font:12px Arial, Helvetica, sans-serif }
		.invoice-wrap{margin:0 auto; background:#FFF; color:#000}
		.invoice-inner{ margin:0 30px; padding:20px 0}
		.listing-table th{background-color: white; border: none !important; font-weight: bold; padding:6px 4px;}
		.listing-table td{background-color: white; border: none !important; text-align:left; padding:3px 4px; vertical-align:middle; font-size: 12px;}
		#listing_table td {text-align: center !important;}
#listing_table td:first-child {
    text-align: right !important;
    width: 50%;
}
        .total-table tr td:last-child {text-align:right !important;}
		.total-row{font-weight: bold;}
		.row-items{ margin:5px 0; display:block}
bold_title {font-weight:bold;}
		 strong_tag {font-weight:bold;}
		 big_title{ font-size:18px; font-weight:100}
		.notes-block{ margin:10px 0 0 0}
	
tr, td, th {
    page-break-inside: avoid !important;
}                                           
.qr-code {margin-top:10px; text-align: center;}
#label_unit_price {width:30px}
.title {
    font-size: 20px;
    text-align: left;
}
.title span {
    font-size: 20px;
    text-align: left;
}
.title_2 {
    font-size: 12px;
    text-align: left;
}
.order {
    font-size: 20px;
    font-weight: bold;
}
.business-info-tbl {
    direction: rtl;
}
.business-info-tbl tr td {
    vertical-align: middle;
    text-align: right;
}
.business-info-tbl tr:first-child td:first-child img {
    width: 100px;
}
.business-info {
    padding: 10px 0;
    border-bottom: 1px dashed black;
}
.invoice-info-tbl {
    direction: rtl;
}
.invoice-info-tbl tr td {
    padding: 2px;
    text-align: right !important;
    text-wrap: wrap;
}
.invoice-address {
    white-space: nowrap;
    padding-top: 5px;
}
#items-list {
    margin: 2px 0;
}
#listing_table {
    margin-top: 5px;
    direction: rtl;
}
#listing_table th {
    border-top: 1px solid black !important;
    border-bottom: 1px solid black !important;
    background-color: #e5e5e5;
    font-size: 12px;
}
#listing_table th:first-child {
    text-align: right;
}
#listing_table tr:last-child td {
    border-bottom: 1px solid black !important;
}
.total-table:nth-child(2) {
    direction: rtl;
}
.total-table:nth-child(2) tr td:first-child {
    display: none;
}
.total-table:nth-child(2) tr:nth-last-child(3) td {
    border-top: 1px solid black !important;
    border-bottom: 1px solid black !important;
    background-color: #e5e5e5;
    font-size: 18px;
    vertical-align: bottom;
    height: 30px;
}
#label_total {
    font-size: 18px;
}
.total-table:nth-child(2) tr td, .total-table:nth-child(2) tr td strong {
    font-size: 12px;
    font-weight: bold;
    text-align: right;
}
.total-table:nth-child(2) tr td:nth-child(3) {
    text-align: left !important;
}
.invoice-payment-listing-table {
    width: 100%;
	border: none !important;
}
.invoice-payment-listing-table tr th:first-child, .invoice-payment-listing-table tr td:first-child {
    text-align: left;
}
.invoice-payment-listing-table tr th:last-child, .invoice-payment-listing-table tr td:last-child {
    text-align: right;
}
.invoice-payment-listing-table tr th, .invoice-payment-listing-table tr td {
    border: none;
    padding: 1px;
}
.invoice-payment-listing-table tr th {
    display: none;
}
.thanks-msg {
    margin: 10px 0;
    padding: 2px;
    text-align: center;
    font-size: 16px;
}
.invoice-barcode {
    margin: 10px 0;
}
.invoice-barcode img {
    width: 100%;
}
</style>
	<body>
		<div class="invoice-wrap">
{%html_sticky_header%}
			<div class="invoice-inner">
				<div class="business-info">
					<table class="business-info-tbl" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="right" valign="top" >
								<img style="vertical-align:middle;margin-bottom:10px;"  id="logo" class='editable-area'  src="{%logo%}"  width="{%logo-width%}" height="{%logo-height%}"/>
							</td>
                            <td style="text-align: right;"><h4 class="title">{%invoice_title%}</h4><h4 class="title_2">#{%invoice_no%}</h4></td>
						</tr>
						<tr>
							<td colspan="2">
                                                           <div id="business_info" class='editable-area'>
				                                    <p>{%business_info%}</p>
							</div>
                                                         </td>
						</tr>
						
					</table>
				</div>
				<div class="invoice-address">
					<table class="invoice-info-tbl" border="0" cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                            <td>الوقت والتاريخ: {%created_date%} - {%created_time%}</td>
                        </tr>
                        <tr>
                            <td>الكاشير: {%staff_member_name%}</td>
                        </tr>
                        <tr>
                            <td> 
                                                             <table cellspacing="0" cellpadding="0" border="0" width="100%" >

                                <tr>
                                     <td style="width:24%" valign="top">
                                        <span id="field1" class="editable-area">{%field1%}</span>
                                     </td>
                                      <td>
                                    			<div style="vertical-align:top" align="right" id="client_info" class='editable-area'>
                                                                    
							{%client_info%}
								</div>
                                    </td>
                                </tr>
                           </table>
 
                         </td>
                        </tr>
                        <tr>				
                            <td  valign="top" align="right">
								<custom_field id="custom_fields" class='editable-area' style="clear:both;" border="0" cellspacing="0" cellpadding="0" >
									{%custom_fields%}
								</custom_field>
							</td>
						</tr>
					</table>
				</div>
				<div id="items-list">
						{%items_list%}
				</div>
				<div class="notes-block">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td>
                                <div class="editable-area" id="footer">{%footer%}</div>
                            </td>
						</tr>
					</table>
				</div>
				<div class="qr-code">{%sa_qr_code_image%}</div>
			</div>
{%html_sticky_footer%}
		</div>
	</body>
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
</html>`;export{t as default};
