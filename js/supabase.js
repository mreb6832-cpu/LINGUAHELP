import { createClient } from
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL =
  "https://czhdubqzdemjrzdamxmy.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_f50s-O5L75iyIzwRkhXskw_5J3XjN0W";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
```
