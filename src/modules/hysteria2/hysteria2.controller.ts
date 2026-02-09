import { Response } from 'express';

import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';

import { HYSTERIA2_CONTROLLER, HYSTERIA2_ROUTES } from '@libs/contracts/api/controllers/hysteria2';

import { Hysteria2Service } from './hysteria2.service';

@Controller(HYSTERIA2_CONTROLLER)
export class Hysteria2Controller {
    constructor(private readonly hysteria2Service: Hysteria2Service) {}

    @HttpCode(HttpStatus.OK)
    @Post(HYSTERIA2_ROUTES.AUTH)
    public authenticate(
        @Body() body: { addr?: string; auth?: string; tx?: number },
        @Res() res: Response,
    ): void {
        const password = body.auth ?? '';

        const result = this.hysteria2Service.authenticate(password);

        if (!result.ok) {
            res.status(HttpStatus.UNAUTHORIZED).json({});
            return;
        }

        res.status(HttpStatus.OK).json({ ok: true });
    }
}
