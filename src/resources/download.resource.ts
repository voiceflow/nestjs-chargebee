import https from "node:https";
import { ChargebeeResource } from "../chargebee-resource.class";

export class DownloadResource extends ChargebeeResource {
  public readonly json = (url: string) =>
    new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          let body = "";

          res.on("data", (chunk) => {
            body += chunk;
          });

          res.once("end", () => {
            try {
              resolve(JSON.parse(body));
            } catch (error) {
              reject(error);
            }
          });
        })
        .once("error", (error) => reject(error));
    });
}
