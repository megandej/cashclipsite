# CashClip Landing Page

A modern, responsive landing page for CashClip - a smart financial management application. Built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
cashclipsite/
├── web/
│   ├── index.html              # Main landing page
│   ├── css/
│   │   └── styles.css          # All styling
│   ├── js/                     # JavaScript folder (for future interactivity)
│   ├── assets/
│   │   ├── images/             # Image assets
│   │   └── icons/              # Icon assets
│   ├── favicon.png             # Favicon
│   └── manifest.json           # PWA manifest
├── .gitignore
└── README.md
```

## Features

- 🎨 **Modern Design** - Beautiful gradient-based UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Lightweight** - Pure HTML/CSS/JS with no dependencies
- 🚀 **Fast** - Static content for quick loading
- ♿ **Accessible** - Semantic HTML structure

## Sections Included

- Navigation bar with smooth scrolling
- Hero section with call-to-action buttons
- Features showcase (6 key features)
- How It Works process (4 steps)
- Benefits section
- Pricing tiers (Free, Pro, Premium)
- Final call-to-action
- Comprehensive footer

## Local Development

### View the Site Locally

1. Open the `web/index.html` file directly in your browser, or
2. Run a local server (recommended):

   ```bash
   # Using Python 3 (recommended)
   python3 -m http.server 8000 --directory web
   
   # Using Node.js (if you have http-server installed)
   npx http-server web
   ```

3. Visit `http://localhost:8000` in your browser

## GitHub Pages Deployment

### Step 1: Initialize Git Repository

```bash
cd /Users/megandejoya/cashclipsite
git init
git add .
git commit -m "Initial commit: CashClip landing page"
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `cashclipsite` (or your preferred name)
3. Do NOT add README, .gitignore, or license (we already have them)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/cashclipsite.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/web`
4. Click **Save**

GitHub will automatically deploy your site. Your landing page will be available at:
- `https://your-username.github.io/cashclipsite/`

### Step 5: Connect Your Custom Domain

1. In **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `cashclip.com`)
3. Click **Save**
4. Update your domain's DNS records to point to GitHub Pages:

   **For apex domain (example.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
           185.199.109.153
           185.199.110.153
           185.199.111.153
   ```

   **For subdomain (www.example.com):**
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

5. Wait for DNS to propagate (usually 5-24 hours)
6. Enable "Enforce HTTPS" once DNS is verified

See [GitHub's domain configuration guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for more details.

## Customization

### Edit Content

Edit `web/index.html` to update:
- Company name and tagline
- Feature descriptions
- Pricing tiers
- Links and buttons

### Edit Styling

Modify `web/css/styles.css` to change:
- Colors (primary gradient: `#667eea` and `#764ba2`)
- Fonts
- Spacing and layout
- Animations and transitions

### Add Images

Place images in `web/assets/images/` and reference them:
```html
<img src="assets/images/your-image.png" alt="Description">
```

## Performance Optimization

To optimize for production:

1. **Minify CSS/HTML** - Use a tool like [minify-html](https://github.com/wilsonzlin/minify-html)
2. **Optimize images** - Compress with [TinyPNG](https://tinypng.com) or similar
3. **Add gzip compression** - GitHub Pages handles this automatically
4. **Use a CDN** - Consider using Cloudflare for additional caching

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository or contact the development team.

---

**Made with ❤️ for CashClip**

