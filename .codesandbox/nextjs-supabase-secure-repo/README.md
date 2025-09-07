# 🛠️ Next.js + Supabase Secure Starter

A minimal starter that connects Next.js with Supabase **securely**:
- ✅ Supabase anon key only on the client
- ✅ Supabase service role key only on the server (API routes)
- ✅ Uses Inter font from Google Fonts (no broken Geist import)
- ✅ Ready for **CodeSandbox → Vercel** deploy flow

## 🚀 Quick Start

### 1. Clone or Fork
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

> ⚠️ **Important:**  
> - Only the `NEXT_PUBLIC_...` keys are exposed to the browser.  
> - The `SUPABASE_SERVICE_ROLE_KEY` is **server-side only** — don’t expose it on the client.

---

## 🧑‍💻 Development

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 💻 CodeSandbox Setup

1. Go to [CodeSandbox → Import from GitHub](https://codesandbox.io/s/).  
2. Paste your repo URL.  
3. Add your `.env.local` values in **Sandbox Secrets**.  
4. Click **Deploy to Vercel** (from Sandbox).

---

## ☁️ Vercel Deployment

1. Go to [Vercel](https://vercel.com).  
2. Import your GitHub repo.  
3. Add the same environment variables under:  
   `Project Settings → Environment Variables`.  
4. Deploy 🚀  

---

## 📂 Project Structure

```
pages/
 ├─ index.js          // UI with "Run import_shops()" button
 └─ api/import-shops.js // API route that calls Supabase function
.env.local.example     // example env vars
next.config.js
package.json
README.md
```

---

## 📝 Notes

- This template is intentionally minimal.  
- Extend with: CSV upload → Supabase → role-based dashboards → sales seeding.  
- All sensitive keys stay on the server only.  
