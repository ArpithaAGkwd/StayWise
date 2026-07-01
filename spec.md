# StayWise — Product UI Specification

## Overview

Build a responsive web application called **StayWise**.

StayWise is an AI-powered hotel recommendation and comparison platform that helps users find the best hotel based on personalized preferences such as cleanliness, food quality, kid-friendliness, safety, amenities, and proximity to attractions.

The application should feel:

- Premium
- Minimal
- Clean
- Spacious
- Easy to scan
- Not text heavy
- Highly usable

Avoid dashboard clutter.

Use strong visual hierarchy and whitespace.

---

# Tech Stack

Frontend:

- React 18+
- Vite
- TypeScript
- Tailwind CSS
- Lucide React Icons

Libraries:

- clsx
- lucide-react
- recharts (for charts)
- framer-motion (optional)
- shadcn/ui (optional)

---

# Install Commands

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react clsx
npm install recharts
npm install framer-motion
```

---

# Design System

## Color Palette

Primary Colors:

- primary-blue: #00004A
- primary-blue-hover: #1E1B6D
- primary-blue-light: #E8E8FF

Accent Colors:

- wine-red: #6F1D1B
- wine-red-light: #F4E6E6

Neutral Colors:

- neutral-dark: #95818D
- neutral-light: #FBFEF9

Support Colors:

- success: #22C55E
- warning: #F59E0B
- error: #EF4444

Text Colors:

- text-primary: #111827
- text-secondary: #6B7280
- text-light: #FFFFFF

Border:

- border-light: #E5E7EB

Background:

- bg-main: #FBFEF9
- bg-card: #FFFFFF
- bg-muted: #F8F9FC

---

# Typography

Font Family:
Use Inter

Headings:

- H1: 48px bold
- H2: 32px semibold
- H3: 24px semibold
- H4: 20px medium

Body:

- large: 18px
- medium: 16px
- small: 14px

Button:

- 14px semibold

---

# Border Radius

Cards:

- 20px

Inputs:

- 14px

Buttons:

- 14px

Badges:

- pill radius

---

# Shadows

Cards:
box-shadow: 0 8px 24px rgba(0,0,0,0.08)

Hover:
box-shadow: 0 12px 30px rgba(0,0,0,0.12)

---

# Application Pages

There are 4 major pages.

1. Landing / Filter Page
2. Recommendations Page
3. Compare Page
4. Hotel Detail Page

---

# Global Layout

Top Navigation:

- Logo (StayWise)
- Search
- Compare
- About
- Profile Icon

Height:
80px

Container:
padding-inline: 32px

---

# Page 1 — Landing / Filter Page

Goal:
Collect search criteria and hotel preference weights.

Layout:
2-column desktop layout.

Left:
Large hero section

Right:
Filter card

Hero section includes:

- headline
- subtext
- CTA illustration

Headline:
Find your perfect stay, powered by AI.

Subtext:
Analyze real guest reviews across multiple platforms.

---

## Filter Card

Width:
420px

Contains:

### Basic Search Inputs

- Destination
  Icon: MapPin

- Check-in / Check-out
  Icon: CalendarDays

- Guests
  Icon: Users

- Budget Slider
  Icon: IndianRupee

---

## Preference Section

Title:
What matters most to you?

Use sliders for weighted importance.

Preferences:

- Cleanliness
- Food
- Kids Friendly
- Pet Friendly
- Fitness
- Nearby Attractions
- Safety
- Value for Money
- Quiet & Privacy
- Service Quality

Each preference:

- label
- icon
- slider
- numeric percentage

Slider range:
0–100

---

## Review Time Period

Segmented buttons:

- Past Month
- Past 6 Months
- Past Year
- Past 3 Years

Selected state uses primary-blue background.

---

## CTA Button

Text:
Find Best Matches

Full width button.

Background:
primary-blue

Hover:
primary-blue-hover

---

# Page 2 — Recommendations Page

Goal:
Display top 10 hotel matches.

Layout:
Vertical sections.

Sections:

1. AI Recommendation Banner
2. Top 10 Hotel Grid
3. Compare Bar

---

## AI Recommendation Banner

Horizontal card.

Contains:

- AI badge icon
- Recommended hotel image
- Hotel name
- Match score circle

Text:
Top Pick For You

Match Score example:
92%

---

## Hotel Grid

Desktop:
3 columns

Each card contains:

### Hero Image

Aspect ratio 16:9

### Hotel Name

Bold

### Location

Small muted text

### Rating

Star + numeric rating

### Metrics

Show only 4 user-priority metrics

Example:

- Cleanliness
- Food
- Kids Friendly
- Location

Metric style:
small icon + score

### Price

₹ per night

### Buttons

- View Details
- Compare checkbox

Compare selection:
Max 5 hotels

---

## Sticky Compare Bar

Appears only when 2+ hotels selected.

Bottom fixed bar.

Contains:

- thumbnails
- selected count
- compare button

Button text:
Compare Now

---

# Page 3 — Compare Page

Goal:
Compare selected hotels side by side.

Layout:
Horizontal comparison table.

Max:
5 hotels

Rows:

- AI Match Score
- Price
- Rating
- Cleanliness
- Food
- Kids Friendly
- Nearby Attractions
- Safety
- Value for Money

---

## AI Recommendation Card

Below comparison table.

Text:
Based on your preferences, Hotel X is the best choice.

Show:

- badge
- explanation
- CTA button

---

## Radar Chart

Use Recharts radar chart.

Axes:

- cleanliness
- food
- safety
- location
- value
- kids

---

# Page 4 — Hotel Detail Page

Goal:
Provide deep hotel insights.

Sections:

1. Hero Gallery
2. Overview
3. Metrics
4. Reviews
5. Nearby Attractions
6. Booking CTA

---

## Hero Gallery

Large hero image.

Thumbnail strip below.

Right side booking card.

Booking card contains:

- AI Match Score
- Price
- Book Now button
- External provider prices

Providers:

- Booking.com
- Agoda
- MakeMyTrip

---

## AI Summary Section

Card showing:
AI-generated summary of guest reviews.

Example:
Guests love cleanliness and breakfast.
Families rate kids activities highly.
Weekend crowding reported.

---

## Metrics Section

Show category scores as horizontal bars.

Metrics:

- Cleanliness
- Food
- Fitness
- Kids Friendly
- Safety
- Location

Score range:
0–5

---

## Trend Chart

Line chart showing rating trends over time.

Time filter:

- month
- year
- 3 years

---

## Reviews Section

Review cards with:

- reviewer name
- reviewer type
- rating
- review text
- date

Tabs:

- All
- Families
- Couples
- Solo
- Business

---

## Nearby Attractions

Display list and mini map.

Each attraction shows:

- name
- distance
- travel time
- directions button

---

# Reusable Components

Create reusable components.

Components folder:

src/components

Components:

- Navbar
- HeroSection
- FilterPanel
- PreferenceSlider
- HotelCard
- RecommendationBanner
- CompareBar
- ComparisonTable
- BookingCard
- ReviewCard
- RatingBadge
- MetricBar
- SectionHeader
- Button
- Card
- Input
- Tabs

---

# Folder Structure

src/
components/
pages/
LandingPage.tsx
RecommendationsPage.tsx
ComparePage.tsx
HotelDetailPage.tsx
data/
hooks/
types/
utils/

---

# Responsive Breakpoints

Mobile:
< 768px

Tablet:
768px–1024px

Desktop:

> 1024px

Requirements:

- Mobile collapses grid to single column
- Filters become drawer
- Compare table becomes horizontal scroll

---

# UX Rules

Important:

- Avoid clutter
- Prefer whitespace
- Limit visible text
- Progressive disclosure
- One decision per screen
- Keep cards clean
- Use icons to reduce text
- Use subtle animations
- Smooth hover transitions

Animation duration:
200ms

---

# Accessibility

Ensure:

- keyboard navigation
- aria labels
- accessible contrast
- focus states

Minimum contrast ratio:
4.5:1
