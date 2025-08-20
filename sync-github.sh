#!/bin/bash

# Sync Italian Brainrot Archive with GitHub
# Repository: https://github.com/cssbandit/brainrotarchive.xyz

echo "🔄 Syncing Italian Brainrot Archive with GitHub..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Please install Git first."
    exit 1
fi

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git remote add origin https://github.com/cssbandit/brainrotarchive.xyz.git
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update Italian Brainrot Archive S2: Mutation Chronicles

- Fixed table of contents anchoring
- Prevented flash of original content
- Removed tracking references
- Updated URL to brainrotarchive.xyz
- Fixed expand/collapse functionality
- Removed unwanted elements
- Updated character descriptions"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Successfully synced with GitHub!"
echo "🌐 Your site is now available at: https://brainrotarchive.xyz"
