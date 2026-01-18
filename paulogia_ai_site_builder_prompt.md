# 🤖 AI Website Builder Master Prompt --- Paulogia

## Goal

Build a highly professional, ultra-minimalist, single-page landing
website for the YouTube channel **Paulogia**, optimized for newsletter
signup and social links, with future expansion in mind.

------------------------------------------------------------------------

## 🔧 Tech Stack Requirements

Use a static-site-friendly, GitHub-deployable stack.

### Preferred Options (choose one)

**Option A --- Pure Static** - HTML - Modern CSS (Flexbox/Grid) -
Minimal vanilla JavaScript only where needed

**Option B --- Lightweight Static Framework** - Astro (preferred) - or
Eleventy (11ty)

Avoid: - heavy React apps - client-side SPA routing - unnecessary JS
frameworks

### Hosting Compatibility

Must support GitHub-based continuous deployment on: - Netlify - Vercel -
Cloudflare Pages - or GitHub Pages

No backend server required.

------------------------------------------------------------------------

## 🎯 Primary Goal

Maximize **newsletter signups** in a professional, non-pushy way.

Secondary goals: - communicate brand identity - provide social platform
links

------------------------------------------------------------------------

## 🎨 Design & Branding

### Overall Aesthetic

-   Ultra-minimalist
-   Academic, serious, professional
-   High-end design polish
-   No influencer or merch-site vibes
-   Clean spacing, strong typography, restrained palette

Design should feel like: \> a modern academic broadcast studio, not a
creator landing page.

------------------------------------------------------------------------

### 🎭 Avatar Element (Brand Signature)

A transparent PNG cartoon avatar is here -> https://drive.google.com/file/d/0B69UNuJNl9yrQ094VTIwUzRCV2M/view?usp=sharing&resourcekey=0-bHkBiXA7TBkjw31HH8jMOA

Behavior: - Fixed position in **bottom-right corner of viewport** -
Always visible, even when scrolling - Scales responsively for screen
size - Mimics consistent placement used in YouTube videos - Only playful
element on site; everything else stays serious

here's a screenshot of the avatar placement in the videos -> https://drive.google.com/file/d/1NOau2VibEz_qW1hUOEd0HzcJCyzEu1Y_/view?usp=sharing
(recreate the "desk" strip of color at the bottom that in a color appropriate for the site. ignore the book background and white screen portion as those are not relevant to the site)

------------------------------------------------------------------------

## 🖋 Typography

### Hard Rule

The word **"Paulogia" must always appear in Garamond Bold** wherever
used.

### All Other Text

-   Modern geometric sans-serif
-   High readability
-   Professional academic-modern feel

Acceptable examples: - Inter - Roboto - Space Grotesque

Optimize fonts for performance.

------------------------------------------------------------------------

## 🎨 Color System

### Anchor Colors

-   Primary dark green: `#034124`
-   Secondary accent green: `#09BF6B`

### Usage Rules

-   Backgrounds: black or very dark tones; dark green allowed
-   Text: primarily pure white `#FFFFFF`
-   Green used as accent, not wallpaper
-   Additional complementary greens allowed only if restrained

Must meet WCAG AA contrast standards.

------------------------------------------------------------------------

## 📐 Page Structure

Single-page layout.

Only fixed placement rules: - Brand name and tagline prominent - Avatar
bottom-right fixed - Footer (if present) at bottom

Everything else: - AI may determine section order and layout - Must
support clarity and newsletter as primary CTA

------------------------------------------------------------------------

## 📩 Newsletter Signup (MailerLite)

Likely provider: **MailerLite**

### UX Requirements (2026 Best Practice)

-   Ask for email only
-   Clear value proposition text
-   Privacy reassurance: "No spam. Unsubscribe anytime."
-   Inline success and error feedback
-   Mobile-first design

### Promotion Style

-   Prominent but not aggressive
-   No popups
-   No exit intent
-   No overlays
-   No urgency or marketing gimmicks

------------------------------------------------------------------------

## 🔗 Social Links

Display as icons only, not text.

Rules: - Monochrome - Tinted using brand green - No native platform
colors

Platforms: - X / Twitter - Instagram - YouTube (two channels) -
Facebook - Threads - Bluesky - Patreon

Hover effects allowed if subtle and classy.

------------------------------------------------------------------------

## ✨ Motion & Interaction

Allowed but must be:

-   Subtle
-   Purposeful
-   Professional

Good uses: - button hover transitions - form interaction feedback - icon
hover states

Avoid: - parallax - background animations - scroll gimmicks

Respect: - prefers-reduced-motion user setting

------------------------------------------------------------------------

## ♿ Accessibility

Must meet WCAG AA standards:

-   High contrast
-   Keyboard navigation
-   Screen-reader friendly form labels
-   Logical tab order
-   Accessible success/error messages

------------------------------------------------------------------------

## ⚡ Performance

High priority:

-   Very fast load time
-   Minimal JavaScript
-   Optimized images
-   Avoid heavy frameworks

------------------------------------------------------------------------

## 📊 Analytics & Privacy

Strong preference:

-   No cookies
-   No cookie consent banner

If analytics included: - Privacy-friendly - No cross-site tracking -
Track only: - page views - outbound links - newsletter submits

Do NOT use Google Analytics by default.

------------------------------------------------------------------------

## 🔐 Security

-   Enforce HTTPS
-   No insecure scripts
-   Form spam protection handled by provider

------------------------------------------------------------------------

## 🧱 Future Expansion

Architecture must allow adding:

-   About page
-   Support / donation page
-   Additional resources

Design system should scale across pages.

------------------------------------------------------------------------

## ✅ Output Expectations

Deliver:

-   Clean repo structure
-   Ready for GitHub deploy
-   Clear separation of:
    -   layout
    -   styles
    -   minimal JS
-   Easy to extend later
