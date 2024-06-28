import { Application, Request, Response } from "express";
import * as db from '../../json/dbUsers.json'
class Routes {
  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => res.send("Hello, world."))
    app.route("/api/users/all").get((req: Request, res: Response) =>   res.json({db}))
}
}

export default Routes;