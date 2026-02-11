#!/bin/bash
# Verify Email
if grep -q "cs@billclick.co.il" index.html; then
    echo "✅ Email updated correctly."
else
    echo "❌ Email update failed."
fi

# Verify Footer Year
if grep -q "2021" index.html; then
    echo "✅ Footer year updated correctly."
else
    echo "❌ Footer year update failed."
fi

# Verify CSS White Text
if grep -q "info-item h4" style.css && grep -q "color: white" style.css; then
    echo "✅ CSS rule for white text likely present (manual check recommended for specificity)."
else
    echo "❌ CSS rule for transparent text might be missing."
fi
