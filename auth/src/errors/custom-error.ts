export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(messsage: string) {
        super(messsage);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
