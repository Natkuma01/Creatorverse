import { createClient } from '@supabase/supabase-js';

const URL = 'https://iirbumrwkvaudvtrugpa.supabase.co';

const API_KEY = 'sb_publishable_KfDC7sNUFZPkPVwZichLPg_HueUgSB8';

export const supabase = createClient(URL, API_KEY);