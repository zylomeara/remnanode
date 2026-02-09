import { Module } from '@nestjs/common';

import { Hysteria2Controller } from './hysteria2.controller';
import { Hysteria2Service } from './hysteria2.service';

@Module({
    imports: [],
    controllers: [Hysteria2Controller],
    providers: [Hysteria2Service],
})
export class Hysteria2Module {}
