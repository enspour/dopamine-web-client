import { Service, Services } from "@services";

export class ServicesManager<T extends { [key: string]: Service }> {
    private services: Map<keyof T, T[keyof T]>;

    constructor() {
        this.services = new Map();
    }

    initialize(services: Services): void {
        this.services.forEach((service) => service.initialize(services));
    }

    destroy(): void {
        this.services.forEach((service) => service.destroy());
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
