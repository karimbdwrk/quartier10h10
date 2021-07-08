"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStrapiURL = getStrapiURL;
exports.fetchAPI = fetchAPI;

function getStrapiURL(path) {
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://quartier10h10-admin.herokuapp.com").concat(path);
} // Helper to make GET requests to Strapi


function fetchAPI(path) {
  var options,
      defaultOptions,
      requestUrl,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function fetchAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          defaultOptions = {
            headers: {
              "Content-Type": "application/json"
            }
          }; // const mergedOptions = {
          //   ...defaultOptions,
          //   ...options,
          // }

          requestUrl = getStrapiURL(path); // const response = await fetch(requestUrl, mergedOptions)

          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(requestUrl));

        case 5:
          response = _context.sent;

          if (response.ok) {
            _context.next = 9;
            break;
          }

          console.error(response.statusText);
          throw new Error("An error occured please try again");

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}