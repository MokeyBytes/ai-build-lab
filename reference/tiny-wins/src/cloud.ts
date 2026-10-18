import { createClient } from '@supabase/supabase-js';
import { checkCloudSettings } from './cloud-settings';

const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
export const configurationError = checkCloudSettings(url, key);
export const cloud = !configurationError && url && key ? createClient(url, key) : null;
