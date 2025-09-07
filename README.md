# Next.js + Supabase Secure Starter

This is a ready-to-use **Next.js 13 + Supabase** starter with:
- ✅ Secure API routes (no Supabase service keys exposed on client)
- ✅ Preconfigured Inter font (no `Geist` bug)
- ✅ Auto-install & auto-run in CodeSandbox (`.codesandbox/tasks.json`)
- ✅ Ready for one-click deployment to Vercel

---

## 🚀 Quick Start

### 1. Import into CodeSandbox
- Go to [CodeSandbox Import](https://codesandbox.io/s/)  
- Paste your repo URL:  
 
## 🔑 Supabase Keys Setup

To run this project, you’ll need to configure your Supabase keys in a `.env.local` file.

### 1. Get Your Project URL
1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project).
2. Select your project.
3. Navigate to **⚙️ Settings → API**.
4. Copy the **Project URL** (it looks like `https://your-ref.supabase.co`).

Set this as:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://<your-ref>.supabase.co

