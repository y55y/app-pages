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
		*{ margin:0; padding:0;}
		body{ background:#ffffff; font:12px Arial, Helvetica, sans-serif }
		.invoice-wrap{margin:0 auto; background:#FFF; color:#000}
		.invoice-inner{ margin:0 30px; padding:20px 0}
		.listing-table th{background-color: white; border: none !important; font-weight: bold; padding:6px 4px; display: none;}
		.listing-table td{background-color: white; border: none !important; text-align:right; padding:6px 2px; vertical-align:middle; text-align: left;}
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
.qr-code {
    text-align: center;
    margin: 10px;
}
#label_unit_price {width:30px}
#invoice_title {
    font-size: 18px;
    text-align: right;
}
#invoice_title_2 {
    font-size: 12px;
    text-align: right;
}
.order {
    font-size: 20px;
    font-weight: bold;
}
.business-info-tbl tr td {
    vertical-align: middle;
}
.business-info-tbl tr:first-child td:first-child {
    text-align: left;
}
.business-info-tbl tr:first-child td:first-child img {
    max-width: 200px;
height: auto;
}
.business-info {
    padding: 10px 0;
    margin: 0 0 10px 0;
    border-bottom: 1px dashed black;
}
.invoice-info-tbl tr td, 
.custom_fields_table {
    padding: 1px;
    text-wrap: wrap;
}
.invoice-info-tbl tr td:last-child,
.custom_fields_table tr td:last-child {
    text-align: left;
}
div.custom_fields {
    white-space: nowrap;
    border-bottom: 1px dashed black;
}
.custom_fields_table {
    margin-bottom: 10px;
}
.total-table:nth-child(2) tr:first-child td {
    padding-top: 5px;
}
#items-list {
    margin: 2px 0;
}
#listing_table {
    margin: 2px 0;
}
#listing_table tr:last-child td {
    padding-bottom: 5px;
}

.total-table:nth-child(2) {
    border-top: 1px dashed black !important;
    margin: 2px 0 !important;
}
.total-table:nth-child(2) tr td:first-child {
    display: none;
}
#listing_table tr td:first-child {
    width: 8%;
}
.total-table:nth-child(2) tr td {
    font-size: 12px;
    padding: 2px 0;
    text-align: left;
}
.total-table:nth-child(2) tr:last-child td {
    font-size: 18px;
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
    padding: 1px 0;
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
    margin: 10px auto;
    max-width: 400px;
    margin: auto;
}
.invoice-barcode img {
    width: 100%;
}
.terms {
    margin: 10px 0px;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
}
.total-table:nth-child(2) tr td strong {
    font-weight: normal;
}
#label_total {
    font-weight: bold;
}
#listing_table tr:first-child td {
    border-top: 1px dashed black !important;
}
#listing_table tr:last-child td {
    border-bottom: 1px dashed black !important;
}
.total-table:nth-child(2) tr:last-child td {
    font-size: 18px;
    padding-top: 10px;
    border-top: 1px dashed black !important;
}
.total-table:nth-child(2) tr:nth-last-child(2) td {
    padding-bottom: 10px;
}
.invoice-info-tbl tr td:first-child {
    width: 30%;
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
							<td align="left" valign="top">
								<h1><p id="invoice_title" class="editable-area invoice-name">{%invoice_title%}</p></h1>
								<h1><p id="invoice_title_2" class="editable-area invoice-name">#{%invoice_no%}</p></h1>
							</td>
						</tr>
						<tr>
							<td colspan="2">{%site_address1%} {%site_address2%}</td>
						</tr>
						<tr>
							<td colspan="2">{%site_city%} {%site_state%}</td>
						</tr>
						<tr>
							<td colspan="2">Phone: {%site_mobile%}</td>
						</tr>
					</table>
				</div>
				<div class="invoice-address">
					<table class="invoice-info-tbl" border="0" cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                            <td>Date & Time:</td>
                            <td>{%created_date%} {%created_time%}</td>
                        </tr>
                        <tr>
                            <td>Branch:</td>
                            <td>{%invoice_branch_name%}</td>
                        </tr>
                        <tr>
                            <td>Cashier:</td>
                            <td>{%staff_member_name%}</td>
                        </tr>
                        <tr>
                            <td>Source:</td>
                            <td>{%order_source%}</td>
                        </tr>
                        <tr>
                            <td>Client:</td>
                            <td>{%client_business_name%}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{%client_mobile%}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{%client_full_address%}</td>
                        </tr>
					</table>

				</div>
                <div class="custom_fields">
                    <table class="custom_fields_table" border="0" cellspacing="0" cellpadding="0" width="100%">
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
				<div class="payments">
					{%invoice_payment_table%}
				</div>
				<div class="thanks-msg">
					******** THANKS FOR YOUR VISIT! ********
				</div>
				<div class="qr-code">{%sa_qr_code_image%}</div>
				<div class="invoice-barcode">
					{%invoice_barcode%}
				</div>
				<div class="terms">
					This receipt is required for any return or exchange 
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
			</div>
{%html_sticky_footer%}
		</div>
<script>


  function setQtyasFirstColumn(table_id, qty_index){
    var table = document.getElementById(table_id);
    var rows = table.rows
    for (let i = 0; i < rows.length; i++) {
                const qtyCell = rows[i].cells[qty_index];
                rows[i].removeChild(qtyCell);
                rows[i].insertBefore(qtyCell, rows[i].firstChild);
            }
  }



function hideEmptyRows() {
    var tblRows = document.querySelectorAll(".invoice-info-tbl tr")
for (i = 0; i < tblRows.length; i++) {
    if(tblRows[i].children[1].innerText == "") {
        tblRows[i].style.display = "none"
    }
}
}

function paymentsFormat() {
console.log("test")
    var amounts = document.querySelectorAll(".invoice-payment-listing-table tr td:last-child")
    for (i = 0; i < amounts.length; i++) {
        amounts[i].innerText= parseFloat(amounts[i].innerText).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
    }
}

function getColColIndex(table_id, col_id){
    const table = document.getElementById(table_id);
const targetThId = col_id;
let targetIndex = -1;

if (table) {
    const row = table.querySelector('tr'); // Get the first row (you might need to adjust this selector based on your actual table structure)

    if (row) {
        const thElements = row.getElementsByTagName('th');
        

        for (let i = 0; i < thElements.length; i++) {
            if (thElements[i].id === targetThId) {
                targetIndex = i;
                break;
            }
        }

        if (targetIndex !== -1) {
            console.log(\`The index of the <th> with id "\${targetThId}" is \${targetIndex}.\`);
        } else {
            console.log(\`No <th> with id "\${targetThId}" found in the row.\`);
        }
    } else {
        console.log('No rows found in the table.');
    }
} else {
    console.log(\`Table with id \${table_id} not found.\`);
}
return targetIndex
}
  try
  {
paymentsFormat();
let qtyIndex = getColColIndex("listing_table", 'label_quantity')
let priceIndex = getColColIndex("listing_table", 'label_unit_price')

if(qtyIndex != -1){
    setQtyasFirstColumn("listing_table", qtyIndex)

}
hideEmptyRows();

   }
   catch(err){console.log(err)}
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
