/**
 * Controller class for handling timestamp conversion.
 */
class TimestampController {
  /**
   * Get the response object containing the converted timestamp values.
   * @param {string} value - The input value to be converted.
   * @returns {Object} - The response object with unix and utc values.
   * @throws {Error} - Throws an error if the input is invalid.
   */
  getResponse(value) {
    if (this.isDate(value)) {
      const unix = this.convertDateToUnix(value);
      return { unix: unix, utc: this.convertUnixToUTCstring(unix) };
    } else if (this.isUnix(value)) {
      return { unix: parseInt(value), utc: this.convertUnixToUTCstring(value) };
    } else {
      const error = new Error("Invalid Input");
      error.status = 400;
      throw error;
    }
  }

  /**
   * Check if the given value is a valid date string.
   * @param {string} date - The value to be checked.
   * @returns {boolean} - Returns true if the value is a valid date string, otherwise false.
   */
  isDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  }

  /**
   * Check if the given value is a valid Unix timestamp.
   * @param {string} unix - The value to be checked.
   * @returns {boolean} - Returns true if the value is a valid Unix timestamp, otherwise false.
   */
  isUnix(unix) {
    if (isNaN(unix)) {
      return false;
    }
    const timestamp = parseInt(unix, 10);
    return timestamp >= 0 && timestamp <= 2147483647000;
  }

  /**
   * Convert a Unix timestamp to a UTC string.
   * @param {number} unix - The Unix timestamp to be converted.
   * @returns {string} - The UTC string representation of the Unix timestamp.
   */
  convertUnixToUTCstring(unix) {
    const date = new Date(unix * 1000);
    return date.toUTCString();
  }

  /**
   * Convert a date string to a Unix timestamp.
   * @param {string} date - The date string to be converted.
   * @returns {number} - The Unix timestamp representation of the date string.
   */
  convertDateToUnix(date) {
    return Date.parse(date) / 1000;
  }
}

module.exports = TimestampController;
