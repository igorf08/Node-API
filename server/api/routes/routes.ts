import { Application, Request, Response } from "express";

class Routes {
  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.send("Hello, world.");
    });

    app.route("/ola/:nome").get((req: Request, res: Response) => {
      const nome = req.params.nome;
      res.send(`Olá, ${nome}.`)
    })
  }
}

export default Routes;