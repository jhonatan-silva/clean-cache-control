export interface SavePurchases {
    save: (purchages: Array<SavePurchases.Params>) => Promise<void>
}

export namespace SavePurchases {
    export type Params = {
        id: string
        date: Date
        value: number
    }
}