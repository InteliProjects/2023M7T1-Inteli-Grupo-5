import http from "k6/http";

const URL =
  "http://a08d9807d019a4b3eaf5e107c78c6ece-394010780.us-east-1.elb.amazonaws.com:3000/";

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "60s",
      preAllocatedVUs: 10000,
      maxVUs: 10000,
    },
  },
};

export default function () {
  let res = http.get(URL);
}
