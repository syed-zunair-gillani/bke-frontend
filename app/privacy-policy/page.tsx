import { client } from '@/sanity/lib/client';
import { QPrivacy } from '@/sanity/lib/query';
import PrivacyPolicyModule from '../components/module/privacy-policy';

async function getData() {
  const privacyRes = await client.fetch(QPrivacy);
  return {
    privacy:privacyRes
  }
}

export default async function PrivacyPolicy() {
  const { privacy } = await getData()

  return (
    <PrivacyPolicyModule data={privacy[0]}/>
  );
}