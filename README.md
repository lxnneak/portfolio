# Linnéa Karlsson - Developer Portfolio

I built this responsive portfolio to introduce myself and share my selected projects, technical skills, education, work experience, and contact details.

## Contents

- Introduction and profile photo
- Featured projects linking to their GitHub repositories
- Technology skills grouped by area
- Education and work experience, shown in a switchable section
- Contact links in the footer

## Interactions

- **Education / Work Experience:** Select either button to display its resume section. The selected state and visible section update together.
- **Sticky header:** Scrolling more than 20 pixels changes the header's padding, background, border, and shadow. Scrolling back to the top restores its initial appearance.
- **Responsive layout:** At narrower viewport widths, the introduction, project list, and skills/experience columns reflow vertically. The resume buttons also become more compact on very narrow screens.
- **Hover and focus feedback:** Links are underlined on hover and keyboard focus, and social icons have a subtle hover effect.

## Accessibility

Accessibility support includes:

- Semantic page landmarks such as `header`, `nav`, `main`, and `footer` organize the content.
- The resume switcher uses native buttons with pressed states, both buttons can be reached with Tab and activated with Enter or Space.
- Keyboard-focused buttons have a visible outline. External project and social links announce that they open in a new tab and use `rel="noopener noreferrer"`.
- The profile photo and icon images have alternative text, and contact links have accessible labels.
- Responsive layouts support smaller screens.

The page has not had a formal accessibility audit. Screen-reader behavior, color contrast, and the overall experience across browsers still need to be tested.

## Built With

- HTML
- CSS
- Vanilla JavaScript
