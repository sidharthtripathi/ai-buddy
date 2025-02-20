import { z } from 'zod';
export declare const historySchema: z.ZodArray<z.ZodObject<{
    role: z.ZodEnum<["user", "model"]>;
    parts: z.ZodArray<z.ZodObject<{
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
    }, {
        text: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    role: "user" | "model";
    parts: {
        text: string;
    }[];
}, {
    role: "user" | "model";
    parts: {
        text: string;
    }[];
}>, "many">;
export declare const querySchema: z.ZodObject<{
    query: z.ZodString;
    history: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<["user", "model"]>;
        parts: z.ZodArray<z.ZodObject<{
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "model";
        parts: {
            text: string;
        }[];
    }, {
        role: "user" | "model";
        parts: {
            text: string;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    query: string;
    history: {
        role: "user" | "model";
        parts: {
            text: string;
        }[];
    }[];
}, {
    query: string;
    history: {
        role: "user" | "model";
        parts: {
            text: string;
        }[];
    }[];
}>;
