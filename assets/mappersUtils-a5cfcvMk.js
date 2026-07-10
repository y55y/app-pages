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
    // Company names
    company_name: cs.company_name || userData.company_name || '',
    company_nameE: userData.company_nameE || userData.company_name_en || cs.company_nameE || '',
    // Company addresses
    company_address: cs.company_address || userData.company_address || '',
    company_addressE: userData.company_addressE || userData.company_address_en || cs.company_addressE || '',
    // Company contact info (used in footers)
    company_phone: cs.phone || userData.company_phone || cs.site_phone || '',
    company_email: cs.company_email || userData.company_email || '',
    company_website: cs.company_website || userData.company_website || '',
    // Company activity/description
    company_activity: cs.company_activity || userData.company_activity || cs.activity || '',
    company_activityE: cs.company_activityE || userData.company_activityE || cs.activityE || '',
    // Branch information
    branch_name: cs.branch_name || '',
    branch_nameE: cs.branch_nameE || '',
    branch_address: cs.branch_address || cs.company_address || userData.company_address || '',
    branch_addressE: cs.branch_addressE || cs.company_addressE || userData.company_addressE || '',
    branch_email: cs.branch_email || userData.company_email || '',
    branch_email_en: cs.branch_email_en || userData.company_email || '',
    // Tax and registration numbers
    vat_number: cs.vat_number || userData.vat_number || '',
    CRN: cs.CRN || userData.CRN || cs.crn || userData.crn || '',
    // Site/legacy fields
    site_business_name: cs.company_name || userData.company_name || '',
    business_name: cs.company_name || userData.company_name || '',
    site_address1: cs.company_address || userData.company_address || '',
    site_address2: cs.address2 || userData.company_street || '',
    site_city: cs.city || userData.company_city || cs.site_city || '',
    site_cityE: cs.cityE || userData.company_cityE || cs.site_cityE || '',
    site_state: cs.state || '',
    site_postal_code: cs.postal_code || userData.company_postal_code || cs.site_postal_code || '',
    site_district: cs.district || cs.site_district || '',
    site_districtE: cs.districtE || cs.site_districtE || '',
    site_street: cs.street || cs.site_street || '',
    site_streetE: cs.streetE || cs.site_streetE || '',
    // Contact information
    site_phone: cs.phone || userData.company_phone || cs.site_phone || '',
    site_mobile: cs.mobile || userData.company_mobile || cs.site_mobile || '',
    site_fax: cs.fax || userData.company_fax || cs.site_fax || '',
    po_box: cs.po_box || userData.po_box || cs.pobox || '',
    site_bn1: cs.branch_name || '',
    site_bn1_label: 'الفرع'
  };
}

/**
 * Converts a number to Arabic words
 * @param {number} num - The number to convert
 * @returns {string} Arabic text representation of the number
 */
function numberToArabicWords(num) {
  if (num === 0) return 'صفر';
  
  const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
  const tens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
  const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
  const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
  
  const convertLessThanThousand = (n) => {
    if (n === 0) return '';
    
    let result = '';
    
    // Hundreds
    if (n >= 100) {
      result += hundreds[Math.floor(n / 100)];
      n %= 100;
      if (n > 0) result += ' و';
    }
    
    // Tens and ones
    if (n >= 10 && n < 20) {
      result += teens[n - 10];
    } else if (n >= 20) {
      const onesDigit = n % 10;
      const tensDigit = Math.floor(n / 10);
      if (onesDigit > 0) {
        result += ones[onesDigit] + ' و' + tens[tensDigit];
      } else {
        result += tens[tensDigit];
      }
    } else if (n > 0) {
      result += ones[n];
    }
    
    return result;
  };
  
  let result = '';
  let n = Math.floor(num);
  
  // Billions
  if (n >= 1000000000) {
    const billions = Math.floor(n / 1000000000);
    if (billions === 1) {
      result += 'مليار';
    } else if (billions === 2) {
      result += 'ملياران';
    } else if (billions >= 3 && billions <= 10) {
      result += convertLessThanThousand(billions) + ' مليارات';
    } else {
      result += convertLessThanThousand(billions) + ' مليار';
    }
    n %= 1000000000;
    if (n > 0) result += ' و';
  }
  
  // Millions
  if (n >= 1000000) {
    const millions = Math.floor(n / 1000000);
    if (millions === 1) {
      result += 'مليون';
    } else if (millions === 2) {
      result += 'مليونان';
    } else if (millions >= 3 && millions <= 10) {
      result += convertLessThanThousand(millions) + ' ملايين';
    } else {
      result += convertLessThanThousand(millions) + ' مليون';
    }
    n %= 1000000;
    if (n > 0) result += ' و';
  }
  
  // Thousands
  if (n >= 1000) {
    const thousands = Math.floor(n / 1000);
    if (thousands === 1) {
      result += 'ألف';
    } else if (thousands === 2) {
      result += 'ألفان';
    } else if (thousands >= 3 && thousands <= 10) {
      result += convertLessThanThousand(thousands) + ' آلاف';
    } else {
      result += convertLessThanThousand(thousands) + ' ألف';
    }
    n %= 1000;
    if (n > 0) result += ' و';
  }
  
  // Less than thousand
  if (n > 0) {
    result += convertLessThanThousand(n);
  }
  
  return result.trim();
}

/**
 * Converts a number to English words
 * @param {number} num - The number to convert
 * @returns {string} English text representation of the number
 */
function numberToEnglishWords(num) {
  if (num === 0) return 'Zero';
  
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  const convertLessThanThousand = (n) => {
    if (n === 0) return '';
    
    let result = '';
    
    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + ' Hundred';
      n %= 100;
      if (n > 0) result += ' and ';
    }
    
    if (n >= 10 && n < 20) {
      result += teens[n - 10];
    } else if (n >= 20) {
      result += tens[Math.floor(n / 10)];
      if (n % 10 > 0) result += '-' + ones[n % 10];
    } else if (n > 0) {
      result += ones[n];
    }
    
    return result;
  };
  
  let result = '';
  let n = Math.floor(num);
  
  // Billions
  if (n >= 1000000000) {
    result += convertLessThanThousand(Math.floor(n / 1000000000)) + ' Billion';
    n %= 1000000000;
    if (n > 0) result += ' ';
  }
  
  // Millions
  if (n >= 1000000) {
    result += convertLessThanThousand(Math.floor(n / 1000000)) + ' Million';
    n %= 1000000;
    if (n > 0) result += ' ';
  }
  
  // Thousands
  if (n >= 1000) {
    result += convertLessThanThousand(Math.floor(n / 1000)) + ' Thousand';
    n %= 1000;
    if (n > 0) result += ' ';
  }
  
  // Less than thousand
  if (n > 0) {
    result += convertLessThanThousand(n);
  }
  
  return result.trim();
}

/**
 * Formats a number to words in both Arabic and English with currency
 * @param {number} amount - The amount to convert to words
 * @param {string} lang - Language ('ar' for Arabic, 'en' for English, 'both' for both)
 * @param {string} currency - Currency name (default: 'ريال سعودي' / 'Saudi Riyal')
 * @returns {string} Text representation of the amount with currency
 */
export function spellAmount(amount, lang = 'both', currency = null) {
  const numAmount = Number(amount) || 0;
  const integerPart = Math.floor(numAmount);
  const decimalPart = Math.round((numAmount - integerPart) * 100);
  
  // Currency names
  const currencyAr = currency || 'ريال سعودي';
  const currencyEn = currency || 'Saudi Riyal';
  const halalatAr = 'هللة';
  const halalatEn = 'Halala';
  
  // Arabic version
  const arabicWords = numberToArabicWords(integerPart);
  let arabicResult = arabicWords + ' ' + currencyAr;
  if (decimalPart > 0) {
    arabicResult += ' و' + numberToArabicWords(decimalPart) + ' ' + halalatAr;
  }
  arabicResult += ' فقط لا غير';
  
  // English version
  const englishWords = numberToEnglishWords(integerPart);
  let englishResult = englishWords + ' ' + currencyEn;
  if (decimalPart > 0) {
    englishResult += ' and ' + numberToEnglishWords(decimalPart) + ' ' + halalatEn;
  }
  englishResult += ' Only';
  
  if (lang === 'ar') return arabicResult;
  if (lang === 'en') return englishResult;
  
  // Return both (Arabic / English)
  return arabicResult + ' / ' + englishResult;
}

/**
 * Formats a number to Arabic words only with currency
 * @param {number} amount - The amount to convert to words
 * @returns {string} Arabic text representation of the amount
 */
export function spellAmountAr(amount) {
  return spellAmount(amount, 'ar');
}

/**
 * Formats a number to English words only with currency
 * @param {number} amount - The amount to convert to words
 * @returns {string} English text representation of the amount
 */
export function spellAmountEn(amount) {
  return spellAmount(amount, 'en');
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
    const displayCode =
      item.ItemLookupCode ||
      item.ItemID_ItemLookupCode ||
      item.item_code ||
      item.code ||
      item.BarCodeNo ||
      item.barcode ||
      item.Barcode ||
      '';

    return {
      display_code: displayCode,
      barcode: item.BarCodeNo || item.barcode || item.Barcode || '',
      description: (item.name || item.ItemName || item.Name || ''),
      note: item.note || '',
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

    const sellerName = companyInfo.company_name || '';
    const vatNumber = companyInfo.vat_number || '';
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
