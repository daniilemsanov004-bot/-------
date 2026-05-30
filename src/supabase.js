import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bmwhimqdlcvejtdjzwzm.supabase.co'

const supabaseKey = 'sb_publishable_tg1m8bA-kh1L1S9r6frdyA_U-NIhmaa'

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)