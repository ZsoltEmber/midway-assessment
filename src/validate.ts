import { AppError } from "./app.error";




export function validateList(args: string[]){
    if(args[2] === "list" && args.length != 3){
        throw new AppError("List command should not have any argument!")
      }
}