export function checkCloudSettings(url?: string, key?: string): string {
  if (!url && !key) return '';
  if (!url || !key) return 'Set both Supabase values, or leave both empty for browser storage.';
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && !(parsed.protocol === 'http:' && ['127.0.0.1', 'localhost'].includes(parsed.hostname))) {
      return 'Use HTTPS for Supabase, or HTTP for the local exercise stack.';
    }
  } catch { return 'Check the Supabase project URL.'; }
  if (key.startsWith('sb_publishable_')) return '';
  try {
    const payload = key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    if (JSON.parse(atob(payload)).role === 'anon') return '';
  } catch { /* Invalid legacy key; show a configuration error below. */ }
  return 'Use a publishable key, or a legacy anon key for compatibility. Never use a secret or service_role key.';
}
