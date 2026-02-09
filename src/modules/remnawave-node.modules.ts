import { Logger, Module, OnApplicationShutdown } from '@nestjs/common';

import { Hysteria2Module } from './hysteria2/hysteria2.module';
import { HandlerModule } from './handler/handler.module';
import { XrayModule } from './xray-core/xray.module';
import { StatsModule } from './stats/stats.module';

@Module({
    imports: [StatsModule, XrayModule, HandlerModule, Hysteria2Module],
    providers: [],
})
export class RemnawaveNodeModules implements OnApplicationShutdown {
    private readonly logger = new Logger(RemnawaveNodeModules.name);

    async onApplicationShutdown(signal?: string): Promise<void> {
        this.logger.log(`${signal} received, shutting down...`);
    }
}
