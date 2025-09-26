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
.listing-table td {

    border: none !important;
    text-align: right;
    padding: 1px0px;
    vertical-align: middle;
}
		#listing_table td {text-align: center !important;}
		#listing_table td:first-child {text-align: left !important;}
        .total-table tr td:last-child {text-align:left !important;}
		.total-row{font-weight: bold;}
		.row-items{ margin:5px 0; display:block}
bold_title {font-weight:bold;}
		 strong_tag {font-weight:bold;}
		 big_title{ font-size:18px; font-weight:100}
.notes-block {
    margin: 10px 0 0 0;
    display: none;
}
	
tr, td, th {
    page-break-inside: avoid !important;
}                                           
.qr-code {margin-top:10px; text-align: center;}
#label_unit_price {width:30px}
.title span {
    font-size: 18px;
}
.title_2 {
    font-size: 12px;
}
.invoice-info-tbl {
    direction: rtl;
}
.order {
    font-size: 20px;
    font-weight: bold;
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
    border-bottom: 1px solid black;
}
.invoice-info-tbl tr td {
    padding: 1px;
    text-wrap: wrap;
}
.invoice-address {
    white-space: nowrap;
    padding-top: 5px;
    white-space: nowrap;
    border-bottom: 1px solid black;
}
#items-list {
    margin: 2px 0;
    border-top: 1px solid black;
}
#listing_table {
    margin-top: 5px;
}
#listing_table th {
    border-top: 1px solid black !important;
    border-bottom: 1px solid black !important;
    background-color: #e5e5e5;
    display: none;
}
#listing_table tr:last-child td {
    border-bottom: 1px solid black !important;
}
.total-table:nth-child(2) {
    margin: 7px 0px 0 0;
    direction: rtl;
}
.total-table:nth-child(2) tr td:first-child {
    display: none;
}
.total-table:nth-child(2) tr td {
    font-size: 14px;
    padding: 2px 0;
}
.total-table:nth-child(2) tr td strong {
    font-weight: normal;
}
#label_total {
    font-weight: bold;
}
.total-table:nth-child(2) tr:last-child td {
    padding-top: 10px;
    display: none;
}
.total-table tr:last-child td:last-child {
    font-size: 18px;
}
#label_total {
    font-size: 18px;
}
.total-table:nth-child(2) tr:nth-last-child(2) td {
    padding-bottom: 10px;
}
.total-row td:last-child {
    text-align: center;
}
.totals-td {
    background-color: gainsboro;
    padding: 3px;
    font-size: 15px;
    direction: rtl;
    white-space: nowrap;
}
.totals-td span {
    font-size: inherit;
}
.total-row td {
    border-top: 1px solid black;
    padding-top: 10px;
}
.invoice-payment-listing-table {
    width: 100%;
	border: none !important;
}
.invoice-payment-listing-table tr th:first-child, .invoice-payment-listing-table tr td:first-child {
    text-align: right;
}
.invoice-payment-listing-table tr th:last-child, .invoice-payment-listing-table tr td:last-child {
    text-align: left;
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
.subtotal {
    text-align: left;;
}
#listing_table {
    display: none;
}
#itmes-list-table {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-top: 2px;
}
#new-tbl {
    margin-top: 2px;
    direction: rtl;
}
.qty {
    width: 10%;
}
.invoice-payment-listing-table {
    direction: rtl;
}
td.price {
    vertical-align: bottom;

}
</style>
	<body>
		<div class="invoice-wrap">
{%html_sticky_header%}
			<div class="invoice-inner">
				<div class="business-info">
					<table class="business-info-tbl" width="100%" border="0" cellspacing="0" cellpadding="0" style="direction:ltr">
						<tr>
                            <td style="text-align: left;padding-bottom:5px"><h4 class="title">{%invoice_title%}</h4><h4 class="title_2">#{%invoice_no%}</h4></td>
							<td align="right" valign="top" style="padding-bottom:5px">
								<img style="vertical-align:middle;margin-bottom:10px;"  id="logo" class='editable-area'  src="{%logo%}"  width="{%logo-width%}" height="{%logo-height%}"/>
							</td>
						</tr>
						<tr>
							<td colspan="2">

                                <div id="business_info" class='editable-area'>
                                    {%business_info%}
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
                <div class="new-itmes-list" id="new-itmes-list">
                    <table class="itmes-list-table" id="itmes-list-table" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody></tbody>
                    </table>
                </div>
				<div id="items-list">
						{%items_list%}
				</div>
				<div class="totals-tr">
					<table class="totals-tr" width="100%" border="0" cellspacing="0" cellpadding="0" style="direction:ltr">
<tr class="total-row">
        <td width="65%" style="display: none; border-top: 1px solid black !important" bgcolor="#FFF"></td>
        <td width="80" align="left"><div class="totals-td">{%invoice_total%}</div></td>
        <td style="text-align: right;"><h4><strong class="editable-area" id="label_total">الإجمالي</strong></h4></td>
    </tr>
					</table>
				</div>
                <div class="payments">
                    {%invoice_payment_table%}
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
                <div class="thanks-msg">
                    ******** شكرا لزيارتكم ********
                </div>
			</div>
{%html_sticky_footer%}
		</div>
        <script>
            function addItemsList() {
                var tbl = document.querySelector("#listing_table tbody")
                var tblRows = tbl.rows
                var newTbl = document.querySelector("#itmes-list-table")
                var newTblRows = newTbl.rows

                for (i = 0; i < tblRows.length; i++) {
                    var insertRow = newTbl.insertRow()
                    newCell = insertRow.insertCell();
                    newCell.innerHTML = '<table id="new-tbl" width="100%"> <tr> <td colspan="3" class="item-name"></td> </tr> <tr> <td class="qty"></td> <td class="price"></td> <td class="subtotal"></td> </tr> <tr><td></td> <td class="discount"></td> <td></td></tr> </table>'
                }
            }
            function addItemsData() {
                var tbl = document.querySelector("#listing_table tbody")
                var tblRows = tbl.rows
                for(i = 0; i < tblRows.length; i++) {
                    if(tblRows[0].cells.length == 5) {
                        console.log(tblRows[0].cells.length, "cells");
                        // MAIN ITEMS LIST CELLS
                        var itemName = tblRows[i].children[0].innerHTML;
                        var itemPrice = tblRows[i].children[1].innerHTML;
                        var itemQty = tblRows[i].children[2].innerText.trim();
                        var discount = tblRows[i].children[3].innerHTML;
                        var subtotal = tblRows[i].children[4].innerHTML;
                        console.log(subtotal);
                        // NEW ITEMS LIST CELLS
                        var newItemNames = document.querySelectorAll(".item-name")
                        var newItemQty = document.querySelectorAll(".qty")
                        var newItemPrice = document.querySelectorAll(".price")
                        var newItemDiscount = document.querySelectorAll(".discount")
                        var newSubtotal = document.querySelectorAll(".subtotal")

                        newItemNames[i].innerHTML = itemName
                        newItemQty[i].innerHTML = itemQty+"x"
                        newItemPrice[i].innerHTML = itemPrice
                        newItemDiscount[i].innerHTML = "Discount:" + discount
                        newSubtotal[i].innerHTML = subtotal
                    } else {
                        // MAIN ITEMS LIST CELLS
                        console.log(tblRows[0].cells.length, "cells");
                        var itemName = tblRows[i].children[0].innerHTML;
                        var itemPrice = tblRows[i].children[1].innerHTML;
                        var itemQty = tblRows[i].children[2].innerHTML;
                        var subtotal = tblRows[i].children[3].innerHTML;

                        // NEW ITEMS LIST CELLS
                        var newItemNames = document.querySelectorAll(".item-name")
                        var newItemQty = document.querySelectorAll(".qty")
                        var newItemPrice = document.querySelectorAll(".price")
                        var newSubtotal = document.querySelectorAll(".subtotal")
                        console.log(subtotal);

                        newItemNames[i].innerHTML = itemName
                        newItemQty[i].innerHTML = itemQty+"x"
                        newItemPrice[i].innerHTML = itemPrice
                        newSubtotal[i].innerHTML = subtotal
                    }
                }
            }

function removeEmptyDisc() {
    var discTd = document.querySelectorAll(".discount")
    for (i = 0; i < discTd.length; i++) {
        if (discTd[i].innerText == "Discount:") {
            discTd[i].style.display = "none"
        }
    }
}

function removeBorder() {
    var totalTblRows = document.querySelectorAll(".total-table:nth-child(2) tr")
    for (i = 0; i < totalTblRows.length; i++) {
        if (totalTblRows.length >= 3) {
            console.log(totalTblRows.length)
            document.querySelector(".total-table:nth-child(2) tr:last-child").setAttribute("style", "border-top: 1px solid black !important");
            document.querySelector(".total-table:nth-child(2) tr:last-child td:nth-child(1)").setAttribute("style", "border-top: 1px solid black !important");
            document.querySelector(".total-table:nth-child(2) tr:last-child td:nth-child(2)").setAttribute("style", "border-top: 1px solid black !important");
            document.querySelector(".total-table:nth-child(2) tr:last-child td:nth-child(3)").setAttribute("style", "border-top: 1px solid black !important");
        }
    }
}
function extractNumberAndText(str) {
    var numStr = str.replace(/[^\\d.-]/g, '');  // Extract the number part
    var textStr = str.replace(/[\\d.-]/g, '');  // Remove the number part
    return {
        number: parseFloat(numStr),
        text: textStr.trim()
    };
}


function paymentsFormat() {
console.log("test")
    var amounts = document.querySelectorAll(".invoice-payment-listing-table tr td:last-child")
    for (i = 0; i < amounts.length; i++) {
        amounts[i].innerHTML=extractNumberAndText(amounts[i].innerText).number +  ' <span class="sar_symbol" style="display:inline-block">'+ extractNumberAndText(amounts[i].innerText).text.replace(',','') +'</span>'
    }
}
function paymentsMethod() {
    var amounts = document.querySelectorAll(".invoice-payment-listing-table tr td:first-child")
    for (i = 0; i < amounts.length; i++) {
        if(amounts[i].innerText == "Cash") {
            amounts[i].innerText = "نقدي"
        } else if (amounts[i].innerText == "Bank Transfer") {
            amounts[i].innerText = "تحويل بنكي"
        }
    }
}
            try {
paymentsFormat();
paymentsMethod();
                addItemsList();
                addItemsData();
                removeEmptyDisc();
removeBorder()
            } catch (error) {
                console.log(error);
            }
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
</html>`;export{t as default};
