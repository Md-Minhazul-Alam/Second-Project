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

> [!IMPORTANT]
> All major bugs have been fixed. No remaining issues are currently known.

