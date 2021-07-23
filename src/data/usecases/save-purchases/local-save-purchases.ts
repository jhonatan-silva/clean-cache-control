import {CacheStore} from "@/data/protocols/cache"
import {SavePurchases} from "@/domain/usecases"

export class LocalSavePurchases implements SavePurchases {
    constructor(
        private readonly cacheStore: CacheStore,
        private readonly timestamp: Date
    ) {
    }

    async save(purchages: Array<SavePurchases.Params>): Promise<void> {
        this.cacheStore.replace('purchases', {
            timestamp: this.timestamp,
            value: purchages
        })
    }
}