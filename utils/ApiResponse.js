class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

// Define the ApiResponse class to structure HTTP responses consistently across the application. This class encapsulates the details of an HTTP response, including the status code, data payload, message, and success status.

// The constructor takes parameters for statusCode, data, and an optional message, defaulting to "Success". Based on the statusCode, the success property is automatically determined.

// This commit enhances code organization and readability by providing a standardized way to construct and send API responses, promoting consistency and reducing redundancy in response handling logic.
