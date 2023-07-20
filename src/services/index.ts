import { ServicesManager } from "./ServicesManager";

export interface Service {
    initialize(services: Services): Promise<void>;
    destroy(): Promise<void>;
}

type ServicesType = {};

export class Services {
    constructor(private manager: ServicesManager<ServicesType>) {}

    async initialize() {
        await this.manager.initialize(this);
    }

    async destroy() {
        await this.manager.destroy();
    }
}

const manager = new ServicesManager<ServicesType>();

const services = new Services(manager);

export default services;
