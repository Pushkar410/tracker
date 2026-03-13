# Vrushank's LeetCode Tracker - Code Documentation

## Overview
This is a single-page HTML application that tracks your progress through 350 LeetCode problems organized into 26 weeks. All your progress is saved in your browser's local storage.

## File Structure
- **lc8w.html** - Complete tracker application (HTML + CSS + JavaScript)
- **lc list.txt** - Reference list of all 350 problems

## How It Works

### 1. **Data Storage (Lines 968-984)**
- Uses browser's `localStorage` to save:
  - Current week and day position
  - Which problems you've completed
- Data persists even after closing the browser

### 2. **Problems Database (Lines 533-980)**
- Contains all 350 LeetCode problems
- Organized into 26 weeks
- Each week has multiple days (max 7 days per week)
- Each problem includes:
  - Problem ID (e.g., LC 1)
  - Name
  - Difficulty (Easy/Medium/Hard)
  - Priority stars (⭐⭐⭐)
  - LeetCode link
  - Description
  - Learning goal

### 3. **Main Functions**

#### `init()` - Starts the app
- Runs when page loads
- Builds the sidebar
- Loads your current day's problems

#### `renderSidebar()` - Builds the week list
- Calculates progress for each week
- Shows completion percentage
- Displays day indicator dots (green = complete, yellow = partial, gray = not started)

#### `loadDay(week, day)` - Shows problems for a specific day
- Displays all problems for that day
- Shows checkboxes for completion tracking
- Updates progress counters

#### `toggleProblem(problemId)` - Marks problem complete/incomplete
- Saves to localStorage
- Reloads the page to show updated state

#### `previousDay()` / `nextDay()` - Navigation
- Move between days
- Automatically switches weeks when needed

### 4. **User Interface**

#### Sidebar (Left)
- Overall progress (e.g., "45/350")
- List of all 26 weeks
- Each week shows:
  - Week number and title
  - Completion count and percentage
  - Progress bar
  - Day indicator dots

#### Main Content (Right)
- Top bar with:
  - Previous/Next day buttons
  - Current week and day label
  - Today's progress
  - This week's progress
- Problem cards with:
  - Checkbox to mark complete
  - Problem number and name
  - Priority stars
  - Difficulty badge (color-coded)
  - Description
  - Learning goal
  - "Open LeetCode" button

### 5. **Color Scheme**
- **Background**: Pure black (#000000)
- **Text**: White (#ffffff) and light gray (#cccccc)
- **Difficulty badges**:
  - Easy: Light green (#90ee90)
  - Medium: Gold (#ffd700)
  - Hard: Light red (#ff6b6b)
- **Priority stars**: Gold (#ffd700)

### 6. **Features**
✅ All 350 problems included
✅ Progress tracking with checkboxes
✅ Auto-save to browser storage
✅ Week-by-week navigation
✅ Day-by-day navigation
✅ Visual progress indicators
✅ Direct links to LeetCode
✅ Responsive dark theme
✅ Color-coded difficulty levels

## How to Use
1. Open `lc8w.html` in your browser
2. Click on any week in the sidebar to view it
3. Check off problems as you complete them
4. Use ← → buttons to navigate between days
5. Click "Open LeetCode →" to solve a problem
6. Your progress is automatically saved!

## Technical Details
- **No external dependencies** - Works offline
- **Single file** - Easy to share and backup
- **Browser storage** - Progress saved locally
- **Responsive design** - Clean and modern UI
- **Performance** - Handles all 350 problems smoothly

## Customization
To modify the tracker:
- **Change colors**: Edit the CSS section (lines 8-500)
- **Add problems**: Edit the `problemsDatabase` object (lines 533-980)
- **Modify layout**: Edit the HTML structure (lines 487-531)

---
Created for Vrushank's FAANG preparation journey 🚀
