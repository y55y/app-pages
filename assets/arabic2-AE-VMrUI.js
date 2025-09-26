const t=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Invoice Template</title>
	</head>
	<style type="text/css">
		*{ margin:0; padding:0;}
		body{ background:transparent; font:12px "Tahoma", Arial, Helvetica, sans-serif; direction:rtl; text-align:right; }
		.invoice-wrap{ width:660px; margin:0 auto; background:#FFF; color:#000}
		.invoice-inner{ margin:0 30px; padding:20px 0}
		.invoice-address{border-top: 3px double #000000; margin: 35px 0; padding-top: 25px;}
		 bold_title {font-weight:bold;}
		 big_title{ font-size:18px; font-weight:100}
		.bussines-name{ font-size:18px; font-weight:100}
		.invoice-name{font-size:22px; font-weight:700}
		.listing-table th{background-color: #e5e5e5;border-bottom: 1px solid #555555;border-top: 1px solid #555555;font-weight: bold; text-align:right; padding:6px 4px}
		.listing-table td{border-bottom: 1px solid #555555; text-align:right; padding:5px 6px; vertical-align:top}
		.total-table td{ border-right: 1px solid #555555;}
		.total-row{ background-color: #e5e5e5;border-bottom: 1px solid #555555;border-top: 1px solid #555555;font-weight: bold;}
		.row-items{ margin:5px 0; display:block}
		.notes-block{ margin:50px 0 0 0}
	
tr, td, th {
    page-break-inside: avoid !important;
}                                           

#items-list table:nth-child(2) tr td:last-child{
white-space:nowrap;
}
#label_unit_price, #label_quantity, #item_discount, #label_tax_percent, #label_tax_value{
width: 50px;
}
.label_unit_price, .label_quantity, .item_discount, .label_tax_percent, .label_tax_value, .label_subtotal, #items-list table:nth-child(2) td{
     
        direction: rtl !important;
}
#label_subtotal{width:70px}

div#items-list td:first-child, div#items-list td:nth-child(2) {
    word-break: break-word;
    width: 300px;
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
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="right" valign="top">
							
								<img id="logo" class='editable-area' src="{%logo%}" width="{%logo-width%}" height="{%logo-height%}"/> 
							
						</td>
						<td align="right" valign="top" >
							<div id="business_info" class='editable-area'>
								{%business_info%}
							</div>
						</td>
						<td valign="top" align="left">
								<p id="invoice_title" class="editable-area invoice-name">{%invoice_title%}</p>
						</td>
					</tr>
				</table>

				<div class="invoice-address">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="50%" align="right" valign="top">
		
			<table border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td valign="top" style="float: right;" ><strong id="field1" class='editable-area'>{%field1%}</strong></td>
										<td style="padding-right:20px;" valign="top"><div id="client_info" class='editable-area'>{%client_info%}</div></td>
									</tr>
<tr id="shipping_options" style="display:none;">
										<td valign="top" style="float: right;" ><br/><strong id="label_ship" class='editable-area'>{%label_ship%}</strong></td>
										<td style="padding-right:20px;" valign="top"><br/><div id="ship_info" class='editable-area'>{%ship_info%}</div></td>
									</tr>
								</table>
							</td>
<td width="50%" valign="top" align="left" >
<table id="invoice_basics" border="0" cellspacing="0" cellpadding="0" align="left" >

<tr>
<td  align="left"><strong class="editable-area" id="label_invoice_no">{%label_invoice_no%}</strong></td>
<td  style="padding-right:20px;" align="right" >{%invoice_number%}
</td>
</tr>
<!-- InvoiceDate -->
<tr>
<td  align="left" ><strong class="editable-area" id="label_date">{%label_date%}</strong></td>
<td style="padding-right:20px;" align="right" >{%invoice_date%}
</td>
</tr>
<!-- /InvoiceDate -->

</table>
<custom_field id="custom_fields" style="clear:both" class='editable-area'   border="0" cellspacing="0" cellpadding="0" align="left">
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
    function resetColumnsClass(column_id, table_id) {
            var table = document.getElementById(table_id);
            var thElements = table.getElementsByTagName('th');
            var columnIndex = -1;
            for (var i = 0; i < thElements.length; i++) {
                if (thElements[i].id === column_id) {
                    columnIndex = i;
                    break;
                }
            }

            if (columnIndex !== -1) {
                for (var j = 1, row; row = table.rows[j]; j++) {
                    var cell = row.cells[columnIndex];
                    if (cell) {
                        cell.className = column_id;
                    }
                }
            } else {
                console.log('Column with id ' + column_id + ' not found.');
            }
        }


        function resetTableColumns(table_id){
            var table = document.getElementById(table_id);
            var thElements = table.getElementsByTagName('th');
            for(var i =0; i<thElements.length; i++){
                var thId = thElements[i].id
                resetColumnsClass(thId, table_id)
            }
        }

function checkForDiscountCoulmn(){
// Get the table element by its ID
var table = document.getElementById('listing_table');

// Ensure the table exists
if (table) {
    // Get all the <th> elements within the table
    var thElements = table.getElementsByTagName('th');

    for (var i = 0; i < thElements.length; i++) {
        var th = thElements[i];

        // Check if the <th> has the ID 'label_subtotal' and it's not the last <th> in the table
        if (th.id === 'label_subtotal' && i !== thElements.length - 1) {
            // Change the ID to 'item_discount'
            th.id = 'item_discount';
        }
    }
}
}
try{checkForDiscountCoulmn();resetTableColumns('listing_table')}catch(e){}
  <\/script>
	</body>
</html>`;export{t as default};
