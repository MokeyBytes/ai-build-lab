import { expect, it } from 'vitest';
import { checkCloudSettings } from './cloud-settings';

it('allows browser mode and valid public configuration', () => {
  expect(checkCloudSettings()).toBe('');
  expect(checkCloudSettings('https://example.supabase.co', 'sb_publishable_example')).toBe('');
  expect(checkCloudSettings('http://127.0.0.1:54321', 'sb_publishable_example')).toBe('');
});

it('rejects partial configuration, invalid URLs, and privileged keys', () => {
  for (const [url, key] of [
    ['https://example.supabase.co', undefined],
    ['not a url', 'sb_publishable_example'],
    ['http://example.supabase.co', 'sb_publishable_example'],
    ['https://example.supabase.co', 'sb_secret_example'],
    ['https://example.supabase.co', `header.${btoa('{"role":"service_role"}')}.signature`]
  ]) expect(checkCloudSettings(url, key)).not.toBe('');
});

it('accepts only the anon role in a legacy key', () => {
  expect(checkCloudSettings('http://127.0.0.1:54321', `header.${btoa('{"role":"anon"}')}.signature`)).toBe('');
});
