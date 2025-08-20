#!/usr/bin/env node

// Test script for Italian Brainrot Characters project

console.log('🧪 Testing Italian Brainrot Characters project...\n');

// Test 1: Check if characters.js can be loaded
console.log('1. Testing characters.js...');
try {
    const characters = require('./characters.js');
    console.log(`   ✅ characters.js loaded successfully`);
    console.log(`   📊 Total characters: ${characters.length}`);
    
    // Test character structure
    if (characters.length > 0) {
        const firstChar = characters[0];
        const requiredFields = ['id', 'name', 'koreanName', 'motive'];
        const missingFields = requiredFields.filter(field => !firstChar[field]);
        
        if (missingFields.length === 0) {
            console.log('   ✅ Character structure is valid');
        } else {
            console.log(`   ⚠️  Missing fields in characters: ${missingFields.join(', ')}`);
        }
    }
} catch (error) {
    console.log(`   ❌ Error loading characters.js: ${error.message}`);
}

// Test 2: Check if required files exist
console.log('\n2. Checking required files...');
const requiredFiles = [
    'index.html',
    'characters.js',
    'netlify.toml',
    'README.md',
    'package.json'
];

requiredFiles.forEach(file => {
    const fs = require('fs');
    if (fs.existsSync(file)) {
        console.log(`   ✅ ${file} exists`);
    } else {
        console.log(`   ❌ ${file} missing`);
    }
});

// Test 3: Check if images directory exists
console.log('\n3. Checking assets...');
const fs = require('fs');
if (fs.existsSync('i')) {
    const imageFiles = fs.readdirSync('i').filter(file => file.endsWith('.webp'));
    console.log(`   ✅ Images directory exists with ${imageFiles.length} .webp files`);
} else {
    console.log('   ⚠️  Images directory (i/) not found');
}

// Test 4: Check favicon files
const faviconFiles = ['favicon.svg', 'favicon-32.png', 'favicon-192.png'];
faviconFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`   ✅ ${file} exists`);
    } else {
        console.log(`   ⚠️  ${file} missing`);
    }
});

console.log('\n🎉 Testing complete!');
console.log('\nTo deploy to Netlify:');
console.log('1. npm install -g netlify-cli');
console.log('2. npm run deploy');
console.log('\nOr drag and drop the folder to netlify.com');
