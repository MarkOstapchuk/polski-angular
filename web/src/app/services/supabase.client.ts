import { createClient, processLock } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://tddrqknagbsqjlwujodb.supabase.co',
  'sb_publishable_B6O6DJ2idpth8xJrI7BliQ_XFTCf46x',
  {
    auth: {
      lock: processLock,
    },
  },
);
