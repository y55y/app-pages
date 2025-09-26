const n=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Invoice Template</title>
      
</head>
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    line-height: 1.6;

    }
    
    body {
        background: #ffffff;
      font:12px "Tahoma", Arial, Helvetica, sans-serif;
       direction:rtl;
       text-align:right; 
   }
    
    .invoice-wrap {
        width: 660px;
        margin: 0 auto;
        background: #FFF;
        color: #2a2c3d !important;
    }
    
    .invoice-inner {
        margin: 0 30px;
        padding:20px 0
    }
    
    .listing-table th {
        color: #fff;
        background-color: #274058;
        font-weight: bold;
        text-align: right;
        padding: 8px 6px;
        border: none !important;
    }
    
    .listing-table td {
        border-bottom: 1px solid #bec9d3 !important;
        text-align: right;
        padding: 6px;
        vertical-align: top;
        border-right: none !important;
    }
    
    .row-items {
        margin: 5px 0;
        display: block
    }
    
    bold_title {
        font-weight: bold;
    }
    
    strong_tag {
        font-weight: bold;
    }
    
    big_title {
        font-size: 18px;
        font-weight: 100
    }
    
    .listing-table:nth-child(2) td {
        border: none !important;
    }
    
    .listing-table:nth-child(2) td:nth-child(2) strong {
        color: #87a4be;
        font-weight: 400;
    }
      .listing-table:nth-child(2) tr:last-child td:nth-child(2) strong{color:#fff !important}
    .listing-table:nth-child(2) tr:last-child td {
    
        padding: 10px 6px;
font-size:13px;
font-weight:bold;
    }
    
    .notes-block {
        margin: 50px 0 0 0
    }
    
    #items-list {
        border: 1px solid #2a2c3d;
    }
    #items-list div{display:none;}    
    tr,
    td,
    th {
        page-break-inside: avoid !important;
    }
   .listing-table:nth-child(2) td:first-child {
width:57% !important ;
}
    .qr-code img {
        margin-top: 10px
    }
    
 .hidden {
        display: none;
    }
    
    #target-td {
        width: 60%;
        padding-left: 40px !important;
    }
.total-table td:last-child {border-left:none !important;}
.total-table td:first-child {border-right:none !important;}
#business_info, #client_info {color: #87a4be;     width: 90%; margin-left: auto;}
#custom_fields td{text-align:right}
#items-list table:nth-child(2) tr td:last-child{
white-space:nowrap;
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
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-bottom: 20px">
                <tr>
                    <td width="40%" valign="top" style="padding-bottom: 8px;">
                        <img style="vertical-align:top;margin-bottom:10px;" id="logo" class='editable-area' src="{%logo%}" width="{%logo-width%}" height="{%logo-height%}" />
                        
                    </td>
                    <td width="60%" align="left" valign="bottom" style="padding-bottom: 8px;">
                        <h1>
                            <p id="invoice_title" class="editable-area invoice-name"><strong> {%invoice_title%}</strong></p>
                        </h1>
<div class="qr-code">{%sa_qr_code_image%}</div>
                     
                    </td>

<tr>
<td width="40%" valign="top" style="padding-bottom: 20px;">
                        <div id="business_info" class='editable-area'>
                            <p>{%business_info%}</p>
                        </div>
</td>

<td width="40%" valign="bottom" style="padding-bottom: 20px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #2a2c3d;padding: 12px; ">
                            <tr>
                                <td style="font-size: 14px; color: #2a2c3d;" width="45%"><strong class="editable-area" id="label_invoice_no">{%label_invoice_no%} {%invoice_number%}</strong>
                                </td>
                                <td style="color:#87a4be ;" width="25%">{%label_date%}</td>
                                <td width="30%">{%invoice_date%}</td>
                            </tr>
                        </table>
</td>
</tr>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <div style="vertical-align:top ; " align="right" id="client_info" class='editable-area'>
                            {%client_info%}
                        </div>
                    </td>
                    <td align="right" valign="bottom">
    <custom_field id="custom_fields" style="clear:both" class='editable-area'   border="0" cellspacing="0" cellpadding="0" align="right">
        {%custom_fields%}
        </custom_field>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #2a2c3d;padding: 12px;font-size: 13px;">
                            <tr>
                                <td width="13%" style="color: #87a4be;">المدفوع</td>
                                <td width="32%">{%paid%}</td>
                                <td width="28%" style="color: #87a4be;">الرصيد المستحق</td>
                                <td width="37%"><strong> {%unpaid%}</strong></td>
                            </tr>
                        </table>
                    </td>

                </tr>
            </table>


            <div class="invoice-address" style="display: none;">
                <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    <tr>
                        <td align="left" valign="top">
                            <div style="vertical-align:top" align="left" id="client_info" class='editable-area'>

                                {%client_info%}
                            </div>
                        </td>
                        <td id="shipping_options" style="display:none;" align="left" valign="top">
                            <div style="vertical-align:top" align="left" id="ship_info" class='editable-area'>

                                {%ship_info%}
                            </div>
                        </td>
                        <td valign="top" align="right">
                            <table id="invoice_basics" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="right"><strong class="editable-area" id="label_invoice_no">{%label_invoice_no%}</strong></td>
                                    <td style="padding-left:20px;" align="left">{%invoice_number%}</td>
                                </tr>
                                <tr>
                                    <td align="right"><strong class="editable-area" id="label_date">{%label_date%}</strong></td>
                                    <td style="padding-left:20px;" align="left">{%invoice_date%}</td>
                                </tr>
                            </table>
                            <custom_field id="custom_fields" class='editable-area' style="clear:both;" border="0" cellspacing="0" cellpadding="0">
                                {%custom_fields%}
                            </custom_field>
                            <div id="spelled">{%invoice_total_spelled%} </div>
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
        function appenedspelled() {
            var totalspelled = document.getElementById("spelled").innerHTML;

            document.querySelector('#items-list table:nth-child(2) tr:last-child td:first-child').innerHTML = totalspelled
            document.querySelector('#items-list table:nth-child(2) tr:last-child td:first-child').style.color = "#bec9d3 ";

        }

function select(selectors) {
var elements = document.querySelectorAll(selectors)
return elements
}
function addStyles(elements, addedClass) {
for(var i = 0; i< elements.length; i++){
elements[i].classList.add(addedClass)
}}




        try {

var selectedForBack = select("#listing_table th,  .listing-table:nth-child(2) tr:nth-child(1) td:nth-child(n+2) ,  .listing-table:nth-child(2) tr:last-child td ")
var AllBorders= select("#listing_table th, #listing_table td")
var evenRows= select("#listing_table tr:nth-child(even) td")
var oddRows= select("#listing_table tr:nth-child(odd) td")

addStyles(selectedForBack, "dynamic_background")
addStyles(selectedForBack, "dynamic_header_color")
addStyles(evenRows, "dynamic_even")
addStyles(oddRows, "dynamic_odd")
addStyles(AllBorders, "dynamic_border_color")


            appenedspelled()
        } catch (error) {}
    <\/script>
</body>

</html>`;export{n as default};
