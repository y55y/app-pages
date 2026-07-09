const n=`// Central mapping from backend resource fields to HTML template params per doc type
// Each docType contains key-value pairs where:
// - value is a string: copy data[value]
// - value is a function: compute param from full data
// Start simple; extend as needed

import {
  resolveCompanyLogoUrl,
  getCompanyInfo,
  spellAmount,
  spellAmountAr,
  spellAmountEn,
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
    invoice_date: (data) => {
      const rawDate = data.data?.order_date || data.data?.InvDate || data.data?.Date || data.order_date || data.InvDate || data.Date;
      if (!rawDate) return '';

      // If backend sends "YYYY-MM-DD HH:mm:ss" or similar, drop the time part
      if (typeof rawDate === 'string') {
        const dateOnly = rawDate.split(' ')[0] || rawDate;
        return formatDate(dateOnly);
      }

      return formatDate(rawDate);
    },
    due_date: (data) => formatDate(data.data?.due_date || data.due_date),
    delivery_date: (data) => formatDate(data.data?.delivery_date || data.delivery_date),
    // Client information
    client_business_name: (data) => getClientOrVendorName(data.data || data),
    client_name: (data) => {
      const d = data.data || data;
      return d.Client_Name || d.ClientName || d.AccNames || d.SandCat_Name || '';
    },
    client_nameE: (data) => {
      const d = data.data || data;
      return d.Client_NameE || d.ClientNameE || d.Client_Name || '';
    },
    client_address: (data) => {
      const d = data.data || data;
      return d.Client_Address || d.ClientAddress || d.client_address || '';
    },
    client_addressE: (data) => {
      const d = data.data || data;
      return d.Client_AddressE || d.ClientAddressE || d.Client_Address || d.ClientAddress || '';
    },
    client_vat: (data) => {
      const d = data.data || data;
      return d.Client_vat || d.ClientVAT || d.client_vat || '';
    },
    client_cr: (data) => {
      const d = data.data || data;
      return d.Client_CRN || d.ClientCRN || d.Client_cr || d.client_cr || d.CR || d.CRN || '';
    },
    client_building_number: (data) => {
      const d = data.data || data;
      return d.Client_BuildingNumber || d.ClientBuildingNumber || d.BuildingNumber || d.client_building_number || '';
    },

    client_street_name: (data) => {
      const d = data.data || data;
      return d.Client_StreetName || d.ClientStreetName || d.StreetName || d.client_street_name || '';
    },

    client_city: (data) => {
      const d = data.data || data;
      return d.Client_City || d.ClientCity || d.City || d.client_city || '';
    },

    client_country: (data) => {
      const d = data.data || data;
      return d.Client_Country || d.ClientCountry || d.Country || d.client_country || '';
    },
    client_postal_code: (data) => {
      const d = data.data || data;
      return (
        d.Client_PostalCode ||
        d.ClientPostalCode ||
        d.PostalCode ||
        d.Zip ||
        d.client_postal_code ||
        d.client_Zip ||
        d.Client_Zip ||
        ''
      );
    },
    client_district: (data) => {
      const d = data.data || data;
      return d.Client_District || d.ClientDistrict || d.District || d.client_district || '';
    },
    // Comments/Notes
    Comment: (data) => {
      const d = data.data || data;
      return d.Comment || d.comment || d.Notes || d.notes || '';
    },
    // Items with serial numbers and units
    items: (data) => {
      const d = data.data || data;
      const rawItems = d.order_entries || d.Items || [];
      if (!Array.isArray(rawItems)) return [];
      
      return rawItems.map((item, index) => {
        const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || item.qty || 0);
        const rate = Number(item.unitPrice || item.Rate || item.Price || 0);
        const discount = Number(item.discount || item.dis || 0);
        const taxRate = Number(item.tax_rate || item.TaxRate || 15);
        
        const taxableAmount = Math.round((qty * rate - discount) * 100) / 100;
        const taxValue = Math.round((taxableAmount * taxRate / 100) * 100) / 100;
        const total = Math.round(taxableAmount * 100) / 100;
        const totalWithTax = Math.round((taxableAmount + taxValue) * 100) / 100;
        
        const code = item.ItemLookupCode || item.ItemID_ItemLookupCode || item.item_code || item.code || item.BarCodeNo || item.barcode || item.Barcode || '';
        return {
          serial: index + 1,
          no: index + 1,
          line_number: index + 1,
          display_code: code,
          code,
          barcode: item.BarCodeNo || item.barcode || item.Barcode || '',
          description: item.name || item.ItemName || item.Name || item.description || '',
          descriptionE: item.nameE || item.ItemNameE || item.NameE || item.descriptionE || '',
          quantity: qty,
          qty: qty,
          unit: item.Entity || item.Unit || item.unit || '1',
          rate: formatAmount(rate),
          price: formatAmount(rate),
          discount: formatAmount(discount),
          taxable_amount: formatAmount(taxableAmount),
          tax_rate: taxRate,
          tax_value: formatAmount(taxValue),
          total: formatAmount(total),
          total_with_tax: formatAmount(totalWithTax),
          note: item.note || ''
        };
      });
    },
    totalsRows: (data) => calculateTotals(data.data || data),
    subtotal: (data) => {
      const d = data.data || data;
      // If SubTotal exists, use it; otherwise calculate from order entries
      if (d.SubTotal || d.Subtotal) {
        return formatAmount(Number(d.SubTotal || d.Subtotal || 0));
      }
      // Calculate from order entries
      const entries = d.order_entries || [];
      const sub = entries.reduce((sum, item) => {
        const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
        const price = Number(item.unitPrice || item.Rate || 0);
        return sum + (qty * price);
      }, 0);
      return formatAmount(sub);
    },
    total_discount: (data) => formatAmount((data.data || data).dis || 0),
    has_discount: (data) => {
      const d = data.data || data;
      const discount = Number(d.dis || d.discount || 0);
      return discount > 0;
    },
    discount_row_class: (data) => {
      const d = data.data || data;
      const discount = Number(d.dis || d.discount || d.total_discount || 0);
      return discount > 0 ? '' : 'hidden';
    },
    has_vat_row_class: (data) => {
      const d = data.data || data;
      const vat = Number(d.vat ?? d.VAT ?? d.Tax ?? 0);
      return vat > 0 ? '' : 'hidden';
    },
    total_without_vat: (data) => {
      const d = data.data || data;
      let sub;
      // If SubTotal exists, use it; otherwise calculate from order entries
      if (d.SubTotal || d.Subtotal) {
        sub = Number(d.SubTotal || d.Subtotal || 0);
      } else {
        // Calculate from order entries
        const entries = d.order_entries || [];
        sub = entries.reduce((sum, item) => {
          const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
          const price = Number(item.unitPrice || item.Rate || 0);
          return sum + (qty * price);
        }, 0);
      }
      const disc = Number(d.dis ?? d.discount ?? 0);
      return formatAmount(sub - disc);
    },
    total_tax: (data) => { const d = data.data || data; return formatAmount(d.vat ?? d.VAT ?? d.Tax ?? 0); },
    total_amount: (data) => formatAmount((data.data || data).Total || 0),
    spelled_amount: (data) => spellAmount((data.data || data).Total || 0),
    spelled_amount_ar: (data) => spellAmountAr((data.data || data).Total || 0),
    spelled_amount_en: (data) => spellAmountEn((data.data || data).Total || 0),
    total_in_words: (data) => spellAmount((data.data || data).Total || 0),
    total_in_words_ar: (data) => spellAmountAr((data.data || data).Total || 0),
    total_in_words_en: (data) => spellAmountEn((data.data || data).Total || 0),
    note: (data) => {
      const d = data.data || data;
      return d.Comment || d.comment || '';
    },
    reference_number: (data) => (data.data || data).ReferenceNumber || '',
    footer: (data) => (data.data || data).Footer || 'شكراً لتعاملكم معنا',
    // VAT rate
    vat_rate: () => '15',
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
    company_activity: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_activity;
    },
    company_activityE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.company_activityE;
    },
    CRN: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.CRN;
    },
    vat_number: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.vat_number;
    },
    company_tax_line_ar: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      const parts = [];
      if (companyInfo.CRN) parts.push(\`س.ت: \${companyInfo.CRN}\`);
      if (companyInfo.vat_number) parts.push(\`الرقم الضريبي: \${companyInfo.vat_number}\`);
      return parts.join(' | ');
    },
    company_tax_line_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      const parts = [];
      if (companyInfo.CRN) parts.push(\`C.R: \${companyInfo.CRN}\`);
      if (companyInfo.vat_number) parts.push(\`VAT: \${companyInfo.vat_number}\`);
      return parts.join(' | ');
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
      return companyInfo.branch_email || companyInfo.company_email;
    },
    branch_email_en: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.branch_email_en;
    },
    // Site/contact fields
    site_city: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_city;
    },
    site_cityE: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_cityE;
    },
    site_postal_code: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_postal_code;
    },
    site_phone: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_phone;
    },
    site_mobile: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_mobile;
    },
    site_fax: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.site_fax;
    },
    po_box: (data, user) => {
      const companyInfo = getCompanyInfo(user);
      return companyInfo.po_box;
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
    client_info: (data) => { const d = data.data || data; return \`\${d.Client_Name || ''}<br/>\${d.Client_Address || ''}<br/>الرقم الضريبي: \${d.Client_vat || ''}\`; },
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
      const companyInfo = getCompanyInfo(user);
      const qrCode = await generateZATCAQRCode(data, companyInfo);
      return qrCode;
    },
    'html_sticky_header': () => '',
    'html_sticky_footer': (data) => generateStickyFooterHTML(data.data || data),
    'discount': () => '',
    'item-discount-total': () => '',
    ...getDefaultSiteInfo()
  },

  // Sell Order Draft
  sell_order_draft: {
    __inherit: 'sell_inv',
    invoice_title: () => 'أمر بيع',
    'html_sticky_footer': (data) => generateStickyFooterHTML(data.data || data),
    quotation_title: () => 'عرض سعر',
    quotation_number: (data) => (data.data || data).Number || '',
    quotation_date: (data) => formatDate((data.data || data).order_date || (data.data || data).Date || (data.data || data).InvDate),
    prepared_for: (data) => (data.data || data).Client_Name || (data.data || data).ClientName || (data.data || data).client_name || '',
    contact_person: (data) => (data.data || data).ContactPerson || (data.data || data).contact_person || '',
    number_of_branches: (data) => (data.data || data).NumberOfBranches || (data.data || data).number_of_branches || '',
    number_of_service_staff: (data) => (data.data || data).NumberOfServiceStaff || (data.data || data).number_of_service_staff || '',
    integration: (data) => (data.data || data).Integration || (data.data || data).integration || '',
    integration_short: (data) => (data.data || data).IntegrationShort || (data.data || data).integration_short || (data.data || data).Integration || (data.data || data).integration || 'الربط',
    system_name: (data) => (data.data || data).SystemName || (data.data || data).system_name || 'النظام',
    supplier_name: (data, user) => getCompanyInfo(user).company_name || '',
    supplier_branch: (data, user) => getCompanyInfo(user).branch_name || getCompanyInfo(user).company_activity || '',
    supplier_mobile: (data, user) => getCompanyInfo(user).site_mobile || getCompanyInfo(user).company_phone || '',
    supplier_cr: (data, user) => getCompanyInfo(user).CRN || '',
    bank_name: (data, user) => (user?.company_settings?.bank_name || user?.bank_name || 'بنك الراجحي'),
    bank_iban: (data, user) => (user?.company_settings?.bank_iban || user?.bank_iban || 'SA0380000618608016464996'),
    validity_days: (data) => (data.data || data).ValidityDays || (data.data || data).validity_days || '30',
    first_year_total: (data) => {
      const d = data.data || data;
      const total = Number(d.Total || 0);
      const vat = Number(d.vat ?? d.VAT ?? d.Tax ?? 0);
      return formatAmount(total - vat);
    },
    next_years_renewal: (data) => formatAmount((data.data || data).NextYearsRenewal || (data.data || data).next_years_renewal || 0),
    items: (data) => {
      const d = data.data || data;
      const rawItems = d.order_entries || d.items || d.Items || [];
      return rawItems.map((item, index) => {
        const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || item.quantity || 0);
        const price = Number(item.unitPrice || item.Rate || item.rate || item.Price || 0);
        const total = Number(item.Total || item.total || qty * price);
        return {
          serial: index + 1,
          description: item.name || item.ItemName || item.Name || item.description || '',
          details: item.details || item.Details || item.note || item.Note || '',
          quantity: qty,
          unit_price: formatAmount(price),
          total_price: formatAmount(total)
        };
      });
    },
    logo: (data, user) => resolveCompanyLogoUrl(user) || '',
    invoice_title: () => 'أمر بيع',
    __inherit: 'sell_inv'
  },

  // Sell Quote Draft - uses same mapper as sell_inv
  sell_quote_draft: 'sell_inv',

  // Sell Return - extends sell_inv with different title
  sell_return: {
    invoice_title: () => 'فاتورة مرتجع',
    // All other fields inherit from sell_inv via string reference fallback
    __inherit: 'sell_inv'
  },

  // Purchase Invoices
  buy_inv: {
    invoice_title: () => 'فاتورة مشتريات',
    invoice_number: (data) => (data.data || data).Number || '',
    reference_number: (data) => (data.data || data).ReferenceNumber || '',
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
  // Buy Return - extends buy_inv with different title
  buy_return: {
    invoice_title: () => 'فاتورة مرتجع مشتريات',
    __inherit: 'buy_inv'
  },

  report_header: {
    report_title: (data) => {
      const explicit = data && (data.report_title || data.title);
      if (explicit) return explicit;
      const transportNumber = data && (data.Number ?? data.TransportID ?? data.transport_id ?? data.TransportId);
      if (transportNumber !== undefined && transportNumber !== null && transportNumber !== '') return \`أمر نقل رقم \${transportNumber}\`;
      return 'تقرير';
    },
    report_title_en: (data) => {
      const explicit = data && (data.report_title_en || data.title_en);
      if (explicit) return explicit;
      const transportNumber = data && (data.Number ?? data.TransportID ?? data.transport_id ?? data.TransportId);
      if (transportNumber !== undefined && transportNumber !== null && transportNumber !== '') return \`Transport Order #\${transportNumber}\`;
      return 'Report';
    },
    report_date: (data) => {
      const raw = data && (data.report_date || data.date || data.FromDate || data.CreatedDate || data.created_at);
      if (raw) {
        const s = String(raw);
        if (s.includes('T')) return s.split('T')[0];
        if (s.includes(' ')) return s.split(' ')[0];
        return s;
      }
      try {
        return new Date().toISOString().slice(0, 10);
      } catch {
        return '';
      }
    },
    printed_at: () => {
      try {
        const d = new Date();
        const pad = (n) => String(n).padStart(2, '0');
        return \`\${d.getFullYear()}-\${pad(d.getMonth() + 1)}-\${pad(d.getDate())} \${pad(d.getHours())}:\${pad(d.getMinutes())}\`;
      } catch {
        return '';
      }
    },
    footer_ar: (data, user) => {
      const c = getCompanyInfo(user);
      const parts = [];
      if (c.company_address) parts.push(c.company_address);
      if (c.site_mobile) parts.push(\`الجوال: \${c.site_mobile}\`);
      else if (c.site_phone) parts.push(\`الهاتف: \${c.site_phone}\`);
      if (c.company_email) parts.push(\`البريد الإلكتروني: \${c.company_email}\`);
      return parts.join(' | ');
    },
    footer_en: (data, user) => {
      const c = getCompanyInfo(user);
      const parts = [];
      if (c.company_addressE) parts.push(c.company_addressE);
      if (c.site_mobile) parts.push(\`Mobile: \${c.site_mobile}\`);
      else if (c.site_phone) parts.push(\`Phone: \${c.site_phone}\`);
      if (c.company_email) parts.push(\`Email: \${c.company_email}\`);
      return parts.join(' | ');
    },
    report_content: (data) => {
      const explicit = data && data.report_content;
      if (explicit) return explicit;

      const transportNumber = data && (data.Number ?? data.TransportID ?? data.transport_id ?? data.TransportId);
      if (transportNumber === undefined || transportNumber === null || transportNumber === '') return '';

      const escapeHtml = (input) => {
        const s = input == null ? '' : String(input);
        return s
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      };

      const pick = (...vals) => {
        for (const v of vals) {
          if (v !== null && v !== undefined && v !== '') return v;
        }
        return '';
      };

      const val = (v, fallback = '-') => {
        if (v === null || v === undefined || v === '') return fallback;
        return String(v);
      };

      const fmtMoney = (v) => {
        if (v === null || v === undefined || v === '') return '-';
        return formatAmount(v);
      };

      const fmtWeight = (v) => {
        if (v === null || v === undefined || v === '') return '-';
        const n = Number(v);
        if (Number.isFinite(n)) return \`\${n}\`;
        return \`\${v}\`;
      };

      const fmtDateVal = (v) => {
        if (v === null || v === undefined || v === '') return '-';
        const s = String(v);
        if (s.includes('T')) return s.split('T')[0];
        if (s.includes(' ')) return s.split(' ')[0];
        return s;
      };

      const num = (v) => {
        const n = Number(v);
        return Number.isFinite(n) ? n : 0;
      };

      const B_weight = num(pick(data.B_weight));
      const S_weight = num(pick(data.S_weight));
      const B_amount = num(pick(data.B_amount));
      const S_amount = num(pick(data.S_amount));
      const E_Driver = num(pick(data.E_Driver));
      const E_Transport = num(pick(data.E_Transport));

      const derivedN_weight = S_weight - B_weight;
      const derivedN_Exp = 0;
      const derivedN_cost = B_amount + E_Driver + E_Transport + derivedN_Exp;
      const derivedN_income = S_amount;
      const derivedN_profit = derivedN_income - derivedN_cost;

      const resolvedNumberOr = (fieldVal, derivedVal) => {
        if (fieldVal === null || fieldVal === undefined || fieldVal === '') return derivedVal;
        const n = Number(fieldVal);
        return Number.isFinite(n) ? n : derivedVal;
      };

      const n_weight = resolvedNumberOr(data.N_weight, derivedN_weight);
      const n_exp = resolvedNumberOr(data.N_Exp, derivedN_Exp);
      const n_cost = resolvedNumberOr(data.N_cost, derivedN_cost);
      const n_income = resolvedNumberOr(data.N_income, derivedN_income);
      const n_profit = resolvedNumberOr(data.N_profit, derivedN_profit);

      const vehiclesExpTotal = num(n_exp);

      const clientName = pick(data.Client_Name, data.ClientName);
      const supplierName = pick(data.BClient_Name, data.Supplier_Name, data.SupplierName);
      const carrierName = pick(data.Carrier_Name, data.CarrierName);
      const fromLoc = pick(data.FromLoc_Name, data.FromLocations_Name);
      const toLoc = pick(data.ToLoc_Name, data.ToLocations_Name);
      const fromDate = pick(data.FromDate);
      const toDate = pick(data.ToDate);
      const driverName = pick(data.Driver_Name, data.DriverName);
      const vehicleName = pick(data.Vehicles_Name, data.VehicleName);
      const vehicleNumber = pick(
        data.Vehicles_Number,
        data.VehiclesNumber,
        data.VehicleNumber,
        data.Vehicles,
      );
      const Vehicles_PlateA = pick(data.Vehicles_PlateA);
      const vehicle = [
        vehicleNumber,
        Vehicles_PlateA,
        vehicleName
      ].filter(Boolean).join(' - ');

      const bInvoice = pick(data.B_number_Number, data.B_number);
      const bCard = pick(data.B_card);
      const bVat = pick(data.B_Vat);
      const bTotal = pick(data.B_total);

      const sItem = pick(data.item_name, data.S_item);
      const sQty = pick(data.S_qty);
      const sUnit = pick(data.SUnitEntity_Entity_Name, data.S_unit);
      const sPrice = pick(data.S_Price);
      const sVat = pick(data.S_Vat);
      const sTotal = pick(data.S_total);
      const sCard = pick(data.S_card);

      const note = pick(data.TransportNote, data.Note, data.note, data.Notes);

      const compactRow = (label, value) => {
        return \`<tr><td style="padding:4px 6px; background: var(--bg-card, #fdb70012); border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;"><strong>\${escapeHtml(label)}</strong></td><td style="padding:4px 6px; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">\${escapeHtml(value)}</td></tr>\`;
      };

      const compactSection = (title, inner) => {
        return \`<div style="border: 1px solid var(--border-light, #cfd4e8); border-radius: 8px; overflow: hidden; margin-bottom: 8px; page-break-inside: avoid;"><div style="padding: 6px 8px; background: var(--bg-light, #fdb7000d); border-bottom: 1px solid var(--border-light, #cfd4e8); font-weight: 700; color: var(--primary-dark, #23315f); font-size: 11px;">\${escapeHtml(title)}</div><div style="padding: 6px 8px;">\${inner}</div></div>\`;
      };

      const tableCellStyle = 'padding: 6px 8px; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px; vertical-align: top;';
      const tableHeaderCellStyle = \`\${tableCellStyle} background: var(--bg-light, #fdb7000d); font-weight: 700; color: var(--primary-dark, #23315f);\`;
      const valOrDash = (v) => (v === null || v === undefined || v === '' ? '-' : String(v));

      // الرئيسية (old layout) - keep as it was
      const basicInfoContent = \`
        <!-- Row 1: Supplier (50%) + Client (50%) -->
        <div style="display: flex; gap: 4px; margin-bottom: 6px;">
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>المورد</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(val(supplierName))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>العميل</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(val(clientName))}</span>
          </div>
        </div>
        <!-- Row 2: Route, Load Date, Delivery Date (33.3% each) -->
        <div style="display: flex; gap: 4px; margin-bottom: 6px;">
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>المسار</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(\`\${val(fromLoc, '?')} ← \${val(toLoc, '?')}\`)}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>تاريخ التحميل</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtDateVal(fromDate))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>تاريخ التسليم</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtDateVal(toDate))}</span>
          </div>
        </div>
        <!-- Row 3: Carrier, Driver, Vehicle (33.3% each) -->
        <div style="display: flex; gap: 4px;">
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>الناقل</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(val(carrierName))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>السائق</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(val(driverName))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>لوحة المركبة</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(val(vehicle))}</span>
          </div>
        </div>
      \`;

      // الحمولة - inline label-value format (like الرئيسية)
      const loadContent = \`
        <div style="display: flex; gap: 4px;">
          <div style="display: flex; flex: 2; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>الصنف</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(valOrDash(sItem))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>الكمية</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(valOrDash(sQty))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>الوحدة</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(valOrDash(sUnit))}</span>
          </div>
        </div>
      \`;

      const diffNumberCell = (a, b, formatter) => {
        const na = Number(a);
        const nb = Number(b);
        if (!Number.isFinite(na) || !Number.isFinite(nb)) return '-';
        return formatter(na - nb);
      };

      const detailsRows = [
        {
          label: 'رقم الفاتورة',
          buy: valOrDash(bInvoice),
          sell: valOrDash(pick(data.S_number_Number, data.S_number)),
          diff: ''
        },
        {
          label: 'كرت الميزان',
          buy: valOrDash(bCard),
          sell: valOrDash(sCard),
          diff: ''
        },
        {
          label: 'الوزن',
          buy: fmtWeight(pick(data.B_weight)),
          sell: fmtWeight(pick(data.S_weight)),
          diff: fmtWeight(n_weight)
        },
        {
          label: 'السعر',
          buy: '-',
          sell: sPrice !== '' ? fmtMoney(sPrice) : '-',
          diff: '-'
        },
        {
          label: 'الاجمالي',
          buy: fmtMoney(pick(data.B_amount)),
          sell: fmtMoney(pick(data.S_amount)),
          diff: diffNumberCell(pick(data.S_amount), pick(data.B_amount), fmtMoney)
        },
        {
          label: 'الضريبة',
          buy: fmtMoney(bVat),
          sell: fmtMoney(sVat),
          diff: diffNumberCell(sVat, bVat, fmtMoney)
        }
      ];

      // التفاصيل - table format
      const detailsTable = \`
        <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
          <thead>
            <tr>
              <th style="\${tableHeaderCellStyle} width: 25%;">البيان</th>
              <th style="\${tableHeaderCellStyle} width: 25%;">المشتريات</th>
              <th style="\${tableHeaderCellStyle} width: 25%;">المبيعات</th>
              <th style="\${tableHeaderCellStyle} width: 25%;">الفارق</th>
            </tr>
          </thead>
          <tbody>
            \${detailsRows.map(r => \`
              <tr>
                <td style="\${tableCellStyle} background: var(--bg-card, #fdb70012); font-weight: 700;">\${escapeHtml(r.label)}</td>
                <td style="\${tableCellStyle}">\${escapeHtml(valOrDash(r.buy))}</td>
                <td style="\${tableCellStyle}">\${escapeHtml(valOrDash(r.sell))}</td>
                <td style="\${tableCellStyle}">\${escapeHtml(valOrDash(r.diff))}</td>
              </tr>
            \`).join('')}
          </tbody>
        </table>
      \`;

      // المصروفات - inline label-value format (like الرئيسية)
      const expensesContent = \`
        <div style="display: flex; gap: 4px;">
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>أجرة السائق</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(pick(data.E_Driver)))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>إيجار النقل</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(pick(data.E_Transport)))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>مصروفات المركبة</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(vehiclesExpTotal))}</span>
          </div>
        </div>
      \`;

      // الملخص - inline label-value format (like الرئيسية)
      const summaryContent = \`
        <div style="display: flex; gap: 4px;">
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>مصروفات المركبة</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(vehiclesExpTotal))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>اجمالي التكلفة</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(n_cost))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>مجمل الدخل</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(n_income))}</span>
          </div>
          <div style="display: flex; flex: 1; border: 1px solid var(--border-light, #cfd4e8); font-size: 10px;">
            <span style="padding: 4px 6px; background: var(--bg-card, #fdb70012); border-left: 1px solid var(--border-light, #cfd4e8);"><strong>صافي الربح</strong></span>
            <span style="padding: 4px 6px; flex: 1;">\${escapeHtml(fmtMoney(n_profit))}</span>
          </div>
        </div>
      \`;

      const noteHtml = note
        ? \`<div style="border: 1px solid var(--border-light, #cfd4e8); border-radius: 8px; padding: 8px; page-break-inside: avoid; margin-top: 8px;"><div style="font-weight: 700; color: var(--primary-dark, #23315f); margin-bottom: 4px; font-size: 11px;">ملاحظات</div><div style="white-space: pre-wrap; font-size: 10px;">\${String(note).replace(/\\n/g, '<br/>')}</div></div>\`
        : '';

      return \`
        <div style="display: flex; flex-direction: column; gap: 8px;">
          \${compactSection('الرئيسية', basicInfoContent)}
          \${compactSection('الحمولة', loadContent)}
          \${compactSection('التفاصيل', detailsTable)}
          \${compactSection('المصروفات', expensesContent)}
          \${compactSection('الملخص', summaryContent)}
        </div>
        \${noteHtml}
      \`;
    }
  },

  "القيود اليومية": "daily_entry",
  daily_entry: {
    _record: (data) => data?.data || data || {},
    _text: (value) => String(value || '').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim(),
    journal_id: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return d.Number || d.qidID || d.ID || d.id || '';
    },
    journal_date: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return formatDate(d.qidDate || d.Date || d.CreatedDate);
    },
    journal_reference: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return d.qidRef || d.Ref || d.Reference || '';
    },
    journal_description: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return PRINTABLE_PARAM_MAPPERS.daily_entry._text(d.qidnote || d.description || d.Description || d.Note);
    },
    journal_currency_code: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return d.CurrencyCode || d.currency_code || d.currency || '';
    },
    journal_currency_rate: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return d.CurrencyRate || d.currency_rate || d.rate || '';
    },
    journal_creation_date: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return formatDate(d.CreatedDate || d.created_at);
    },
    current_time: () => new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
    items: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      const parseRows = (value) => {
        if (Array.isArray(value)) return value;
        if (typeof value === 'string' && value.trim()) {
          try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [];
          } catch {
            return [];
          }
        }
        return [];
      };
      const rows = parseRows(d.JournalTransaction)
        .concat(parseRows(d.journal_transactions_table))
        .concat(parseRows(d.entries))
        .concat(parseRows(d.rows))
        .concat(parseRows(d.qidE))
        .concat(parseRows(d.qid));
      const sourceRows = rows.length ? rows : (d.qidEAmountD !== undefined || d.qidEAmountC !== undefined ? [d] : []);
      return sourceRows.map((row) => {
        const account = row.JournalAccount || row.account || {};
        const debit = Number(row.currency_debit ?? row.debit ?? row.qidEAmountD ?? 0);
        const credit = Number(row.currency_credit ?? row.credit ?? row.qidEAmountC ?? 0);
        return {
          account_code: account.code || row.account_code || row.AccCode || row.qidEAcc || '',
          account_name: account.name || row.account_name || row.AccName || row.AccNames || row.Name || '',
          description: PRINTABLE_PARAM_MAPPERS.daily_entry._text(row.description || row.qidEnote || row.note),
          debit: debit ? formatAmount(debit) : '',
          credit: credit ? formatAmount(credit) : ''
        };
      });
    },
    journal_total_debit: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      const rows = PRINTABLE_PARAM_MAPPERS.daily_entry.items(d);
      const total = d.TotalDebit ?? d.total_debit ?? d.journal_total_debit ?? rows.reduce((sum, row) => sum + Number(String(row.debit || 0).replace(/,/g, '')), 0);
      return formatAmount(total);
    },
    journal_total_credit: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      const rows = PRINTABLE_PARAM_MAPPERS.daily_entry.items(d);
      const total = d.TotalCredit ?? d.total_credit ?? d.journal_total_credit ?? rows.reduce((sum, row) => sum + Number(String(row.credit || 0).replace(/,/g, '')), 0);
      return formatAmount(total);
    },
    journal_total_debit_without_symbol: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return formatAmount(d.TotalDebit ?? d.total_debit ?? 0);
    },
    journal_total_credit_without_symbol: (data) => {
      const d = PRINTABLE_PARAM_MAPPERS.daily_entry._record(data);
      return formatAmount(d.TotalCredit ?? d.total_credit ?? 0);
    },
    cost_center_table: () => ''
  },

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

  // Handle __inherit property - merge with parent mapper
  if (map.__inherit) {
    const parentMap = PRINTABLE_PARAM_MAPPERS[map.__inherit] || {};
    // Create a merged map excluding __inherit
    const { __inherit, ...childMap } = map;
    map = { ...parentMap, ...childMap };
  }

  const out = {};

  const logoUrl = resolveCompanyLogoUrl(user);
  const companyInfo = getCompanyInfo(user);

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

  return out;
}


`;export{n as default};
