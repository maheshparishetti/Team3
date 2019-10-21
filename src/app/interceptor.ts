import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const httpreq = req.clone({
            headers: req.headers.set("Content-Type","application/json"),
            url: req.url.replace('http://', 'https://')
        });
        console.log(httpreq);
        return next.handle(httpreq);
    }
}
