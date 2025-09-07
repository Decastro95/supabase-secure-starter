// scripts/seed-shops.js
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // service role key so it can insert
);

async function seed() {
  const demoShops = [
    { id: 1, name: "Demo Shop A" },
    { id: 2, name: "Demo Shop B" },
    { id: 3, name: "Demo Shop C" },
  ];

  const { data, error } = await supabase.from("shops").insert(demoShops);

  if (error) {
    console.error("❌ Error seeding shops:", error);
    process.exit(1);
  } else {
    console.log("✅ Seeded shops:", data);
    process.exit(0);
  }
}

seed();
