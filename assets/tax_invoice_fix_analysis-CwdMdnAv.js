const n=`# Tax Invoice Customer Info Fix Analysis

## Root Cause

### Issue 1: Long name overflows card

**Bug**: \`.info-card\` has \`height: 115px\` (fixed, line 229). When \`{%client_name%}\` wraps to 2+ lines, content exceeds 115px and overflows the box.

**Fix**: Change to \`min-height: 115px\`. Card auto-grows with content.

### Issue 2: Label and value not on same line

**Bug**: Both \`.info-label\` (line 252-256) and \`.info-value\` (line 258-263) are \`display: block\`. Block elements stack vertically instead of sitting inline.

**Fix**: Change both to \`display: inline\`. Label acts as prefix before value. Also \`white-space: nowrap\` on label so it doesn't break mid-phrase.

### Issue 3: Missing District (الحي)

**Data**: \`Client_District\` = "حي الربوة"  
**Variable**: \`{%client_district%}\`

New 3×3 grid layout to accommodate 9 fields:

\`\`\`
Row 1: Name | VAT Number | Building No.
Row 2: Street Name | District | City
Row 3: CR | Country | Postal Code
\`\`\`

---

## Fixed Template

Paste below replacing the \`<div class="info-card">\` block (lines 647-686 in \`tax_invoice_pro_ar_en.txt\`):

\`\`\`html
              <div class="info-card">
                <div class="info-card-title">بيانات العميل / Customer Info</div>
                <table class="info-grid-table">
                  <tr>
                    <td style="width: 33.33%;">
                      <span class="info-label">اسم العميل / Name</span>
                      <span class="info-value">{%client_name%}</span>
                    </td>
                    <td style="width: 33.33%;">
                      <span class="info-label">الرقم الضريبي / VAT</span>
                      <span class="info-value">{%client_vat%}</span>
                    </td>
                    <td style="width: 33.33%;">
                      <span class="info-label">رقم المبنى / Bldg No.</span>
                      <span class="info-value">{%client_building_number%}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="info-label">الشارع / Street</span>
                      <span class="info-value">{%client_street_name%}</span>
                    </td>
                    <td>
                      <span class="info-label">الحي / District</span>
                      <span class="info-value">{%client_district%}</span>
                    </td>
                    <td>
                      <span class="info-label">المدينة / City</span>
                      <span class="info-value">{%client_city%}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="info-label">السجل التجاري / CR</span>
                      <span class="info-value">{%client_cr%}</span>
                    </td>
                    <td>
                      <span class="info-label">البلد / Country</span>
                      <span class="info-value">{%client_country%}</span>
                    </td>
                    <td>
                      <span class="info-label">الرمز البريدي / Zip</span>
                      <span class="info-value">{%client_postal_code%}</span>
                    </td>
                  </tr>
                </table>
              </div>
\`\`\`

---

## CSS Changes (3 edits)

In the \`<style>\` block of \`tax_invoice_pro_ar_en.txt\`:

\`\`\`css
/* === Edit 1: Fix card overflow === */
/* Line 229: change height to min-height */
.info-card {
  /* ...existing rules... */
  min-height: 115px;   /* was: height: 115px */
  /* height: 115px; -- REMOVE */
}

/* === Edit 2: Inline label + value === */
/* Lines 252-263: change display from block to inline */
.info-label {
  font-size: 9px;
  color: var(--text-light);
  display: inline;     /* was: block */
  white-space: nowrap;
}

.info-value {
  font-size: 10px;
  color: var(--text-dark);
  font-weight: 600;
  display: inline;     /* was: block */
}
\`\`\`
`;export{n as default};
