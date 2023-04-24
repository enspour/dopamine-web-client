import { Service, Services } from "@services";

export class ServicesManager<T extends { [key: string]: Service }> {
    private services: Map<keyof T, T[keyof T]>;

    constructor() {
        this.services = new Map();
    }

    async initialize(services: Services) {
        for (const [_, service] of Array.from(this.services)) {
            await service.initialize(services);
        }
    }

    async destroy() {
        for (const [_, service] of Array.from(this.services)) {
            await service.destroy();
        }
    }

    register(name: keyof T, service: T[keyof T]) {
        this.services.set(name, service);
    }

    get(name: keyof T): T[keyof T] {
        const service = this.services.get(name);

        if (service) {
            return service as T[keyof T];
        }

        throw new Error("Service is not added yet.");
    }
}
