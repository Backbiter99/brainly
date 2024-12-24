import express, { Request } from "express";

export interface CustomRequest extends Request {
    userId?: string;

    body: {
        link?: string;
        type?: string;
        contentId?: string;
        share?: string;
    };
}
