#!/bin/bash
# Verify Stats
if grep -q 'data-target="2000">0</div>' index.html && grep -q 'לקוחות פעילים' index.html; then
    echo "✅ 2000 Active Clients found."
else
    echo "❌ 2000 Active Clients not found."
fi

if grep -q 'data-target="5">0</div>' index.html && grep -q 'שנות ניסיון בענף' index.html; then
    echo "✅ 5 Years Experience found."
else
    echo "❌ 5 Years Experience not found."
fi

if grep -q 'data-target="500">0</div>' index.html && grep -q 'אנשי מקצוע' index.html; then
    echo "✅ 500 Professionals found."
else
    echo "❌ 500 Professionals not found."
fi

# Ensure 4th item is gone (Active Projects 100)
if grep -q 'data-target="100"' index.html; then
    echo "❌ Old '100 Active Projects' still present."
else
    echo "✅ Old '100 Active Projects' successfully removed."
fi
