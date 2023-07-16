const headers = ["Cookie"] as const;

type Headers = (typeof headers)[number];

export type RequestHeaders = Record<Headers, any>;
