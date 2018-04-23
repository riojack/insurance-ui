import { Application, Router, Request as Req, Response as Res} from "express";

export class RootRoutes {
  static configure(): Router {
    let route: Router = Router();

    route.get('/', RootRoutes.rootHandler);

    return route;
  }

  private static rootHandler(req: Req, res: Res) {
    res.send('Hello, world!');
  }
}
