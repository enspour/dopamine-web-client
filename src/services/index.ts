import { ServicesManager } from "./ServicesManager";

import { ThemeService } from "./Theme.service";

export interface Service {
    initialize(services: Services): Promise<void>;
    destroy(): Promise<void>;
}

type ServicesType = {
    theme: ThemeService;
};

export class Services {
    constructor(private manager: ServicesManager<ServicesType>) {}

    async initialize() {
        await this.manager.initialize(this);
    }

    async destroy() {
        await this.manager.destroy();
    }

    get Theme() {
        return this.manager.get("theme");
    }
}

const manager = new ServicesManager<ServicesType>();

manager.register("theme", new ThemeService());

const services = new Services(manager);

export default services;
