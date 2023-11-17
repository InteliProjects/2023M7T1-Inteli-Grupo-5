import { UnauthorizedException, createParamDecorator } from "@nestjs/common";
import { GraphQLExecutionContext } from "@nestjs/graphql";


export interface User {
  id: number;
  name: string;
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: GraphQLExecutionContext) => {
    try {
      const headers = context.getArgs()[2].req.headers;
      if (headers.user && headers.user !== 'null') {
       return JSON.parse(headers.user);
      } else {
        throw new UnauthorizedException();
      }
    } catch (e) {
      throw new UnauthorizedException();
    }
  },
);