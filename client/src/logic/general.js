/**
 * Validates an Israeli mobile phone number and returns it in international format.
 *
 * Rules:
 *   1. The number must be exactly 10 digits long.
 *   2. It must start with "05" and the third digit must be between 0 and 8 (i.e. 050 to 058).
 *   3. If valid, it is converted to the international format: +972 followed by the number without the leading 0.
 *
 * @param {string} phone - The phone number as a string.
 * @returns {Object} An object with a 'valid' flag and either a 'formatted' international phone or a 'message' explaining the failure.
 */
export const  validateAndFormatPhone = (phone) =>{
    // Ensure the phone contains exactly 10 digits.
    if (!/^\d{10}$/.test(phone)) {
      return { valid: false, result: "מספר הפלאפון לא קיים" };
    }
    
    // Ensure the phone starts with '05' and the third digit is between 0 and 8.
    if (!/^05[0-8]/.test(phone)) {
      return { valid: false, result: "המספר חייב להיות בין 050 ל058" };
    }
    
    // Convert the domestic phone number to international format.
    // Remove the leading zero and prepend "+972".
    const international = "+972" + phone.substring(1);
    return { valid: true, result: international };
  }



















  /**
 * Validates an Israeli ID number.
 *
 * Rules:
 * 1. Exactly 9 digits.
 * 2. Cannot start with 0.
 * 3. Must contain only digits.
 * 4. Must pass the Israeli ID checksum algorithm.
 *
 * @param {string} id - The ID number as a string.
 * @returns {Object} An object with a `valid` flag and either a `formatted` (same as input) property or a `message` property explaining the error.
 */
export const validateIsraeliID = (id) =>{
    // Check that the input is exactly 9 digits and does not start with 0.
    if (!/^[1-9]\d{8}$/.test(id)) {
      return {
        valid: false,
        result: "תעודת זהות באורך לא תקין"
      };
    }
  
    let sum = 0;
    // Iterate over each digit of the ID.
    for (let i = 0; i < id.length; i++) {
      const digit = parseInt(id.charAt(i), 10);
      // Multiply by 1 if index is even, 2 if index is odd.
      const factor = (i % 2 === 0) ? 1 : 2;
      let product = digit * factor;
      
      // If the product is greater than 9, subtract 9.
      if (product > 9) {
        product = product - 9;
      }
      
      sum += product;
    }
  
    // If the sum modulo 10 is not 0, the checksum fails.
    if (sum % 10 !== 0) {
      return { valid: false, result: "התעודת זהות לא קיימת" };
    }
  
    // If all checks pass, the ID is valid.
    return { valid: true, result: id };
  }
  
  
