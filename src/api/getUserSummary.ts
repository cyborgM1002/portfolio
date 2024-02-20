import { USER_SUMMARY } from "../env";

export default async function userSummary() {
  const UserSummary = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        success: true,
        summary: USER_SUMMARY,
      });
    }, 5000);
  });
  return UserSummary;
}
