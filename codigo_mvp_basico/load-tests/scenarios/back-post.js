import http from "k6/http";

const URL =
  "http://a1432f677f2124193b5eb58851b7f415-305227510.us-east-1.elb.amazonaws.com:5000/graphql";

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

const query =
  "\n        query {\n            products {\n                id\n                name\n                price\n                image\n                category\n                description\n                userId\n            }\n        }\n        ";

const headers = {
  "Content-Type": "application/json",
};

const requestBody =
  '{"query":"\n        query {\n            products {\n                id\n                name\n                price\n                image\n                category\n                description\n                userId\n            }\n        }\n        "}';

export default function () {
  const response = http.post(URL, requestBody, { headers: headers });
}
