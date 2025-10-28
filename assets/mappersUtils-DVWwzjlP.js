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
    company_nameE: cs.company_nameE || userData.company_nameE || 'Test Company Ltd.',
    company_address: cs.company_address || userData.company_address || 'الرياض، المملكة العربية السعودية',
    company_addressE: cs.company_addressE || userData.company_addressE || 'Riyadh, Saudi Arabia',
    branch_name: cs.branch_name || 'الفرع الرئيسي',
    branch_nameE: cs.branch_nameE || 'Main Branch',
    branch_address: cs.branch_address || 'الرياض، المملكة العربية السعودية',
    branch_addressE: cs.branch_addressE || 'Riyadh, Saudi Arabia',
    branch_email: cs.branch_email || userData.company_email || 'info@mainbranch.com',
    branch_email_en: cs.branch_email_en || userData.company_email || 'info@mainbranch.com',
    vat_number: cs.vat_number || userData.vat_number || '123456789012345',
    CRN: cs.CRN || userData.CRN || '',
    site_business_name: cs.company_name || userData.company_name || 'شركة التجربة المحدودة',
    business_name: cs.company_name || userData.company_name || 'شركة التجربة المحدودة',
    site_address1: cs.company_address || userData.company_address || 'الرياض، المملكة العربية السعودية',
    site_address2: cs.address2 || userData.company_street || 'شارع الملك فهد',
    site_city: cs.city || userData.company_city || 'الرياض',
    site_state: cs.state || 'منطقة الرياض',
    site_postal_code: cs.postal_code || userData.company_postal_code || '12345',
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
  // Calculate subtotal, discount, and VAT from items if not provided
  let sub = Number(data.SubTotal || data.Subtotal || 0);
  let discount = Number(data.dis || data.discount || 0);
  let vat = Number(data.vat || data.VAT || data.Tax || 0);

  if (sub === 0 && data.order_entries) {
    sub = data.order_entries.reduce((sum, item) => {
      const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
      const price = Number(item.unitPrice || item.Rate || 0);
      return sum + (qty * price);
    }, 0);
  }

  // If discount is 0, calculate it from items
  if (discount === 0 && data.order_entries) {
    discount = data.order_entries.reduce((sum, item) => {
      return sum + Number(item.discount || item.dis || 0);
    }, 0);
  }

  // Calculate taxable amount (subtotal - discount) for VAT calculation
  const taxableAmount = sub - discount;

  // If VAT is 0, calculate it based on taxable amount (subtotal - discount)
  if (vat === 0) {
    // Use a default tax rate or calculate from items
    const taxRate = data.order_entries && data.order_entries.length > 0
      ? Number(data.order_entries[0].tax_rate || data.order_entries[0].TaxRate || 15)
      : 15;
    vat = taxableAmount * taxRate / 100;
  }

  // Calculate total as subtotal - discount + VAT
  const total = taxableAmount + vat;

  // Ensure two decimal places
  const roundedSub = Math.round(sub * 100) / 100;
  const roundedDiscount = Math.round(discount * 100) / 100;
  const roundedVat = Math.round(vat * 100) / 100;
  const roundedTotal = Math.round(total * 100) / 100;

  const result = [
    { title: 'المجموع الفرعي', number: roundedSub }
  ];

  // Only add discount row if there's a discount
  if (roundedDiscount > 0) {
    result.push({ title: 'الخصم', number: roundedDiscount });
  }

  result.push(
    { title: 'ضريبة القيمة المضافة', number: roundedVat },
    { title: 'الإجمالي', number: roundedTotal }
  );

  return result;
}

/**
 * Generates HTML for the sticky footer containing totals
 * @param {Object} data - The data object containing totals
 * @returns {string} HTML string for the totals table
 */
export function generateStickyFooterHTML(data) {
  const totals = calculateTotals(data);

  let html = '<table class="total-table">\\n';

  // Add rows for each total except the last one
  for (let i = 0; i < totals.length - 1; i++) {
    const total = totals[i];
    html += \`  <tr>\\n\`;
    html += \`    <td>\${total.title}</td>\\n\`;
    html += \`    <td>\${formatAmount(total.number)}</td>\\n\`;
    html += \`  </tr>\\n\`;
  }

  // Add the last row with special styling
  const lastTotal = totals[totals.length - 1];
  html += \`  <tr class="total-row">\\n\`;
  html += \`    <td>\${lastTotal.title}</td>\\n\`;
  html += \`    <td>\${formatAmount(lastTotal.number)}</td>\\n\`;
  html += \`  </tr>\\n\`;

  html += '</table>\\n';

  return html;
}

/**
 * Formats invoice items for templates
 * @param {Array} items - Array of item objects
 * @returns {Array} Formatted items array
 */
export function formatInvoiceItems(items) {
  if (!Array.isArray(items)) return [];

  return items.map(item => {
    const qty = Number(item.QuantityOnOrder || item.Qty || item.Quantity || 0);
    const rate = Number(item.unitPrice || item.Rate || 0);
    const discount = Number(item.discount || item.dis || 0);
    const taxRate = Number(item.tax_rate || item.TaxRate || 15);

    const taxableAmount = Math.round((qty * rate - discount) * 100) / 100;
    const taxValue = Math.round((taxableAmount * taxRate / 100) * 100) / 100;
    const total = Math.round((taxableAmount + taxValue) * 100) / 100;

    return {
      description: (item.name || item.ItemName || item.Name || '') + (item.note ? ' - ' + item.note : ''),
      quantity: qty,
      rate: rate,
      discount: discount,
      taxable_amount: taxableAmount,
      tax_rate: taxRate,
      tax_value: taxValue,
      total: total
    };
  });
}

/**
 * Tag class for TLV encoding
 */
class Tag {
  constructor(tag, value) {
    this.tag = tag;
    this.value = value;
  }

  toString() {
    const valueBuffer = new TextEncoder().encode(this.value);
    return String.fromCharCode(this.tag) +
           String.fromCharCode(valueBuffer.length) +
           this.value;
  }
}

/**
 * Converts an array of tags into a concatenated TLV string
 * @param {Array} data - Array of Tag instances
 * @returns {string} TLV encoded string
 */
const toTLV = (data) => {
  return data.map(tag => tag.toString()).join('');
};

/**
 * Converts TLV string to Base64
 * @param {string} data - TLV encoded string
 * @returns {string} Base64 encoded string
 */
const toBase64 = (data) => {
  const utf8Bytes = new TextEncoder().encode(toTLV(data));
  return btoa(String.fromCharCode.apply(null, utf8Bytes));
};

/**
 * Generates ZATCA-compliant QR code data for Saudi e-invoicing
 * @param {Object} invoiceData - Invoice data object
 * @param {Object} companyInfo - Company information
 * @returns {string} Base64 encoded QR code data URL
 */
export async function generateZATCAQRCode(invoiceData, companyInfo) {
  try {
    console.log('generateZATCAQRCode - Starting QR code generation');
    console.log('generateZATCAQRCode - invoiceData:', invoiceData);
    console.log('generateZATCAQRCode - companyInfo:', companyInfo);

    // ZATCA QR code format requires specific TLV (Tag-Length-Value) encoded data
    // Tags: 1=Seller Name, 2=VAT Number, 3=Timestamp, 4=Invoice Total, 5=VAT Total

    const sellerName = companyInfo.company_name || 'شركة التجربة المحدودة';
    const vatNumber = companyInfo.vat_number || '123456789012345';
    const timestamp = invoiceData.data?.order_date || invoiceData.data?.InvDate || invoiceData.data?.Date || invoiceData.order_date || invoiceData.InvDate || invoiceData.Date || new Date().toISOString();
    const invoiceTotal = (invoiceData.data?.Total || invoiceData.Total || 0).toString();
    const vatTotal = (invoiceData.data?.vat || invoiceData.vat || 0).toString();

    console.log('generateZATCAQRCode - Extracted values:', {
      sellerName,
      vatNumber,
      timestamp,
      invoiceTotal,
      vatTotal
    });

    // Create tags array
    const tags = [
      new Tag(1, sellerName),
      new Tag(2, vatNumber),
      new Tag(3, timestamp),
      new Tag(4, invoiceTotal),
      new Tag(5, vatTotal)
    ];

    console.log('generateZATCAQRCode - Created tags:', tags);

    // Generate Base64 encoded TLV data
    const qrData = toBase64(tags);

    console.log('generateZATCAQRCode - Generated QR data:', qrData);

    // Generate actual QR code image using qrcode library
    try {
      const QRCode = (await import('qrcode')).default;
      console.log('generateZATCAQRCode - QRCode library loaded');

      // Generate QR code as base64 data URL
      const qrCodeDataURL = await QRCode.toDataURL(qrData, {
        width: 256,
        height: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'M'
      });

      console.log('generateZATCAQRCode - Generated QR code data URL length:', qrCodeDataURL.length);
      console.log('generateZATCAQRCode - QR code data URL starts with:', qrCodeDataURL.substring(0, 50));

      return qrCodeDataURL;
    } catch (qrError) {
      console.error('generateZATCAQRCode - QR code library error:', qrError);

      // Fallback: return the raw TLV data as base64 (not visual, but contains the data)
      console.log('generateZATCAQRCode - Falling back to raw TLV data');
      return \`data:text/plain;base64,\${btoa(qrData)}\`;
    }
  } catch (error) {
    console.error('Error generating ZATCA QR code:', error);
    // Return a fallback SVG
    const fallbackSvg = \`<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="white" stroke="red" stroke-width="4"/>
      <text x="128" y="120" text-anchor="middle" font-family="Arial" font-size="16" fill="red">QR Error</text>
      <text x="128" y="140" text-anchor="middle" font-family="Arial" font-size="12" fill="red">Failed to generate</text>
    </svg>\`;
    return \`data:image/svg+xml;base64,\${btoa(unescape(encodeURIComponent(fallbackSvg)))}\`;
  }
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
