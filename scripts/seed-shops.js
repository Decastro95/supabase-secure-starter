// scripts/seed-shops.js
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seed() {
  const demoShops = [
    { name: "Demo Shop A" },
    { name: "Demo Shop B" },
    { name: "Demo Shop C" },
  ];

  const { data, error } = await supabase.from("shops").insert(demoShops);

  if (error) {
    console.error("❌ Error seeding shops:", error.message);
    process.exit(1);
  } else {
    console.log("✅ Seeded shops:", data);
    process.exit(0);
  }
}

seed();
