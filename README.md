# Sunny's Missing Shoe - Comic Project

A children's comic strip about a toddler named Sunny and her magical shoe adventure.

## Project Structure

```
sunnys-secret/
├── assets/
│   └── comic_images/
│       ├── page1/
│       │   ├── panel1.png
│       │   └── panel2.png
│       ├── page2/
│       │   ├── panel1.png
│       │   ├── panel2.png
│       │   └── panel3.png
│       ├── page3/
│       │   ├── panel1.png
│       │   ├── panel2.png
│       │   └── panel3.png
│       ├── page4/
│       │   ├── panel1.png
│       │   ├── panel2.png
│       │   └── panel3.png
│       ├── page5/
│       │   ├── panel1.png
│       │   └── panel2.png
│       ├── front_cover.png
│       └── back_cover.png
├── scripts/
│   └── comic_script.md
├── layouts/
│   ├── page1.svg
│   ├── page2.svg
│   ├── page3.svg
│   ├── page4.svg
│   ├── page5.svg
│   ├── speech_bubble.svg
│   └── shoe_glow.svg
├── index.html
├── server.js
└── README.md
```

## Technical Specifications

### Panel Dimensions
- Standard comic page size: 11" x 17" (279mm x 432mm)
- Bleed area: 0.25" (6mm) on all sides
- Safe area: 0.5" (13mm) from edges
- Panel grid: 3x2 for pages 1-4, 2x1 for page 5
- Individual panel dimensions: 
  - Pages 1-4: 3.5" x 5.5" (89mm x 140mm) per panel
  - Page 5: 5.25" x 8.25" (133mm x 210mm) per panel

### Typography Guidelines
- Dialogue font: Comic Sans MS or similar friendly font
- Font sizes:
  - Regular dialogue: 12pt
  - Emphasis/exclamation: 14pt
  - Captions: 10pt
  - "SUNNYYYYYY!": 24pt bold
- Speech bubble padding: 0.25" (6mm) from text to bubble edge

### Color Specifications
- Main shoe colors: 
  - Neon Green: #39FF14
  - Orange: #FF5F1F
- Golden glow effect: 
  - Inner glow: #FFD700
  - Outer glow: #FFA500 with 30% opacity
- Background colors:
  - Interior walls: #F5F5F5
  - Furniture: Various wood tones
  - Delhi street: Warm, dusty tones

### Visual Guidelines
1. Speech Bubble Placement:
   - Place bubbles in the top third of panels when possible
   - Avoid covering important visual elements
   - Use curved tails for normal dialogue
   - Use jagged tails for exclamations
   - For "Abh bataunga nahi" repetition:
     - Vary bubble shapes slightly
     - Use different positions in each panel
     - Add small visual elements (stars, sparkles) to keep it interesting

2. Panel Flow:
   - Maintain consistent reading direction (left to right, top to bottom)
   - Use gutters (spaces between panels) of 0.25" (6mm)
   - Ensure clear visual hierarchy in each panel

3. Character Design:
   - Sunny: Maintain consistent proportions and expressions
   - Mummy: Show progression of tiredness through the search
   - Papa: Appears only in first panel, establish clear design

## Workflow
1. Create rough sketches for each panel
2. Develop character designs and expressions
3. Create background templates
4. Layout panels with proper dimensions
5. Add dialogue and captions
6. Finalize artwork
7. Export in high resolution (300 DPI minimum)

## Notes
- Maintain consistent lighting throughout the story
- Pay special attention to the magical shoe glow effect
- Ensure Delhi-specific details are accurate (architecture, clothing, etc.)
- Keep the 1998 setting consistent in all visual elements

## Comic Progress

### Covers (Complete)
- Front Cover: Completed ✓
- Back Cover: Completed ✓

### Comic Pages (All Complete)
- Page 1 (Fully Complete)
  - `panel1.png` - Sunny receiving the shoes ✓
  - `panel2.png` - Sunny with the magical shoe ✓
- Page 2 (Fully Complete)
  - `panel1.png` - Morning preparation ✓
  - `panel2.png` - Missing shoe discovery ✓
  - `panel3.png` - Beginning of the search ✓
- Page 3 (Fully Complete)
  - `panel1.png` - Mummy confronting Sunny ✓
  - `panel2.png` - Living room search ✓
  - `panel3.png` - Bathroom search ✓
- Page 4 (Fully Complete)
  - `panel1.png` - Balcony search ✓
  - `panel2.png` - Kitchen search ✓
  - `panel3.png` - Final bedroom scene ✓
- Page 5 (Fully Complete)
  - `panel1.png` - Shoe discovery ✓
  - `panel2.png` - Sunny's laughter ✓

### In Progress
- All work completed! 🎉

### Remaining Work
- None! The comic is complete! 🎉

## Preview Instructions

1. Start the local server:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## File Naming Convention

- Images are stored in page-specific folders (page1, page2, etc.)
- Each panel is named sequentially (panel1.png, panel2.png, etc.)
- Completed panels are stored in their respective page folders
- The preview page (index.html) automatically updates to show completed panels

## Tools Used

- HTML/CSS for the preview interface
- Node.js for the local server
- SVG for layout templates

## Folder Organization

### completed/
- Contains finished panels
- Organized by page number
- Final versions only

### in_progress/
- Current work in progress
- Working files and drafts
- Temporary storage

### Original page folders/
- Keep original structure
- Use for reference
- Maintain organization

## File Specifications

### Image Requirements
- Resolution: Minimum 300 DPI
- Color Mode: RGB for digital, CMYK for print
- File Formats:
  - Working files: .psd, .clip, .kra
  - Final files: .png (transparency), .jpg (no transparency)

### Naming Conventions
1. Use lowercase letters
2. Simple panel numbering (panel1.png, panel2.png, etc.)
3. Keep files in their respective page folders

### Version Control
- Add version numbers when needed (panel1_v1.png, panel1_v2.png)
- Mark final versions with _final suffix
- Keep working files separate from final versions

## Workflow Tips

1. **Panel Creation**
   - Work in layers
   - Save progress frequently
   - Keep original files backed up
   - Use the SVG templates as guides

2. **File Organization**
   - Move completed panels to completed/ folder
   - Keep in-progress work in in_progress/
   - Maintain backups of all versions

3. **Final Assembly**
   - Ensure consistent style across panels
   - Check resolution and color mode
   - Verify file formats

## Backup Recommendations
1. Keep a copy of all files in a separate location
2. Use cloud storage for important versions
3. Maintain backups of working files 