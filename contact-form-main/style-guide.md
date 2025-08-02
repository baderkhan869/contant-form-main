<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
  <title>Contact Form</title>
</head>
<body>

  <!-- ✅ Toast Success Message -->
 <div class="form-wrapper">
  <div class="toast" id="toast">
    <div class="toast-top">
      <img src="contact-form-main/assets/images/icon-success-check.svg" alt="Success Icon" class="toast-icon" />
      <span class="message-main">Message Sent</span>
    </div>
    <span class="message-sub">Thanks for completing the form. We'll be in touch soon!</span>
  </div>
  <form class="contact-form" action="#" method="post">
    <h1 class="contact-us">Contact Us</h1>

    <div class="form-group">
      <div class="first-name">
        <label for="first-name">First Name <span style="color: red">*</span></label>
        <input type="text" id="first-name" />
        <div class="error-message">This field is required</div>
      </div>
      <div class="last-name">
        <label for="last-name">Last Name <span style="color: red">*</span></label>
        <input type="text" id="last-name" />
        <div class="error-message">This field is required</div>
      </div>
    </div>

    <div class="mail-group">
      <div class="email-group">
        <label class="email-label" for="email">Email <span style="color: red">*</span></label>
        <input type="email" id="email" name="email" />
        <div class="error-message">Please enter a valid Email Address</div>
      </div>
    </div>

    <div>
      <label>Query Type <span style="color: red">*</span></label>
      <div class="radio-group">
        <label class="radio-option">
          <input id="gnrl" type="radio" name="query-type" value="general" />
          General Enquiry
        </label>
        <label class="radio-option">
          <input id="support" type="radio" name="query-type" value="support" />
          Support Request
        </label>
      </div>
      <div class="error-message">Please select a query type</div>
    </div>

    <div class="msg-group">
      <label for="message">Message <span style="color: red">*</span></label>
      <div class="text-area">
        <textarea name="message" id="message"></textarea>
        <div class="error-message">This field is required</div>
      </div>
    </div>

    <div class="checkbox-group">
      <label>
        <input id="checkbox" type="checkbox" name="consent" />
        I consent to being contacted by the team <span style="color: red">*</span>
      </label>
      <div class="error-message">To submit this form, please consent to being contacted</div>
    </div>

    <button class="submit-btn" id="submit-btn" type="submit">Submit</button>
  </form>

</body>
</html>