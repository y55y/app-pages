const n=`<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Invoice Template</title>
</head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
    rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/frutiger-lt-arabic" rel="stylesheet">


<style type="text/css">
    @import url('https://fonts.cdnfonts.com/css/frutiger-lt-arabic');

    * {
        margin: 0;
        padding: 0;
        font-family: "Frutiger LT Arabic", 'Cairo', 'Tajawal' !important;
        box-sizing: border-box;
    }

    body {
        direction: rtl;
        text-align: right;
        font-size: 12px;
        font-family: "Frutiger LT Arabic", 'Cairo', 'Tajawal' !important;
    }

    .invoice-wrap {
        width: 660px;
        margin: 0 auto;
        background: #fff;
        color: #000;
    }

    .invoice-inner {
        margin: 0 10px;
        padding: 15px 0;
    }

    .invoice-address {
        border-top: 1px solid #d0d0d0;
        margin: 15px 0;
        margin-top: 10px;
        padding-top: 10px;
    }

    bold_title {
        font-weight: bold;
    }

    big_title {
        font-size: 18px;
        font-weight: 100;
    }

    .bussines-name {
        font-size: 18px;
        font-weight: 100;
    }


    .listing-table th {
        background-color: #fff;
        font-weight: bold;
        text-align: right;
        padding: 6px 4px;
    }


    .listing-table td {
        text-align: right;
        padding: 5px 6px;
        vertical-align: top;
    }

    .total-row {
        background-color: #e5e5e5;
        font-weight: bold;
    }

    .row-items {
        margin: 5px 0;
        display: block;
    }

    .notes-block {
        margin: 30px 0 0 0;
        padding: 0 15px;
    }

    tr,
    td,
    th {
        page-break-inside: avoid !important;
    }

    #business_info {
        line-height: 1.4;
        color: #575656;
    }

    #listing_table th:last-child,
    #listing_table td:last-child {
        min-width: 125px;
    }

    #listing_table th:nth-last-child(2) {
        width: 60px;
    }

    #listing_table th:nth-last-child(3) {
       width: 50px;
    }
    #discount-cell {
        width: 50px !important;
    }
    #label_unit_price {
        width: 60px;
        text-align: center;
    }
    #label_quantity {
        width: 50px;
    }

    /* #label_field3,
    #label_field4 {
        width: 50px;
    } */

    #items-list>table:nth-child(2) tr td:nth-child(1) {
        width: 60%;
    }

    #listing_table th,
    #listing_table td {
        text-align: center;
        color: #575656;
    }




    /* th#label_field5,
    #listing_table td:nth-child(5) {
      display: none;
    } */
    .qr-code img {
        width: 70%;
    }

    .hidden {
        display: none;
    }

    .sellerInformation,
    .buyerInformation {
        padding: 10px 0;
        color: #575656;
    }

    .sellerInformation tr:not(:first-child) td,
    .buyerInformation tr:not(:first-child) td {
        padding: 5px;
        border-right: 1px solid #ccc;
    }

    #items-list table:nth-child(2) {
        padding-top: 15px;
    }

    #items-list table:nth-child(2) tr td:first-child {
        display: none;
    }

    #items-list table:nth-child(2) tr td {
        border-bottom: none !important;
        background: #fff !important;
        font-size: 14px;
        font-weight: 700;
    }

    .total-table {
        width: 100%;
        padding: 5px;
        color: #575656;
    }

    .total-table td {
        padding: 5px;
    }

    .inv-title {
        font-size: 18px;
        font-weight: 700;
    }

    .info-td {
        vertical-align: top !important;
        white-space: normal;
    }

    .info-table td:first-child {
        width: 150px;
    }

    .info-table td:nth-child(2),
    .info-table td:nth-child(3) {
        width: 190px;
    }

    .info-table td:nth-child(4) {
        width: 110px;
    }

    .custom-total-table {
        display: none;
    }

    .label_subtotal {
        width: 110px;
    }
    /* Table Border */
    #listing_table th {
        border-left: none;
        border-color: #ccc;
        border-right: 1px solid #ccc;

    }

    #listing_table th:last-child {
        border-left: 1px solid #ccc;
    }

    #listing_table td {
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    #listing_table td:last-child {
        border-left: 1px solid #ccc;
    }

    #listing_table th:last-child, #listing_table td:last-child {
        border-left: 0;
    }
    
    #listing_table th:first-child, #listing_table td:first-child {
        border-right: 0 
    }
    tr#shipping_options td> br:first-child {
        display: none;
    }
    .custom-feilds {
        margin: 10px 0;
    }
#items-list table:nth-child(2) td:last-child {
    width: 25%;
    direction: rtl;
    text-align: left;
}
#items-list table:nth-child(2) tr td:last-child{
white-space:nowrap;
}
#label_unit_price, #label_quantity, #item_discount, #label_tax_percent, #label_tax_value, #label_subtotal{
max-width: 50px;
}
.label_unit_price, .label_quantity, .item_discount, .label_tax_percent, .label_tax_value {
        white-space: nowrap;
        direction: rtl
}
#total_before_tax, .total_before_tax {
    display: none;
}

  /* To fix content ovrlaping the thead try remove the comment from the below style */
  /* thead, tfoot {
  display: table-row-group;
}
#listing_table tr, #listing_table td {
page-break-inside: auto !important
} */
.en-title, .ar-title {display:inline-block}
</style>

<body>
    <div class="invoice-wrap">
        {%html_sticky_header%}
        <div class="invoice-inner">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="width:80%">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="invoice-main-info" style="width: 60%; vertical-align: top;">
                                    <table width="90%" border="0" cellspacing="0" cellpadding="0"
                                        style="max-width: 360px;">
                                        <tr>
                                            <td colspan="2" style="
                        font-size: 25px;
                        font-weight: bold;
                        font-family: Frutiger LT Arabic;
                        padding: 10px;
                        color: #575656;
                        text-align: center;
                      ">

                                                <p id="invoice_title" class="editable-area invoice-name"
                                                    style="font-weight: 700; font-size:30px" rel="#input-text">
                                                    {%invoice_title%}</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td align="center" style="text-align: center; padding: 0px;width: 50%;">
                                                <span style=" text-align: center; display: block;">{%label_invoice_no%}
                                                </span>
                                                <span style=" text-align: center;display: block;">{%invoice_no%}</span>
                                            </td>
                                            <td align="center" style="text-align: center; padding: 0px;width: 50%;">
                                                <span style=" text-align: center;  display: block;">التاريخ</span>
                                                <span style=" text-align: center; display: block"> {%created_time%} -
                                                    {%invoice_date%} </span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="site-logo" style="vertical-align: middle; text-align: center; padding: 10px;">
                                    <img style="max-height: 105px;" id="logo" class="editable-area" src="{%logo%}"
                                        width="{%logo-width%}" height="{%logo-height%}" />
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style="vertical-align: top; text-align: left; padding-top: 10px;">
                        <div class="qr-code">{%sa_qr_code_image%}</div>
                    </td>
                </tr>
            </table>

            <div class="invoice-address">
                <table class="sellerInformation info-table" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="inv-title" align="right" style="padding-bottom: 10px"><span class="ar-title">معلومات البائع</span> <span class="en-title">Seller Information</span></td>
                    </tr>
                    <tr>
                        <td class="info-td">
                            <div> اسم البائع <br>Seller Name</div>
                            <span>{%site_business_name%}</span>
                        </td>
                        <td class="info-td">
                            <div>عنوان البائع <br>Seller Address</div>
                            <span>{%site_address1%}</span>
                        </td>
                        <td class="info-td">
                            <div>رقم تسجيل القيمة المضافة للبائع <br>Seller VAT Registration Number</div>
                            <span>{%site_bn1%}</span>
                        </td>
                        <td class="info-td">
                            <div> رقم السجل التجاري <br><span style="display: inline-block; direction: ltr;">C.R NO.</span></div>
                            <span>{%site_bn2%}</span>
                        </td>
                    </tr>
                </table>

                <table class="buyerInformation info-table" style="margin-top:10px" width="100%" border="0"
                    cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="inv-title" align="right" style="padding-bottom: 10px">
                            <span class="ar-title">معلومات المشتري</span> <span class="en-title">Buyer Information</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="info-td">
                            <div> اسم المشتري <br>Buyer's Name</div>
                            <span>{%client_business_name%}</span>
                        </td>
                        <td class="info-td">
                            <div>عنوان المشتري <br>Buyer's Address</div>
                            <span>{%client_address%}</span>
                        </td>
                        <td class="info-td">
                            <div>رقم تسجيل القيمة المضافة للمشتري <br>Buyer's VAT Registration Number</div>
                            <span>{%client_bn1%}</span>
                        </td>
                        <td class="info-td">
                            <div>رقم السجل التجاري <br><span style="display: inline-block; direction: ltr;">C.R NO.</span></div>
                            <span>{%client_bn2%}</span>
                        </td>

                    </tr>
                </table>
            </div>
            <table class="custom-feilds" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td width="60%" valign="top">
                        <custom_field id="custom_fields" style="clear: both" class="editable-area" border="0"
                        cellspacing="0" cellpadding="0" align="right">
                        {%custom_fields%}
                    </custom_field>
                    </td>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr id="shipping_options" style="display: none">
                            <td valign="top" style="float: right">
                                <br /><strong id="label_ship" class="editable-area">{%label_ship%}</strong>
                            </td>
                            <td style="padding-right: 20px" valign="top">
                                <br />
                                <div id="ship_info" class="editable-area">
                                    {%ship_info%}
                                </div>
                            </td>
                        </tr></table>
                    </td>

                </tr>
            </table>
            <div id="items-list">{%items_list%}</div>

            <div class="notes-block">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <div style="font-style: italic" class="editable-area" id="footer">
                                {%footer%}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div style="display: none">
            <div id="discount">{%discount%}</div>
            <div id="item-discount">{%item-discount-total%}</div>
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


function formatNumber(num) {
  if (typeof num !== 'number') {
    return '';
  }

  // Round to two decimals and convert to fixed string
  var fixed = num.toFixed(2); // ensures two decimal digits

  // Split into integer and decimal parts
  var parts = fixed.split('.');
  var integerPart = parts[0];
  var decimalPart = parts[1];

  // Add thousand separators to integer part
  var withCommas = '';
  var count = 0;

  for (var i = integerPart.length - 1; i >= 0; i--) {
    withCommas = integerPart.charAt(i) + withCommas;
    count++;
    if (count % 3 === 0 && i !== 0) {
      withCommas = ',' + withCommas;
    }
  }

  // Combine and return
  return withCommas + '.' + decimalPart;
}


        function isLabelUnitPriceAfterLabelQuantity() {
            var ths = document.getElementsByTagName('th');
            var label_unit_price, label_quantity;

            for (var i = 0; i < ths.length; i++) {
                if (ths[i].id == 'label_unit_price') {
                    label_unit_price = ths[i];
                } else if (ths[i].id == 'label_quantity') {
                    label_quantity = ths[i];
                }
            }

            if (label_unit_price && label_quantity) {
                var currentElement = label_quantity;
                while (currentElement = currentElement.nextSibling) {
                    if (currentElement == label_unit_price) {
                        return true;
                    }
                }
            }
            return false;
        }

function calcTotalBeforeTax() {
    var table = document.getElementById('listing_table');

    // Add header cell
    var headerRow = table.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
    var qtyCell = headerRow.querySelector('#label_quantity');
    var priceCell = headerRow.querySelector('#label_unit_price');
    var isPriceAfterQty = isLabelUnitPriceAfterLabelQuantity();

    var newHeaderCell = document.createElement('th');
    newHeaderCell.setAttribute('width', '80');
    newHeaderCell.setAttribute('bgcolor', '#e5e5e5');
    newHeaderCell.setAttribute('class', 'editable-area col-8');
    newHeaderCell.setAttribute('id', 'total_before_tax');
    newHeaderCell.innerHTML = 'المجموع قبل الضريبة<br>Total Before Tax';

    // Insert header cell after qty or price
    if (isPriceAfterQty) {
        if (priceCell.nextSibling) {
            headerRow.insertBefore(newHeaderCell, priceCell.nextSibling);
        } else {
            headerRow.appendChild(newHeaderCell);
        }
    } else {
        if (qtyCell.nextSibling) {
            headerRow.insertBefore(newHeaderCell, qtyCell.nextSibling);
        } else {
            headerRow.appendChild(newHeaderCell);
        }
    }

    // Add data cells
    var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var qtyDataCell = row.querySelector('.label_quantity');
        var priceDataCell = row.querySelector('.label_unit_price');

        var subtotalCell = row.querySelector('.label_subtotal');
        var taxValueCell = row.querySelector('.label_tax_value');

        var subtotal = parseFloat(subtotalCell.textContent.replace(/,|\\s/g, ''));
        var taxValue = parseFloat(taxValueCell.textContent.replace(/,|\\s/g, ''));

        var totalBeforeTax = subtotal - taxValue;

        var newDataCell = document.createElement('td');
        newDataCell.className = 'total_before_tax';
        newDataCell.textContent = formatNumber(totalBeforeTax) 

        // Insert data cell after qty or price
        var referenceCell = isPriceAfterQty ? priceDataCell : qtyDataCell;
        if (referenceCell.nextSibling) {
            row.insertBefore(newDataCell, referenceCell.nextSibling);
        } else {
            row.appendChild(newDataCell);
        }
    }
}

try{checkForDiscountCoulmn();resetTableColumns('listing_table'); calcTotalBeforeTax()}catch(e){}
    <\/script>
</body>

</html>`;export{n as default};
