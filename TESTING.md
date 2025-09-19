# Testing

> [!NOTE]
> Return back to the [README.md](README.md) file.

---

## Code Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [index.html](https://md-minhazul-alam.github.io/Second-Project) | ![](/assets/image/testing/html-validate-home.png) | Passed |
| Menu | [menu.html](https://md-minhazul-alam.github.io/Second-Project/menu) | ![](/assets/image/testing/html-validate-menu.png) | Passed |
| Membership | [membership.html](https://md-minhazul-alam.github.io/Second-Project/membership) | ![](/assets/image/testing/html-validate-membership.png) | Passed |
| Flavour Finder | [flavour.html](https://md-minhazul-alam.github.io/Second-Project/flavour) | ![](/assets/image/testing/html-validate-flavour.png) | Passed |
| Contact | [contact.html](https://md-minhazul-alam.github.io/Second-Project/contact) | ![](/assets/image/testing/html-validate-contact.png) | Passed |
| Locations | [locations.html](https://md-minhazul-alam.github.io/Second-Project/locations) | ![](/assets/image/testing/html-validate-locations.png) | Passed |
| 404 Page | [404.html](https://md-minhazul-alam.github.io/Second-Project/404) | ![](/assets/image/testing/html-validate-404.png) | Passed |

---

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| style.css | ![](/assets/image/testing/css-validate-style.png) | Passed |

---

### JavaScript  

I have used the recommended [JSHint Validator](https://jshint.com/) to validate all of my JavaScript files and inline scripts.  

| File / Script | Screenshot | Notes |
| --- | --- | --- |
| **menu.js** (mobile responsive) | ![](/assets/image/testing/jshint-menu.png) | Passed |
| **special.js** (special menu functionality) | ![](/assets/image/testing/jshint-special.png) | Passed |
| **script.js** (to show all menus script) | ![](/assets/image/testing/jshint-script.png) | Passed |
| **Flavor Finder page script** | ![](/assets/image/testing/jshint-flavour.png) | Passed |
| **membership page inline script** | ![](/assets/image/testing/jshint-membership-submit.png) | Passed |
| **contact page inline script** | ![](/assets/image/testing/jshint-contact-submit.png) | Passed |

---

## Responsiveness

I've tested my deployed project for responsiveness issues on different devices.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![](/assets/image/screenshot/home-mob.png) | ![](/assets/image/screenshot/home-tab.png) | ![](/assets/image/screenshot/home-desk.png) | Works as expected |
| Menu | ![](/assets/image/screenshot/menu-mob.png) | ![](/assets/image/screenshot/menu-tab.png) | ![](/assets/image/screenshot/menu-desk.png) | Works as expected |
| Membership | ![](/assets/image/screenshot/membership-mob.png) | ![](/assets/image/screenshot/membership-tab.png) | ![](/assets/image/screenshot/membership-desk.png) | Works as expected |
| Flavour Finder | ![](/assets/image/screenshot/flavour-mob.png) | ![](/assets/image/screenshot/flavour-tab.png) | ![](/assets/image/screenshot/flavour-desk.png) | Works as expected |
| Contact | ![](/assets/image/screenshot/contact-mob.png) | ![](/assets/image/screenshot/contact-tab.png) | ![](/assets/image/screenshot/contact-desk.png) | Works as expected |
| Locations | ![](/assets/image/screenshot/location-mob.png) | ![](/assets/image/screenshot/location-tab.png) | ![](/assets/image/screenshot/location-desk.png) | Works as expected |
| 404 Page | ![](/assets/image/screenshot/404-mob.png) | ![](/assets/image/screenshot/404-tab.png) | ![](/assets/image/screenshot/404-desk.png) | Works as expected |

---

## Browser Compatibility

Tested on multiple browsers for compatibility.

| Page | Chrome | Firefox | Safari | Notes |
| --- | --- | --- | --- | --- |
| Home | ![](/assets/image/testing/chrome-home.png) | ![](/assets/image/testing/firefox-home.png) | ![](/assets/image/testing/safari-home.png) | Works as expected |
| Menu | ![](/assets/image/testing/chrome-menu.png) | ![](/assets/image/testing/firefox-menu.png) | ![](/assets/image/testing/safari-menu.png) | Works as expected |
| Membership | ![](/assets/image/testing/chrome-membership.png) | ![](/assets/image/testing/firefox-membership.png) | ![](/assets/image/testing/safari-membership.png) | Works as expected |
| Flavour Finder | ![](/assets/image/testing/chrome-flavour.png) | ![](/assets/image/testing/firefox-flavour.png) | ![](/assets/image/testing/safari-flavour.png) | Works as expected |
| Contact | ![](/assets/image/testing/chrome-contact.png) | ![](/assets/image/testing/firefox-contact.png) | ![](/assets/image/testing/safari-contact.png) | Works as expected |
| Locations | ![](/assets/image/testing/chrome-locations.png) | ![](/assets/image/testing/firefox-locations.png) | ![](/assets/image/testing/safari-locations.png) | Works as expected |
| 404 Page | ![](/assets/image/testing/chrome-404.png) | ![](/assets/image/testing/firefox-404.png) | ![](/assets/image/testing/safari-404.png) | Works as expected |

---

## Lighthouse Audit

Checked performance and accessibility using Lighthouse.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![](/assets/image/testing/lighthouse-home-mob.png) | ![](/assets/image/testing/lighthouse-home-desk.png) |
| Menu | ![](/assets/image/testing/lighthouse-menu-mob.png) | ![](/assets/image/testing/lighthouse-menu-desk.png) |
| Membership | ![](/assets/image/testing/lighthouse-membership-mob.png) | ![](/assets/image/testing/lighthouse-membership-desk.png) |
| Flavour Finder | ![](/assets/image/testing/lighthouse-flavour-mob.png) | ![](/assets/image/testing/lighthouse-flavour-desk.png) |
| Contact | ![](/assets/image/testing/lighthouse-contact-mob.png) | ![](/assets/image/testing/lighthouse-contact-desk.png) |
| Locations | ![](/assets/image/testing/lighthouse-location-mob.png) | ![](/assets/image/testing/lighthouse-location-desk.png) |
| 404 Page | ![](/assets/image/testing/lighthouse-404-mob.png) | ![](/assets/image/testing/lighthouse-404-desk.png) |

---

## Defensive Programming

| Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Navigation bar | Works across all devices and pages | Clicked all links on desktop, mobile, tablet | Functional and consistent | ![Navbar Desktop](/assets/image/screenshot/navbar-desktop.png) ![Navbar Mobile](/assets/image/screenshot/navbar-mobile.png) |
| Membership Form | Prevents empty/invalid inputs | Tried empty form and invalid email | Blocked submission with error prompts | ![](/assets/image/testing/form-validate.png) |
| Flavour Finder | Should return a flavor suggestion | Completed quiz with sample answers | Displayed correct recommendation | ![](/assets/image/testing/flavour-test.png) |
| Responsive Layout | Content adapts to device size | Resized window, tested mobile + tablet | Layout smooth, no overlap | ![Navbar Desktop](/assets/image/screenshot/home-desk.png) ![Navbar Mob](/assets/image/screenshot/home-mob.png) ![Navbar tab](/assets/image/screenshot/home-tab.png) |
| External Links | Should open securely in new tab | Clicked external credits links | Opened as expected | ![](/assets/image/testing/external-link.png) |

---

## User Story Testing

| User Story | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a visitor, I want to navigate clearly between all pages | Navigation bar and sidebar should be intuitive | Works as expected | ![](/assets/image/screenshot/navbar-desktop.png) |
| As a visitor, I want to quickly see the café’s motto and hero image | Hero section should load instantly | Works as expected | ![](/assets/image/screenshot/hero.png) |
| As a customer, I want to browse the full menu | Menu page should list all items | Works as expected | ![](/assets/image/screenshot/menu-desk.png) |
| As a member, I want to join the membership program | Form should allow valid entries only | Works as expected | ![](/assets/image/screenshot/membership-desk.png) |
| As a user, I want to discover my coffee flavor | Flavour Finder should give recommendation | Works as expected | ![](/assets/image/screenshot/flavour-desk.png) |
| As a user, I want to contact the café | Contact form + map should display | Works as expected | ![](/assets/image/screenshot/contact-desk.png) |
| As a user, I want to see café locations | All branches shown on Locations page | Works as expected | ![](/assets/image/screenshot/location-desk.png) |
| As a user, I want to see a 404 error if I mistype URL | 404 page should display | Works as expected | ![](/assets/image/screenshot/404-desk.png) |

---

## Bugs

- **Navigation bar overlap on smaller screens**  
  - Found: Mobile testing  
  - Fix: Added CSS media queries  
  - Status: Fixed  

- **Footer columns stacked incorrectly on tablets**  
  - Found: Tablet testing  
  - Fix: Flexbox adjustments  
  - Status: Fixed  

- **Membership form did not validate email**  
  - Found: Manual form testing  
  - Fix: Added HTML5 email input + JS validation  
  - Status: Fixed  

- **Sidebar menu stuck open on Safari**  
  - Found: Safari testing  
  - Fix: Adjusted JavaScript toggle logic  
  - Status: Fixed  

---

### Known Issues

- None at this time.  
- Thorough testing has been carried out, but some minor bugs may still exist.  
- Some images used across the site are not fully optimized for web performance, which may impact loading speed and Lighthouse performance scores.

> [!IMPORTANT]
> All major bugs have been fixed. No remaining issues are currently known.

