#!/bin/bash

# Italian Brainrot Characters - Netlify Deployment Script

echo "🚀 Preparing Italian Brainrot Characters for Netlify deployment..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Check if all required files exist
required_files=("index.html" "characters.js" "netlify.toml" "README.md")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing required file: $file"
        exit 1
    fi
done

echo "✅ All required files found"

# Check if images directory exists
if [ ! -d "i" ]; then
    echo "⚠️  Warning: Images directory 'i' not found. Character images may not display correctly."
fi

# Check if favicon files exist
favicon_files=("favicon.svg" "favicon-32.png" "favicon-192.png")
for file in "${favicon_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "⚠️  Warning: Favicon file $file not found"
    fi
done

echo "📦 Ready to deploy!"

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
netlify deploy --prod --dir=.

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your site is now live on Netlify!"
else
    echo "❌ Deployment failed. Please check your Netlify configuration."
    exit 1
fi
