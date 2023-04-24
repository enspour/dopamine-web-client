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
    private manager: ServicesManager<ServicesType>;

    constructor() {
        this.manager = new ServicesManager();
    }

    async initialize() {
        this.manager.register("theme", new ThemeService());

        await this.manager.initialize(this);
    }

    async destroy() {
        await this.manager.destroy();
    }

    get Theme() {
        return this.manager.get("theme");
    }
}

const services = new Services();

export default services;
