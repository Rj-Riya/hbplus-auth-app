export const validateDomain = (email) => {

  const allowedDomains =
    process.env.EXPO_PUBLIC_ALLOWED_DOMAIN.split(",");

  if (!email) return false;

  const domain = email.split("@")[1];

  return allowedDomains.includes(domain);
};