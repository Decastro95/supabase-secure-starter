// pages/api/import-shops.js
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  // Secure keys only available on the server
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    // Insert demo shops
    const { data, error } = await supabase
      .from('shops')
      .insert([
        { id: 1, name: 'Demo Shop A' },
        { id: 2, name: 'Demo Shop B' },
        { id: 3, name: 'Demo Shop C' },
      ])
      .select();

    if (error) throw error;

    return res.status(200).json({ success: true, shops: data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
