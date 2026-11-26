import { getEntry } from "astro:content";

export const privacyPolicySlug = "politica-de-privacidade";

export async function getPublishablePrivacyPolicy() {
  const entry = await getEntry("privacyPolicy", "privacy-policy");
  const policy = entry?.data;

  if (!policy?.controllerName || !policy.contactEmail || !policy.lastUpdated) {
    return undefined;
  }

  const hasIncompleteForm = policy.forms.some(
    ({ name, data, purpose, legalBasis, recipients, retention }) =>
      !name || !data || !purpose || !legalBasis || !recipients || !retention,
  );

  if (hasIncompleteForm) {
    return undefined;
  }

  return policy;
}
