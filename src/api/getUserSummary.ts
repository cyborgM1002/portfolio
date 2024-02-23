import axios from "axios";
import { GITHUB_URL, USER_SUMMARY } from "../env";

export default async function userSummary() {
  return await axios.get(GITHUB_URL).then((function (response) {
    const newResponse = {
      summary: USER_SUMMARY,
      status: response.status,
      response
    }
    return newResponse
  }))
}
