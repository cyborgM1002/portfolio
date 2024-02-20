import { USER_SUMMARY } from "../env";

export default async function userSummary() {
  const UserSummary = await new Promise((resolve) => {
    setTimeout(() => {
      const response: {
        success: boolean;
        summary: string;
      } = {
        success: true,
        summary: USER_SUMMARY,
      };
      return resolve(response);
    }, 1500);
  });
  return UserSummary;
}
