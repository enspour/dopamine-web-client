import { EventName, Events } from "@interfaces";

export type EventHandler<Args extends any[]> = (...args: Args) => void;

export type EventCleaner = () => void;

export class EventEmitter<
    Name extends string,
    Args extends Record<Name, any[]>
> {
    private events: Map<Name, EventHandler<Args[Name]>[]> = new Map();

    on<T extends Name>(name: T, handler: EventHandler<Args[T]>): EventCleaner {
        const handlers = this.events.get(name);

        const index = handlers?.length || 0;

        if (handlers) {
            handlers.push(handler as EventHandler<Args[Name]>);
        } else {
            this.events.set(name, [handler as EventHandler<Args[Name]>]);
        }

        return () => {
            const handlers = this.events.get(name);

            if (handlers) {
                handlers.splice(index, 1);
            }
        };
    }

    dispatch<T extends Name>(name: T, ...args: Args[T]) {
        const handlers = this.events.get(name);

        if (handlers) {
            for (const handler of handlers) {
                handler(...args);
            }
        }
    }
}

export const events = new EventEmitter<EventName, Events>();
