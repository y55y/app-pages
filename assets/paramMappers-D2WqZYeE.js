const n=`// Central mapping from backend resource fields to HTML template params per doc type
// Each docType contains key-value pairs where:
// - value is a string: copy data[value]
// - value is a function: compute param from full data
// Start simple; extend as needed

export const PRINTABLE_PARAM_MAPPERS = {
  // Payments
  client_payment_normal: {
    payment_number: 'Number',
    payment_date: 'PayDate',
    client_name: 'ClientName',
    amount: (data) => data.Amount || data.Total || 0,
    notes: 'Notes'
  },
  client_payment_thermal: {
    payment_number: 'Number',
    payment_date: 'PayDate',
    client_name: 'ClientName',
    amount: (data) => data.Amount || data.Total || 0,
    notes: 'Notes'
  },
  supplier_payment_normal: {
    payment_number: 'Number',
    payment_date: 'PayDate',
    supplier_name: 'SupplierName',
    amount: (data) => data.Amount || data.Total || 0,
    notes: 'Notes'
  },
  supplier_payment_thermal: {
    payment_number: 'Number',
    payment_date: 'PayDate',
    supplier_name: 'SupplierName',
    amount: (data) => data.Amount || data.Total || 0,
    notes: 'Notes'
  },

  // Sales
  sell_inv: {
    invoice_title: () => 'فاتورة ضريبية',
    invoice_no: 'Code',
    invoice_date: (d) => d.InvDate || d.Date,
    client_business_name: 'ClientName',
    items: (d) => Array.isArray(d.Items) ? d.Items.map(it => ({
      description: it.ItemName || it.Name || '',
      quantity: it.Qty || it.Quantity || 0,
      rate: it.Price || it.Rate || 0,
      amount: it.Total || (Number(it.Price || 0) * Number(it.Qty || 0))
    })) : [],
    totalsRows: (d) => {
      const sub = Number(d.SubTotal || d.Subtotal || 0);
      const vat = Number(d.VAT || d.Tax || 0);
      const total = Number(d.Total || sub + vat);
      return [
        { title: 'المجموع الفرعي', number: sub },
        { title: 'ضريبة القيمة المضافة', number: vat },
        { title: 'الإجمالي', number: total }
      ];
    },
    footer: (d) => d.Footer || 'شكراً لتعاملكم معنا'
  },

  // Receipts
  income_receipt: {
    payment_number: 'Number',
    payment_date: 'Date',
    payer_name: 'ClientName',
    amount: (d) => d.Amount || d.Total || 0,
    notes: 'Notes'
  },
  exepnse_receipt: {
    payment_number: 'Number',
    payment_date: 'Date',
    payee_name: 'SupplierName',
    amount: (d) => d.Amount || d.Total || 0,
    notes: 'Notes'
  }
};

export function mapDataToTemplateParams(docType, data) {
  const map = PRINTABLE_PARAM_MAPPERS[String(docType)] || {};
  const out = {};
  Object.entries(map).forEach(([paramKey, rule]) => {
    try {
      if (typeof rule === 'function') {
        out[paramKey] = rule(data);
      } else if (typeof rule === 'string') {
        out[paramKey] = data?.[rule];
      }
    } catch (e) {
      // ignore mapping error for this key
    }
  });
  return out;
}


`;export{n as default};
