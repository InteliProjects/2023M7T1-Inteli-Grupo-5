import { verify } from "jsonwebtoken";

const getToken = (authToken: string): string => {
  const match = authToken.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    return null;
  }
  return match[1];
};

const decodeToken = (tokenString: string) => {
  const decoded = verify(tokenString, 'dev');
  if (!decoded) {
    return null;
  }
  return decoded;
};


export const authContext = async ({ req }) => {
  if (req.headers?.authorization) {
    const token = getToken(req.headers.authorization);
    if(token === null) return { user: null };
    const decoded: any = decodeToken(token);
    return { user: decoded };
  } else {
    return { user: null };
  }
};
