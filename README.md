# A Digital Garden Just for You

## Overview
This is a romantic digital gift featuring a sunflower theme for August. The interactive website shows a garden with a flower bud that blooms into a sunflower when clicked, revealing sweet messages and animations.

## Features
- Interactive sunflower that blooms when clicked
- Falling petals animation for a dreamy effect
- Interactive petals with love messages
- Animated butterflies and bees with love notes
- Photo gallery section for personal memories
- Special "Pick this Flower" button that generates a digital bouquet card

## How to Use
1. Open `index.html` in a web browser
2. Click on the flower bud to make it bloom
3. Click on the sunflower petals to see love messages
4. Click on butterflies and bees to see more messages
5. Hover over photos to see captions
6. Click the "Pick this Flower" button to see the special bouquet card

## Customization

### Changing the Flower Theme
To change the flower for a different month:
1. Modify the flower colors in `styles.css` (look for `.bud`, `.sunflower`, `.center`, and `.petal` classes)
2. Update the message in `index.html` (look for the `#flower-message` element)
3. Adjust the petal shapes and colors as needed

### Changing Messages
1. Edit the messages in the HTML for the main message (in `#flower-message`)
2. Change petal messages by updating the `data-message` attributes in the HTML
3. Update insect messages in the JavaScript file (in the `createInsects()` function)
4. Change the bouquet card message in the HTML

### Adding Your Own Photos
1. Replace the placeholder images (`placeholder1.jpg`, `placeholder2.jpg`, etc.) with your own photos
2. Update the captions in the HTML (in the `.caption` elements)

## File Structure
- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript functionality
- `placeholder1.jpg` through `placeholder4.jpg` - Placeholder images for the gallery

## Notes
- The website is responsive and works on mobile devices
- All animations are created with CSS for smooth performance
- The design uses soft pastel colors for a romantic feel
- You can easily change colors, messages, and images to customize for different occasions