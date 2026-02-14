# Quick Customization Guide

## Want to Change "Elite IIT Academy" to Your Brand Name?

Follow these simple steps:

---

## Step 1: Update Branding Configuration (2 minutes)

Open `src/config/branding.ts` and change:

```typescript
export const BRANDING = {
  // Change these to your details:
  name: 'Your Academy Name Here',
  tagline: 'Your Tagline Here',
  description: 'Your description',
  
  contact: {
    phone: '+91-YOUR-NUMBER',
    email: 'your-email@domain.com',
    whatsapp: '91YOUR-NUMBER',
    address: 'Your Address'
  },
  
  stats: {
    yearsOfExperience: 20,  // Your years
    studentsEnrolled: 50000, // Your numbers
    iitSelections: 2000,     // Your numbers
    successRate: 95,          // Your percentage
    centers: 15,              // Your centers
    faculty: 50               // Your faculty count
  }
};
```

That's it! Your brand name will automatically update everywhere.

---

## Step 2: Replace Images (10 minutes)

### Option A: Use Your Own Images
1. Add your images to `public/images/` folder
2. Update `src/utils/images.ts` with your image paths

### Option B: Keep Using Unsplash (for testing)
- Current setup already uses Unsplash
- Replace with your images before launch

---

## Step 3: Update Contact Details in App.tsx (2 minutes)

Find this section in `src/App.tsx`:

```typescript
<FloatingContactButton 
  whatsappNumber="919876543210"     // Change to your number
  phoneNumber="+919876543210"        // Change to your number
  whatsappMessage="Your custom message"
  position="left"
/>
```

---

## Step 4: Test Your Changes (5 minutes)

```bash
npm run dev
```

Check:
- ✅ Your company name appears in logo
- ✅ Your tagline shows below logo
- ✅ Contact numbers are correct
- ✅ Email addresses are yours
- ✅ Statistics match your numbers

---

## Common Customizations

### Change Colors
Edit `src/config/branding.ts`:
```typescript
colors: {
  primary: '#2563eb',    // Your primary color
  secondary: '#16a34a',  // Your secondary color
  accent: '#f59e0b',     // Your accent color
}
```

### Add Your Logo Image
1. Add logo file to `public/logo.png`
2. Update `src/components/Logo.tsx`:
```typescript
<img src="/logo.png" alt="Your Company" />
```

### Update Footer
Edit `src/components/Footer.tsx` to add:
- Your company info
- Your social media links
- Your policies

---

## Need Help?

All customization happens in these 3 files:
1. `src/config/branding.ts` - Company info
2. `src/utils/images.ts` - Images
3. `src/App.tsx` - Contact buttons

Everything else automatically uses these configurations!

---

## Production Checklist

Before launching:
- [ ] Company name changed
- [ ] Contact info updated
- [ ] Real images added
- [ ] Email addresses set up
- [ ] Phone numbers configured
- [ ] WhatsApp Business ready
- [ ] Social media accounts created
- [ ] Domain pointed correctly
- [ ] SSL certificate installed
- [ ] Google Analytics added

---

**That's it! Your site is now branded with your company name!** 🎉

