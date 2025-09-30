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
  getDefaultSiteInfo
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
    supplier_name: 'SupplierName',
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
    supplier_name: 'SupplierName',
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

  // Sales
  sell_inv: {
    invoice_title: () => 'فاتورة ضريبية',
    invoice_no: 'Code',
    invoice_date: (d) => formatDate(d.InvDate || d.Date),
    client_business_name: 'ClientName',
    items: (d) => formatInvoiceItems(d.Items),
    totalsRows: (d) => calculateTotals(d),
    footer: (d) => d.Footer || 'شكراً لتعاملكم معنا',
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

export function mapDataToTemplateParams(docType, data, user = null) {
  const map = PRINTABLE_PARAM_MAPPERS[String(docType)] || {};
  const out = {};

  // Add logo and company information
  console.log('mapDataToTemplateParams - user:', user);
  console.log('mapDataToTemplateParams - user.company_settings:', user?.company_settings);
  const logoUrl = resolveCompanyLogoUrl(user);
  const companyInfo = getCompanyInfo(user);
  console.log('mapDataToTemplateParams - logoUrl:', logoUrl);
  console.log('mapDataToTemplateParams - companyInfo:', companyInfo);

  Object.entries(map).forEach(([paramKey, rule]) => {
    try {
      if (typeof rule === 'function') {
        // Pass both data and user context to the mapping function
        if (rule.length > 1) {
          out[paramKey] = rule(data, user);
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
      // ignore mapping error for this key
    }
  });

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
