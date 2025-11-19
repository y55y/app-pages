const n=`// Central mapping from backend resource fields to HTML template params per doc type
// Each docType contains key-value pairs where:
// - value is a string: copy data[value]
// - value is a function: compute param from full data
// Start simple; extend as needed

import {
  resolveCompanyLogoUrl,
  getCompanyInfo,
  spellAmount,
  formatAmount,
  formatDate,
  getClientOrVendorName,
  getTreasuryName,
  buildNoteText,
  calculateTotals,
  formatInvoiceItems,
  getDefaultSiteInfo,
  generateZATCAQRCode,
  generateStickyFooterHTML
} from './mappersUtils.js';

export const PRINTABLE_PARAM_MAPPERS = {
  // Payments
  client_payment_normal: {
    payment_number: 'Number',
    payment_date: (data) => formatDate(data.PayDate),
    client_name: 'ClientName',
    amount: (data) => formatAmount(data.Amount || data.Total || 0),
    notes: 'Notes',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => data.ClientName || '',
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100'
  },
  client_payment_thermal: {
    payment_number: 'Number',
    payment_date: (data) => formatDate(data.PayDate),
    client_name: 'ClientName',
    amount: (data) => formatAmount(data.Amount || data.Total || 0),
    notes: 'Notes',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => data.ClientName || '',
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100'
  },
  supplier_payment_normal: {
    payment_number: 'Number',
    payment_date: (data) => formatDate(data.PayDate),
    client_name: 'SupplierName',
    amount: (data) => formatAmount(data.Amount || data.Total || 0),
    notes: 'Notes',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => data.SupplierName || '',
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100'
  },
  supplier_payment_thermal: {
    payment_number: 'Number',
    payment_date: (data) => formatDate(data.PayDate),
    client_name: 'SupplierName',
    amount: (data) => formatAmount(data.Amount || data.Total || 0),
    notes: 'Notes',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => data.SupplierName || '',
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100'
  },

  // Sales Invoices
  sell_inv: {
    invoice_title: () => 'فاتورة ضريبية',
    invoice_number: (data) => data.data?.Number || data.Number || '',
    order_id: (data) => data.data?.OrderID || data.OrderID || '',
    invoice_date: (data) => formatDate(data.data?.order_date || data.data?.InvDate || data.data?.Date || data.order_date || data.InvDate || data.Date),
    due_date: (data) => formatDate(data.data?.due_date || data.due_date),
    delivery_date: (data) => formatDate(data.data?.delivery_date || data.delivery_date),
    client_business_name: (data) => getClientOrVendorName(data.data || data),
    client_name: (data) => getClientOrVendorName(data.data || data),
    client_address: (data) => (data.data || data).ClientAddress || '',
    items: (data) => formatInvoiceItems((data.data || data).order_entries || (data.data || data).Items),
    totalsRows: (data) => calculateTotals(data.data || data),
    subtotal: (data) => {
      const orderData = data.data || data;
      return orderData.Total - (orderData.vat || 0) || 0;
    },
    total_discount: (data) => (data.data || data).dis || 0,
    total_tax: (data) => (data.data || data).vat || 0,
    total_amount: (data) => (data.data || data).Total || 0,
    spelled_amount: (data) => spellAmount((data.data || data).Total || 0),
    note: (data) => (data.data || data).note || '',
    reference_number: (data) => (data.data || data).ReferenceNumber || '',
    footer: (data) => (data.data || data).Footer || 'شكراً لتعاملكم معنا',
    // Company and branch information fields
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    branch_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_name;
    },
    branch_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    branch_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_address;
    },
    branch_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_addressE;
    },
    branch_email: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    // Legacy fields for backward compatibility
    site_business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_business_name;
    },
    site_address1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address1;
    },
    site_address1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    site_bn1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1;
    },
    site_bn1_label: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1_label;
    },
    site_bn2: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn2;
    },
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => \`\${data.Client_Name || ''}<br/>\${data.Client_Address || ''}<br/>الرقم الضريبي: \${data.Client_vat || ''}\`,
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '120',
    'logo-height': () => '120',
    'label_description': () => 'الوصف<br/><span style="font-size: 10px; color: #666;">Description</span>',
    'label_quantity': () => 'الكمية<br/><span style="font-size: 10px; color: #666;">Quantity</span>',
    'label_unit_price': () => 'سعر الوحدة<br/><span style="font-size: 10px; color: #666;">Unit Price</span>',
    'label_discount': () => 'الخصم<br/><span style="font-size: 10px; color: #666;">Discount</span>',
    'label_taxable_amount': () => 'المبلغ الخاضع للضريبة<br/><span style="font-size: 10px; color: #666;">Taxable Amount</span>',
    'label_tax_rate': () => 'نسبة الضريبة<br/><span style="font-size: 10px; color: #666;">Tax Rate</span>',
    'label_tax_value': () => 'قيمة الضريبة<br/><span style="font-size: 10px; color: #666;">Tax Value</span>',
    'label_subtotal': () => 'الإجمالي<br/><span style="font-size: 10px; color: #666;">Subtotal</span>',
    'label_invoice_no': () => 'رقم الفاتورة:',
    'label_date': () => 'التاريخ:',
    'field1': () => 'العميل:',
    'custom_fields': () => '',
    'sa_qr_code_image': async (data, user) => {
      console.log('sell_inv QR code generation - data:', data);
      console.log('sell_inv QR code generation - user:', user);
      const companyInfo = getCompanyInfo(user);
      console.log('sell_inv QR code generation - companyInfo:', companyInfo);
      const qrCode = await generateZATCAQRCode(data, companyInfo);
      console.log('sell_inv QR code generation - Generated QR Code:', qrCode);
      return qrCode;
    },
    'html_sticky_header': () => '',
    'html_sticky_footer': (data) => generateStickyFooterHTML(data.data || data),
    'discount': () => '',
    'item-discount-total': () => '',
    ...getDefaultSiteInfo()
  },

  // Sell Order Draft - uses same mapper as sell_inv
  sell_order_draft: 'sell_inv',

  // Sell Quote Draft - uses same mapper as sell_inv
  sell_quote_draft: 'sell_inv',

  // Purchase Invoices
  buy_inv: {
    invoice_title: () => 'فاتورة مشتريات',
    invoice_number: (data) => (data.data || data).Number || '',
    supplier_invoice_number: (data) => {
      const d = data.data || data;
      return d.Supplier_InvNo || d.SupplierInvoiceNumber || d.supplier_invoice_number || '';
    },
    invoice_date: (data) => formatDate((data.data || data).InvDate || (data.data || data).Date || data.InvDate || data.Date),
    created_time: (data) => {
      const d = data.data || data;
      return d.InvTime || d.created_time || '';
    },
    client_name: (data) => {
      const d = data.data || data;
      // Purchase invoices: supplier name is stored on client fields like Client_Name
      // so prefer those, then fall back to generic helper
      return (
        d.Client_Name ||
        d.ClientName ||
        d.AccNames ||
        d.SandCat_Name ||
        d.SupplierName ||
        getClientOrVendorName(d)
      );
    },
    client_nameE: (data) => {
      const d = data.data || data;
      // English supplier name: try Client_NameE first, then SupplierNameE, then Arabic
      return (
        d.Client_NameE ||
        d.ClientNameE ||
        d.SupplierNameE ||
        d.Client_Name ||
        d.ClientName ||
        getClientOrVendorName(d)
      );
    },
    client_address: (data) => {
      const d = data.data || data;
      return d.client_address || d.ClientAddress || d.SupplierAddress || '';
    },
    client_addressE: (data) => {
      const d = data.data || data;
      return d.client_addressE || d.ClientAddressE || d.client_address || d.ClientAddress || '';
    },
    client_vat: (data) => {
      const d = data.data || data;
      return d.client_vat || d.Client_vat || d.Supplier_vat || d.SupplierVAT || '';
    },
    client_crn: (data) => {
      const d = data.data || data;
      return d.client_crn || d.Client_CRN || d.Supplier_crn || d.SupplierCRN || '';
    },
    // Map invoice items to the structure expected by buy_tax_invoice_ar_en.txt
    items: (data) => {
      const d = data.data || data;
      const rawItems = d.order_entries || d.Items || [];
      if (!Array.isArray(rawItems)) return [];

      // Reuse generic formatter to ensure quantities, prices, discounts and taxes
      const formatted = formatInvoiceItems(rawItems);
      return formatted.map((item, index) => {
        const src = rawItems[index] || {};
        return {
          description: src.description || src.Description || src.name || src.ItemName || src.Name || item.description || '',
          descriptionE: src.descriptionE || src.DescriptionE || src.nameE || src.ItemNameE || src.NameE || '',
          quantity: item.quantity,
          // Money fields formatted to 2 decimals
          rate: formatAmount(item.rate),
          discount: formatAmount(item.discount),
          tax_rate: item.tax_rate,
          tax_value: formatAmount(item.tax_value),
          // Template expects "amount" (total incl. tax)
          amount: formatAmount(item.total)
        };
      });
    },
    subtotal: (data) => {
      const d = data.data || data;
      let value = 0;
      if (d.SubTotal || d.Subtotal) {
        value = d.SubTotal || d.Subtotal || 0;
      } else {
        const items = d.order_entries || d.Items || [];
        if (Array.isArray(items)) {
          value = items.reduce((sum, item) => {
            const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
            const rate = Number(item.unitPrice || item.Rate || 0);
            return sum + qty * rate;
          }, 0);
        }
      }
      return formatAmount(value);
    },
    total_discount: (data) => {
      const d = data.data || data;
      let value = 0;
      if (d.dis || d.discount) {
        value = d.dis || d.discount || 0;
      } else {
        const items = d.order_entries || d.Items || [];
        if (Array.isArray(items)) {
          value = items.reduce((sum, item) => sum + Number(item.discount || item.dis || 0), 0);
        }
      }
      return formatAmount(value);
    },
    total_tax: (data) => {
      const d = data.data || data;
      let value = 0;
      if (d.vat || d.VAT || d.Tax) {
        value = d.vat || d.VAT || d.Tax || 0;
      } else {
        const items = d.order_entries || d.Items || [];
        if (Array.isArray(items)) {
          value = items.reduce((sum, item) => {
            const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
            const rate = Number(item.unitPrice || item.Rate || 0);
            const discount = Number(item.discount || item.dis || 0);
            const taxRate = Number(item.tax_rate || item.TaxRate || 15);
            const taxableAmount = Math.round((qty * rate - discount) * 100) / 100;
            const taxValue = Math.round((taxableAmount * taxRate / 100) * 100) / 100;
            return sum + taxValue;
          }, 0);
        }
      }
      return formatAmount(value);
    },
    total_amount: (data) => {
      const d = data.data || data;
      let value = 0;
      if (d.Total) {
        value = d.Total || 0;
      } else {
        const sub = Number(PRINTABLE_PARAM_MAPPERS.buy_inv.subtotal({ data: d }));
        const disc = Number(PRINTABLE_PARAM_MAPPERS.buy_inv.total_discount({ data: d }));
        const vat = Number(PRINTABLE_PARAM_MAPPERS.buy_inv.total_tax({ data: d }));
        value = sub - disc + vat;
      }
      return formatAmount(value);
    },
    footer: (data, user) => {
      const d = data.data || data;
      if (d.footer) return d.footer;
      const companyInfo = getCompanyInfo(user);
      return companyInfo.footer || 'شكراً لتعاملكم معنا - Thank you for your business';
    },
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    company_vat: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.vat_number;
    },
    company_crn: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.CRN;
    },
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjYwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BVFRDPC90ZXh0Pjwvc3ZnPg==',
    'logo-width': () => '120',
    'logo-height': () => '120',
    Comment: (data) => {
      const d = data.data || data;
      return d.Comment || d.comment || d.Notes || d.notes || '';
    },
    ...getDefaultSiteInfo()
  },

  // Purchase drafts and returns reuse the main purchase invoice mapper
  // Existing names
  buy_draft_normal: 'buy_inv',
  buy_return_draft: 'buy_inv',
  // DocTypes actually used by purchaseInvoices printConfig
  buy_order_draft: 'buy_inv',
  buy_inv_return: 'buy_inv',

  // Receipts
  income_receipt: {
    // Main income receipt parameters
    expense_id: (data) => data.Number || data.id || '',
    amount: (data) => formatAmount(data.amount || 0),
    date: (data) => formatDate(data.date || data.CreatedDate),
    client_business_name: (data) => getClientOrVendorName(data),
    vendor: () => '',
    client_bussiness_name_or_journal_name: (data) => getClientOrVendorName(data),
    spelled_amount: (data) => spellAmount(data.amount || 0),
    treasury: (data) => getTreasuryName(data),
    note: (data) => buildNoteText(data),
    // Company and branch information fields
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    branch_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_name;
    },
    branch_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    branch_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_address;
    },
    branch_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_addressE;
    },
    branch_email: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    vat_number: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.vat_number;
    },
    CRN: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.CRN;
    },
    // Legacy fields for backward compatibility
    site_business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_business_name;
    },
    business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.business_name;
    },
    site_address1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address1;
    },
    site_address1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    site_address2: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_address2_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_city: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_city;
    },
    site_state: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_state;
    },
    site_postal_code: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_postal_code;
    },
    site_bn1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1;
    },
    site_bn1_label: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1_label;
    },
    site_bn1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    site_bn1_label_en: () => 'Branch',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => getClientOrVendorName(data),
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100',
    ...getDefaultSiteInfo()
  },
  exepnse_receipt: {
    // Main expense receipt parameters
    expense_id: (data) => data.Number || data.id || '',
    amount: (data) => formatAmount(data.amount || 0),
    date: (data) => formatDate(data.date || data.CreatedDate),
    client_business_name: (data) => getClientOrVendorName(data),
    vendor: () => '',
    client_bussiness_name_or_journal_name: (data) => getClientOrVendorName(data),
    spelled_amount: (data) => spellAmount(data.amount || 0),
    treasury: (data) => getTreasuryName(data),
    note: (data) => buildNoteText(data),
    // Company and branch information fields
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    branch_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_name;
    },
    branch_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    branch_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_address;
    },
    branch_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_addressE;
    },
    branch_email: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    vat_number: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.vat_number;
    },
    CRN: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.CRN;
    },
    // Legacy fields for backward compatibility
    site_business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_business_name;
    },
    business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.business_name;
    },
    site_address1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address1;
    },
    site_address1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    site_address2: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_address2_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_city: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_city;
    },
    site_state: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_state;
    },
    site_postal_code: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_postal_code;
    },
    site_bn1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1;
    },
    site_bn1_label: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1_label;
    },
    site_bn1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    site_bn1_label_en: () => 'Branch',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => getClientOrVendorName(data),
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100',
    ...getDefaultSiteInfo()
  },

  // Bank Payment (دفعة بنكية)
  bank_payment: {
    expense_id: (data) => data.Number || data.id || '',
    amount: (data) => formatAmount(data.amount || 0),
    date: (data) => formatDate(data.date || data.CreatedDate),
    client_business_name: (data) => getClientOrVendorName(data),
    vendor: () => '',
    client_bussiness_name_or_journal_name: (data) => getClientOrVendorName(data),
    spelled_amount: (data) => spellAmount(data.amount || 0),
    treasury: (data) => getTreasuryName(data),
    note: (data) => buildNoteText(data),
    // Company and branch information fields
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    branch_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_name;
    },
    branch_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    branch_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_address;
    },
    branch_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_addressE;
    },
    branch_email: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    // Legacy fields for backward compatibility
    site_business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_business_name;
    },
    business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.business_name;
    },
    site_address1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address1;
    },
    site_address1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    site_address2: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_address2_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_city: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_city;
    },
    site_state: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_state;
    },
    site_postal_code: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_postal_code;
    },
    site_bn1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1;
    },
    site_bn1_label: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1_label;
    },
    site_bn1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    site_bn1_label_en: () => 'Branch',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => getClientOrVendorName(data),
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100',
    ...getDefaultSiteInfo()
  },

  // Bank Deposit (ايداع بنكي)
  bank_deposit: {
    expense_id: (data) => data.Number || data.id || '',
    amount: (data) => formatAmount(data.amount || 0),
    date: (data) => formatDate(data.date || data.CreatedDate),
    client_business_name: (data) => getClientOrVendorName(data),
    vendor: () => '',
    client_bussiness_name_or_journal_name: (data) => getClientOrVendorName(data),
    spelled_amount: (data) => spellAmount(data.amount || 0),
    treasury: (data) => getTreasuryName(data),
    note: (data) => buildNoteText(data),
    // Company and branch information fields
    company_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_name;
    },
    company_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_nameE;
    },
    company_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_address;
    },
    company_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    branch_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_name;
    },
    branch_nameE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    branch_address: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_address;
    },
    branch_addressE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_addressE;
    },
    branch_email: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    // Legacy fields for backward compatibility
    site_business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_business_name;
    },
    business_name: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.business_name;
    },
    site_address1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address1;
    },
    site_address1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_addressE;
    },
    site_address2: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_address2_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_address2;
    },
    site_city: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_city;
    },
    site_state: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_state;
    },
    site_postal_code: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_postal_code;
    },
    site_bn1: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1;
    },
    site_bn1_label: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_bn1_label;
    },
    site_bn1_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_nameE;
    },
    site_bn1_label_en: () => 'Branch',
    // Add missing template parameters
    business_info: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return \`\${companyInfo.business_name}<br/>\${companyInfo.site_address1}<br/>\${companyInfo.site_city}\`;
    },
    client_info: (data) => getClientOrVendorName(data),
    logo: (data, user) => resolveCompanyLogoUrl(user) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=',
    'logo-width': () => '100',
    'logo-height': () => '100',
    ...getDefaultSiteInfo()
  }
};

export async function mapDataToTemplateParams(docType, data, user = null) {
  let map = PRINTABLE_PARAM_MAPPERS[String(docType)] || {};

  // Handle string references to other mappers
  if (typeof map === 'string') {
    map = PRINTABLE_PARAM_MAPPERS[map] || {};
  }

  const out = {};

  console.log('mapDataToTemplateParams - docType:', docType);
  console.log('mapDataToTemplateParams - data:', data);

  // Add logo and company information
  console.log('mapDataToTemplateParams - user:', user);
  console.log('mapDataToTemplateParams - user.company_settings:', user?.company_settings);
  const logoUrl = resolveCompanyLogoUrl(user);
  const companyInfo = getCompanyInfo(user);
  console.log('mapDataToTemplateParams - logoUrl:', logoUrl);
  console.log('mapDataToTemplateParams - companyInfo:', companyInfo);

  // Pass all company data to all printable templates
  Object.assign(out, companyInfo);

  for (const [paramKey, rule] of Object.entries(map)) {
    try {
      if (typeof rule === 'function') {
        // Pass both data and user context to the mapping function
        if (rule.length > 1) {
          out[paramKey] = await rule(data, user);
        } else {
          out[paramKey] = rule(data);
        }
      } else if (typeof rule === 'string') {
        out[paramKey] = data?.[rule];
      }

      // Override with company information if it's a site field or new company/branch field
      if (paramKey.startsWith('site_') || paramKey.startsWith('company_') || paramKey.startsWith('branch_') || paramKey === 'business_name' || paramKey === 'footer') {
        if (companyInfo[paramKey] !== undefined) {
          out[paramKey] = companyInfo[paramKey];
        }
      }

      // Add logo URL
      if (paramKey === 'logo_url') {
        out.logo = logoUrl; // Map logo_url to logo for template compatibility
        out.logo_url = logoUrl; // Keep both for backward compatibility
      }

      console.log(\`mapDataToTemplateParams - Processed param \${paramKey}:\`, out[paramKey]);
    } catch (e) {
      console.error(\`mapDataToTemplateParams - Error processing param \${paramKey}:\`, e);
      // ignore mapping error for this key
    }
  }

  // Ensure logo URL is always available
  if (!out.logo_url) {
    out.logo_url = logoUrl;
  }
  if (!out.logo) {
    out.logo = logoUrl;
  }

  console.log('mapDataToTemplateParams - Final output for sa_qr_code_image:', out['sa_qr_code_image']);
  console.log('mapDataToTemplateParams - Final output keys:', Object.keys(out));

  return out;
}


`;export{n as default};
