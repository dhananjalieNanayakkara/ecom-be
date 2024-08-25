import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class GlobalException implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        
    }

}