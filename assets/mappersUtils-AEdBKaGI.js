const n=`// Utility functions for parameter mappers
// Extracted from paramMappers.js to reduce duplication and improve maintainability

/**
 * Resolves company logo URL from user data
 * @param {Object} userData - User data object
 * @returns {string|null} Logo URL or null if not found
 */
export function resolveCompanyLogoUrl(userData) {
  if (!userData) return null;

  // Possible locations/shapes:
  // 1) user.company_settings.company_logo_url -> array [{ url }]
  // 2) user.company_settings.company_logo_url -> object { url }
  // 3) user.company_logo_url -> object { url }
  // 4) user.company_logo_url -> string (direct URL)

  const cs = userData.company_settings;
  const bySettings = cs && cs.company_logo_url;
  const byTop = userData.company_logo_url;

  const pickUrl = (val) => {
    if (!val) return null;
    if (typeof val === 'string') return val;
    if (Array.isArray(val) && val.length > 0) return val[0]?.url || null;
    if (typeof val === 'object') return val.url || null;
    return null;
  };

  return pickUrl(bySettings) || pickUrl(byTop) || null;
}

/**
 * Gets company information from user data
 * @param {Object} userData - User data object
 * @returns {Object} Company information object
 */
export function getCompanyInfo(userData) {
  if (!userData) return {};

  const cs = userData.company_settings || {};

  return {
    company_name: cs.company_name || userData.company_name || 'شركة التجربة المحدودة',
    company_nameE: cs.company_nameE || userData.company_name || 'Test Company Ltd.',
    company_address: cs.company_address || 'الرياض، المملكة العربية السعودية',
    company_addressE: cs.company_addressE || 'Riyadh, Saudi Arabia',
    branch_name: cs.branch_name || 'الفرع الرئيسي',
    branch_nameE: cs.branch_nameE || 'Main Branch',
    branch_address: cs.branch_address || 'الرياض، المملكة العربية السعودية',
    branch_addressE: cs.branch_addressE || 'Riyadh, Saudi Arabia',
    branch_email: cs.branch_email || 'info@mainbranch.com',
    branch_email_en: cs.branch_email_en || 'info@mainbranch.com',
    site_business_name: cs.company_name || userData.company_name || 'شركة التجربة المحدودة',
    business_name: cs.company_name || userData.company_name || 'شركة التجربة المحدودة',
    site_address1: cs.company_address || 'الرياض، المملكة العربية السعودية',
    site_address2: cs.address2 || 'شارع الملك فهد',
    site_city: cs.city || 'الرياض',
    site_state: cs.state || 'منطقة الرياض',
    site_postal_code: cs.postal_code || '12345',
    site_bn1: cs.branch_name || 'الفرع الرئيسي',
    site_bn1_label: 'الفرع'
  };
}

/**
 * Formats a number to Arabic words (simplified version)
 * @param {number} amount - The amount to convert to words
 * @returns {string} Arabic text representation of the amount
 */
export function spellAmount(amount) {
  const numberWords = {
    0: 'صفر', 1: 'واحد', 2: 'اثنان', 3: 'ثلاثة', 4: 'أربعة', 5: 'خمسة',
    6: 'ستة', 7: 'سبعة', 8: 'ثمانية', 9: 'تسعة', 10: 'عشرة',
    100: 'مائة', 1000: 'ألف', 1000000: 'مليون'
  };

  if (amount === 0) return 'صفر ريال سعودي';
  if (amount < 1000) {
    return \`\${amount} ريال سعودي\`;
  } else if (amount < 1000000) {
    const thousands = Math.floor(amount / 1000);
    const remainder = amount % 1000;
    return \`\${thousands} ألف\${remainder > 0 ? ' و' + remainder : ''} ريال سعودي\`;
  }
  return \`\${amount} ريال سعودي\`;
}

/**
 * Formats an amount with proper decimal places
 * @param {number} amount - The amount to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted amount string
 */
export function formatAmount(amount, decimals = 2) {
  const numAmount = Number(amount) || 0;
  return numAmount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Formats a date for display in Arabic format
 * @param {string|Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  if (!date) return '';

  // Handle different date formats
  if (typeof date === 'string' && date.includes('T')) {
    return new Date(date).toLocaleDateString('ar-SA');
  }

  if (date instanceof Date) {
    return date.toLocaleDateString('ar-SA');
  }

  return date;
}

/**
 * Gets client/vendor name from data
 * @param {Object} data - The data object
 * @returns {string} Client or vendor name
 */
export function getClientOrVendorName(data) {
  return data.AccNames || data.SandCat_Name || data.ClientName || data.SupplierName || '';
}

/**
 * Gets treasury/safe name from data
 * @param {Object} data - The data object
 * @returns {string} Treasury or safe name
 */
export function getTreasuryName(data) {
  return data.safe_Name || data.safeT_Name || '';
}

/**
 * Builds note text from expense entries or data
 * @param {Object} data - The data object
 * @returns {string} Formatted note text
 */
export function buildNoteText(data) {
  // Handle expense entries with sandE array
  if (data.sandE && data.sandE.length > 0) {
    const notes = data.sandE.map(entry => {
      const accountName = entry.ACC_AccName || '';
      const amount = entry.sandAmount || 0;
      const comment = entry.sand_comment || '';
      return \`\${accountName}: \${amount}\${comment ? ' - ' + comment : ''}\`;
    });
    return notes.join('\\n');
  }

  // Fallback to direct note fields
  return data.note || data.SandCat_Name || data.AccNames || '';
}

/**
 * Calculates totals for invoice-like documents
 * @param {Object} data - The data object containing totals
 * @returns {Array} Array of total objects with title and number
 */
export function calculateTotals(data) {
  const sub = Number(data.SubTotal || data.Subtotal || 0);
  const vat = Number(data.VAT || data.Tax || 0);
  const total = Number(data.Total || sub + vat);

  return [
    { title: 'المجموع الفرعي', number: sub },
    { title: 'ضريبة القيمة المضافة', number: vat },
    { title: 'الإجمالي', number: total }
  ];
}

/**
 * Formats invoice items for templates
 * @param {Array} items - Array of item objects
 * @returns {Array} Formatted items array
 */
export function formatInvoiceItems(items) {
  if (!Array.isArray(items)) return [];

  return items.map(item => ({
    description: item.name || item.ItemName || item.Name || '',
    quantity: item.QuantityOnOrder || item.Qty || item.Quantity || 0,
    rate: item.unitPrice || item.Price || item.Rate || 0,
    amount: item.total || (Number(item.QuantityOnOrder || item.Qty || 0) * Number(item.unitPrice || item.Price || 0))
  }));
}

/**
 * Gets default site information
 * @returns {Object} Default site information
 */
export function getDefaultSiteInfo() {
  return {
    site_business_name: 'شركة التجربة المحدودة',
    business_name: 'شركة التجربة المحدودة',
    site_address1: 'الرياض، المملكة العربية السعودية',
    site_address2: 'شارع الملك فهد',
    site_city: 'الرياض',
    site_state: 'منطقة الرياض',
    site_postal_code: '12345',
    site_bn1: 'الفرع الرئيسي',
    site_bn1_label: 'الفرع',
    footer: 'شكراً لتعاملكم معنا',
    logo_url: null
  };
}
`;export{n as default};
