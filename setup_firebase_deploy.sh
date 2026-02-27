#!/bin/bash
set -e

echo "======================================================="
echo "Hotel O Colonial - Firebase Deployment & GitHub Actions Setup"
echo "======================================================="
echo ""
echo "Step 1: Authenticate with Firebase"
echo "Running: firebase login --reauth"
firebase login --reauth || { echo "Firebase login failed. Please try again."; exit 1; }

echo ""
echo "Step 2: Create a Firebase Project"
echo "Please choose a unique project ID (e.g. hotel-o-colonial-YOUR_INITIALS)"
read -p "Enter project ID: " PROJECT_ID
firebase projects:create $PROJECT_ID --display-name "Hotel O Colonial"

echo ""
echo "Step 3: Tell local folder to use this new project"
firebase use --add $PROJECT_ID

echo ""
echo "Step 4: Set up GitHub Actions for automated deployment"
echo "We will now run 'firebase init hosting:github'."
echo "Please select the repository (e.g., Tim-Spurlin/hotel-o-colonial)"
echo "And agree to set up the workflow to run a build script: 'npm ci && npm run build'"
echo "And deploy to Firebase Hosting on push to the 'main' branch."
firebase init hosting:github

echo ""
echo "Step 5: Perform initial build and deploy"
npm run build
firebase deploy --only hosting

echo ""
echo "======================================================="
echo "Setup Complete!"
echo "Your site should now be live at: https://$PROJECT_ID.web.app"
echo "Don't forget to commit the changes and push to GitHub so the automated deployment takes over!"
echo "Run: git add . && git commit -m 'Add Firebase Hosting and GitHub Actions setup' && git push"
echo "======================================================="
