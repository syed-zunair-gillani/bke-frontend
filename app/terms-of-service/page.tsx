
import { client } from '@/sanity/lib/client';
import PrivacyPolicyModule from '../components/module/privacy-policy';
import { QTerms } from '@/sanity/lib/query';

async function getData() {
  const termsRes = await client.fetch(QTerms);
  return {
    terms:termsRes
  }
}

export default async function TermsOfService() {
  const { terms } = await getData()
  return (
    <PrivacyPolicyModule data={terms[0]}/>
  );
}