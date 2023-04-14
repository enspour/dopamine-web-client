import { ServicesManager } from "./ServicesManager";

import { ThemeService } from "./Theme.service";

export interface Service {
    initialize(services: Services): void;
    destroy(): void;
}

type ServicesType = {
    theme: ThemeService;
};

export class Services {
    private manager: ServicesManager<ServicesType>;

    constructor() {
        this.manager = new ServicesManager();
    }

    initialize() {
        this.manager.register("theme", new ThemeService());

        this.manager.initialize(this);
    }

    destroy() {
        this.manager.destroy();
    }

    get Theme() {
        return this.manager.get("theme");
    }
}

const services = new Services();

export default services;
