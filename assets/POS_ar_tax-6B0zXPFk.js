const n=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Invoice Template</title>
  </head>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/frutiger-lt-arabic" rel="stylesheet">
<style>
@import url('https://fonts.cdnfonts.com/css/frutiger-lt-arabic');
</style>
  <style type="text/css">
    @media print {
      body {
        max-width: 90% !important;
        width: 90% !important;
        margin: 0 auto !important;
        background: #fff;
        padding: 0 !important;
      }
      body > div > div.invoice-inner {
        margin: 10px auto !important;
      }
      .invoice-wrap {
        margin: auto !important;
        width: 100% !important;
      }
    }


    * {
      margin: 0;
      padding: 0;
      font-family: "Frutiger LT Arabic", 'Cairo', 'Tajawal' !important;
    }
    body {
      background: #ffffff;
      font-family: "Frutiger LT Arabic", 'Cairo', 'Tajawal', 'Tahoma, 'sans-serif;
      direction: rtl;
      text-align: right;
    }
    .invoice-wrap {
      margin: 0 auto;
      background: #fff;
      color: #000;
    }
    .invoice-inner {
      margin: 0 30px;
      padding: 20px 0;
    }
    .listing-table th {
      background-color: #fff;
      border-bottom: 1px dotted #555555 !important;
      font-size: 7px;
      line-height: 1.3;
      border-top: 1px dotted #555555 !important;
      border-right: none !important;
      border-left: none !important;
      font-weight: bold;
      text-align: center !important;
      padding: 6px 4px;
      color: #555555!important;
    }
    .listing-table td {
      border-bottom: none !important;
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
      text-align: center !important;
      padding: 5px 6px;
      vertical-align: top;
      color: #555555!important;
     font-size: 12px !Important;
    }
    .total-table td {
      border-right: 1px solid #555555;
    }
    .total-row {
      /* background-color: #e5e5e5; */
      /* border-bottom: 1px solid #555555;
      border-top: 1px solid #555555; */
      font-weight: bold;
    }
    .row-items {
      margin: 5px 0;
      display: block;
    }
    bold_title {
      font-weight: bold;
    }
    strong_tag {
      font-weight: bold;
    }
    big_title {
      font-size: 18px;
      font-weight: 100;
    }
    .notes-block {
      margin: 50px 0 0 0;
    }
    #items-list table:nth-child(2) {
    margin-top:10px
    }

    #items-list table:nth-child(2) td{
        border: none !important;
    color: #706f70 !important;
    font-size: 11px !important;
    font-weight: 700

}
#items-list table:nth-child(2)  td:nth-child(2) {text-align: right !important;}
   #items-list table:nth-child(2)  td:nth-child(2) strong{
    font-weight: 800 !important;

}

    tr,
    td,
    th {
      page-break-inside: avoid !important;
    }
    .qr-code {
      margin-top: 10px;
      text-align: center;
    }

    #listing_table tr:last-child td {
      border-bottom: 1px dotted #555555 !important;
    }
    #listing_table th:last-child {
      width: 80px !important;
      text-align: center;
    }
    .custom-table {
      width: 100% !important;
      padding: 5px;
      text-align: right !important;
      color: #706f70;
      /* color: #b6b6b6; */
    }
    .custom-table td {
      padding: 5px;
      border-left: none !important;
      border: none !important;
      color: #706f70 !important;
      font-size: 11px;
    }
    body > div > div.invoice-inner > table.custom-table {
      width: 100% !important;
      padding: 5px;
      text-align: right !important;
      color: #575656;
    }
.hidden-tr {display:none}
.custom-feilds {
    margin: 10px 0;
}

  </style>

  <body>
    <div class="invoice-wrap">
      {%html_sticky_header%}
      <div class="invoice-inner">
        <table
          style="padding: 5px"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="color: #575656; text-align: center; padding: 5px">
              <div style="font-size: 24px; font-weight:700"> <p id="invoice_title" class="editable-area invoice-name highlighted cluetip-clicked" rel="#input-text">{%invoice_title%}</p> </div>
<div>
<img style="vertical-align:top;margin:10px 0;"  id="logo" class='editable-area'  src="{%logo%}"  width="{%logo-width%}" height="{%logo-height%}"/>
</div>
              <span style="font-size: 15px; font-weight: 400; display:inline-block; margin-bottom: 5px; width:250px">
                {%label_invoice_no%} : {%invoice_no%}</span
              >

              <div id="business_info" class="editable-area highlighted cluetip-clicked" rel="#input-text">
              <div style="font-size: 14px; line-height:1.4; font-weight:700">{%business_info%}</div>
</div>
            </td>
          </tr>
        </table>
        <table
          style="padding: 5px; font-size:11px; font-weight:700"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="text-align: right; color: #575656">
              تاريخ : {%invoice_date%}
            </td>
          </tr>
          <tr>
            <td
              style="
                text-align: right;
                color: #575656;
                width: 100%;
                display: block;
              "
            >
              رقم تسجيل ضريبية القيمة المضافة : {%site_bn1%}
            </td>
          </tr>
        </table>
                    <div id="client_info" class="editable-area">
                                            {%client_info%}
                                        </div>
        <table class="custom-feilds" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td width="100%" valign="top">
                    <custom_field id="custom_fields" style="clear: both" class="editable-area" border="0"
                    cellspacing="0" cellpadding="0" align="right">
                    {%custom_fields%}
                </custom_field>
                </td>
                
            </tr>
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
            </tr>
        </table>
       
        <div id="items-list">{%items_list%}</div>

        <br />
        <br />
        <div class="close-invoice">
          <table width="100%" border="0">
            <tr>
              <td style="text-align: center">
                <<<<<<<<< إغلاق الفاتورة {%invoice_no%} <<<<<<<<<
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-top: 5px">
                <div class="qr-code">{%sa_qr_code_image%}</div>

              </td>
            </tr>
          </table>
        </div>

        <div class="notes-block">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <div
                  style="font-style: italic"
                  class="editable-area"
                  id="footer"
                >
                  {%footer%}
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div style="display: none">
            <div id="discount">{%discount%}</div>
            <div id="item-discount">{%item-discount-total%}</div>
        </div>
      </div>
      {%html_sticky_footer%}
    </div>
    <style>
      .close-invoice {
        width: 100%;
        text-align: center;
        color: #555555!important;
      }
      body > div > div > table > tbody > tr > td:nth-child(1) {
        /* display: block; */
        text-align: right;
      
      }

      body > div > div > table > tbody > tr > td:nth-child(2) {
        display: block;
        text-align: center;
      }

      body > div > div > div.invoice-address {
        margin-top: 5px;
      }

      body
        > div
        > div
        > div.invoice-address
        > table
        > tbody
        > tr
        > td:nth-child(1) {
        display: block;
      }

      body
        > div
        > div
        > div.invoice-address
        > table
        > tbody
        > tr
        > td:nth-child(3) {
        display: block;
        text-align: right;
        margin-top: 10px;
      }

      #invoice_basics > tbody > tr:nth-child(1) > td:nth-child(1) {
        text-align: right;
      }

      body > div > div.invoice-inner {
        margin: 10px !important;
      }
      

      #items-list > table:nth-child(2) > tbody > tr > td:nth-child(1) {
        display: none;
      }

      #listing_table {
        font-size: 10px;
      }
      #label_quantity {
        max-width:30px ;
     
      }
#listing_table th:nth-last-child(2) {
    max-width:none;
    width:50px !important;
   text-align: center;
}

      tr,
      td,
      th {
        page-break-inside: avoid !important;
      }
      div#client_info {
margin:10px 0
      }
      .total-table td:first-child {
        text-align: right !important;
      }
      .total-table th:first-child {
        width: 85px !important;
        color: #706f70 !important;
        text-align: right !important;
        font-size: 11px !important;
      }
      #label_subtotal,
      .label_subtotal {
        display: none;
      }
    </style>
    <script>

function parseCurrency(value) {
    // Use a regular expression to match the numeric part of the string
    const numericValue = value.replace(/[^\\d.-]/g, '');
    return parseFloat(numericValue);
}

function checkDiscount(){
 var invoiceDiscount= document.getElementById('invoice_discount')
  if ( parseCurrency(invoiceDiscount.innerText) <= 0){
      invoiceDiscount.parentNode.classList.add('hidden-tr')
   }
}
function swap(in1, in2, table_id) {
            var table = document.getElementById(table_id);
            for (var i = 0, row; row = table.rows[i]; i++) {
                var cell1 = row.cells[in1];
                var cell2 = row.cells[in2];

                // Swap innerHTML
                var tempHTML = cell1.innerHTML;
                cell1.innerHTML = cell2.innerHTML;
                cell2.innerHTML = tempHTML;

                // Swap id
                var tempId = cell1.id;
                cell1.id = cell2.id;
                cell2.id = tempId;

                // Swap class
                var tempClass = cell1.className;
                cell1.className = cell2.className;
                cell2.className = tempClass;
            }
        }

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

        function handleDuplicateThIds(table_id) {
    var table = document.getElementById(table_id);
    var thElements = table.getElementsByTagName('th');
    var idTracker = {};

    for (var i = 0; i < thElements.length; i++) {
        var th = thElements[i];
        var thId = th.id;

        if (idTracker[thId]) {
            idTracker[thId].id = "discount-cell";
        } else {
            idTracker[thId] = th;
        }
    }
}


function detectDiscountColumn() {
            var hasDiscColumn = false
            var table = document.getElementById('listing_table');
            var thElements = table.getElementsByTagName('th');
            for (var i = 0; i < thElements.length; i++) {
                var thText = thElements[i].innerText || thElements[i].textContent;
                if (thText.indexOf('خصم') !== -1 || thText.indexOf('discount') !== -1) {
                    hasDiscColumn = true
                }
            }
            return hasDiscColumn
        }

        function hasDiscount() {
            var discountRow = document.querySelectorAll('.row-summary-discount')
            var discountValue = document.getElementById('discount').innerText.replace(/[^\\d]/g, '');
            var itemDiscount = document.getElementById('item-discount').innerText.replace(/[^\\d]/g, '');
            var hasInvoiceDiscount = false
            var hasItemDiscount = false
            if (parseFloat(itemDiscount) != 0) {
                hasItemDiscount = true
            }

            if (parseFloat(discountValue) != 0) {
                hasInvoiceDiscount = true
            }

            return { invoiceDiscount: hasInvoiceDiscount, itemDiscount: hasItemDiscount, discount_row:discountRow }
        }

function select(selectors) {
var elements = document.querySelectorAll(selectors)
return elements
}

      try {



        handleDuplicateThIds('listing_table')
        var mainTable = document.getElementById("listing_table");
var colCount = mainTable.rows[0].cells;
if (colCount.length == 6 && !detectDiscountColumn()) {
    swap(1, 4, 'listing_table')
    swap(2, 5, 'listing_table')
    swap(1, 3, 'listing_table')

} else if (colCount.length == 7 && !detectDiscountColumn()){
    swap(2, 5, 'listing_table')
    swap(3, 6, 'listing_table')
    swap(2, 4, 'listing_table')
} else if (colCount.length == 8 && !detectDiscountColumn()){
    swap(3, 6, 'listing_table')
    swap(4, 7, 'listing_table')
    swap(3, 5, 'listing_table')
} else if (colCount.length == 7){
    swap(1, 4, 'listing_table')
    swap(2, 6, 'listing_table')
    swap(1, 3, 'listing_table')
    swap(4, 5, 'listing_table')  
}else if (colCount.length == 8){
    swap(2, 5, 'listing_table')
    swap(3, 7, 'listing_table')
    swap(2, 4, 'listing_table')
    swap(5, 6, 'listing_table')  
}else if (colCount.length == 9){
    swap(3, 6, 'listing_table')
    swap(4, 8, 'listing_table')
    swap(3, 5, 'listing_table')
    swap(6, 7, 'listing_table')  
}


resetTableColumns('listing_table')

// checkDiscount()
//         swapAll();
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
</html>
`;export{n as default};
