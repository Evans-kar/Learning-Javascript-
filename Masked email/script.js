function maskEmail(email) {
  // Find where the username ends
  let atIndex = email.indexOf("@");

  // Get the username and domain
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  // Build the masked username
  let firstChar = username[0];
  let lastChar = username[username.length - 1];
  let stars = "*".repeat(username.length - 2);

  return firstChar + stars + lastChar + domain;
}

// Outside the function
let email = "apple.pie@example.com";
console.log(maskEmail(email));
