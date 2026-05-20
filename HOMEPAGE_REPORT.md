# Blessed Tours Homepage Report

This report summarizes the homepage work completed across desktop and mobile, plus recommended next improvements.

## Current Homepage Direction

The homepage now has a stronger landing page flow:

- Video-led hero section
- Desktop inquiry form
- Mobile Get quote popup
- Services carousel
- Detailed What We Provide tabs
- Booking process section
- Client reviews
- FAQ section
- Newsletter section
- Structured footer

The design direction is a premium dark travel aesthetic with gold accents, glass panels, strong imagery, and clearer responsive hierarchy.

## Desktop Work Completed

### Hero Section

- Added a video-based carousel hero with multiple travel slides.
- Kept the site header over the hero.
- Removed the extra CTA button from the hero copy.
- Moved the desktop inquiry form below the heading/subheading.
- Optimized video loading so all videos do not preload at once.
- Added fallback poster/image handling so failed or loading videos do not show a blank area.

Result: desktop keeps a strong visual hero while still giving users a clear enquiry action.

### Services Section

- Added a services carousel/cards section for the main offer categories:
  - Umrah Packages
  - Hajj Packages
  - Flights
  - Holiday Packages
  - Umrah Visa
  - Group Travel

Result: users can quickly understand the main services and navigate deeper.

### What We Provide Section

- Reworked the section into a tabbed experience.
- Added tabs for:
  - Hotels
  - Flights
  - Transportation
  - E-Visa
- Each tab now shows:
  - Category copy
  - A related image
  - A card carousel
  - Short service descriptions
  - Highlight chips
- Matched the “What we offer” badge style with the “Our Services” pill style.
- Moved the intro description directly below the “What We Provide?” heading.

Result: the section now feels more interactive and gives users more useful package information.

### Booking Process

- Added a step-based booking process section.
- Improved responsive connector behavior.
- Removed the vertical line on mobile.

Result: users can understand how the enquiry and booking journey works before submitting.

### Testimonials

- Added client reviews section.
- Desktop uses a 3-column marquee.
- Mobile uses a slower single-column marquee.
- Reduced testimonial avatar image size to improve loading.

Result: stronger trust and social proof without taking too much manual interaction.

### FAQ

- Added a dark glass FAQ accordion.
- First FAQ opens by default.
- FAQ image height syncs with accordion height.

Result: common questions are handled before the user contacts the team.

### Newsletter

- Added a glass-style newsletter section.
- Included email input and Subscribe CTA.
- Added image collage styling.

Result: gives the homepage a secondary conversion path.

### Footer

- Added structured footer with:
  - Logo
  - Tagline
  - Package links
  - Company links
  - Contact details
  - WhatsApp/phone links
  - Legal bar

Result: the page now closes with useful navigation and contact information.

## Mobile Work Completed

### Mobile Hero Layout

- Changed mobile hero to a split layout:
  - Top area is dedicated to video.
  - Heading, subheading, and CTA sit below in a dark content panel.
- Prevented heading, subheading, and button from covering the main Kaaba/video subject.

Result: the main video is much more visible on mobile.

### Mobile Inquiry Flow

- Hid the full inquiry form from the mobile hero.
- Added a single Get quote CTA button.
- The CTA opens the inquiry form in a popup/modal.
- Modal has horizontal spacing so it does not touch screen edges.

Result: mobile hero is cleaner and still conversion-focused.

### Mobile Popup Fixes

- Raised the popup layer so the next section does not overlap it.
- Removed the heavy backdrop blur.
- Kept the background video visible behind the popup.
- Locked both `html` and `body` scroll while popup is open.
- Scrolls hero back into view before opening the popup.

Result: the popup no longer gets visually stuck with the second section behind it.

### Mobile Date Input

- Replaced native mobile date picker inside the popup with a `DD/MM/YYYY` text input.
- Added numeric keyboard support.
- Added auto-formatting as the user types.
- Desktop still keeps the normal date picker.

Result: the large browser date picker no longer breaks the mobile modal.

### Mobile Content Browsing

- What We Provide cards are swipeable on mobile.
- Testimonials use a mobile-friendly marquee.
- Header menu has improved mobile glass panel behavior.

Result: dense homepage content is easier to browse on smaller screens.

## Suggested Next Improvements

### 1. Optimize Hero Videos

Create mobile-specific compressed MP4/WebM files and serve smaller video sources for phones.

Priority: High

Reason: large videos are the biggest risk for slow loading and poor mobile performance.

### 2. Connect Inquiry Form

Connect the form to a real workflow:

- Email notification
- CRM
- WhatsApp handoff
- Backend endpoint
- Spam protection
- Proper success/error states

Priority: High

Reason: the main conversion flow should now capture real enquiries.

### 3. Add Dedicated Package Pages

Create pages for:

- Umrah Packages
- Hajj Packages
- Flights
- Holiday Packages
- Visa Support

Priority: High

Reason: homepage cards currently introduce services, but dedicated pages are needed for SEO and conversion.

### 4. Improve Trust Signals

Add visible credibility elements:

- ATOL protection details
- IATA or partner badges if applicable
- Scholar/group leader information
- Real review source references
- Payment/security reassurance

Priority: Medium

Reason: Hajj and Umrah travel requires high trust before users submit details.

### 5. Create Legal Pages

Add pages for:

- Privacy Policy
- Terms & Conditions

Priority: Medium

Reason: footer links already point to these pages and the form collects personal information.

### 6. Track Conversion Events

Track key homepage actions:

- Get quote button clicks
- Popup opens
- Form submissions
- WhatsApp taps
- Phone taps
- Service card clicks

Priority: Medium

Reason: tracking will show which sections actually produce leads.

### 7. Review Real Content

Replace placeholder or generic content with final business-approved copy:

- Real package details
- Real hotel partners
- Real flight routes
- Final contact email
- Actual legal text
- Actual customer testimonials if available

Priority: Medium

Reason: final content will make the page feel more trustworthy and production-ready.

## Best Next Step

The best next step is to focus on two areas:

1. Mobile video performance.
2. Real inquiry form submission.

These will have the biggest impact on perceived quality and lead generation.
