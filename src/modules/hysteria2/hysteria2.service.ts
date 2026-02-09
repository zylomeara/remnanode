import { Injectable, Logger } from '@nestjs/common';

import { InternalService } from '../internal/internal.service';

@Injectable()
export class Hysteria2Service {
    private readonly logger = new Logger(Hysteria2Service.name);

    constructor(private readonly internalService: InternalService) {}

    public authenticate(password: string): { ok: boolean; id?: string } {
        const userId = this.internalService.authenticateHysteria2(password);

        if (!userId) {
            this.logger.debug('Hysteria2 auth failed: invalid password');
            return { ok: false };
        }

        this.logger.debug(`Hysteria2 auth success for user: ${userId}`);
        return { ok: true, id: userId };
    }
}
